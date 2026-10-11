import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { access, copyFile, mkdtemp, mkdir, readFile, readdir, rename, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";
import {
  assertEquivalentStructure,
  awesomeContent,
  awesomeSourceImages,
  inspectMarkdown,
  resolveSourceUrl,
  sourceHeadingAliases,
} from "../src/plugins/awesome-content.mjs";
import {
  dataRoot,
  realPathInside,
  preparePages,
  validateCatalogs,
  validateCandidateRepositories,
  validateMetadata,
  validateRegistry,
  validateTranslationRecords,
  licenseIsVerified,
  safeOwnedPath,
} from "../scripts/content-pipeline.mjs";
import { loadSourceReviews } from "../scripts/source-reviews.mjs";
import { stringify } from "yaml";
import { z } from "astro/zod";
import { normalizeCatalogTags } from "../src/catalog-tags.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
// Fast mode skips the slow content-pipeline integration tests that prepare real
// collections end to end; CI keeps running them with the full suite.
const FAST_TESTS = process.env.AWESOME_TEST_FAST === "1";
const slowSkip = FAST_TESTS ? "slow content pipeline integration test" : false;
const sourceOptions = {
  collectionId: "test-collection",
  readmePath: "docs/README.md",
};
const catalogLocales = ["root", "zh-CN", "zh-Hant", "fr-FR", "de-DE", "es-ES", "ja-JP", "ko-KR", "pt-BR", "ru-RU"];
const translationLocales = catalogLocales.slice(1);

test("generated pages and their ownership manifest stay ignored and untracked", () => {
  const generatedPaths = [
    ".awesome-content-manifest.json",
    ...catalogLocales.flatMap((locale) => {
      const prefix = locale === "root" ? "" : `${locale}/`;
      return [`src/content/docs/${prefix}index.md`, `src/content/docs/${prefix}awesome/`];
    }),
  ];
  assert.equal(
    execFileSync("git", ["ls-files", "--", ...generatedPaths], { cwd: root, encoding: "utf8" }),
    "",
    "Tracking generated pages without their manifest breaks preparation in a fresh checkout",
  );
  const ignoredPaths = execFileSync("git", ["check-ignore", "--no-index", "--stdin"], {
    cwd: root,
    encoding: "utf8",
    input: `${generatedPaths.join("\n")}\n`,
  }).trim().split("\n");
  assert.deepEqual(ignoredPaths, generatedPaths);
});

test("awesome-site tracks only the data submodule and no migrated content or source paths", () => {
  assert.deepEqual(
    execFileSync("git", ["config", "--file", ".gitmodules", "--get-regexp", "\\.path$"], { cwd: root, encoding: "utf8" })
      .trim()
      .split("\n"),
    ["submodule.data.path data"],
  );
  assert.match(
    execFileSync("git", ["ls-files", "-s", "data"], { cwd: root, encoding: "utf8" }),
    /^160000 [0-9a-f]{40} 0\tdata\n$/u,
  );
  assert.equal(
    execFileSync("git", ["ls-files", "--", "content/awesome", "sources"], { cwd: root, encoding: "utf8" }),
    "",
    "Migrated content and source gitlinks must live in the data submodule",
  );
});

test("config and component imports resolve catalog data inside the exported dataRoot", async () => {
  assert.equal(dataRoot, path.join(root, "data"));
  for (const file of ["astro.config.mjs", "src/components/CollectionBrowser.astro", "src/components/PageTitle.astro"]) {
    const source = await readFile(path.join(root, file), "utf8");
    const specifiers = [...source.matchAll(/from "([^"]*content\/awesome\/[^"]+)"/gu)].map(([, specifier]) => specifier);
    assert.notEqual(specifiers.length, 0, `${file} imports no awesome content`);
    for (const specifier of specifiers) {
      const resolved = path.resolve(path.dirname(path.join(root, file)), specifier);
      assert.ok(resolved.startsWith(`${dataRoot}${path.sep}`), `${file} imports ${specifier} outside dataRoot`);
    }
  }
});

const testCatalogs = {
  "test-topic": {
    labels: Object.fromEntries(catalogLocales.map((locale) => [locale, "Test topic"])),
  },
  "secondary-topic": {
    labels: Object.fromEntries(catalogLocales.map((locale) => [locale, "Secondary topic"])),
  },
};

const defaultSourceMarkdown = "# Example\n\nA concise source.\n";
const defaultTranslationBody = (locale) => `# Example ${locale}\n\nTranslated source ${locale}.\n`;
const fixtureCollectionDirectory = "data/content/awesome/test-collection";

const sha256Hex = (value) => createHash("sha256").update(value).digest("hex");

// Test-side model of the mirror sync: each find must occur exactly once in the upstream text.
function applyMirrorEdits(markdown, edits) {
  let text = markdown;
  for (const edit of edits) {
    const first = text.indexOf(edit.find);
    if (first < 0 || text.indexOf(edit.find, first + 1) >= 0) throw new Error(`fixture anchor ${edit.id} must occur once`);
    text = `${text.slice(0, first)}${edit.replace}${text.slice(first + edit.find.length)}`;
  }
  return text;
}

// Writes mirror/README.md and mirror.json for the fixture collection. Overrides let a test
// produce deliberately inconsistent ledgers or mirrors.
async function writeMirror(fixtureRoot, { revision, sourceMarkdown, edits = [], mirrorMarkdown, ledgerOverrides = {} }) {
  const base = path.join(fixtureRoot, fixtureCollectionDirectory);
  const mirrored = mirrorMarkdown ?? applyMirrorEdits(sourceMarkdown, edits);
  const ledger = {
    version: 1,
    upstream: { revision, readmePath: "README.md", digest: sha256Hex(sourceMarkdown) },
    mirror: { path: "mirror/README.md", digest: sha256Hex(mirrored) },
    edits,
    ...ledgerOverrides,
  };
  await mkdir(path.join(base, "mirror"), { recursive: true });
  await writeFile(path.join(base, "mirror/README.md"), mirrored);
  await writeFile(path.join(base, "mirror.json"), `${JSON.stringify(ledger, null, 2)}\n`);
  return { mirrored, mirrorDigest: sha256Hex(mirrored) };
}

// Every file under a directory keyed by relative path, skipping Git metadata.
async function readTree(directory, base = directory) {
  const files = {};
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === ".git") continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) Object.assign(files, await readTree(full, base));
    else files[path.relative(base, full)] = await readFile(full, "utf8");
  }
  return files;
}

function runPipeline(cwd, command) {
  return spawnSync(process.execPath, ["scripts/content-pipeline.mjs", command], { cwd, encoding: "utf8" });
}

