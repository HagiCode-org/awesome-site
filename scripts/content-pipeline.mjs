import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  lstat,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertEquivalentStructure,
  inspectMarkdown,
} from "../src/plugins/awesome-content.mjs";
import { normalizeCatalogTags } from "../src/catalog-tags.mjs";
import {
  loadSourceReviews,
  reconcileSourceReviews,
  validateRepositoryUrl,
  validateReadmeRightsReviews,
} from "./source-reviews.mjs";

export { validateRepositoryUrl };

const root = fileURLToPath(new URL("../", import.meta.url));
const registryPath = path.join(root, "content/awesome/collections.json");
const catalogsPath = path.join(root, "content/awesome/catalogs.json");
const candidatesPath = path.join(root, "content/awesome/candidates.json");
const manifestPath = path.join(root, ".awesome-content-manifest.json");
const locales = ["zh-CN", "zh-Hant", "fr-FR", "de-DE", "es-ES", "ja-JP", "ko-KR", "pt-BR", "ru-RU"];
const discoveryLocales = ["root", ...locales];
const licenseMarkers = {
  "CC0-1.0": /CC0 1\.0 Universal/u,
  "MIT": /MIT License/u,
  "Apache-2.0": /Apache License\s+Version 2\.0/u,
  "Unlicense": /This is free and unencumbered software released into the public domain/u,
  "WTFPL": /DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE[\s\S]{0,100}Version 2, December 2004/u,
};

function git(args, cwd = root) {
  return execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function isWithin(parent, child) {
  const relative = path.relative(parent, child);
  return relative === "" || (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative));
}

export function validateRelativePath(value, label) {
  if (
    typeof value !== "string" ||
    value.length === 0 ||
    path.posix.isAbsolute(value) ||
    value.includes("\\") ||
    value.split("/").some((part) => part === "" || part === "." || part === "..")
  ) {
    throw new Error(`${label} must be a normalized repository-relative path`);
  }
}

export async function realPathInside(parent, relative, label) {
  validateRelativePath(relative, label);
  const candidate = path.resolve(parent, relative);
  if (!isWithin(parent, candidate)) throw new Error(`${label} escapes its allowed directory`);
  let actual;
  try {
    actual = await realpath(candidate);
  } catch (error) {
    if (error.code === "ENOENT") throw new Error(`${label} does not exist: ${relative}`);
    throw error;
  }
  if (!isWithin(await realpath(parent), actual)) {
    throw new Error(`${label} escapes its allowed directory through a symlink`);
  }
  return actual;
}

function sourceRevision(collection) {
  const entries = git(["ls-files", "--stage", "--", collection.sourceDir])
    .split("\n")
    .filter(Boolean);
  const entry = entries.find((line) => line.endsWith(`\t${collection.sourceDir}`));
  if (!entry) throw new Error(`${collection.id}: source is not registered in the parent repository index`);
  const match = /^160000 ([0-9a-f]{40}) 0\t/u.exec(entry);
  if (!match) throw new Error(`${collection.id}: source path is not a pinned Git submodule`);
  return match[1];
}

function validateSubmoduleRegistration(collection) {
  const paths = git(["config", "--file", ".gitmodules", "--get-regexp", "\\.path$"])
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [key, value] = line.split(/\s+/u);
      const section = key.slice(0, -".path".length);
      const url = git(["config", "--file", ".gitmodules", "--get", `${section}.url`]);
      return { path: value, url };
    });
  if (!paths.some(({ path: registeredPath, url }) =>
    registeredPath === collection.sourceDir && url.replace(/\.git$/u, "") === collection.repositoryUrl
  )) {
    throw new Error(`${collection.id}: .gitmodules must register ${collection.sourceDir} at ${collection.repositoryUrl}`);
  }
}

export function validateCatalogs(catalogs) {
  if (!catalogs || typeof catalogs !== "object" || Array.isArray(catalogs)) {
    throw new Error("content/awesome/catalogs.json must contain a topic object");
  }
  for (const [topic, entry] of Object.entries(catalogs)) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(topic)) {
      throw new Error(`Invalid taxonomy topic "${topic}"`);
    }
    if (!entry || typeof entry !== "object" || !entry.labels || typeof entry.labels !== "object") {
      throw new Error(`${topic}: taxonomy labels are required`);
    }
    for (const locale of discoveryLocales) {
      if (typeof entry.labels[locale] !== "string" || !entry.labels[locale].trim()) {
        throw new Error(`${topic}: missing nonempty taxonomy label for ${locale}`);
      }
    }
  }
}

export function licenseIsVerified(licenseId, text) {
  return licenseMarkers[licenseId]?.test(text) ?? false;
}

