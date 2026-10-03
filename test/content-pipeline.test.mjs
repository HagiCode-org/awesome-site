import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  assertEquivalentStructure,
  inspectMarkdown,
  resolveSourceUrl,
  sourceHeadingAliases,
} from "../src/plugins/awesome-content.mjs";
import {
  realPathInside,
  preparePages,
  validateMetadata,
  validateRegistry,
  validateTranslationRecords,
} from "../scripts/content-pipeline.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const sourceOptions = {
  collectionId: "test-collection",
  readmePath: "docs/README.md",
};

test("registry rejects duplicate routes, unsupported repositories, and escaping paths", () => {
  const collection = {
    id: "test-collection",
    repositoryUrl: "https://github.com/example/test-collection",
    sourceDir: "sources/test-collection",
    readmePath: "README.md",
    licensePath: "LICENSE",
    licenseId: "CC0-1.0",
    route: "awesome/test-collection",
    title: "Test collection",
  };

  assert.doesNotThrow(() => validateRegistry([collection]));
  assert.throws(() => validateRegistry([collection, { ...collection }]), /Duplicate collection identifier/u);
  assert.throws(
    () => validateRegistry([{ ...collection, repositoryUrl: "git@github.com:example/repo.git" }]),
    /canonical HTTPS GitHub/u,
  );
  assert.throws(
    () => validateRegistry([{ ...collection, readmePath: "../README.md" }]),
    /normalized repository-relative path/u,
  );
  assert.throws(
    () => validateRegistry([{ ...collection, licenseId: "NOASSERTION" }]),
    /unsupported license identifier/u,
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
    },
  ]));
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
    title: "Titre traduit",
    description: "Description traduite",
    sourceDigest: source.digest,
    reviewStatus: "reviewed",
    isAITranslation: true,
  };
  assert.doesNotThrow(() => validateMetadata(metadata, source, "fr-FR"));
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
  const originalRegistry = await readFile(registryPath, "utf8");
  const originalSidecar = await readFile(sidecarPath, "utf8");
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

    await writeFile(registryPath, originalRegistry);
    const sidecar = JSON.parse(originalSidecar);
    sidecar.translations["fr-FR"].sourceDigest = "0".repeat(64);
    await writeFile(sidecarPath, `${JSON.stringify(sidecar, null, 2)}\n`);
    const staleTranslation = runCheck();
    assert.notEqual(staleTranslation.status, 0);
    assert.match(`${staleTranslation.stdout}${staleTranslation.stderr}`, /awesome-github-profile-readme\/fr-FR: translation is stale/u);
  } finally {
    await writeFile(registryPath, originalRegistry);
    await writeFile(sidecarPath, originalSidecar);
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
  const snapshot = async () => Promise.all(manifest.paths.map(async (relative) => [
    relative,
    await readFile(path.join(root, relative), "utf8"),
  ]));
  const before = await snapshot();
  const generatedEnglish = await readFile(generatedPath, "utf8");
  assert.ok(generatedEnglish.endsWith(source));

  execFileSync("npm", ["run", "content:prepare"], { cwd: root, stdio: "pipe" });
  assert.deepEqual(await snapshot(), before);
});

test("failed staging leaves all pipeline-owned outputs unchanged", async () => {
  const manifestPath = path.join(root, ".awesome-content-manifest.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const before = await Promise.all(manifest.paths.map(async (relative) => [
    relative,
    await readFile(path.join(root, relative), "utf8"),
  ]));
  const authoredHome = await readFile(path.join(root, "src/content/docs/index.md"), "utf8");
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

  await assert.rejects(preparePages([source]), /Invalid pipeline-owned path/u);
  assert.deepEqual(
    await Promise.all(manifest.paths.map(async (relative) => [
      relative,
      await readFile(path.join(root, relative), "utf8"),
    ])),
    before,
  );
  assert.equal(await readFile(path.join(root, "src/content/docs/index.md"), "utf8"), authoredHome);
});

test("preparation supports another collection and removes retired outputs only", async () => {
  const locales = ["zh-CN", "zh-Hant", "fr-FR", "de-DE", "es-ES", "ja-JP", "ko-KR", "pt-BR", "ru-RU"];
  const collection = {
    id: "second-collection",
    route: "awesome/second-collection",
    title: "Second collection",
    repositoryUrl: "https://github.com/example/second-collection",
    readmePath: "README.md",
    licensePath: "LICENSE",
    licenseId: "CC0-1.0",
  };
  const sourceMarkdown = "# Sample\n\n- [Entry](entry.md)\n";
  const sourceStructure = inspectMarkdown(sourceMarkdown, {
    collectionId: collection.id,
    readmePath: collection.readmePath,
  });
  const prepared = {
    collection,
    revision: "1".repeat(40),
    sourceMarkdown,
    sourceStructure,
    translations: locales.map((locale) => {
      const body = `# Sample (${locale})\n\n- [Entry (${locale})](entry.md)\n`;
      return {
        locale,
        metadata: {
          title: `Second collection (${locale})`,
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
  const authoredHome = await readFile(path.join(root, "src/content/docs/index.md"), "utf8");
  const manifestPath = path.join(root, ".awesome-content-manifest.json");

  try {
    await preparePages([prepared]);
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    assert.equal(manifest.paths.length, 10);
    assert.ok(manifest.paths.includes("src/content/docs/awesome/second-collection.md"));
    assert.match(
      await readFile(path.join(root, "src/content/docs/fr-FR/awesome/second-collection.md"), "utf8"),
      /AI-assisted translation/u,
    );

    await preparePages([]);
    assert.deepEqual(JSON.parse(await readFile(manifestPath, "utf8")), { paths: [] });
    await assert.rejects(
      readFile(path.join(root, "src/content/docs/awesome/second-collection.md")),
      { code: "ENOENT" },
    );
    assert.equal(await readFile(path.join(root, "src/content/docs/index.md"), "utf8"), authoredHome);
  } finally {
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