async function createIsolatedPipeline({
  ledgerContent,
  validSource = false,
  sourceMarkdown = defaultSourceMarkdown,
  edits = [],
  translationBody = defaultTranslationBody,
}) {
  const fixtureRoot = await mkdtemp(path.join(os.tmpdir(), "awesome-pipeline-isolated-"));
  const collection = {
    id: "test-collection",
    repositoryUrl: "https://github.com/example/test-collection",
    sourceDir: "sources/test-collection",
    readmePath: "README.md",
    licensePath: "LICENSE",
    licenseId: "Unlicense",
    route: "awesome/test-collection",
    title: "Test Collection",
    catalog: "test-topic",
  };
  const candidate = {
    id: "test-candidate",
    repositoryUrl: "https://github.com/example/test-candidate",
    catalog: "test-topic",
    stars: 1000,
    licenseId: "MIT",
  };
  const importedReview = {
    id: collection.id,
    source: collection.repositoryUrl,
    title: collection.title,
    imported: true,
    notImportedReason: null,
    importedAt: null,
  };
  const pendingReview = {
    id: candidate.id,
    source: candidate.repositoryUrl,
    title: "Test Candidate",
    imported: false,
    notImportedReason: "Pending review.",
    importedAt: null,
  };
  const rightsReviewYaml = [
    '  reviewedAt: "2026-10-04T05:33:15Z"',
    `  revision: ${"a".repeat(40)}`,
    "  readmePath: README.md",
    `  readmeBlob: ${"b".repeat(40)}`,
    "  licensePath: LICENSE",
    `  licenseBlob: ${"c".repeat(40)}`,
    "  licenseId: MIT",
    "  readmeNotice: none-detected",
    "  localAssetReferences: 0",
    "  externalAssetReferences: 0",
    "  externalAssetHosts: []",
    "  disposition: >-",
    "    github-link-only; README and embedded assets are not republished; third-party asset rights are not individually cleared",
  ].join("\n");
  const reviewYaml = [
    `- id: ${importedReview.id}`,
    `  source: ${importedReview.source}`,
    `  title: "${importedReview.title}"`,
    "  imported: true",
    "  notImportedReason: null",
    "  importedAt: null",
    `- id: ${pendingReview.id}`,
    `  source: ${pendingReview.source}`,
    `  title: "${pendingReview.title}"`,
    "  imported: false",
    '  notImportedReason: "Pending review."',
    "  importedAt: null",
    rightsReviewYaml,
    "",
  ].join("\n");
  const directories = [
    "scripts",
    "src/plugins",
    "data/content/awesome/test-collection/locales",
    "src/content/docs/awesome",
  ];
  for (const directory of directories) await mkdir(path.join(fixtureRoot, directory), { recursive: true });
  await symlink(path.join(root, "node_modules"), path.join(fixtureRoot, "node_modules"), "dir");
  await Promise.all([
    copyFile(path.join(root, "scripts/content-pipeline.mjs"), path.join(fixtureRoot, "scripts/content-pipeline.mjs")),
    copyFile(path.join(root, "scripts/source-reviews.mjs"), path.join(fixtureRoot, "scripts/source-reviews.mjs")),
    copyFile(path.join(root, "scripts/data-root.mjs"), path.join(fixtureRoot, "scripts/data-root.mjs")),
    copyFile(path.join(root, "src/plugins/awesome-content.mjs"), path.join(fixtureRoot, "src/plugins/awesome-content.mjs")),
    copyFile(path.join(root, "src/catalog-tags.mjs"), path.join(fixtureRoot, "src/catalog-tags.mjs")),
  ]);
  const catalogs = {
    "test-topic": {
      labels: Object.fromEntries(catalogLocales.map((locale) => [locale, `Test topic ${locale}`])),
    },
  };
  const initialFiles = [
    writeFile(path.join(fixtureRoot, "data/content/awesome/collections.json"), `${JSON.stringify([collection], null, 2)}\n`),
    writeFile(path.join(fixtureRoot, "data/content/awesome/catalogs.json"), `${JSON.stringify(catalogs, null, 2)}\n`),
    writeFile(path.join(fixtureRoot, "data/content/awesome/candidates.json"), `${JSON.stringify([candidate], null, 2)}\n`),
    writeFile(path.join(fixtureRoot, ".awesome-content-manifest.json"), `${JSON.stringify({ paths: ["src/content/docs/awesome/old-page.md"] })}\n`),
    writeFile(path.join(fixtureRoot, "src/content/docs/awesome/old-page.md"), "Previously generated content\n"),
  ];
  if (ledgerContent !== null) {
    initialFiles.push(writeFile(
      path.join(fixtureRoot, "data/content/awesome/source-reviews.yml"),
      ledgerContent ?? reviewYaml,
    ));
  }
  await Promise.all(initialFiles);

  if (validSource) {
    const dataDirectory = path.join(fixtureRoot, "data");
    const sourceDirectory = path.join(dataDirectory, collection.sourceDir);
    await mkdir(sourceDirectory, { recursive: true });
    await writeFile(path.join(sourceDirectory, "README.md"), sourceMarkdown);
    await writeFile(
      path.join(sourceDirectory, "LICENSE"),
      "This is free and unencumbered software released into the public domain.",
    );
    execFileSync("git", ["init", "--quiet"], { cwd: sourceDirectory, stdio: "pipe" });
    execFileSync("git", ["add", "README.md", "LICENSE"], { cwd: sourceDirectory, stdio: "pipe" });
    execFileSync("git", [
      "-c", "user.name=Fixture",
      "-c", "user.email=fixture@example.invalid",
      "commit", "--quiet", "-m", "fixture source",
    ], { cwd: sourceDirectory, stdio: "pipe" });
    const revision = execFileSync("git", ["rev-parse", "HEAD"], {
      cwd: sourceDirectory,
      encoding: "utf8",
    }).trim();
    execFileSync("git", ["init", "--quiet"], { cwd: dataDirectory, stdio: "pipe" });
    await writeFile(
      path.join(dataDirectory, ".gitmodules"),
      `[submodule "sources/test-collection"]\n\tpath = sources/test-collection\n\turl = ${collection.repositoryUrl}\n`,
    );
    execFileSync("git", [
      "update-index",
      "--add",
      "--cacheinfo",
      `160000,${revision},${collection.sourceDir}`,
    ], { cwd: dataDirectory, stdio: "pipe" });
    // Translations bind to the mirror digest, which equals the upstream digest unless edits apply.
    const { mirrorDigest: sourceDigest } = await writeMirror(fixtureRoot, { revision, sourceMarkdown, edits });
    const translations = Object.fromEntries(translationLocales.map((locale) => [locale, {
      title: collection.title,
      description: `An example collection in ${locale}.`,
      sourceDigest,
      reviewStatus: "reviewed",
      isAITranslation: false,
    }]));
    await Promise.all([
      ...translationLocales.map((locale) => writeFile(
        path.join(fixtureRoot, `${fixtureCollectionDirectory}/locales/${locale}.md`),
        translationBody(locale),
      )),
      writeFile(
        path.join(fixtureRoot, "data/content/awesome/test-collection/translations.json"),
        `${JSON.stringify({ translations }, null, 2)}\n`,
      ),
    ]);
  }
  return fixtureRoot;
}

test("catalog tags normalize optional fields, stable unions, and invalid values", () => {
  assert.deepEqual(normalizeCatalogTags({}), { tags: [] });
  assert.deepEqual(
    normalizeCatalogTags({ catalog: " python ", tags: ["tools", "python"] }),
    { catalog: "python", tags: ["tools", "python"] },
  );
  assert.deepEqual(
    normalizeCatalogTags({ catalog: ["python", "machine-learning", "python"] }),
    { catalog: ["python", "machine-learning"], tags: ["python", "machine-learning"] },
  );
  assert.deepEqual(
    normalizeCatalogTags({ tags: [" tools ", "tools", "python"] }),
    { tags: ["tools", "python"] },
  );
  assert.deepEqual(
    normalizeCatalogTags(normalizeCatalogTags({ catalog: ["python", "tools"], tags: ["tools"] })),
    { catalog: ["python", "tools"], tags: ["tools", "python"] },
  );
  for (const metadata of [
    { catalog: [] },
    { catalog: "" },
    { catalog: [""] },
    { catalog: 1 },
    { catalog: ["not a key"] },
    { tags: "python" },
    { tags: [null] },
  ]) {
    assert.throws(() => normalizeCatalogTags(metadata, "example"), /example: (catalog|tags)/u);
  }
});

test("registry rejects invalid collections and unknown topic metadata", () => {
  const collection = {
    id: "test-collection",
    repositoryUrl: "https://github.com/example/test-collection",
    sourceDir: "sources/test-collection",
    readmePath: "README.md",
    licensePath: "LICENSE",
    licenseId: "CC0-1.0",
    route: "awesome/test-collection",
    title: "Test collection",
    catalog: "test-topic",
  };

  assert.doesNotThrow(() => validateRegistry([collection], testCatalogs));
  assert.doesNotThrow(() => validateRegistry([{ ...collection, sourceLocale: "zh-Hant" }], testCatalogs));
  assert.throws(
    () => validateRegistry([{ ...collection, sourceLocale: "en" }], testCatalogs),
    /sourceLocale must be one of/u,
  );
  assert.throws(
    () => validateRegistry([collection, { ...collection }], testCatalogs),
    /Duplicate collection identifier/u,
  );
  assert.throws(
    () => validateRegistry([{ ...collection, repositoryUrl: "git@github.com:example/repo.git" }], testCatalogs),
    /canonical HTTPS GitHub/u,
  );
  assert.throws(
    () => validateRegistry([{ ...collection, readmePath: "../README.md" }], testCatalogs),
    /normalized repository-relative path/u,
  );
  assert.throws(
    () => validateRegistry([{ ...collection, licenseId: "NOASSERTION" }], testCatalogs),
    /unsupported license identifier/u,
  );
  assert.throws(
    () => validateRegistry([{ ...collection, id: "index", route: "awesome/index" }], testCatalogs),
    /reserved/u,
  );
  assert.throws(
    () => validateRegistry([{ ...collection, catalog: "unknown" }], testCatalogs),
    /unknown catalog\/tag topic/u,
  );
  assert.doesNotThrow(() => validateRegistry([
    { ...collection, tags: ["secondary-topic"] },
  ], testCatalogs));
  assert.throws(
    () => validateRegistry([{ ...collection, catalog: undefined }], testCatalogs),
    /catalog metadata is required/u,
  );
  assert.throws(
    () => validateCatalogs({ "test-topic": { labels: { root: "Test" } } }),
    /missing nonempty taxonomy label for zh-CN/u,
  );
  assert.doesNotThrow(() => validateRegistry([
    collection,
    {
      ...collection,
      id: "second-collection",
      repositoryUrl: "https://github.com/example/second-collection",
      sourceDir: "sources/second-collection",
      readmePath: "README.md",
      licensePath: "LICENSE",
      route: "awesome/second-collection",
      title: "Second collection",
      catalog: "test-topic",
    },
  ], testCatalogs));
});

test("repository candidates require unique links, known topics, 1K stars, and supported licenses", () => {
  const candidate = {
    id: "awesome-python",
    repositoryUrl: "https://github.com/vinta/awesome-python",
    catalog: "test-topic",
    stars: 324948,
    licenseId: "MIT",
  };
  assert.doesNotThrow(() => validateCandidateRepositories([candidate], [], testCatalogs));
  assert.throws(() => validateCandidateRepositories({}, [], testCatalogs), /repository array/u);
  assert.throws(
    () => validateCandidateRepositories([{ ...candidate, stars: 999 }], [], testCatalogs),
    /at least 1,000 snapshot stars/u,
  );
  assert.throws(
    () => validateCandidateRepositories([{ ...candidate, licenseId: "GPL-3.0" }], [], testCatalogs),
    /verified supported license/u,
  );
  assert.throws(
    () => validateCandidateRepositories([{ ...candidate, catalog: "unknown" }], [], testCatalogs),
    /unknown repository candidate topic/u,
  );
  assert.throws(
    () => validateCandidateRepositories([candidate, candidate], [], testCatalogs),
    /duplicate collection or repository candidate/u,
  );
  assert.throws(
    () => validateCandidateRepositories([candidate], [{ id: candidate.id, repositoryUrl: "https://github.com/vinta/awesome-python" }], testCatalogs),
    /duplicate collection or repository candidate/u,
  );
});

