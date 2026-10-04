import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isAlias, isMap, isScalar, isSeq, parseAllDocuments } from "yaml";

const root = fileURLToPath(new URL("../", import.meta.url));
const defaultLedgerPath = path.join(root, "content/awesome/source-reviews.yml");
const fields = new Set(["id", "source", "title", "imported", "notImportedReason", "importedAt"]);
const timestampPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/u;
const standardTags = new Set([
  "tag:yaml.org,2002:binary",
  "tag:yaml.org,2002:bool",
  "tag:yaml.org,2002:float",
  "tag:yaml.org,2002:int",
  "tag:yaml.org,2002:map",
  "tag:yaml.org,2002:merge",
  "tag:yaml.org,2002:null",
  "tag:yaml.org,2002:omap",
  "tag:yaml.org,2002:pairs",
  "tag:yaml.org,2002:seq",
  "tag:yaml.org,2002:set",
  "tag:yaml.org,2002:str",
  "tag:yaml.org,2002:timestamp",
]);

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

function repositoryIdentity(source) {
  return new URL(source).pathname.slice(1).toLowerCase();
}

function validateTimestamp(value, id) {
  if (typeof value !== "string" || !timestampPattern.test(value)) {
    throw new Error(`${id}: importedAt must be a quoted UTC timestamp in YYYY-MM-DDTHH:mm:ssZ form or null`);
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.valueOf()) || parsed.toISOString().replace(".000Z", "Z") !== value) {
    throw new Error(`${id}: importedAt is not a valid UTC calendar timestamp`);
  }
}

export function validateSourceReviews(reviews, filePath = defaultLedgerPath) {
  if (!Array.isArray(reviews)) {
    throw new Error(`${filePath}: review ledger must have a YAML sequence root`);
  }

  const ids = new Map();
  const repositories = new Map();
  for (const [index, review] of reviews.entries()) {
    const label = `record ${index + 1}`;
    if (!review || typeof review !== "object" || Array.isArray(review)) {
      throw new Error(`${filePath}: ${label} must be a mapping`);
    }
    for (const field of fields) {
      if (!Object.hasOwn(review, field)) throw new Error(`${filePath}: ${label} is missing required field "${field}"`);
    }
    for (const field of Object.keys(review)) {
      if (!fields.has(field)) throw new Error(`${filePath}: ${label} has unknown field "${field}"`);
    }

    const id = review.id;
    if (typeof id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(id)) {
      throw new Error(`${filePath}: ${label} id must be a kebab-case string`);
    }
    if (ids.has(id)) {
      throw new Error(`${filePath}: duplicate review identifier "${id}" in records ${ids.get(id)} and ${index + 1}`);
    }
    if (typeof review.source !== "string") {
      throw new Error(`${filePath}: ${id}: source must be a canonical HTTPS GitHub repository URL`);
    }
    try {
      validateRepositoryUrl(review.source, id);
    } catch (error) {
      throw new Error(`${filePath}: ${error.message}`);
    }
    if (new URL(review.source).href !== review.source) {
      throw new Error(`${filePath}: ${id}: source must use its canonical HTTPS GitHub repository URL`);
    }
    const identity = repositoryIdentity(review.source);
    if (repositories.has(identity)) {
      throw new Error(`${filePath}: duplicate repository "${identity}" in records ${repositories.get(identity)} and ${index + 1}`);
    }
    if (typeof review.title !== "string" || !review.title.trim()) {
      throw new Error(`${filePath}: ${id}: title must be a nonempty string`);
    }
    if (typeof review.imported !== "boolean") {
      throw new Error(`${filePath}: ${id}: imported must be a YAML boolean`);
    }
    if (review.imported) {
      if (review.notImportedReason !== null) {
        throw new Error(`${filePath}: ${id}: imported records require notImportedReason: null`);
      }
      if (review.importedAt !== null) validateTimestamp(review.importedAt, id);
    } else {
      if (typeof review.notImportedReason !== "string" || !review.notImportedReason.trim()) {
        throw new Error(`${filePath}: ${id}: non-imported records require a nonempty notImportedReason`);
      }
      if (review.importedAt !== null) {
        throw new Error(`${filePath}: ${id}: non-imported records require importedAt: null`);
      }
    }
    ids.set(id, index + 1);
    repositories.set(identity, index + 1);
  }
  return reviews;
}