export function validateRegistry(collections, catalogs) {
  if (!Array.isArray(collections) || collections.length === 0) {
    throw new Error("content/awesome/collections.json must contain at least one collection");
  }
  validateCatalogs(catalogs);
  const ids = new Set();
  const routes = new Set();
  for (const collection of collections) {
    if (!collection || typeof collection !== "object") {
      throw new Error("Every collection registration must be an object");
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(collection.id)) {
      throw new Error(`Invalid collection identifier "${collection.id}"`);
    }
    if (collection.id === "index" || collection.id === "tags") {
      throw new Error(`${collection.id}: collection identifier is reserved for discovery routes`);
    }
    if (ids.has(collection.id)) throw new Error(`Duplicate collection identifier "${collection.id}"`);
    if (routes.has(collection.route)) throw new Error(`Duplicate collection route "${collection.route}"`);
    if (collection.route !== `awesome/${collection.id}`) {
      throw new Error(`${collection.id}: route must be "awesome/${collection.id}"`);
    }
    validateRepositoryUrl(collection.repositoryUrl, collection.id);
    validateRelativePath(collection.sourceDir, `${collection.id} sourceDir`);
    validateRelativePath(collection.readmePath, `${collection.id} readmePath`);
    validateRelativePath(collection.licensePath, `${collection.id} licensePath`);
    if (typeof collection.licenseId !== "string" || !licenseMarkers[collection.licenseId]) {
      throw new Error(`${collection.id}: unsupported license identifier "${collection.licenseId}"`);
    }
    if (typeof collection.title !== "string" || !collection.title.trim()) {
      throw new Error(`${collection.id}: title is required`);
    }
    const normalizedTags = normalizeCatalogTags(collection, collection.id);
    if (!normalizedTags.catalog) throw new Error(`${collection.id}: catalog metadata is required`);
    for (const tag of normalizedTags.tags) {
      if (!Object.hasOwn(catalogs, tag)) {
        throw new Error(`${collection.id}: unknown catalog/tag topic "${tag}"`);
      }
    }
    ids.add(collection.id);
    routes.add(collection.route);
  }
}

export function validateCandidateRepositories(candidates, collections, catalogs) {
  if (!Array.isArray(candidates)) {
    throw new Error("content/awesome/candidates.json must contain a repository array");
  }
  const ids = new Set(collections.map(({ id }) => id));
  const urls = new Set(collections.map(({ repositoryUrl }) => repositoryUrl));
  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
      throw new Error("Every repository candidate must be an object");
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(candidate.id)) {
      throw new Error(`Invalid repository candidate identifier "${candidate.id}"`);
    }
    validateRepositoryUrl(candidate.repositoryUrl, candidate.id);
    if (ids.has(candidate.id)) throw new Error(`${candidate.id}: duplicate collection or repository candidate`);
    if (urls.has(candidate.repositoryUrl)) throw new Error(`${candidate.id}: duplicate repository URL`);
    if (!Number.isSafeInteger(candidate.stars) || candidate.stars < 1000) {
      throw new Error(`${candidate.id}: repository candidates require at least 1,000 snapshot stars`);
    }
    if (typeof candidate.licenseId !== "string" || !licenseMarkers[candidate.licenseId]) {
      throw new Error(`${candidate.id}: repository candidates require a verified supported license`);
    }
    if (typeof candidate.catalog !== "string" || !Object.hasOwn(catalogs, candidate.catalog)) {
      throw new Error(`${candidate.id}: unknown repository candidate topic "${candidate.catalog}"`);
    }
    ids.add(candidate.id);
    urls.add(candidate.repositoryUrl);
  }
}

async function validateSource(collection) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(collection.id)) {
    throw new Error(`Invalid collection identifier "${collection.id}"`);
  }
  if (collection.route !== `awesome/${collection.id}`) {
    throw new Error(`${collection.id}: route must be "awesome/${collection.id}"`);
  }
  validateRepositoryUrl(collection.repositoryUrl, collection.id);
  validateRelativePath(collection.sourceDir, `${collection.id} sourceDir`);
  const sourceDirectory = await realPathInside(root, collection.sourceDir, `${collection.id} sourceDir`);
  validateSubmoduleRegistration(collection);
  const indexedRevision = sourceRevision(collection);
  const actualRevision = git(["rev-parse", "HEAD"], sourceDirectory);
  if (actualRevision !== indexedRevision) {
    throw new Error(`${collection.id}: checked-out revision ${actualRevision} does not match pinned revision ${indexedRevision}`);
  }
  const dirty = git(["status", "--porcelain", "--untracked-files=all"], sourceDirectory);
  if (dirty) throw new Error(`${collection.id}: source submodule is dirty; restore the pinned upstream checkout`);

  const readme = await realPathInside(sourceDirectory, collection.readmePath, `${collection.id} README`);
  const license = await realPathInside(sourceDirectory, collection.licensePath, `${collection.id} license`);
  const licenseText = await readFile(license, "utf8");
  if (!licenseIsVerified(collection.licenseId, licenseText)) {
    throw new Error(`${collection.id}: pinned ${collection.licensePath} does not confirm ${collection.licenseId}`);
  }
  const sourceBytes = await readFile(readme);
  return {
    collection,
    sourceDirectory,
    readme,
    license,
    revision: actualRevision,
    sourceBytes,
    sourceMarkdown: sourceBytes.toString("utf8"),
    digest: createHash("sha256").update(sourceBytes).digest("hex"),
  };
}

