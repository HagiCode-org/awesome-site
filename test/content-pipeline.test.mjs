import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { access, copyFile, mkdtemp, mkdir, readFile, rename, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  assertEquivalentStructure,
  awesomeContent,
  awesomeSourceImages,
  inspectMarkdown,
  resolveSourceUrl,
  sourceHeadingAliases,
} from "../src/plugins/awesome-content.mjs";
import {
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
import { normalizeCatalogTags } from "../src/catalog-tags.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
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

const testCatalogs = {
  "test-topic": {
    labels: Object.fromEntries(catalogLocales.map((locale) => [locale, "Test topic"])),
  },
  "secondary-topic": {
    labels: Object.fromEntries(catalogLocales.map((locale) => [locale, "Secondary topic"])),
  },
};

async function createIsolatedPipeline({ ledgerContent, validSource = false }) {
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
    "content/awesome/test-collection/locales",
    "src/content/docs/awesome",
  ];
  for (const directory of directories) await mkdir(path.join(fixtureRoot, directory), { recursive: true });
  await symlink(path.join(root, "node_modules"), path.join(fixtureRoot, "node_modules"), "dir");
  await Promise.all([
    copyFile(path.join(root, "scripts/content-pipeline.mjs"), path.join(fixtureRoot, "scripts/content-pipeline.mjs")),
    copyFile(path.join(root, "scripts/source-reviews.mjs"), path.join(fixtureRoot, "scripts/source-reviews.mjs")),
    copyFile(path.join(root, "src/plugins/awesome-content.mjs"), path.join(fixtureRoot, "src/plugins/awesome-content.mjs")),
    copyFile(path.join(root, "src/catalog-tags.mjs"), path.join(fixtureRoot, "src/catalog-tags.mjs")),
  ]);
  const catalogs = {
    "test-topic": {
      labels: Object.fromEntries(catalogLocales.map((locale) => [locale, `Test topic ${locale}`])),
    },
  };
  const initialFiles = [
    writeFile(path.join(fixtureRoot, "content/awesome/collections.json"), `${JSON.stringify([collection], null, 2)}\n`),
    writeFile(path.join(fixtureRoot, "content/awesome/catalogs.json"), `${JSON.stringify(catalogs, null, 2)}\n`),
    writeFile(path.join(fixtureRoot, "content/awesome/candidates.json"), `${JSON.stringify([candidate], null, 2)}\n`),
    writeFile(path.join(fixtureRoot, ".awesome-content-manifest.json"), `${JSON.stringify({ paths: ["src/content/docs/awesome/old-page.md"] })}\n`),
    writeFile(path.join(fixtureRoot, "src/content/docs/awesome/old-page.md"), "Previously generated content\n"),
  ];
  if (ledgerContent !== null) {
    initialFiles.push(writeFile(
      path.join(fixtureRoot, "content/awesome/source-reviews.yml"),
      ledgerContent ?? reviewYaml,
    ));
  }
  await Promise.all(initialFiles);

  if (validSource) {
    const sourceDirectory = path.join(fixtureRoot, collection.sourceDir);
    await mkdir(sourceDirectory, { recursive: true });
    const sourceMarkdown = "# Example\n\nA concise source.\n";
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
    execFileSync("git", ["init", "--quiet"], { cwd: fixtureRoot, stdio: "pipe" });
    await writeFile(
      path.join(fixtureRoot, ".gitmodules"),
      `[submodule "sources/test-collection"]\n\tpath = sources/test-collection\n\turl = ${collection.repositoryUrl}\n`,
    );
    execFileSync("git", [
      "update-index",
      "--add",
      "--cacheinfo",
      `160000,${revision},${collection.sourceDir}`,
    ], { cwd: fixtureRoot, stdio: "pipe" });
    const sourceDigest = createHash("sha256").update(sourceMarkdown).digest("hex");
    const translations = Object.fromEntries(translationLocales.map((locale) => [locale, {
      title: collection.title,
      description: `An example collection in ${locale}.`,
      sourceDigest,
      reviewStatus: "reviewed",
      isAITranslation: false,
    }]));
    await Promise.all([
      ...translationLocales.map((locale) => writeFile(
        path.join(fixtureRoot, `content/awesome/test-collection/locales/${locale}.md`),
        `# Example ${locale}\n\nTranslated source ${locale}.\n`,
      )),
      writeFile(
        path.join(fixtureRoot, "content/awesome/test-collection/translations.json"),
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
  const registryPath = path.join(root, "content/awesome/collections.json");
  const sidecarPath = path.join(
    root,
    "content/awesome/awesome-github-profile-readme/translations.json",
  );
  const reviewPath = path.join(root, "content/awesome/source-reviews.yml");
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
    "content/awesome/collections.json",
    "content/awesome/catalogs.json",
    "content/awesome/candidates.json",
    ".awesome-content-manifest.json",
    "src/content/docs/awesome/old-page.md",
  ];

  for (const [state, ledgerContent] of [
    ["missing", null],
    ["invalid", "- id: [\n"],
  ]) {
    for (const command of ["export", "check", "prepare"]) {
      const fixtureRoot = await createIsolatedPipeline({ ledgerContent });
      const ledgerPath = path.join(fixtureRoot, "content/awesome/source-reviews.yml");
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
  const ledgerPath = path.join(fixtureRoot, "content/awesome/source-reviews.yml");
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

test("translation export includes pinned provenance and refuses to overwrite work", async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), "awesome-export-test-"));
  const output = path.join(temporaryRoot, "export");
  const sourceFile = path.join(root, "sources/awesome-github-profile-readme/README.md");
  const expectedSource = await readFile(sourceFile);
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

test("generated English retains the source bytes and repeated preparation is deterministic", async () => {
  const source = await readFile(path.join(root, "sources/awesome-github-profile-readme/README.md"), "utf8");
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
  const candidates = JSON.parse(await readFile(path.join(root, "content/awesome/candidates.json"), "utf8"));
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

test("preparation supports another collection and removes retired outputs only", async () => {
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
  const candidates = JSON.parse(await readFile(path.join(root, "content/awesome/candidates.json"), "utf8"));
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

test("unowned homepage collisions and symlinked output parents are rejected without changes", async () => {
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

test("publication workflow gates payload assembly on origin, checks, build, and tests", async () => {
  const [ci, publication] = await Promise.all([
    readFile(path.join(root, ".github/workflows/ci.yml"), "utf8"),
    readFile(path.join(root, ".github/workflows/deploy-gh-pages.yml"), "utf8"),
  ]);
  assert.match(ci, /submodules:\s*recursive/u);
  assert.match(publication, /submodules:\s*recursive/u);
  assert.match(publication, /SITE_URL:\s*\$\{\{\s*vars\.SITE_URL\s*\}\}/u);
  const originGate = publication.indexOf("node scripts/validate-production-origin.mjs");
  const install = publication.indexOf("npm ci");
  const check = publication.indexOf("npm run check");
  const build = publication.indexOf("npm run build");
  const tests = publication.indexOf("npm test");
  const payload = publication.indexOf("Assemble publication payload");
  assert.ok(originGate >= 0 && originGate < install);
  assert.ok(install < check && check < build && build < tests && tests < payload);
  assert.match(publication, /needs:\s*build/u);
  assert.doesNotMatch(publication, /continue-on-error:\s*true/u);
  assert.match(publication, /esa\.jsonc/u);
  assert.match(publication, /wrangler\.jsonc/u);
  assert.match(publication, /cp -R dist\/\. "\$PUBLICATION_DIR\/dist\/"/u);
});