function findNodeIssue(node) {
  if (!node) return undefined;
  if (isAlias(node)) return "YAML aliases are not supported";
  if (typeof node.tag === "string" && !standardTags.has(node.tag)) {
    return `custom YAML tag "${node.tag}" is not supported`;
  }
  if (isMap(node)) {
    for (const pair of node.items) {
      const issue = findNodeIssue(pair.key) ?? findNodeIssue(pair.value);
      if (issue) return issue;
    }
  } else if (isSeq(node)) {
    for (const item of node.items) {
      const issue = findNodeIssue(item);
      if (issue) return issue;
    }
  }
  return undefined;
}

function validateTimestampStyles(node, filePath) {
  if (!isSeq(node)) return;
  for (const [index, record] of node.items.entries()) {
    if (!isMap(record)) continue;
    const id = record.items.find((pair) => isScalar(pair.key) && pair.key.value === "id")?.value;
    const label = isScalar(id) && typeof id.value === "string" ? id.value : `record ${index + 1}`;
    const timestamp = record.items.find((pair) =>
      isScalar(pair.key) && pair.key.value === "importedAt"
    )?.value;
    if (
      isScalar(timestamp) &&
      timestamp.value !== null &&
      timestamp.type !== "QUOTE_DOUBLE" &&
      timestamp.type !== "QUOTE_SINGLE"
    ) {
      throw new Error(`${filePath}: ${label}: importedAt must be a quoted UTC timestamp`);
    }
  }
}

export async function loadSourceReviews(filePath = defaultLedgerPath) {
  let source;
  try {
    source = await readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") throw new Error(`${filePath}: source review ledger does not exist`);
    throw error;
  }

  let documents;
  try {
    documents = parseAllDocuments(source, { uniqueKeys: true, version: "1.2" });
  } catch (error) {
    throw new Error(`${filePath}: invalid YAML: ${error.message}`);
  }
  if (documents.length !== 1) {
    throw new Error(`${filePath}: expected exactly one YAML document, found ${documents.length}`);
  }
  const [document] = documents;
  if (document.errors.length) {
    const details = document.errors.map(({ message }) => message.trim()).join("; ");
    throw new Error(`${filePath}: invalid YAML: ${details}`);
  }
  const nodeIssue = findNodeIssue(document.contents);
  if (nodeIssue) throw new Error(`${filePath}: ${nodeIssue}`);
  validateTimestampStyles(document.contents, filePath);

  let reviews;
  try {
    reviews = document.toJS({ maxAliasCount: 0 });
  } catch (error) {
    throw new Error(`${filePath}: invalid YAML data: ${error.message}`);
  }
  return validateSourceReviews(reviews, filePath);
}

function requireMatchingReview(reviewById, reviewByIdentity, registryEntry, registryName) {
  const identity = repositoryIdentity(registryEntry.repositoryUrl);
  const byId = reviewById.get(registryEntry.id);
  const byIdentity = reviewByIdentity.get(identity);
  if (!byId && !byIdentity) {
    throw new Error(`${registryEntry.id}: ${registryName} registration has no source review for ${registryEntry.repositoryUrl}`);
  }
  if (!byId || !byIdentity || byId !== byIdentity) {
    throw new Error(`${registryEntry.id}: ${registryName} identifier and repository URL do not match the same source review`);
  }
  return byId;
}

export function reconcileSourceReviews(reviews, collections, candidates) {
  const reviewById = new Map(reviews.map((review) => [review.id, review]));
  const reviewByIdentity = new Map(reviews.map((review) => [repositoryIdentity(review.source), review]));
  const collectionsById = new Map(collections.map((entry) => [
    entry.id,
    repositoryIdentity(entry.repositoryUrl),
  ]));
  const collectionsByIdentity = new Map(collections.map((entry) => [repositoryIdentity(entry.repositoryUrl), entry]));

  for (const collection of collections) {
    const review = requireMatchingReview(reviewById, reviewByIdentity, collection, "Hosted collection");
    if (!review.imported) {
      throw new Error(`${collection.id}: hosted collection review must have imported: true`);
    }
  }
  for (const candidate of candidates) {
    const review = requireMatchingReview(reviewById, reviewByIdentity, candidate, "GitHub-only candidate");
    if (review.imported) {
      throw new Error(`${candidate.id}: GitHub-only candidate review must have imported: false`);
    }
  }
  for (const review of reviews) {
    if (!review.imported) continue;
    const identity = repositoryIdentity(review.source);
    const collectionIdentity = collectionsById.get(review.id);
    const collection = collectionsByIdentity.get(identity);
    if (!collectionIdentity && !collection) {
      throw new Error(`${review.id}: imported review has no hosted collection registration for ${review.source}`);
    }
    if (!collectionIdentity || !collection || collectionIdentity !== identity || collection.id !== review.id) {
      throw new Error(`${review.id}: imported review identifier and repository URL do not match the hosted collection`);
    }
  }
}