async function loadSources() {
  const collections = JSON.parse(await readFile(registryPath, "utf8"));
  const catalogs = JSON.parse(await readFile(catalogsPath, "utf8"));
  const candidates = JSON.parse(await readFile(candidatesPath, "utf8"));
  validateRegistry(collections, catalogs);
  validateCandidateRepositories(candidates, collections, catalogs);
  const reviews = await loadSourceReviews();
  validateReadmeRightsReviews(reviews.filter((review) => Object.hasOwn(review, "reviewedAt")), candidates);
  reconcileSourceReviews(reviews, collections, candidates);
  const sources = [];
  for (const collection of collections) {
    sources.push(await validateSource(collection));
  }
  return sources;
}

export function validateTranslationRecords(collectionId, records) {
  if (!records || typeof records !== "object" || Array.isArray(records)) {
    throw new Error(`${collectionId}: translations must be an object keyed by locale`);
  }
  const extra = Object.keys(records).filter((locale) => !locales.includes(locale));
  if (extra.length) {
    throw new Error(`${collectionId}: unsupported translation locale(s): ${extra.join(", ")}`);
  }
  const missing = locales.filter((locale) => !(locale in records));
  if (missing.length) {
    throw new Error(`${collectionId}: missing translation metadata for locale(s): ${missing.join(", ")}`);
  }
  return records;
}

export function validateMetadata(metadata, source, locale) {
  const id = source.collection.id;
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    throw new Error(`${id}/${locale}: missing translation metadata`);
  }
  for (const key of ["title", "description"]) {
    if (typeof metadata[key] !== "string" || !metadata[key].trim()) {
      throw new Error(`${id}/${locale}: localized ${key} is required`);
    }
  }
  if (metadata.title.trim() === source.collection.title) {
    throw new Error(`${id}/${locale}: title must be localized`);
  }
  if (metadata.sourceDigest !== source.digest) {
    throw new Error(`${id}/${locale}: translation is stale; export the current source digest`);
  }
  if (metadata.reviewStatus !== "reviewed") {
    throw new Error(`${id}/${locale}: translation reviewStatus must be "reviewed"`);
  }
  if (typeof metadata.isAITranslation !== "boolean") {
    throw new Error(`${id}/${locale}: isAITranslation must be a boolean`);
  }
}

