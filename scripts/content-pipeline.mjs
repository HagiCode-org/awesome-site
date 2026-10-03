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

const root = fileURLToPath(new URL("../", import.meta.url));
const registryPath = path.join(root, "content/awesome/collections.json");
const manifestPath = path.join(root, ".awesome-content-manifest.json");
const locales = ["zh-CN", "zh-Hant", "fr-FR", "de-DE", "es-ES", "ja-JP", "ko-KR", "pt-BR", "ru-RU"];
const licenseMarkers = {
  "CC0-1.0": /CC0 1\.0 Universal/u,
  "MIT": /MIT License/u,
  "Apache-2.0": /Apache License\s+Version 2\.0/u,
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

export function validateRepositoryUrl(value, collectionId) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${collectionId}: repositoryUrl must be a canonical HTTPS GitHub repository URL`);
  }
  const parts = url.pathname.replace(/\/$/u, "").split("/").filter(Boolean);
  if (
    url.protocol !== "https:" ||
    url.hostname !== "github.com" ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    parts.length !== 2 ||
    parts.some((part) => part.endsWith(".git")) ||
    url.pathname.endsWith("/")
  ) {
    throw new Error(`${collectionId}: unsupported repository URL "${value}"`);
  }
}

export function validateRegistry(collections) {
  if (!Array.isArray(collections) || collections.length === 0) {
    throw new Error("content/awesome/collections.json must contain at least one collection");
  }
  const ids = new Set();
  const routes = new Set();
  for (const collection of collections) {
    if (!collection || typeof collection !== "object") {
      throw new Error("Every collection registration must be an object");
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(collection.id)) {
      throw new Error(`Invalid collection identifier "${collection.id}"`);
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
    ids.add(collection.id);
    routes.add(collection.route);
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
  const marker = licenseMarkers[collection.licenseId];
  if (!marker || !marker.test(licenseText)) {
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
  validateRegistry(collections);
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

function safeOwnedPath(relative) {
  const normalized = path.posix.normalize(relative);
  if (
    !relative.startsWith("src/content/docs/") ||
    normalized !== relative ||
    !/(?:^|\/)awesome\/[a-z0-9-]+\.md$/u.test(relative) ||
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
  let current = docsRoot;
  const docsStat = await lstat(docsRoot);
  if (!docsStat.isDirectory() || docsStat.isSymbolicLink()) {
    throw new Error("src/content/docs must be a real directory");
  }
  for (const part of path.dirname(relative).split(path.sep).filter(Boolean)) {
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

async function validateAuthoredEntryPoints() {
  const missing = [];
  for (const locale of locales) {
    const route = "index.md";
    const file = path.join(root, "src/content/docs", locale, route);
    try {
      const body = await readFile(file, "utf8");
      if (!/^title:\s*["']?[^"'\n]+/mu.test(body.slice(0, body.indexOf("---", 3)))) {
        throw new Error(`${locale}/${route}: missing a nonempty title`);
      }
    } catch (error) {
      if (error.code === "ENOENT") missing.push(`${locale}/${route}`);
      else throw error;
    }
  }
  if (missing.length) throw new Error(`missing localized home pages: ${missing.join(", ")}`);
}

async function validateAll() {
  const sources = await loadSources();
  const prepared = [];
  for (const source of sources) {
    const translationData = await validateTranslations(source);
    prepared.push({ ...source, ...translationData });
  }
  await validateAuthoredEntryPoints();
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

export async function preparePages(prepared) {
  const stage = await mkdtemp(path.join(root, ".awesome-content-stage-"));
  const previousPaths = await readOwnedManifest();
  const newPaths = [];
  try {
    for (const source of prepared) {
      const englishStructure = source.sourceStructure;
      const englishFragments = getFragments(englishStructure, englishStructure);
      const englishPath = `src/content/docs/${source.collection.route}.md`;
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
          await rename(destination, backup);
          movedToBackup.push({ destination, backup });
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        if (newPaths.includes(relative)) {
          await mkdir(path.dirname(destination), { recursive: true });
          await rename(path.join(stage, relative), destination);
          installed.push(destination);
        }
      }
      const manifestBackup = path.join(backupRoot, ".awesome-content-manifest.json");
      try {
        await rename(manifestPath, manifestBackup);
        movedToBackup.push({ destination: manifestPath, backup: manifestBackup });
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      await rename(stagedManifest, manifestPath);
      installed.push(manifestPath);
    } catch (error) {
      for (const file of installed.reverse()) await rm(file, { force: true });
      for (const { destination, backup } of movedToBackup.reverse()) {
        await mkdir(path.dirname(destination), { recursive: true });
        await rename(backup, destination);
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
    console.log("All source, translation, and authored-entry inputs are valid.");
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