test("license verification accepts only matching declared license text", () => {
  assert.equal(
    licenseIsVerified("Unlicense", "This is free and unencumbered software released into the public domain."),
    true,
  );
  assert.equal(
    licenseIsVerified("WTFPL", "DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE\nVersion 2, December 2004"),
    true,
  );
  assert.equal(
    licenseIsVerified("Unlicense", "MIT License"),
    false,
  );
  assert.equal(licenseIsVerified("WTFPL", "All rights reserved"), false);
  assert.equal(licenseIsVerified("unknown", "any text"), false);
});

test("pipeline ownership permits only the ten configured homepage paths", () => {
  const homepagePaths = [
    "src/content/docs/index.md",
    ...catalogLocales.slice(1).map((locale) => `src/content/docs/${locale}/index.md`),
  ];
  for (const relative of homepagePaths) assert.doesNotThrow(() => safeOwnedPath(relative));
  for (const relative of [
    "src/content/docs/it-IT/index.md",
    "src/content/docs/zh-CN/guides/index.md",
    "src/content/docs/another-page.md",
    "src/content/docs/../README.md",
  ]) {
    assert.throws(() => safeOwnedPath(relative), /Invalid pipeline-owned path/u);
  }
});

test("translation metadata requires all locales, current digests, review, and honest AI flags", () => {
  const locales = ["zh-CN", "zh-Hant", "fr-FR", "de-DE", "es-ES", "ja-JP", "ko-KR", "pt-BR", "ru-RU"];
  const records = Object.fromEntries(locales.map((locale) => [locale, {}]));
  assert.equal(Object.keys(validateTranslationRecords("test-collection", records)).length, 9);
  assert.throws(
    () => validateTranslationRecords("test-collection", { ...records, "en-US": {} }),
    /unsupported translation locale/u,
  );
  const missing = { ...records };
  delete missing["ru-RU"];
  assert.throws(
    () => validateTranslationRecords("test-collection", missing),
    /missing translation metadata.*ru-RU/u,
  );

  const source = {
    digest: "a".repeat(64),
    collection: { id: "test-collection", title: "Source title" },
  };
  const metadata = {
    title: "Source title",
    description: "Description traduite",
    sourceDigest: source.digest,
    reviewStatus: "reviewed",
    isAITranslation: true,
  };
  assert.doesNotThrow(() => validateMetadata(metadata, source, "fr-FR"));
  assert.throws(
    () => validateMetadata({ ...metadata, title: "Titre traduit" }, source, "fr-FR"),
    /title must match the collection title/u,
  );
  assert.throws(
    () => validateMetadata({ ...metadata, sourceDigest: "b".repeat(64) }, source, "fr-FR"),
    /translation is stale/u,
  );
  assert.throws(
    () => validateMetadata({ ...metadata, reviewStatus: "draft" }, source, "fr-FR"),
    /reviewStatus must be "reviewed"/u,
  );
  assert.throws(
    () => validateMetadata({ ...metadata, isAITranslation: "true" }, source, "fr-FR"),
    /isAITranslation must be a boolean/u,
  );
});

test("content check reports missing source checkouts and stale translation digests", async () => {
  const registryPath = path.join(root, "data/content/awesome/collections.json");
  const sidecarPath = path.join(
    root,
    "data/content/awesome/awesome-github-profile-readme/translations.json",
  );
  const reviewPath = path.join(root, "data/content/awesome/source-reviews.yml");
  const originalRegistry = await readFile(registryPath, "utf8");
  const originalSidecar = await readFile(sidecarPath, "utf8");
  const originalLedger = await readFile(reviewPath, "utf8");
  const runCheck = () => spawnSync(process.execPath, ["scripts/content-pipeline.mjs", "check"], {
    cwd: root,
    encoding: "utf8",
  });

  try {
    const registry = JSON.parse(originalRegistry);
    registry[0].sourceDir = "sources/missing-source";
    await writeFile(registryPath, `${JSON.stringify(registry, null, 2)}\n`);
    const missingSource = runCheck();
    assert.notEqual(missingSource.status, 0);
    assert.match(`${missingSource.stdout}${missingSource.stderr}`, /awesome-github-profile-readme sourceDir does not exist/u);

    await writeFile(registryPath, `${JSON.stringify([JSON.parse(originalRegistry)[0]], null, 2)}\n`);
    const firstCollectionId = JSON.parse(originalRegistry)[0].id;
    const retainedReviews = (await loadSourceReviews(reviewPath))
      .filter((review) => !review.imported || review.id === firstCollectionId);
    await writeFile(
      reviewPath,
      stringify(retainedReviews).replace(/^  reviewedAt: ([^\s]+)$/gmu, '  reviewedAt: "$1"'),
    );
    const sidecar = JSON.parse(originalSidecar);
    sidecar.translations["fr-FR"].sourceDigest = "0".repeat(64);
    await writeFile(sidecarPath, `${JSON.stringify(sidecar, null, 2)}\n`);
    const staleTranslation = runCheck();
    assert.notEqual(staleTranslation.status, 0);
    assert.match(`${staleTranslation.stdout}${staleTranslation.stderr}`, /awesome-github-profile-readme\/fr-FR: translation is stale/u);
  } finally {
    await writeFile(registryPath, originalRegistry);
    await writeFile(sidecarPath, originalSidecar);
    await writeFile(reviewPath, originalLedger);
  }
});

test("missing or invalid review ledgers stop export, check, and prepare before output writes", async () => {
  const authoredPaths = [
    "data/content/awesome/collections.json",
    "data/content/awesome/catalogs.json",
    "data/content/awesome/candidates.json",
    ".awesome-content-manifest.json",
    "src/content/docs/awesome/old-page.md",
  ];

  for (const [state, ledgerContent] of [
    ["missing", null],
    ["invalid", "- id: [\n"],
  ]) {
    for (const command of ["export", "check", "prepare"]) {
      const fixtureRoot = await createIsolatedPipeline({ ledgerContent });
      const ledgerPath = path.join(fixtureRoot, "data/content/awesome/source-reviews.yml");
      const exportPath = path.join(fixtureRoot, "translation-export");
      const args = ["scripts/content-pipeline.mjs", command];
      if (command === "export") {
        args.push("--collection", "test-collection", "--output", exportPath);
      }
      try {
        const before = await Promise.all(authoredPaths.map(async (relative) => [
          relative,
          await readFile(path.join(fixtureRoot, relative)),
        ]));
        const ledgerBefore = ledgerContent === null ? null : await readFile(ledgerPath);
        const result = spawnSync(process.execPath, args, { cwd: fixtureRoot, encoding: "utf8" });
        const diagnostic = `${result.stdout}${result.stderr}`;
        assert.notEqual(result.status, 0, `${state} ledger should fail ${command}`);
        assert.match(diagnostic, /source-reviews\.yml/u);
        if (state === "invalid") assert.match(diagnostic, /invalid YAML/u);
        for (const [relative, bytes] of before) {
          assert.deepEqual(await readFile(path.join(fixtureRoot, relative)), bytes);
        }
        if (ledgerBefore === null) {
          await assert.rejects(access(ledgerPath), { code: "ENOENT" });
        } else {
          assert.deepEqual(await readFile(ledgerPath), ledgerBefore);
        }
        if (command === "export") await assert.rejects(access(exportPath), { code: "ENOENT" });
      } finally {
        await rm(fixtureRoot, { recursive: true, force: true });
      }
    }
  }
});