async function validateTranslations(source) {
  const translationDirectory = path.join(root, "content/awesome", source.collection.id);
  const sidecarPath = path.join(translationDirectory, "translations.json");
  let sidecar;
  try {
    sidecar = JSON.parse(await readFile(sidecarPath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") throw new Error(`${source.collection.id}: missing translations.json`);
    throw new Error(`${source.collection.id}: cannot parse translations.json: ${error.message}`);
  }
  const records = validateTranslationRecords(
    source.collection.id,
    sidecar.translations ?? sidecar,
  );
  const sourceStructure = inspectMarkdown(source.sourceMarkdown, {
    collectionId: source.collection.id,
    readmePath: source.collection.readmePath,
  });
  const output = [];
  for (const locale of locales) {
    const metadata = records[locale];
    validateMetadata(metadata, source, locale);
    const translationPath = path.join(translationDirectory, "locales", `${locale}.md`);
    let body;
    try {
      body = await readFile(translationPath, "utf8");
    } catch (error) {
      if (error.code === "ENOENT") throw new Error(`${source.collection.id}/${locale}: missing translation body`);
      throw error;
    }
    if (!body.trim()) throw new Error(`${source.collection.id}/${locale}: translation body is empty`);
    if (body.trim() === source.sourceMarkdown.trim()) {
      throw new Error(`${source.collection.id}/${locale}: translation body is identical to English`);
    }
    const structure = inspectMarkdown(body, {
      collectionId: source.collection.id,
      readmePath: source.collection.readmePath,
    });
    assertEquivalentStructure(sourceStructure, structure, {
      collectionId: source.collection.id,
      locale,
    });
    output.push({ locale, metadata, body, structure });
  }
  return { sourceStructure, translations: output };
}

function sourceLinks(source) {
  const repository = source.collection.repositoryUrl;
  const ownerRepo = new URL(repository).pathname.replace(/\/$/u, "");
  const blobRoot = `https://github.com${ownerRepo}/blob/${source.revision}`;
  return {
    repository,
    readme: `${blobRoot}/${source.collection.readmePath}`,
    license: `${blobRoot}/${source.collection.licensePath}`,
  };
}

function quote(value) {
  return JSON.stringify(value);
}

function frontmatter(source, title, description, aiTranslation, fragments) {
  const metadata = source.collection;
  const links = sourceLinks(source);
  const catalogTags = normalizeCatalogTags(metadata, metadata.id);
  const catalogYaml = Array.isArray(catalogTags.catalog)
    ? `catalog:\n${catalogTags.catalog.map((tag) => `  - ${quote(tag)}`).join("\n")}`
    : `catalog: ${quote(catalogTags.catalog)}`;
  const tagsYaml = catalogTags.tags.map((tag) => `  - ${quote(tag)}`).join("\n");
  const fragmentYaml = fragments.length
    ? fragments.map(({ sourceId, targetId }) =>
      `  - sourceId: ${quote(sourceId)}\n    targetId: ${quote(targetId)}`).join("\n")
    : "  []";
  return [
    "---",
    `title: ${quote(title)}`,
    `description: ${quote(description)}`,
    `isAITranslation: ${aiTranslation}`,
    "isAIAuthor: false",
    'sourceLocale: "root"',
    catalogYaml,
    "tags:",
    tagsYaml,
    "awesomeSource:",
    `  id: ${quote(metadata.id)}`,
    `  repositoryUrl: ${quote(metadata.repositoryUrl)}`,
    `  revision: ${quote(source.revision)}`,
    `  readmePath: ${quote(metadata.readmePath)}`,
    `  licensePath: ${quote(metadata.licensePath)}`,
    `  licenseId: ${quote(metadata.licenseId)}`,
    `  readmeUrl: ${quote(links.readme)}`,
    `  licenseUrl: ${quote(links.license)}`,
    "  sourceFragments:",
    fragmentYaml,
    "---",
    "",
  ].join("\n");
}

function generatedBody(source, title, description, aiTranslation, body, fragments) {
  const links = sourceLinks(source);
  const disclosure = aiTranslation ? "\n> This edition is an AI-assisted translation.\n" : "";
  return `${frontmatter(source, title, description, aiTranslation, fragments)}> **Source:** [${source.collection.repositoryUrl}](${links.repository}) at [\`${source.revision.slice(0, 12)}\`](${links.readme})  \n> **License:** [${source.collection.licenseId}](${links.license})  \n> [Read the English original](/${source.collection.route}/)\n${disclosure}\n${body}`;
}

function getFragments(sourceStructure, translatedStructure) {
  if (sourceStructure.headingDetails.length !== translatedStructure.headingDetails.length) {
    throw new Error(`${sourceStructure.headingDetails.length} source headings do not match translated headings`);
  }
  return sourceStructure.headingDetails.map((heading, index) => ({
    sourceId: heading.id,
    targetId: translatedStructure.headingDetails[index].id,
  }));
}

function russianCollectionCount(count) {
  const mod100 = count % 100;
  const mod10 = count % 10;
  const noun = mod100 >= 11 && mod100 <= 14
    ? "подборок"
    : mod10 === 1
      ? "подборка"
      : mod10 >= 2 && mod10 <= 4
        ? "подборки"
        : "подборок";
  return `${count} ${noun}`;
}

const discoveryCopy = {
  root: {
    collections: "Awesome collections",
    browseTopics: "Browse by topic",
    allCollections: "All collections",
    additionalRepositories: "More repositories on GitHub",
    externalOnly: "Links only; repository contents remain on GitHub. Stars are from the 2026-10-03 snapshot.",
    stars: "stars",
    collectionCount: (count) => `${count} collection${count === 1 ? "" : "s"}`,
  },
  "zh-CN": {
    collections: "Awesome 合集",
    browseTopics: "按主题浏览",
    allCollections: "所有合集",
    additionalRepositories: "更多 GitHub 仓库",
    externalOnly: "此处仅列出链接；仓库内容仍在 GitHub。Star 数为 2026-10-03 快照。",
    stars: "星",
    collectionCount: (count) => `${count} 个合集`,
  },
  "zh-Hant": {
    collections: "Awesome 精選集",
    browseTopics: "依主題瀏覽",
    allCollections: "所有精選集",
    additionalRepositories: "更多 GitHub 儲存庫",
    externalOnly: "此處僅列出連結；儲存庫內容仍在 GitHub。Star 數為 2026-10-03 快照。",
    stars: "星",
    collectionCount: (count) => `${count} 個精選集`,
  },
  "fr-FR": {
    collections: "Collections Awesome",
    browseTopics: "Parcourir par sujet",
    allCollections: "Toutes les collections",
    additionalRepositories: "Autres dépôts sur GitHub",
    externalOnly: "Liens uniquement ; le contenu reste sur GitHub. Les étoiles correspondent au relevé du 2026-10-03.",
    stars: "étoiles",
    collectionCount: (count) => `${count} collection${count === 1 ? "" : "s"}`,
  },
  "de-DE": {
    collections: "Awesome-Sammlungen",
    browseTopics: "Nach Thema durchsuchen",
    allCollections: "Alle Sammlungen",
    additionalRepositories: "Weitere Repositories auf GitHub",
    externalOnly: "Nur Links; die Inhalte bleiben auf GitHub. Die Sterne stammen aus dem Snapshot vom 03.10.2026.",
    stars: "Sterne",
    collectionCount: (count) => `${count} Sammlung${count === 1 ? "" : "en"}`,
  },
  "es-ES": {
    collections: "Colecciones Awesome",
    browseTopics: "Explorar por tema",
    allCollections: "Todas las colecciones",
    additionalRepositories: "Más repositorios en GitHub",
    externalOnly: "Solo enlaces; el contenido permanece en GitHub. Las estrellas corresponden a la captura del 2026-10-03.",
    stars: "estrellas",
    collectionCount: (count) => `${count} colecci${count === 1 ? "ón" : "ones"}`,
  },
  "ja-JP": {
    collections: "Awesome コレクション",
    browseTopics: "トピックから探す",
    allCollections: "すべてのコレクション",
    additionalRepositories: "その他の GitHub リポジトリ",
    externalOnly: "リンクのみを掲載しています。リポジトリの内容は GitHub にあります。Star 数は 2026-10-03 時点です。",
    stars: "スター",
    collectionCount: (count) => `${count} 件のコレクション`,
  },
  "ko-KR": {
    collections: "Awesome 컬렉션",
    browseTopics: "주제별로 찾아보기",
    allCollections: "모든 컬렉션",
    additionalRepositories: "더 많은 GitHub 저장소",
    externalOnly: "링크만 제공하며 저장소 콘텐츠는 GitHub에 있습니다. 별 수는 2026-10-03 스냅샷 기준입니다.",
    stars: "별",
    collectionCount: (count) => `${count}개 컬렉션`,
  },
  "pt-BR": {
    collections: "Coleções Awesome",
    browseTopics: "Navegar por tópico",
    allCollections: "Todas as coleções",
    additionalRepositories: "Mais repositórios no GitHub",
    externalOnly: "Apenas links; o conteúdo permanece no GitHub. As estrelas são da captura de 2026-10-03.",
    stars: "estrelas",
    collectionCount: (count) => `${count} coleç${count === 1 ? "ão" : "ões"}`,
  },
  "ru-RU": {
    collections: "Подборки Awesome",
    browseTopics: "Обзор по темам",
    allCollections: "Все подборки",
    additionalRepositories: "Другие репозитории на GitHub",
    externalOnly: "Здесь только ссылки; содержимое остается на GitHub. Число звезд — снимок на 03.10.2026.",
    stars: "звезд",
    collectionCount: russianCollectionCount,
  },
};

function localePath(locale) {
  return locale === "root" ? "" : `${locale}/`;
}

function escapeMarkdownLabel(value) {
  return value.replaceAll("\\", "\\\\").replaceAll("[", "\\[").replaceAll("]", "\\]");
}

function markdownLink(label, destination) {
  return `[${escapeMarkdownLabel(label)}](/${destination}/)`;
}

function discoveryFrontmatter(title, description, kind, topic) {
  if (typeof title !== "string" || !title.trim()) {
    throw new Error("Generated discovery pages require a nonempty localized title");
  }
  if (typeof description !== "string" || !description.trim()) {
    throw new Error("Generated discovery pages require a nonempty description");
  }
  if (kind !== "collections" && kind !== "tag") {
    throw new Error(`Unsupported generated discovery page kind "${kind}"`);
  }
  const index = kind === "tag"
    ? `awesomeIndex:\n  kind: "tag"\n  topic: ${quote(topic)}`
    : 'awesomeIndex:\n  kind: "collections"';
  return [
    "---",
    `title: ${quote(title)}`,
    `description: ${quote(description)}`,
    "rss: false",
    "sidebar:\n  hidden: true",
    index,
    "---",
    "",
  ].join("\n");
}

function localizedCollection(source, locale) {
  if (locale === "root") {
    const ownerRepo = new URL(source.collection.repositoryUrl).pathname.slice(1);
    return {
      title: source.collection.title,
      description: `A curated collection from ${ownerRepo}.`,
    };
  }
  const translation = source.translations.find((entry) => entry.locale === locale);
  if (!translation) throw new Error(`${source.collection.id}: missing prepared ${locale} edition`);
  return {
    title: translation.metadata.title,
    description: translation.metadata.description,
  };
}

function effectiveTags(source) {
  return normalizeCatalogTags(source.collection, source.collection.id).tags;
}

function renderCollectionDirectory(locale, sortedSources, usedTopics, catalogs, candidates) {
  const prefix = localePath(locale);
  const copy = discoveryCopy[locale];
  const localized = sortedSources.map((source) => ({
    source,
    ...localizedCollection(source, locale),
    tags: effectiveTags(source),
  }));
  const registeredIds = new Set(sortedSources.map(({ collection }) => collection.id));
  const externalCandidates = candidates.filter(({ id }) => !registeredIds.has(id));
  const topicCounts = new Map(usedTopics.map((topic) => [
    topic,
    localized.filter(({ tags }) => tags.includes(topic)).length,
  ]));
  const topicLinks = usedTopics.map((topic) => {
    const label = catalogs[topic].labels[locale];
    return `- ${markdownLink(label, `${prefix}awesome/tags/${topic}`)} (${copy.collectionCount(topicCounts.get(topic))})`;
  }).join("\n");
  const collectionLinks = localized.map(({ source, title, description, tags }) => {
    const links = tags.map((topic) =>
      markdownLink(catalogs[topic].labels[locale], `${prefix}awesome/tags/${topic}`)).join(", ");
    return `- ${markdownLink(title, `${prefix}${source.collection.route}`)} — ${description}\n  - ${copy.browseTopics}: ${links}`;
  }).join("\n");
  const candidateLinks = externalCandidates.map(({ repositoryUrl, catalog, stars }) =>
    `- [${escapeMarkdownLabel(catalogs[catalog].labels[locale])}](${repositoryUrl}) — ${new Intl.NumberFormat(locale === "root" ? "en-US" : locale).format(stars)} ${copy.stars}`
  ).join("\n");
  const count = copy.collectionCount(sortedSources.length);
  return `${discoveryFrontmatter(copy.collections, count, "collections")}` +
    `# ${copy.collections}\n\n${count}\n\n` +
    `## ${copy.browseTopics}\n\n${topicLinks}\n\n## ${copy.collections}\n\n${collectionLinks}\n` +
    (externalCandidates.length
      ? `\n## ${copy.additionalRepositories} (${externalCandidates.length})\n\n${copy.externalOnly}\n\n${candidateLinks}\n`
      : "");
}

async function stageDiscoveryPages(stage, newPaths, prepared, catalogs, candidates) {
  const sortedSources = [...prepared].sort((first, second) =>
    first.collection.id.localeCompare(second.collection.id));
  const usedTopics = [...new Set(sortedSources.flatMap(effectiveTags))].sort();

  for (const locale of discoveryLocales) {
    const prefix = localePath(locale);
    const content = renderCollectionDirectory(locale, sortedSources, usedTopics, catalogs, candidates);
    const homepagePath = `src/content/docs/${prefix}index.md`;
    const indexPath = `src/content/docs/${prefix}awesome/index.md`;

    for (const relative of [homepagePath, indexPath]) {
      const output = path.join(stage, relative);
      await mkdir(path.dirname(output), { recursive: true });
      await writeFile(output, content, { flag: "wx" });
      newPaths.push(relative);
    }

    for (const topic of usedTopics) {
      const copy = discoveryCopy[locale];
      const localized = sortedSources.map((source) => ({
        source,
        ...localizedCollection(source, locale),
        tags: effectiveTags(source),
      }));
      const members = localized.filter(({ tags }) => tags.includes(topic));
      const label = catalogs[topic].labels[locale];
      const topicPath = `src/content/docs/${prefix}awesome/tags/${topic}.md`;
      const topicOutput = path.join(stage, topicPath);
      await mkdir(path.dirname(topicOutput), { recursive: true });
      const collectionItems = members.map(({ source, title, description }) =>
        `- ${markdownLink(title, `${prefix}${source.collection.route}`)} — ${description}`).join("\n");
      await writeFile(
        topicOutput,
        `${discoveryFrontmatter(label, copy.collectionCount(members.length), "tag", topic)}` +
        `# ${label}\n\n${copy.collectionCount(members.length)}\n\n` +
        `${markdownLink(copy.allCollections, `${prefix}awesome`)}\n\n## ${copy.collections}\n\n${collectionItems}\n`,
        { flag: "wx" },
      );
      newPaths.push(topicPath);
    }
  }
}

export function safeOwnedPath(relative) {
  const normalized = path.posix.normalize(relative);
  const localePrefix = `(?:(?:${locales.join("|")})/)?`;
  const isHomepage = relative === "src/content/docs/index.md"
    || locales.some((locale) => relative === `src/content/docs/${locale}/index.md`);
  const isCollectionOutput = new RegExp(
    `^src/content/docs/${localePrefix}awesome/(?:[a-z0-9-]+\\.md|index\\.md|tags/[a-z0-9-]+\\.md)$`,
    "u",
  ).test(relative);
  if (
    normalized !== relative ||
    (!isHomepage && !isCollectionOutput) ||
    relative.split("/").some((part) => part === "..")
  ) {
    throw new Error(`Invalid pipeline-owned path in manifest: "${relative}"`);
  }
  return path.join(root, ...relative.split("/"));
}

async function readOwnedManifest() {
  try {
    const parsed = JSON.parse(await readFile(manifestPath, "utf8"));
    if (!Array.isArray(parsed.paths) || parsed.paths.some((entry) => typeof entry !== "string")) {
      throw new Error("manifest paths must be an array of repository-relative files");
    }
    return [...new Set(parsed.paths.map((entry) => {
      safeOwnedPath(entry);
      return entry;
    }))];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw new Error(`Cannot read ${path.basename(manifestPath)}: ${error.message}`);
  }
}

async function ensureNoSymlinkAncestors(filePath) {
  const docsRoot = path.join(root, "src/content/docs");
  const relative = path.relative(docsRoot, filePath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Generated path escaped docs root: ${filePath}`);
  }
  let current = root;
  for (const part of path.relative(root, path.dirname(filePath)).split(path.sep).filter(Boolean)) {
    current = path.join(current, part);
    try {
      const stat = await lstat(current);
      if (!stat.isDirectory() || stat.isSymbolicLink()) {
        throw new Error(`Generated path parent is not a real directory: ${current}`);
      }
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      break;
    }
  }
}

async function validateAll() {
  const sources = await loadSources();
  const prepared = [];
  for (const source of sources) {
    const translationData = await validateTranslations(source);
    prepared.push({ ...source, ...translationData });
  }
  return prepared;
}

async function exportTranslations(args) {
  const collectionIndex = args.indexOf("--collection");
  const outputIndex = args.indexOf("--output");
  if (collectionIndex < 0 || outputIndex < 0 || !args[collectionIndex + 1] || !args[outputIndex + 1]) {
    throw new Error("usage: content:export --collection <id> --output <directory>");
  }
  const id = args[collectionIndex + 1];
  const outputDirectory = path.resolve(process.cwd(), args[outputIndex + 1]);
  const sources = await loadSources();
  const source = sources.find((item) => item.collection.id === id);
  if (!source) throw new Error(`Unknown collection "${id}"`);
  if (isWithin(source.sourceDirectory, outputDirectory)) {
    throw new Error("Export output must not be inside the read-only upstream submodule");
  }
  try {
    const existing = await readdir(outputDirectory);
    if (existing.length) throw new Error(`Export output is not empty: ${outputDirectory}`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  await mkdir(outputDirectory, { recursive: true });
  const inputs = path.join(outputDirectory, id);
  await mkdir(path.join(inputs, "locales"), { recursive: true });
  await writeFile(path.join(inputs, "README.md"), source.sourceBytes, { flag: "wx" });
  await writeFile(
    path.join(inputs, "LICENSE"),
    await readFile(source.license),
    { flag: "wx" },
  );
  await writeFile(
    path.join(inputs, "source.json"),
    `${JSON.stringify({
      repositoryUrl: source.collection.repositoryUrl,
      revision: source.revision,
      readmePath: source.collection.readmePath,
      licenseId: source.collection.licenseId,
      sourceDigest: source.digest,
      locales,
    }, null, 2)}\n`,
    { flag: "wx" },
  );
  await writeFile(
    path.join(inputs, "TRANSLATION-INSTRUCTIONS.md"),
    `# Translation instructions\n\nTranslate the complete README into each of these locales: ${locales.join(", ")}.\n\nPreserve all headings and their order, list and table entries, code values, names, identifiers, link and image destinations, and source-fragment links. Translate prose and headings fully; do not add recommendations or omit content. Keep each locale in \`locales/<locale>.md\`. Have a maintainer review each translation and record its current source digest and truthful AI-translation flag in \`translations.json\`. Builds never contact translation services.\n`,
    { flag: "wx" },
  );
  console.log(`Exported ${id} at ${source.revision} (${source.digest}) to ${outputDirectory}`);
}

export async function preparePages(prepared, { rename: renameFile = rename } = {}) {
  const stage = await mkdtemp(path.join(root, ".awesome-content-stage-"));
  const previousPaths = await readOwnedManifest();
  const newPaths = [];
  try {
    const catalogs = JSON.parse(await readFile(catalogsPath, "utf8"));
    validateCatalogs(catalogs);
    const candidates = JSON.parse(await readFile(candidatesPath, "utf8"));
    validateCandidateRepositories(candidates, prepared.map(({ collection }) => collection), catalogs);
    for (const source of prepared) {
      const englishStructure = source.sourceStructure;
      const englishFragments = getFragments(englishStructure, englishStructure);
      const englishPath = `src/content/docs/${source.collection.route}.md`;
      safeOwnedPath(englishPath);
      const englishOutput = path.join(stage, englishPath);
      await mkdir(path.dirname(englishOutput), { recursive: true });
      await writeFile(
        englishOutput,
        generatedBody(
          source,
          source.collection.title,
          `A curated collection from ${new URL(source.collection.repositoryUrl).pathname.slice(1)}.`,
          false,
          source.sourceMarkdown,
          englishFragments,
        ),
        { flag: "wx" },
      );
      newPaths.push(englishPath);

      for (const translation of source.translations) {
        const relative = `src/content/docs/${translation.locale}/${source.collection.route}.md`;
        safeOwnedPath(relative);
        const staged = path.join(stage, relative);
        await mkdir(path.dirname(staged), { recursive: true });
        const fragments = getFragments(englishStructure, translation.structure);
        await writeFile(
          staged,
          generatedBody(
            source,
            translation.metadata.title,
            translation.metadata.description,
            translation.metadata.isAITranslation,
            translation.body,
            fragments,
          ),
          { flag: "wx" },
        );
        newPaths.push(relative);
      }
    }
    await stageDiscoveryPages(stage, newPaths, prepared, catalogs, candidates);

    for (const relative of newPaths) {
      const destination = safeOwnedPath(relative);
      await ensureNoSymlinkAncestors(destination);
      try {
        await lstat(destination);
        if (!previousPaths.includes(relative)) {
          throw new Error(`Refusing to overwrite non-pipeline content: ${relative}`);
        }
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }

    const allPaths = [...new Set([...previousPaths, ...newPaths])].sort();
    for (const relative of allPaths) await ensureNoSymlinkAncestors(safeOwnedPath(relative));
    const movedToBackup = [];
    const installed = [];
    const stagedManifest = path.join(stage, "manifest.json");
    await writeFile(stagedManifest, `${JSON.stringify({ paths: [...newPaths].sort() }, null, 2)}\n`);
    const backupRoot = path.join(stage, "backup");

    try {
      for (const relative of allPaths) {
        const destination = safeOwnedPath(relative);
        try {
          await lstat(destination);
          const backup = path.join(backupRoot, relative);
          await mkdir(path.dirname(backup), { recursive: true });
          await renameFile(destination, backup);
          movedToBackup.push({ destination, backup });
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        if (newPaths.includes(relative)) {
          await mkdir(path.dirname(destination), { recursive: true });
          await renameFile(path.join(stage, relative), destination);
          installed.push(destination);
        }
      }
      const manifestBackup = path.join(backupRoot, ".awesome-content-manifest.json");
      try {
        await renameFile(manifestPath, manifestBackup);
        movedToBackup.push({ destination: manifestPath, backup: manifestBackup });
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      await renameFile(stagedManifest, manifestPath);
      installed.push(manifestPath);
    } catch (error) {
      for (const file of installed.reverse()) await rm(file, { force: true });
      for (const { destination, backup } of movedToBackup.reverse()) {
        await mkdir(path.dirname(destination), { recursive: true });
        await renameFile(backup, destination);
      }
      throw error;
    }
  } finally {
    await rm(stage, { recursive: true, force: true });
  }
}

async function main() {
  const [command, ...args] = process.argv.slice(2);
  if (command === "export") return exportTranslations(args);
  if (command === "check") {
    await validateAll();
    console.log("All source and translation inputs are valid.");
    return;
  }
  if (command === "prepare") {
    const prepared = await validateAll();
    await preparePages(prepared);
    console.log(`Prepared ${prepared.length} collection(s) for ${locales.length + 1} locales.`);
    return;
  }
  throw new Error("usage: content-pipeline.mjs <export|check|prepare> [options]");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`content pipeline: ${error.message}`);
    process.exitCode = 1;
  });
}
