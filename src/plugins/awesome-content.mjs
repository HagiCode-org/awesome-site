import path from "node:path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import rehypeParse from "rehype-parse";
import GithubSlugger from "github-slugger";

const markdownParser = unified().use(remarkParse).use(remarkGfm);
const htmlParser = unified().use(rehypeParse, { fragment: true });
const forbiddenHtml = new Set([
  "base",
  "button",
  "embed",
  "form",
  "iframe",
  "input",
  "link",
  "meta",
  "object",
  "script",
  "style",
  "svg",
]);

function walk(node, visit) {
  visit(node);
  for (const child of node.children ?? []) walk(child, visit);
}

function textContent(node) {
  if (node.type === "text" || node.type === "inlineCode") return node.value;
  return (node.children ?? []).map(textContent).join("");
}

function assertSafeTarget(target, readmePath, collectionId) {
  const value = target.trim();
  if (!value || value.startsWith("#")) return;

  const scheme = /^([a-z][a-z\d+.-]*):/iu.exec(value)?.[1]?.toLowerCase();
  if (scheme && !["http", "https", "mailto", "tel"].includes(scheme)) {
    throw new Error(`${collectionId}: unsafe URL scheme in "${target}"`);
  }
  if (/^\/\//u.test(value)) {
    throw new Error(`${collectionId}: protocol-relative URL is not allowed: "${target}"`);
  }
  if (scheme || value.startsWith("?")) return;

  const pathname = value.split(/[?#]/u, 1)[0];
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    throw new Error(`${collectionId}: malformed URL path "${target}"`);
  }
  if (decodedPath.includes("\0") || decodedPath.includes("\\")) {
    throw new Error(`${collectionId}: unsafe URL path "${target}"`);
  }
  const resolved = path.posix.normalize(
    decodedPath.startsWith("/")
      ? decodedPath.slice(1)
      : path.posix.join(path.posix.dirname(readmePath), decodedPath),
  );
  if (resolved === ".." || resolved.startsWith("../")) {
    throw new Error(`${collectionId}: source path escapes the repository: "${target}"`);
  }
}

function inspectHtml(value, readmePath, collectionId, targets, headings, slugger) {
  const tree = htmlParser.parse(value);
  walk(tree, (node) => {
    if (node.type !== "element") return;
    if (/^h[1-6]$/u.test(node.tagName)) {
      const text = textContent(node);
      headings.push({
        depth: Number(node.tagName.slice(1)),
        text,
        id: node.properties?.id ?? slugger.slug(text),
      });
    }
    if (forbiddenHtml.has(node.tagName)) {
      throw new Error(`${collectionId}: active HTML element <${node.tagName}> is not allowed`);
    }
    for (const [name, rawValue] of Object.entries(node.properties ?? {})) {
      const attribute = name.toLowerCase();
      if (attribute.startsWith("on") || attribute === "srcdoc") {
        throw new Error(`${collectionId}: unsafe HTML attribute "${name}"`);
      }
      if (!["href", "src", "xlinkHref"].includes(name)) continue;
      const target = String(rawValue);
      assertSafeTarget(target, readmePath, collectionId);
      targets.push(`${name === "src" ? "image" : "link"}:${target}`);
    }
  });
}

function listStructure(node, depth = 0, structure = []) {
  if (node.type !== "list") return structure;
  structure.push({
    depth,
    ordered: Boolean(node.ordered),
    start: node.start ?? null,
    items: node.children.length,
    checked: node.children.map((item) => item.checked ?? null),
  });
  for (const item of node.children) {
    for (const child of item.children ?? []) {
      if (child.type === "list") listStructure(child, depth + 1, structure);
    }
  }
  return structure;
}

export function inspectMarkdown(markdown, {
  collectionId = "content",
  readmePath = "README.md",
} = {}) {
  const tree = markdownParser.parse(markdown);
  const headings = [];
  const lists = [];
  const tables = [];
  const code = [];
  const targets = [];
  const visitedLists = new WeakSet();
  const definitions = new Map();
  walk(tree, (node) => {
    if (node.type === "definition") definitions.set(node.identifier, node.url);
  });
  const slugger = new GithubSlugger();

  walk(tree, (node) => {
    if (node.type === "heading") {
      const text = textContent(node);
      headings.push({ depth: node.depth, text, id: slugger.slug(text) });
    } else if (node.type === "list") {
      if (!visitedLists.has(node)) {
        lists.push(...listStructure(node));
        for (const child of node.children) {
          walk(child, (nested) => {
            if (nested.type === "list") visitedLists.add(nested);
          });
        }
        visitedLists.add(node);
      }
    } else if (node.type === "table") {
      tables.push(node.children.map((row) => row.children.length));
    } else if (node.type === "code") {
      code.push(node.value);
    } else if (node.type === "link" || node.type === "image") {
      assertSafeTarget(node.url, readmePath, collectionId);
      targets.push(`${node.type}:${node.url}`);
    } else if (node.type === "linkReference" || node.type === "imageReference") {
      const target = definitions.get(node.identifier);
      if (!target) throw new Error(`${collectionId}: unresolved Markdown reference "${node.identifier}"`);
      assertSafeTarget(target, readmePath, collectionId);
      targets.push(`${node.type === "imageReference" ? "image" : "link"}:${target}`);
    } else if (node.type === "html") {
      inspectHtml(node.value, readmePath, collectionId, targets, headings, slugger);
    }
  });

  return {
    headings: headings.map(({ depth }) => depth),
    headingDetails: headings,
    lists,
    tables,
    code,
    targets: targets.sort(),
  };
}

export function assertEquivalentStructure(source, translation, {
  collectionId,
  locale,
} = {}) {
  const fail = (field) => {
    throw new Error(`${collectionId}/${locale}: translation does not preserve ${field}`);
  };
  if (JSON.stringify(source.headings) !== JSON.stringify(translation.headings)) {
    fail("heading order and levels");
  }
  if (JSON.stringify(source.lists) !== JSON.stringify(translation.lists)) {
    fail("list structure and entries");
  }
  if (JSON.stringify(source.tables) !== JSON.stringify(translation.tables)) {
    fail("table rows and cells");
  }
  if (JSON.stringify(source.code) !== JSON.stringify(translation.code)) {
    fail("code values");
  }
  if (JSON.stringify(source.targets) !== JSON.stringify(translation.targets)) {
    fail("link and image destinations");
  }
}

export function sourceHeadingAliases(sourceMarkdown, translatedMarkdown, options = {}) {
  const source = inspectMarkdown(sourceMarkdown, options).headingDetails;
  const translated = inspectMarkdown(translatedMarkdown, options).headingDetails;
  if (source.length !== translated.length) {
    throw new Error(`${options.collectionId ?? "content"}: heading counts differ`);
  }
  return source.flatMap((heading, index) => {
    const target = translated[index];
    return heading.id === target.id ? [] : [{ sourceId: heading.id, translatedId: target.id }];
  });
}

export function resolveSourceUrl(target, {
  repositoryUrl,
  revision,
  readmePath,
  kind = "link",
}) {
  const value = target.trim();
  if (
    !value ||
    value.startsWith("#") ||
    value.startsWith("?") ||
    /^(?:https?:|mailto:|tel:)/iu.test(value)
  ) {
    return target;
  }
  const repository = new URL(repositoryUrl);
  const pathname = value.split(/[?#]/u, 1)[0];
  let decodedPath = decodeURIComponent(pathname);
  decodedPath = decodedPath.startsWith("/")
    ? decodedPath.slice(1)
    : path.posix.join(path.posix.dirname(readmePath), decodedPath);
  decodedPath = path.posix.normalize(decodedPath);
  if (decodedPath === ".." || decodedPath.startsWith("../")) {
    throw new Error(`Source path escapes repository: "${target}"`);
  }

  const suffix = value.slice(pathname.length);
  const host = kind === "image" ? "raw.githubusercontent.com" : "github.com";
  const ownerRepo = repository.pathname.replace(/\.git$/u, "").replace(/^\/|\/$/gu, "");
  const prefix = kind === "image" ? "" : "/blob";
  return `https://${host}/${ownerRepo}${prefix}/${revision}/${decodedPath}${suffix}`;
}

export function awesomeSourceImages() {
  return function transform(tree, file) {
    const source = file.data.astro?.frontmatter?.awesomeSource;
    if (!source) return;
    const options = {
      repositoryUrl: source.repositoryUrl,
      revision: source.revision,
      readmePath: source.readmePath,
      kind: "image",
    };
    const definitions = new Map();
    walk(tree, (node) => {
      if (node.type === "definition") definitions.set(node.identifier, node);
    });
    walk(tree, (node) => {
      if (node.type === "image") {
        node.url = resolveSourceUrl(node.url, options);
      } else if (node.type === "imageReference") {
        const definition = definitions.get(node.identifier);
        if (!definition) throw new Error(`${source.id}: unresolved image reference "${node.identifier}"`);
        node.type = "image";
        node.url = resolveSourceUrl(definition.url, options);
        node.title ??= definition.title;
        delete node.identifier;
        delete node.label;
        delete node.referenceType;
      }
    });
  };
}

export function awesomeContent() {
  const reportedMissingFragments = new Set();
  return function transform(tree, file) {
    const frontmatter = file.data.astro?.frontmatter;
    const source = frontmatter?.awesomeSource;
    if (!source) return;
    const readmePath = source.readmePath;
    const headings = [];
    walk(tree, (node) => {
      if (node.type === "element" && /^h[1-6]$/u.test(node.tagName)) headings.push(node);
    });

    const fragments = source.sourceFragments ?? [];
    if (headings.length !== fragments.length) {
      throw new Error(`${source.id}: rendered heading count does not match validated source headings`);
    }
    const ids = new Set();
    for (let index = 0; index < headings.length; index += 1) {
      const heading = headings[index];
      const { sourceId, targetId } = fragments[index];
      if (!sourceId && !targetId) continue;
      if (!sourceId || !targetId || ids.has(targetId) || ids.has(sourceId)) {
        throw new Error(`${source.id}: heading anchor collision at "${sourceId}"`);
      }
      ids.add(targetId);
      if (sourceId !== targetId) ids.add(sourceId);
      heading.properties.id = targetId;
      if (sourceId !== targetId) {
        heading.children.unshift({
          type: "element",
          tagName: "span",
          properties: { id: sourceId, className: ["awesome-anchor-alias"], "aria-hidden": "true" },
          children: [],
        });
      }
    }

    walk(tree, (node) => {
      if (node.type !== "element") return;
      const property = node.tagName === "img" ? "src" : node.tagName === "a" ? "href" : null;
      if (!property || typeof node.properties?.[property] !== "string") return;
      const target = node.properties[property];
      if (property === "href" && target.startsWith(`/awesome/${source.id}/`)) return;
      if (target.startsWith("#") && !ids.has(decodeURIComponent(target.slice(1)))) {
        const missingFragment = `${source.id}:${target}`;
        if (!reportedMissingFragments.has(missingFragment)) {
          console.warn(`${source.id}: pinned source links to missing section "${target}"; preserving the upstream link`);
          reportedMissingFragments.add(missingFragment);
        }
      }
      node.properties[property] = resolveSourceUrl(target, {
        repositoryUrl: source.repositoryUrl,
        revision: source.revision,
        readmePath,
        kind: property === "src" ? "image" : "link",
      });
    });
  };
}