test("missing or empty data submodule fails check and prepare before generated pages change", async () => {
  for (const state of ["missing", "empty"]) {
    const fixtureRoot = await createIsolatedPipeline({});
    try {
      await rm(path.join(fixtureRoot, "data"), { recursive: true });
      if (state === "empty") await mkdir(path.join(fixtureRoot, "data"));
      const generatedPaths = [
        ".awesome-content-manifest.json",
        "src/content/docs/awesome/old-page.md",
      ];
      const generatedBefore = await Promise.all(generatedPaths.map((relative) => readFile(path.join(fixtureRoot, relative))));
      for (const command of ["check", "prepare"]) {
        const result = spawnSync(process.execPath, ["scripts/content-pipeline.mjs", command], {
          cwd: fixtureRoot,
          encoding: "utf8",
        });
        assert.notEqual(result.status, 0, `${state} data should fail ${command}`);
        assert.match(
          `${result.stdout}${result.stderr}`,
          /data submodule is missing or not initialized: run git submodule update --init --recursive/u,
        );
      }
      assert.deepEqual(
        await Promise.all(generatedPaths.map((relative) => readFile(path.join(fixtureRoot, relative)))),
        generatedBefore,
      );
      await assert.rejects(access(path.join(fixtureRoot, "src/content/docs/index.md")), { code: "ENOENT" });
    } finally {
      await rm(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("data sources that are uninitialized or registered only in awesome-site fail with the collection identifier", async () => {
  const uninitialized = await createIsolatedPipeline({ validSource: true });
  try {
    const sourceDirectory = path.join(uninitialized, "data/sources/test-collection");
    await rm(sourceDirectory, { recursive: true });
    await mkdir(sourceDirectory);
    const result = spawnSync(process.execPath, ["scripts/content-pipeline.mjs", "check"], {
      cwd: uninitialized,
      encoding: "utf8",
    });
    assert.notEqual(result.status, 0);
    assert.match(`${result.stdout}${result.stderr}`, /test-collection: source submodule is not initialized/u);
  } finally {
    await rm(uninitialized, { recursive: true, force: true });
  }

  for (const dataGitmodules of [
    "",
    '[submodule "sources/other-collection"]\n\tpath = sources/other-collection\n\turl = https://github.com/example/other-collection\n',
  ]) {
    const unregistered = await createIsolatedPipeline({ validSource: true });
    try {
      await writeFile(path.join(unregistered, "data/.gitmodules"), dataGitmodules);
      await writeFile(
        path.join(unregistered, ".gitmodules"),
        '[submodule "sources/test-collection"]\n\tpath = sources/test-collection\n\turl = https://github.com/example/test-collection\n',
      );
      const result = spawnSync(process.execPath, ["scripts/content-pipeline.mjs", "check"], {
        cwd: unregistered,
        encoding: "utf8",
      });
      assert.notEqual(result.status, 0);
      assert.match(
        `${result.stdout}${result.stderr}`,
        /test-collection: \.gitmodules must register sources\/test-collection at https:\/\/github\.com\/example\/test-collection/u,
      );
    } finally {
      await rm(unregistered, { recursive: true, force: true });
    }
  }
});

test("fresh-checkout preparation creates all homepages and their ownership manifest", async () => {
  const fixtureRoot = await createIsolatedPipeline({ validSource: true });
  try {
    await rm(path.join(fixtureRoot, ".awesome-content-manifest.json"));
    await rm(path.join(fixtureRoot, "src/content"), { recursive: true });
    const result = spawnSync(process.execPath, ["scripts/content-pipeline.mjs", "prepare"], {
      cwd: fixtureRoot,
      encoding: "utf8",
    });
    assert.equal(result.status, 0, `${result.stdout}${result.stderr}`);
    const manifest = JSON.parse(await readFile(path.join(fixtureRoot, ".awesome-content-manifest.json"), "utf8"));
    for (const locale of catalogLocales) {
      const prefix = locale === "root" ? "" : `${locale}/`;
      const homepagePath = `src/content/docs/${prefix}index.md`;
      assert.ok(manifest.paths.includes(homepagePath));
      assert.equal(
        await readFile(path.join(fixtureRoot, homepagePath), "utf8"),
        await readFile(path.join(fixtureRoot, `src/content/docs/${prefix}awesome/index.md`), "utf8"),
      );
    }
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

test("fresh-checkout preparation rejects symlinked content ancestors", async () => {
  for (const relative of ["src/content", "src/content/docs"]) {
    const fixtureRoot = await createIsolatedPipeline({ validSource: true });
    try {
      await rm(path.join(fixtureRoot, ".awesome-content-manifest.json"));
      await rm(path.join(fixtureRoot, relative), { recursive: true });
      const target = path.join(fixtureRoot, "outside-docs");
      await mkdir(target);
      await symlink(target, path.join(fixtureRoot, relative), "dir");
      const result = spawnSync(process.execPath, ["scripts/content-pipeline.mjs", "prepare"], {
        cwd: fixtureRoot,
        encoding: "utf8",
      });
      assert.notEqual(result.status, 0);
      assert.match(`${result.stdout}${result.stderr}`, /Generated path parent is not a real directory/u);
      await assert.rejects(access(path.join(target, "index.md")), { code: "ENOENT" });
      await assert.rejects(access(path.join(fixtureRoot, ".awesome-content-manifest.json")), { code: "ENOENT" });
    } finally {
      await rm(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("valid repeated checks and preparations preserve the ledger and hosted-versus-candidate output", async () => {
  const fixtureRoot = await createIsolatedPipeline({ validSource: true });
  const ledgerPath = path.join(fixtureRoot, "data/content/awesome/source-reviews.yml");
  const originalLedger = await readFile(ledgerPath);
  const run = (command) => spawnSync(
    process.execPath,
    ["scripts/content-pipeline.mjs", command],
    { cwd: fixtureRoot, encoding: "utf8" },
  );
  const generatedSnapshot = async () => {
    const manifest = JSON.parse(await readFile(path.join(fixtureRoot, ".awesome-content-manifest.json"), "utf8"));
    return Promise.all([
      [".awesome-content-manifest.json", await readFile(path.join(fixtureRoot, ".awesome-content-manifest.json"))],
      ...await Promise.all(manifest.paths.map(async (relative) => [
        relative,
        await readFile(path.join(fixtureRoot, relative)),
      ])),
    ]);
  };

  try {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      const checked = run("check");
      assert.equal(checked.status, 0, `${checked.stdout}${checked.stderr}`);
    }
    const firstPreparation = run("prepare");
    assert.equal(firstPreparation.status, 0, `${firstPreparation.stdout}${firstPreparation.stderr}`);
    const firstOutput = await generatedSnapshot();
    const englishIndex = await readFile(
      path.join(fixtureRoot, "src/content/docs/awesome/index.md"),
      "utf8",
    );
    assert.match(englishIndex, /https:\/\/github\.com\/example\/test-candidate/u);
    await assert.rejects(
      access(path.join(fixtureRoot, "src/content/docs/awesome/test-candidate.md")),
      { code: "ENOENT" },
    );
    const secondPreparation = run("prepare");
    assert.equal(secondPreparation.status, 0, `${secondPreparation.stdout}${secondPreparation.stderr}`);
    assert.deepEqual(await generatedSnapshot(), firstOutput);
    assert.deepEqual(await readFile(ledgerPath), originalLedger);
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

function ledgerEdit({ id, find, replace }) {
  return {
    id,
    category: "political-sensitive",
    reason: "Fixture edit for pipeline tests.",
    reviewer: "Fixture Reviewer",
    reviewedAt: "2026-10-11",
    find,
    replace,
  };
}

async function ledgerRevision(fixtureRoot) {
  const ledger = JSON.parse(await readFile(path.join(fixtureRoot, fixtureCollectionDirectory, "mirror.json"), "utf8"));
  return ledger.upstream.revision;
}

// Commits a new upstream README in the fixture source checkout and moves the data pin to it.
async function bumpUpstreamPin(fixtureRoot, readme) {
  const sourceDirectory = path.join(fixtureRoot, "data/sources/test-collection");
  await writeFile(path.join(sourceDirectory, "README.md"), readme);
  execFileSync("git", [
    "-c", "user.name=Fixture",
    "-c", "user.email=fixture@example.invalid",
    "commit", "--quiet", "-am", "newer upstream",
  ], { cwd: sourceDirectory, stdio: "pipe" });
  const revision = execFileSync("git", ["rev-parse", "HEAD"], { cwd: sourceDirectory, encoding: "utf8" }).trim();
  execFileSync("git", [
    "update-index",
    "--cacheinfo",
    `160000,${revision},sources/test-collection`,
  ], { cwd: path.join(fixtureRoot, "data"), stdio: "pipe" });
  return revision;
}

// Both check and prepare must fail with the diagnostic, and neither may change the
// previously generated pages, the ownership manifest, or any file under data/.
async function assertRejectedWithoutChanges(fixtureRoot, pattern) {
  const generatedPaths = [".awesome-content-manifest.json", "src/content/docs/awesome/old-page.md"];
  const readGenerated = () => Promise.all(generatedPaths.map((relative) => readFile(path.join(fixtureRoot, relative), "utf8")));
  const dataBefore = await readTree(path.join(fixtureRoot, "data"));
  const generatedBefore = await readGenerated();
  for (const command of ["check", "prepare"]) {
    const result = runPipeline(fixtureRoot, command);
    assert.notEqual(result.status, 0, `${command} should reject the mirror`);
    assert.match(`${result.stdout}${result.stderr}`, pattern);
  }
  assert.deepEqual(await readGenerated(), generatedBefore);
  assert.deepEqual(await readTree(path.join(fixtureRoot, "data")), dataBefore);
  await assert.rejects(access(path.join(fixtureRoot, "src/content/docs/awesome/test-collection.md")), { code: "ENOENT" });
}

const refreshHint = /run "node scripts\/mirror\.mjs sync --collection test-collection" inside data\//u;
const mirrorFailureScenarios = [
  {
    name: "a missing mirror README stops preparation and names the refresh command",
    mutate: (fixtureRoot) => rm(path.join(fixtureRoot, fixtureCollectionDirectory, "mirror/README.md")),
    pattern: new RegExp(
      `test-collection: mirror README is missing \\(content/awesome/test-collection/mirror/README\\.md\\); ${refreshHint.source}`,
      "u",
    ),
  },
  {
    name: "a missing mirror ledger stops preparation and names the refresh command",
    mutate: (fixtureRoot) => rm(path.join(fixtureRoot, fixtureCollectionDirectory, "mirror.json")),
    pattern: new RegExp(
      `test-collection: mirror ledger is missing \\(content/awesome/test-collection/mirror\\.json\\); ${refreshHint.source}`,
      "u",
    ),
  },
  {
    name: "a pin bump without a mirror refresh is reported as a stale mirror revision",
    mutate: (fixtureRoot) => bumpUpstreamPin(fixtureRoot, "# Example\n\nA newer upstream source.\n"),
    pattern: new RegExp(
      `test-collection: mirror is stale: ledger upstream revision [0-9a-f]{40} does not match pinned revision [0-9a-f]{40}; ${refreshHint.source}`,
      "u",
    ),
  },
  {
    name: "a ledger whose upstream digest no longer matches the pinned README is reported as stale",
    mutate: async (fixtureRoot) => {
      const revision = await bumpUpstreamPin(fixtureRoot, "# Example\n\nA newer upstream source.\n");
      const ledgerPath = path.join(fixtureRoot, fixtureCollectionDirectory, "mirror.json");
      const ledger = JSON.parse(await readFile(ledgerPath, "utf8"));
      ledger.upstream.revision = revision;
      await writeFile(ledgerPath, `${JSON.stringify(ledger, null, 2)}\n`);
    },
    pattern: new RegExp(
      `test-collection: mirror is stale: ledger upstream digest does not match the pinned README; ${refreshHint.source}`,
      "u",
    ),
  },
  {
    name: "a hand-edited mirror that is not recorded in the ledger is rejected",
    mutate: (fixtureRoot) => writeFile(
      path.join(fixtureRoot, fixtureCollectionDirectory, "mirror/README.md"),
      "# Example\n\nHand-edited without the ledger.\n",
    ),
    pattern: new RegExp(
      `test-collection: mirror/README\\.md does not match its digest in mirror\\.json \\(edited outside the ledger\\); ${refreshHint.source}`,
      "u",
    ),
  },
  {
    name: "an unedited collection whose mirror differs from upstream is rejected",
    mutate: async (fixtureRoot) => writeMirror(fixtureRoot, {
      revision: await ledgerRevision(fixtureRoot),
      sourceMarkdown: defaultSourceMarkdown,
      mirrorMarkdown: "# Example\n\nAn unreviewed rewrite.\n",
    }),
    pattern: /test-collection: mirror\/README\.md differs from the pinned README but mirror\.json lists no edits/u,
  },
  {
    name: "a ledgered replacement that is missing from the mirror is rejected",
    mutate: async (fixtureRoot) => writeMirror(fixtureRoot, {
      revision: await ledgerRevision(fixtureRoot),
      sourceMarkdown: defaultSourceMarkdown,
      edits: [ledgerEdit({ id: "reword-summary", find: "A concise source.", replace: "A reviewed replacement." })],
      mirrorMarkdown: defaultSourceMarkdown,
    }),
    pattern: /test-collection: edit "reword-summary" replacement text is missing from mirror\/README\.md/u,
  },
  {
    name: "a ledgered anchor still present in the mirror is rejected",
    mutate: async (fixtureRoot) => writeMirror(fixtureRoot, {
      revision: await ledgerRevision(fixtureRoot),
      sourceMarkdown: defaultSourceMarkdown,
      edits: [ledgerEdit({ id: "remove-summary", find: "A concise source.", replace: "" })],
      mirrorMarkdown: defaultSourceMarkdown,
    }),
    pattern: /test-collection: edit "remove-summary" anchor is still present in mirror\/README\.md/u,
  },
];

for (const scenario of mirrorFailureScenarios) {
  test(`mirror verification: ${scenario.name}`, async () => {
    const fixtureRoot = await createIsolatedPipeline({ validSource: true });
    try {
      await scenario.mutate(fixtureRoot);
      await assertRejectedWithoutChanges(fixtureRoot, scenario.pattern);
    } finally {
      await rm(fixtureRoot, { recursive: true, force: true });
    }
  });
}

test("an edited collection omits removed passages in every edition with the notice and mirror provenance", async () => {
  const upstreamMarkdown = "# Example\n\nA concise source.\n\n- Keep this entry\n- Remove this entry\n";
  const fixtureRoot = await createIsolatedPipeline({
    validSource: true,
    sourceMarkdown: upstreamMarkdown,
    edits: [ledgerEdit({ id: "remove-entry", find: "- Remove this entry\n", replace: "" })],
    translationBody: (locale) => `# Example ${locale}\n\nTranslated source ${locale}.\n\n- Keep this entry in ${locale}\n`,
  });
  try {
    const revision = await ledgerRevision(fixtureRoot);
    const ledger = JSON.parse(await readFile(path.join(fixtureRoot, fixtureCollectionDirectory, "mirror.json"), "utf8"));
    const prepared = runPipeline(fixtureRoot, "prepare");
    assert.equal(prepared.status, 0, `${prepared.stdout}${prepared.stderr}`);
    const pages = [
      "src/content/docs/awesome/test-collection.md",
      ...translationLocales.map((locale) => `src/content/docs/${locale}/awesome/test-collection.md`),
    ];
    for (const relative of pages) {
      const page = await readFile(path.join(fixtureRoot, relative), "utf8");
      assert.doesNotMatch(page, /Remove this entry/u, relative);
      assert.match(page, /- Keep this entry/u, relative);
      assert.match(page, /^  mirror:\n    edited: true\n    editCount: 1\n    upstreamDigest: "[a-f0-9]{64}"$/mu, relative);
      assert.ok(page.includes(`upstreamDigest: "${ledger.upstream.digest}"`), relative);
      assert.equal(page.match(/\*\*Edited edition:\*\*/gu)?.length, 1, relative);
      assert.ok(
        page.includes(`  readmeUrl: "https://github.com/example/test-collection/blob/${revision}/README.md"`),
        relative,
      );
      assert.ok(
        page.includes(`  licenseUrl: "https://github.com/example/test-collection/blob/${revision}/LICENSE"`),
        relative,
      );
      assert.ok(page.includes(`(https://github.com/example/test-collection/blob/${revision}/LICENSE)`), relative);
    }
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

test("a translation that keeps a removed entry fails with a structural mismatch naming the locale", async () => {
  const fixtureRoot = await createIsolatedPipeline({
    validSource: true,
    sourceMarkdown: "# Example\n\nA concise source.\n\n- Keep this entry\n- Remove this entry\n",
    edits: [ledgerEdit({ id: "remove-entry", find: "- Remove this entry\n", replace: "" })],
    translationBody: (locale) => locale === "fr-FR"
      ? `# Example ${locale}\n\nTranslated source ${locale}.\n\n- Keep this entry in ${locale}\n- Remove this entry\n`
      : `# Example ${locale}\n\nTranslated source ${locale}.\n\n- Keep this entry in ${locale}\n`,
  });
  try {
    await assertRejectedWithoutChanges(
      fixtureRoot,
      /test-collection\/fr-FR: translation does not preserve list structure and entries/u,
    );
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

test("an unedited collection has no edited notice, no mirror frontmatter, and an unedited export", async () => {
  const fixtureRoot = await createIsolatedPipeline({ validSource: true });
  try {
    const prepared = runPipeline(fixtureRoot, "prepare");
    assert.equal(prepared.status, 0, `${prepared.stdout}${prepared.stderr}`);
    const english = await readFile(path.join(fixtureRoot, "src/content/docs/awesome/test-collection.md"), "utf8");
    assert.doesNotMatch(english, /Edited edition|^  mirror:/mu);
    assert.ok(english.endsWith(defaultSourceMarkdown));
    const french = await readFile(path.join(fixtureRoot, "src/content/docs/fr-FR/awesome/test-collection.md"), "utf8");
    assert.doesNotMatch(french, /Edited edition|^  mirror:/mu);

    const output = path.join(fixtureRoot, "export");
    const exported = spawnSync(
      process.execPath,
      ["scripts/content-pipeline.mjs", "export", "--collection", "test-collection", "--output", output],
      { cwd: fixtureRoot, encoding: "utf8" },
    );
    assert.equal(exported.status, 0, `${exported.stdout}${exported.stderr}`);
    const info = JSON.parse(await readFile(path.join(output, "test-collection/source.json"), "utf8"));
    assert.equal(info.edited, false);
    assert.equal(info.upstreamDigest, info.sourceDigest);
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

test("translation export carries the mirror README with the upstream and mirror digests", async () => {
  const upstreamMarkdown = "# Example\n\nA concise source.\n\n- Keep this entry\n- Remove this entry\n";
  const mirrorMarkdown = "# Example\n\nA concise source.\n\n- Keep this entry\n";
  const fixtureRoot = await createIsolatedPipeline({
    validSource: true,
    sourceMarkdown: upstreamMarkdown,
    edits: [ledgerEdit({ id: "remove-entry", find: "- Remove this entry\n", replace: "" })],
  });
  const output = path.join(fixtureRoot, "export");
  const args = ["scripts/content-pipeline.mjs", "export", "--collection", "test-collection", "--output", output];
  try {
    const exported = spawnSync(process.execPath, args, { cwd: fixtureRoot, encoding: "utf8" });
    assert.equal(exported.status, 0, `${exported.stdout}${exported.stderr}`);
    const inputs = path.join(output, "test-collection");
    assert.equal(await readFile(path.join(inputs, "README.md"), "utf8"), mirrorMarkdown);
    const info = JSON.parse(await readFile(path.join(inputs, "source.json"), "utf8"));
    const ledger = JSON.parse(await readFile(path.join(fixtureRoot, fixtureCollectionDirectory, "mirror.json"), "utf8"));
    assert.equal(info.sourceDigest, sha256Hex(mirrorMarkdown));
    assert.equal(info.upstreamDigest, sha256Hex(upstreamMarkdown));
    assert.equal(info.upstreamDigest, ledger.upstream.digest);
    assert.equal(info.upstreamRevision, ledger.upstream.revision);
    assert.equal(info.revision, ledger.upstream.revision);
    assert.equal(info.edited, true);
    assert.match(
      await readFile(path.join(inputs, "TRANSLATION-INSTRUCTIONS.md"), "utf8"),
      /reviewed mirror of the upstream README/u,
    );

    const secondRun = spawnSync(process.execPath, args, { cwd: fixtureRoot, encoding: "utf8" });
    assert.notEqual(secondRun.status, 0);
    assert.match(`${secondRun.stdout}${secondRun.stderr}`, /not empty/u);
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

test("edit replacements containing script elements or unsafe URL schemes are rejected without output changes", async () => {
  const scenarios = [
    {
      id: "inject-script",
      replace: "<script>alert(1)</script>",
      pattern: /test-collection: active HTML element <script> is not allowed/u,
    },
    {
      id: "unsafe-link",
      replace: "[details](javascript:alert(1))",
      pattern: /test-collection: unsafe URL scheme in "javascript:alert\(1\)"/u,
    },
  ];
  for (const { id, replace, pattern } of scenarios) {
    const fixtureRoot = await createIsolatedPipeline({
      validSource: true,
      edits: [ledgerEdit({ id, find: "A concise source.", replace })],
    });
    try {
      await assertRejectedWithoutChanges(fixtureRoot, pattern);
    } finally {
      await rm(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("awesomeSource.mirror accepts a valid edit summary and rejects a bad digest or edit count", async () => {
  const transpiled = ts.transpileModule(await readFile(path.join(root, "src/content.config.ts"), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText.replace('from "astro:content"', 'from "./astro-content-stub.mjs"');
  const directory = await mkdtemp(path.join(os.tmpdir(), "awesome-schema-test-"));
  try {
    await symlink(path.join(root, "node_modules"), path.join(directory, "node_modules"), "dir");
    await copyFile(path.join(root, "src/catalog-tags.mjs"), path.join(directory, "catalog-tags.mjs"));
    await writeFile(
      path.join(directory, "astro-content-stub.mjs"),
      "export const defineCollection = (definition) => definition;\n",
    );
    await writeFile(path.join(directory, "content.config.mjs"), transpiled);
    const { collections } = await import(pathToFileURL(path.join(directory, "content.config.mjs")).href);
    const schema = collections.docs.schema({ image: () => z.string() });

    const revision = "a".repeat(40);
    const base = {
      title: "Example",
      catalog: "test-topic",
      awesomeSource: {
        id: "test-collection",
        repositoryUrl: "https://github.com/example/test-collection",
        revision,
        readmePath: "README.md",
        licensePath: "LICENSE",
        licenseId: "Unlicense",
        readmeUrl: `https://github.com/example/test-collection/blob/${revision}/README.md`,
        licenseUrl: `https://github.com/example/test-collection/blob/${revision}/LICENSE`,
        sourceFragments: [],
      },
    };
    const withMirror = (mirror) => ({ ...base, awesomeSource: { ...base.awesomeSource, mirror } });
    const digest = "b".repeat(64);

    assert.equal(schema.safeParse(base).success, true, "unedited collections omit the mirror object");
    assert.equal(
      schema.safeParse(withMirror({ edited: true, editCount: 2, upstreamDigest: digest })).success,
      true,
    );
    for (const [mirror, field] of [
      [{ edited: true, editCount: 1, upstreamDigest: "not-a-digest" }, "awesomeSource.mirror.upstreamDigest"],
      [{ edited: true, editCount: 1, upstreamDigest: "B".repeat(64) }, "awesomeSource.mirror.upstreamDigest"],
      [{ edited: true, editCount: 0, upstreamDigest: digest }, "awesomeSource.mirror.editCount"],
      [{ edited: true, editCount: 1.5, upstreamDigest: digest }, "awesomeSource.mirror.editCount"],
    ]) {
      const result = schema.safeParse(withMirror(mirror));
      assert.equal(result.success, false, JSON.stringify(mirror));
      assert.ok(
        result.error.issues.some((issue) => issue.path.join(".") === field),
        `${JSON.stringify(mirror)} should fail at ${field}`,
      );
    }
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("resolved input paths reject symlinks that escape their source root", async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), "awesome-path-test-"));
  const source = path.join(temporaryRoot, "source");
  const outside = path.join(temporaryRoot, "outside");
  try {
    await mkdir(source);
    await mkdir(outside);
    await writeFile(path.join(outside, "README.md"), "# outside\n");
    await symlink(outside, path.join(source, "linked"));
    await assert.rejects(
      realPathInside(source, "linked/README.md", "test README"),
      /escapes its allowed directory through a symlink/u,
    );
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
});

test("AST inspection preserves reference targets, raw HTML assets, and code values", () => {
  const markdown = [
    "# Source heading",
    "",
    "[Guide][guide] and ![Profile][profile]",
    "",
    "[guide]: guides/intro.md#source-heading",
    "[profile]: assets/agpr.gif",
    "",
    "<img src=\"assets/agpr.gif\" alt=\"profile\" />",
    "",
    "```sh",
    "echo 'https://example.test'",
    "```",
  ].join("\n");
  const structure = inspectMarkdown(markdown, sourceOptions);

  assert.deepEqual(structure.targets, [
    "image:assets/agpr.gif",
    "image:assets/agpr.gif",
    "link:guides/intro.md#source-heading",
  ]);
  assert.deepEqual(structure.code, ["echo 'https://example.test'"]);
  assert.deepEqual(structure.headingDetails.map(({ id }) => id), ["source-heading"]);
});

test("AST inspection rejects unsafe markup, schemes, and escaping source paths", () => {
  assert.throws(
    () => inspectMarkdown("<script>alert(1)</script>", sourceOptions),
    /active HTML element <script>/u,
  );
  assert.throws(
    () => inspectMarkdown("<img src=\"javascript:alert(1)\">", sourceOptions),
    /unsafe URL scheme/u,
  );
  assert.throws(
    () => inspectMarkdown("<img onerror=\"run()\" src=\"assets/a.png\">", sourceOptions),
    /unsafe HTML attribute/u,
  );
  assert.throws(
    () => inspectMarkdown("[escape](../../outside.md)", sourceOptions),
    /escapes the repository/u,
  );
});

test("structural checks allow translated prose but reject dropped content", () => {
  const source = inspectMarkdown("# Intro\n\n- [One](one.md)\n- [Two](two.md)\n\n```js\nconst count = 2;\n```", sourceOptions);
  const translated = inspectMarkdown("# Introducción\n\n- [Uno](one.md)\n- [Dos](two.md)\n\n```js\nconst count = 2;\n```", sourceOptions);
  assert.doesNotThrow(() => assertEquivalentStructure(source, translated, {
    collectionId: "test-collection",
    locale: "es-ES",
  }));

  const incomplete = inspectMarkdown("# Introducción\n\n- [Uno](one.md)\n\n```js\nconst count = 2;\n```", sourceOptions);
  assert.throws(
    () => assertEquivalentStructure(source, incomplete, {
      collectionId: "test-collection",
      locale: "es-ES",
    }),
    /list structure and entries/u,
  );
});

test("source links resolve against the pinned revision without altering external URLs", () => {
  const options = {
    repositoryUrl: "https://github.com/example/repository",
    revision: "0123456789abcdef0123456789abcdef01234567",
    readmePath: "docs/README.md",
  };
  assert.equal(
    resolveSourceUrl("../assets/agpr.gif", { ...options, kind: "image" }),
    "https://raw.githubusercontent.com/example/repository/0123456789abcdef0123456789abcdef01234567/assets/agpr.gif",
  );
  assert.equal(
    resolveSourceUrl("guide.md#start", options),
    "https://github.com/example/repository/blob/0123456789abcdef0123456789abcdef01234567/docs/guide.md#start",
  );
  assert.equal(resolveSourceUrl("https://example.test/a", options), "https://example.test/a");
  assert.throws(
    () => resolveSourceUrl("../../escape.md", options),
    /escapes repository/u,
  );
});

test("source fragment aliases are stable for translated duplicate headings", () => {
  assert.deepEqual(
    sourceHeadingAliases("## Same\n\n## Same", "## Gleich\n\n## Gleich", sourceOptions),
    [
      { sourceId: "same", translatedId: "gleich" },
      { sourceId: "same-1", translatedId: "gleich-1" },
    ],
  );
});

test("missing upstream fragment links warn once and remain unchanged", () => {
  const transform = awesomeContent();
  const tree = {
    type: "root",
    children: [
      { type: "element", tagName: "h1", properties: { id: "title" }, children: [] },
      { type: "element", tagName: "a", properties: { href: "#missing" }, children: [] },
    ],
  };
  const file = {
    data: {
      astro: {
        frontmatter: {
          awesomeSource: {
            id: "test-collection",
            repositoryUrl: "https://github.com/example/repository",
            revision: "0123456789abcdef0123456789abcdef01234567",
            readmePath: "README.md",
            sourceFragments: [{ sourceId: "title", targetId: "title" }],
          },
        },
      },
    },
  };
  const warnings = [];
  const originalWarn = console.warn;
  console.warn = (...values) => warnings.push(values.join(" "));
  try {
    transform(tree, file);
    transform(tree, file);
  } finally {
    console.warn = originalWarn;
  }
  assert.equal(tree.children[1].properties.href, "#missing");
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /preserving the upstream link/u);
});

test("source images are pinned before local image imports", () => {
  const transform = awesomeSourceImages();
  const tree = {
    type: "root",
    children: [
      { type: "image", url: "assets/cover.webp", alt: "cover", title: null },
      { type: "definition", identifier: "logo", url: "../images/logo.svg", title: "logo" },
      {
        type: "imageReference",
        identifier: "logo",
        label: "logo",
        referenceType: "full",
        alt: "logo",
        title: null,
      },
    ],
  };
  const source = {
    id: "test-collection",
    repositoryUrl: "https://github.com/example/repository",
    revision: "0123456789abcdef0123456789abcdef01234567",
    readmePath: "docs/README.md",
  };
  transform(tree, { data: { astro: { frontmatter: { awesomeSource: source } } } });
  assert.equal(
    tree.children[0].url,
    "https://raw.githubusercontent.com/example/repository/0123456789abcdef0123456789abcdef01234567/docs/assets/cover.webp",
  );
  assert.equal(tree.children[2].type, "image");
  assert.equal(
    tree.children[2].url,
    "https://raw.githubusercontent.com/example/repository/0123456789abcdef0123456789abcdef01234567/images/logo.svg",
  );
  assert.equal(tree.children[2].title, "logo");
});

test("translation export includes pinned provenance and refuses to overwrite work", { skip: slowSkip }, async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), "awesome-export-test-"));
  const output = path.join(temporaryRoot, "export");
  const mirrorFile = path.join(root, "data/content/awesome/awesome-github-profile-readme/mirror/README.md");
  const expectedSource = await readFile(mirrorFile);
  const args = [
    "scripts/content-pipeline.mjs",
    "export",
    "--collection",
    "awesome-github-profile-readme",
    "--output",
    output,
  ];

  try {
    execFileSync(process.execPath, args, { cwd: root, stdio: "pipe" });
    const exported = await readFile(path.join(output, "awesome-github-profile-readme/README.md"));
    const sourceInfo = JSON.parse(await readFile(
      path.join(output, "awesome-github-profile-readme/source.json"),
      "utf8",
    ));
    assert.deepEqual(exported, expectedSource);
    assert.equal(sourceInfo.revision.length, 40);
    assert.match(sourceInfo.sourceDigest, /^[a-f0-9]{64}$/u);
    assert.equal(sourceInfo.locales.length, 9);
    assert.equal(sourceInfo.sourceDigest, createHash("sha256").update(expectedSource).digest("hex"));
    assert.match(sourceInfo.upstreamDigest, /^[a-f0-9]{64}$/u);
    assert.equal(sourceInfo.upstreamRevision, sourceInfo.revision);
    assert.equal(typeof sourceInfo.edited, "boolean");

    const secondRun = spawnSync(process.execPath, args, { cwd: root, encoding: "utf8" });
    assert.notEqual(secondRun.status, 0);
    assert.match(`${secondRun.stdout}${secondRun.stderr}`, /not empty/u);
    assert.deepEqual(await readFile(path.join(output, "awesome-github-profile-readme/README.md")), expectedSource);
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
});

test("production origin validator requires a public HTTPS origin", () => {
  const script = path.join(root, "scripts/validate-production-origin.mjs");
  const accepts = (SITE_URL) => spawnSync(process.execPath, [script], {
    env: { ...process.env, SITE_URL },
    encoding: "utf8",
  });

  assert.equal(accepts("https://example.org").status, 0);
  for (const value of [
    "",
    "http://example.org",
    "https://localhost",
    "https://127.0.0.1",
    "https://[::1]",
    "https://example.org/path",
    "https://user:pass@example.org",
  ]) {
    const result = accepts(value);
    assert.notEqual(result.status, 0, `${value} should be rejected`);
    assert.match(`${result.stdout}${result.stderr}`, /SITE_URL/u);
  }
});

test("generated English retains the mirror bytes and repeated preparation is deterministic", { skip: slowSkip }, async () => {
  const source = await readFile(path.join(root, "data/content/awesome/awesome-github-profile-readme/mirror/README.md"), "utf8");
  const generatedPath = path.join(
    root,
    "src/content/docs/awesome/awesome-github-profile-readme.md",
  );
  const manifest = JSON.parse(await readFile(path.join(root, ".awesome-content-manifest.json"), "utf8"));
  const homepagePaths = [
    "src/content/docs/index.md",
    ...catalogLocales.slice(1).map((locale) => `src/content/docs/${locale}/index.md`),
  ];
  for (const relative of homepagePaths) assert.ok(manifest.paths.includes(relative));
  for (const locale of catalogLocales) {
    const prefix = locale === "root" ? "" : `${locale}/`;
    const homepage = await readFile(path.join(root, `src/content/docs/${prefix}index.md`), "utf8");
    const directory = await readFile(path.join(root, `src/content/docs/${prefix}awesome/index.md`), "utf8");
    assert.equal(homepage, directory);
    assert.match(homepage, /^title: ".+"$/mu);
    assert.match(homepage, /^rss: false$/mu);
    assert.match(homepage, /^sidebar:\n  hidden: true$/mu);
    assert.match(homepage, /^awesomeIndex:\n  kind: "collections"$/mu);
  }
  const snapshot = async () => Promise.all(manifest.paths.map(async (relative) => [
    relative,
    await readFile(path.join(root, relative), "utf8"),
  ]));
  const generatedEnglish = await readFile(generatedPath, "utf8");
  assert.ok(generatedEnglish.endsWith(source));
  assert.match(generatedEnglish, /catalog: "github-profile-readme"/u);
  assert.match(generatedEnglish, /tags:\n  - "github-profile-readme"/u);
  assert.match(
    await readFile(path.join(root, "src/content/docs/fr-FR/awesome/awesome-github-profile-readme.md"), "utf8"),
    /tags:\n  - "github-profile-readme"/u,
  );

  execFileSync("npm", ["run", "content:prepare"], { cwd: root, stdio: "pipe" });
  const firstPreparation = await snapshot();
  execFileSync("npm", ["run", "content:prepare"], { cwd: root, stdio: "pipe" });
  assert.deepEqual(await snapshot(), firstPreparation);
});

test("failed staging leaves all pipeline-owned outputs unchanged", async () => {
  const manifestPath = path.join(root, ".awesome-content-manifest.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const candidates = JSON.parse(await readFile(path.join(root, "data/content/awesome/candidates.json"), "utf8"));
  const before = await Promise.all(manifest.paths.map(async (relative) => [
    relative,
    await readFile(path.join(root, relative), "utf8"),
  ]));
  const source = {
    collection: {
      id: "invalid-stage",
      route: "awesome/invalid-stage/../invalid-stage",
      title: "Invalid stage",
      repositoryUrl: "https://github.com/example/invalid-stage",
      readmePath: "README.md",
      licensePath: "LICENSE",
      licenseId: "CC0-1.0",
    },
    revision: "0".repeat(40),
    sourceMarkdown: "# Source heading\n",
    sourceStructure: {
      headingDetails: [{ depth: 1, text: "Source heading", id: "source-heading" }],
    },
    translations: [],
  };

  await assert.rejects(
    preparePages([{
      collection: {
        id: candidates[0].id,
        repositoryUrl: candidates[0].repositoryUrl,
      },
    }]),
    /duplicate collection or repository candidate/u,
  );
  await assert.rejects(preparePages([source]), /Invalid pipeline-owned path/u);
  assert.deepEqual(
    await Promise.all(manifest.paths.map(async (relative) => [
      relative,
      await readFile(path.join(root, relative), "utf8"),
    ]    )),
    before,
  );
});

test("preparation supports another collection and removes retired outputs only", { skip: slowSkip }, async () => {
  const locales = ["zh-CN", "zh-Hant", "fr-FR", "de-DE", "es-ES", "ja-JP", "ko-KR", "pt-BR", "ru-RU"];
  const sourceMarkdown = "# Sample\n\n- [Entry](entry.md)\n";
  const makePrepared = (id, title) => {
    const collection = {
      id,
      route: `awesome/${id}`,
      title,
      catalog: "github-profile-readme",
      tags: ["python"],
      repositoryUrl: `https://github.com/example/${id}`,
      readmePath: "README.md",
      licensePath: "LICENSE",
      licenseId: "CC0-1.0",
    };
    return {
      collection,
      revision: "1".repeat(40),
      sourceMarkdown,
      sourceStructure: inspectMarkdown(sourceMarkdown, {
        collectionId: collection.id,
        readmePath: collection.readmePath,
      }),
      translations: locales.map((locale) => {
      const body = `# Sample (${locale})\n\n- [Entry (${locale})](entry.md)\n`;
      return {
        locale,
        metadata: {
          title: `${title} (${locale})`,
          description: `Description (${locale})`,
          isAITranslation: true,
        },
        body,
        structure: inspectMarkdown(body, {
          collectionId: collection.id,
          readmePath: collection.readmePath,
        }),
      };
      }),
    };
  };
  const prepared = [
    makePrepared("second-collection", "Second collection"),
    makePrepared("third-collection", "Third collection"),
  ];
  const manifestPath = path.join(root, ".awesome-content-manifest.json");
  const candidates = JSON.parse(await readFile(path.join(root, "data/content/awesome/candidates.json"), "utf8"));
  const homepagePaths = [
    "src/content/docs/index.md",
    ...locales.map((locale) => `src/content/docs/${locale}/index.md`),
  ];
  const authoredFixture = path.join(root, "src/content/docs/pipeline-preservation-fixture.md");

  try {
    await assert.rejects(readFile(authoredFixture), { code: "ENOENT" });
    await writeFile(authoredFixture, "---\ntitle: Preserved authored page\n---\n");
    await Promise.all(homepagePaths.map((relative) => rm(path.join(root, relative), { force: true })));
    await preparePages(prepared);
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    assert.equal(manifest.paths.length, 60);
    for (const relative of homepagePaths) assert.ok(manifest.paths.includes(relative));
    assert.ok(manifest.paths.includes("src/content/docs/awesome/second-collection.md"));
    assert.ok(manifest.paths.includes("src/content/docs/awesome/third-collection.md"));
    assert.ok(manifest.paths.includes("src/content/docs/awesome/index.md"));
    assert.ok(manifest.paths.includes("src/content/docs/awesome/tags/github-profile-readme.md"));
    assert.ok(manifest.paths.includes("src/content/docs/awesome/tags/python.md"));
    const allCollections = await readFile(path.join(root, "src/content/docs/awesome/index.md"), "utf8");
    const sharedTopic = await readFile(path.join(root, "src/content/docs/awesome/tags/python.md"), "utf8");
    for (const locale of ["root", ...locales]) {
      const prefix = locale === "root" ? "" : `${locale}/`;
      assert.equal(
        await readFile(path.join(root, `src/content/docs/${prefix}index.md`), "utf8"),
        await readFile(path.join(root, `src/content/docs/${prefix}awesome/index.md`), "utf8"),
      );
    }
    assert.equal((allCollections.match(/\/awesome\/second-collection\//gu) ?? []).length, 1);
    assert.equal((allCollections.match(/\/awesome\/third-collection\//gu) ?? []).length, 1);
    assert.equal((sharedTopic.match(/\/awesome\/second-collection\//gu) ?? []).length, 1);
    assert.equal((sharedTopic.match(/\/awesome\/third-collection\//gu) ?? []).length, 1);
    assert.match(allCollections, /Python\].* \(2 collections\)/u);
    assert.match(allCollections, new RegExp(`More repositories on GitHub \\(${candidates.length}\\)`));
    assert.match(allCollections, /Links only; repository contents remain on GitHub/u);
    assert.match(allCollections, new RegExp(`${candidates[0].stars.toLocaleString("en-US")} stars`));
    for (const { repositoryUrl } of candidates) {
      assert.ok(allCollections.includes(`](${repositoryUrl})`), `${repositoryUrl} appears in the English index`);
    }
    assert.match(
      await readFile(path.join(root, "src/content/docs/fr-FR/awesome/index.md"), "utf8"),
      /\[Second collection \(fr-FR\)\]\(\/fr-FR\/awesome\/second-collection\/\)/u,
    );
    assert.match(
      await readFile(path.join(root, "src/content/docs/fr-FR/awesome/tags/python.md"), "utf8"),
      /\[Third collection \(fr-FR\)\]\(\/fr-FR\/awesome\/third-collection\/\)/u,
    );
    assert.match(
      await readFile(path.join(root, "src/content/docs/awesome/tags/github-profile-readme.md"), "utf8"),
      /\[All collections\]\(\/awesome\/\)/u,
    );
    assert.match(
      await readFile(path.join(root, "src/content/docs/fr-FR/awesome/second-collection.md"), "utf8"),
      /AI-assisted translation/u,
    );

    const snapshot = async () => Promise.all(manifest.paths.map(async (relative) => [
      relative,
      await readFile(path.join(root, relative), "utf8"),
    ]));
    const firstPreparation = await snapshot();
    await preparePages(prepared);
    assert.deepEqual(await snapshot(), firstPreparation);

    const manifestBeforeFailure = await readFile(manifestPath, "utf8");
    let failedInstallation = false;
    await assert.rejects(
      preparePages(prepared, {
        rename: async (from, to) => {
          if (
            !failedInstallation
            && from.includes(".awesome-content-stage-")
            && from.endsWith(path.join("src", "content", "docs", "awesome", "third-collection.md"))
          ) {
            failedInstallation = true;
            throw new Error("simulated installation failure");
          }
          await rename(from, to);
        },
      }),
      /simulated installation failure/u,
    );
    assert.equal(failedInstallation, true);
    assert.deepEqual(await snapshot(), firstPreparation);
    assert.equal(await readFile(manifestPath, "utf8"), manifestBeforeFailure);
    assert.equal(await readFile(authoredFixture, "utf8"), "---\ntitle: Preserved authored page\n---\n");

    await preparePages([prepared[0]]);
    const reducedManifest = JSON.parse(await readFile(manifestPath, "utf8"));
    assert.equal(reducedManifest.paths.length, 50);
    assert.ok(homepagePaths.every((relative) => reducedManifest.paths.includes(relative)));
    assert.ok(reducedManifest.paths.includes("src/content/docs/awesome/index.md"));
    assert.ok(reducedManifest.paths.includes("src/content/docs/awesome/tags/python.md"));
    assert.ok(reducedManifest.paths.includes("src/content/docs/awesome/tags/github-profile-readme.md"));
    assert.match(
      await readFile(path.join(root, "src/content/docs/awesome/tags/python.md"), "utf8"),
      /\/awesome\/second-collection\//u,
    );
    assert.doesNotMatch(
      await readFile(path.join(root, "src/content/docs/awesome/tags/python.md"), "utf8"),
      /\/awesome\/third-collection\//u,
    );
    await assert.rejects(
      readFile(path.join(root, "src/content/docs/awesome/third-collection.md")),
      { code: "ENOENT" },
    );

    await preparePages([]);
    const emptyManifest = JSON.parse(await readFile(manifestPath, "utf8"));
    assert.equal(emptyManifest.paths.length, 20);
    await assert.rejects(
      readFile(path.join(root, "src/content/docs/awesome/tags/github-profile-readme.md")),
      { code: "ENOENT" },
    );
    await assert.rejects(
      readFile(path.join(root, "src/content/docs/awesome/tags/python.md")),
      { code: "ENOENT" },
    );
    await assert.rejects(
      readFile(path.join(root, "src/content/docs/awesome/second-collection.md")),
      { code: "ENOENT" },
    );
    for (const locale of ["root", ...locales]) {
      const prefix = locale === "root" ? "" : `${locale}/`;
      const homepage = await readFile(path.join(root, `src/content/docs/${prefix}index.md`), "utf8");
      assert.equal(
        homepage,
        await readFile(path.join(root, `src/content/docs/${prefix}awesome/index.md`), "utf8"),
      );
      assert.doesNotMatch(homepage, /second-collection|third-collection/u);
    }
    assert.equal(await readFile(authoredFixture, "utf8"), "---\ntitle: Preserved authored page\n---\n");
  } finally {
    await rm(authoredFixture, { force: true });
    execFileSync("npm", ["run", "content:prepare"], { cwd: root, stdio: "pipe" });
  }
});

test("unowned homepage collisions and symlinked output parents are rejected without changes", { skip: slowSkip }, async () => {
  const manifestPath = path.join(root, ".awesome-content-manifest.json");
  const manifestBytes = await readFile(manifestPath, "utf8");
  const manifest = JSON.parse(manifestBytes);
  const snapshot = async () => Promise.all(manifest.paths.map(async (relative) => [
    relative,
    await readFile(path.join(root, relative), "utf8"),
  ]));
  const before = await snapshot();

  try {
    await writeFile(manifestPath, `${JSON.stringify({
      paths: manifest.paths.filter((relative) => relative !== "src/content/docs/index.md"),
    }, null, 2)}\n`);
    await assert.rejects(
      preparePages([]),
      /Refusing to overwrite non-pipeline content: src\/content\/docs\/index\.md/u,
    );
    assert.deepEqual(await snapshot(), before);
  } finally {
    await writeFile(manifestPath, manifestBytes);
    execFileSync("npm", ["run", "content:prepare"], { cwd: root, stdio: "pipe" });
  }

  const docsTags = path.join(root, "src/content/docs/zh-CN/awesome/tags");
  const temporaryRoot = await mkdtemp(path.join(root, ".awesome-symlink-test-"));
  const backup = path.join(temporaryRoot, "tags");
  let moved = false;
  let linked = false;
  try {
    await rename(docsTags, backup);
    moved = true;
    await symlink(backup, docsTags);
    linked = true;
    await assert.rejects(preparePages([]), /Generated path parent is not a real directory/u);
  } finally {
    if (linked) await rm(docsTags, { force: true });
    if (moved) await rename(backup, docsTags);
    await rm(temporaryRoot, { recursive: true, force: true });
    execFileSync("npm", ["run", "content:prepare"], { cwd: root, stdio: "pipe" });
  }
});

test("publication workflow gates payload assembly on origin, build, and fast tests", async () => {
  const [ci, publication] = await Promise.all([
    readFile(path.join(root, ".github/workflows/ci.yml"), "utf8"),
    readFile(path.join(root, ".github/workflows/deploy-gh-pages.yml"), "utf8"),
  ]);
  assert.match(ci, /submodules:\s*recursive/u);
  assert.match(publication, /submodules:\s*recursive/u);
  assert.match(publication, /SITE_URL:\s*\$\{\{\s*vars\.SITE_URL\s*\}\}/u);
  assert.match(ci, /npm run check/u);
  assert.match(ci, /npm test/u);
  const originGate = publication.indexOf("node scripts/validate-production-origin.mjs");
  const install = publication.indexOf("npm ci");
  const build = publication.indexOf("npm run build");
  const tests = publication.indexOf("npm test");
  const payload = publication.indexOf("Assemble publication payload");
  assert.ok(originGate >= 0 && originGate < install);
  assert.ok(install < build && build < tests && tests < payload);
  const fastTests = publication.indexOf("AWESOME_TEST_FAST");
  assert.ok(fastTests >= 0 && fastTests > tests, "publication tests run in fast mode");
  assert.doesNotMatch(publication, /npm run check/u);
  assert.match(publication, /needs:\s*build/u);
  assert.doesNotMatch(publication, /continue-on-error:\s*true/u);
  assert.match(publication, /esa\.jsonc/u);
  assert.match(publication, /wrangler\.jsonc/u);
  assert.match(publication, /cp -R dist\/\. "\$PUBLICATION_DIR\/dist\/"/u);
});
