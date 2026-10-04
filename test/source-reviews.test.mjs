import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  loadSourceReviews,
  reconcileSourceReviews,
  validateSourceReviews,
} from "../scripts/source-reviews.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const ledgerPath = path.join(root, "content/awesome/source-reviews.yml");
const timestamp = "2026-10-03T19:00:00Z";

function review(overrides = {}) {
  return {
    id: "awesome-example",
    source: "https://github.com/example/awesome-example",
    title: "Awesome Example",
    imported: true,
    notImportedReason: null,
    importedAt: null,
    ...overrides,
  };
}

async function withLedger(run) {
  const directory = await mkdtemp(path.join(os.tmpdir(), "source-reviews-test-"));
  const filePath = path.join(directory, "reviews.yml");
  try {
    await run(async (yaml) => {
      await writeFile(filePath, yaml);
      return loadSourceReviews(filePath);
    }, filePath);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

function identity(source) {
  return new URL(source).pathname.slice(1).toLowerCase();
}

test("source review loader accepts imported, pending, excluded, and historically unknown timing", async () => {
  const imported = review({ importedAt: timestamp });
  const historical = review({
    id: "historical-record",
    source: "https://github.com/example/historical-record",
  });
  const pending = review({
    id: "pending-record",
    source: "https://github.com/example/pending",
    imported: false,
    notImportedReason: "Pending redistribution permission review.",
  });
  const excluded = review({
    id: "excluded-record",
    source: "https://github.com/example/excluded",
    imported: false,
    notImportedReason: "Excluded by the documented eligibility threshold.",
  });
  const records = [imported, historical, pending, excluded];
  const yaml = records.map((item) => [
    `- id: ${item.id}`,
    `  source: ${item.source}`,
    `  title: "${item.title}"`,
    `  imported: ${item.imported}`,
    `  notImportedReason: ${item.notImportedReason === null ? "null" : `"${item.notImportedReason}"`}`,
    `  importedAt: ${item.importedAt === null ? "null" : `"${item.importedAt}"`}`,
  ].join("\n")).join("\n");

  await withLedger(async (load) => {
    assert.deepEqual(await load(yaml), records);
  });
});

test("source review loader rejects malformed YAML, unsupported features, and invalid roots", async () => {
  const valid = [
    "- id: awesome-example",
    "  source: https://github.com/example/awesome-example",
    '  title: "Awesome Example"',
    "  imported: true",
    "  notImportedReason: null",
    "  importedAt: null",
  ].join("\n");
  const cases = [
    ["syntax errors", "- id: [\n", /invalid YAML/u],
    ["duplicate mapping keys", valid.replace("  title:", "  id: duplicate\n  title:"), /Map keys must be unique/u],
    ["multiple documents", `${valid}\n---\n${valid}\n`, /expected exactly one YAML document/u],
    ["aliases", `${valid.replace("id: awesome-example", "id: &review-id awesome-example")}\n- *review-id\n`, /aliases are not supported/u],
    ["custom tags", valid.replace("id: awesome-example", "id: !custom awesome-example"), /custom YAML tag/u],
    ["scalar root", "not-a-sequence\n", /YAML sequence root/u],
    ["mapping root", "id: awesome-example\n", /YAML sequence root/u],
    ["missing fields", "- id: incomplete\n", /missing required field/u],
    ["unknown fields", valid.replace("  imported: true", "  imported: true\n  importedByMistake: true"), /unknown field "importedByMistake"/u],
    ["quoted boolean", valid.replace("imported: true", 'imported: "true"'), /imported must be a YAML boolean/u],
    ["invalid identifier", valid.replace("awesome-example", "Not_Awesome"), /kebab-case/u],
    ["invalid URL", valid.replace("https://github.com/example/awesome-example", "git@github.com:example/repo.git"), /canonical HTTPS GitHub/u],
    ["noncanonical URL", valid.replace("https://github.com/example/awesome-example", "https://GITHUB.com/example/awesome-example"), /canonical HTTPS/u],
    ["empty title", valid.replace('"Awesome Example"', '""'), /nonempty string/u],
    ["unquoted timestamp", valid.replace("importedAt: null", "importedAt: 2026-10-03T19:00:00Z"), /quoted UTC timestamp/u],
  ];

  await withLedger(async (load, filePath) => {
    await assert.rejects(load(""), new RegExp(filePath.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&")));
    for (const [label, yaml, message] of cases) {
      await assert.rejects(load(yaml), (error) => {
        assert.match(error.message, message, label);
        assert.match(error.message, /reviews\.yml/u, label);
        return true;
      }, label);
    }
  });
});

test("review identity and status validation rejects duplicates and contradictory metadata", () => {
  assert.throws(
    () => validateSourceReviews([review(), review({ id: "second-review", source: "https://github.com/EXAMPLE/AWESOME-EXAMPLE" })]),
    /duplicate repository/u,
  );
  assert.throws(
    () => validateSourceReviews([review(), review()]),
    /duplicate review identifier/u,
  );
  assert.throws(() => validateSourceReviews([review({ notImportedReason: "" })]), /notImportedReason: null/u);
  assert.throws(() => validateSourceReviews([review({ notImportedReason: "Pending" })]), /notImportedReason: null/u);
  assert.throws(() => validateSourceReviews([review({ importedAt: "" })]), /UTC timestamp/u);
  assert.throws(
    () => validateSourceReviews([review({ importedAt: "2026-02-30T12:00:00Z" })]),
    /valid UTC calendar timestamp/u,
  );
  assert.throws(
    () => validateSourceReviews([review({ importedAt: "2026-10-03T12:00:00.000Z" })]),
    /YYYY-MM-DDTHH:mm:ssZ/u,
  );
  assert.throws(
    () => validateSourceReviews([review({ imported: false, notImportedReason: null })]),
    /nonempty notImportedReason/u,
  );
  assert.throws(
    () => validateSourceReviews([review({ imported: false, notImportedReason: "Pending", importedAt: timestamp })]),
    /importedAt: null/u,
  );
  assert.doesNotThrow(() => validateSourceReviews([
    review({ importedAt: timestamp }),
    review({
      id: "pending-review",
      source: "https://github.com/example/pending",
      imported: false,
      notImportedReason: "Pending review.",
    }),
  ]));
});

test("review reconciliation requires matching hosted and GitHub-only registrations", () => {
  const collection = {
    id: "awesome-example",
    repositoryUrl: "https://github.com/example/awesome-example",
  };
  const candidate = {
    id: "awesome-candidate",
    repositoryUrl: "https://github.com/example/awesome-candidate",
  };
  const importedReview = review();
  const candidateReview = review({
    id: candidate.id,
    source: candidate.repositoryUrl,
    imported: false,
    notImportedReason: "Pending review.",
  });

  assert.throws(() => reconcileSourceReviews([], [collection], []), /no source review/u);
  assert.throws(() => reconcileSourceReviews([], [], [candidate]), /no source review/u);
  assert.throws(() => reconcileSourceReviews([importedReview], [], []), /no hosted collection registration/u);
  assert.throws(
    () => reconcileSourceReviews(
      [review({ source: "https://github.com/example/different-repository" })],
      [collection],
      [],
    ),
    /identifier and repository URL do not match/u,
  );
  assert.throws(
    () => reconcileSourceReviews(
      [review({ imported: false, notImportedReason: "Pending review." })],
      [collection],
      [],
    ),
    /must have imported: true/u,
  );
  assert.throws(
    () => reconcileSourceReviews([
      review(),
      { ...candidateReview, imported: true, notImportedReason: null },
    ], [collection], [candidate]),
    /must have imported: false/u,
  );
  assert.doesNotThrow(() => reconcileSourceReviews(
    [importedReview, candidateReview, review({
      id: "audit-only-exclusion",
      source: "https://github.com/example/excluded",
      imported: false,
      notImportedReason: "Excluded from hosted content.",
    })],
    [collection],
    [candidate],
  ));
});

test("migration data covers the ledger baseline and both registries", async () => {
  const [collections, candidates] = await Promise.all([
    readFile(path.join(root, "content/awesome/collections.json"), "utf8").then(JSON.parse),
    readFile(path.join(root, "content/awesome/candidates.json"), "utf8").then(JSON.parse),
  ]);
  const reviews = await loadSourceReviews(ledgerPath);
  const baseline = new Set([
    ...collections.map((entry) => identity(entry.repositoryUrl)),
    ...candidates.map((entry) => identity(entry.repositoryUrl)),
    "heapy/awesome-kotlin",
    "jamzywang/awesome-redis",
    "awesomedata/awesome-public-datasets",
  ]);
  const reviewsByIdentity = new Map(reviews.map((item) => [identity(item.source), item]));
  const collectionByIdentity = new Map(collections.map((item) => [identity(item.repositoryUrl), item]));
  const candidateByIdentity = new Map(candidates.map((item) => [identity(item.repositoryUrl), item]));

  assert.equal(candidates.length, 50);
  assert.ok(candidates.every(({ licenseId }) =>
    ["CC0-1.0", "MIT", "Apache-2.0", "Unlicense", "WTFPL"].includes(licenseId)));
  assert.equal(baseline.size, 69);
  assert.equal(reviews.length, 96);
  assert.equal(new Set(reviews.map(({ id }) => id)).size, 96);
  assert.equal(reviewsByIdentity.size, reviews.length);
  for (const source of baseline) {
    const item = reviewsByIdentity.get(source);
    assert.ok(item, `missing review for ${source}`);
    assert.equal(item.imported, collectionByIdentity.has(source), `${source} imported status`);
    if (candidateByIdentity.has(source)) assert.equal(item.imported, false, `${source} candidate status`);
  }
  assert.equal(reviews.filter(({ imported }) => imported).length, collections.length);
  assert.equal(reviews.filter(({ imported }) => !imported).length, 80);
  assert.match(reviewsByIdentity.get("jamzywang/awesome-redis").notImportedReason, /746.*below.*1,000/u);
  assert.match(reviewsByIdentity.get("heapy/awesome-kotlin").notImportedReason, /introduction/u);
  assert.match(reviewsByIdentity.get("awesomedata/awesome-public-datasets").notImportedReason, /reStructuredText/u);
  assert.doesNotThrow(() => reconcileSourceReviews(reviews, collections, candidates));
});
