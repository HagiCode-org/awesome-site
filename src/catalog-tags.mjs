const topicKeyPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u;

function normalizedKeys(value, field, collectionId) {
  if (!Array.isArray(value)) {
    throw new Error(`${collectionId}: ${field} must be an array of topic keys`);
  }

  const keys = [];
  for (const key of value) {
    if (typeof key !== "string" || !topicKeyPattern.test(key.trim())) {
      throw new Error(`${collectionId}: ${field} contains an invalid topic key`);
    }
    const normalized = key.trim();
    if (!keys.includes(normalized)) keys.push(normalized);
  }
  return keys;
}

export function normalizeCatalogTags(metadata, collectionId = "document") {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    throw new Error(`${collectionId}: catalog and tags metadata must be an object`);
  }

  let catalog;
  if (metadata.catalog !== undefined) {
    const catalogValues = typeof metadata.catalog === "string"
      ? [metadata.catalog]
      : metadata.catalog;
    const catalogKeys = normalizedKeys(catalogValues, "catalog", collectionId);
    if (catalogKeys.length === 0) {
      throw new Error(`${collectionId}: catalog must not be empty`);
    }
    catalog = typeof metadata.catalog === "string" ? catalogKeys[0] : catalogKeys;
  }

  const explicitTags = metadata.tags === undefined
    ? []
    : normalizedKeys(metadata.tags, "tags", collectionId);
  const tags = [...explicitTags];
  for (const key of typeof catalog === "string" ? [catalog] : catalog ?? []) {
    if (!tags.includes(key)) tags.push(key);
  }

  return {
    ...(catalog === undefined ? {} : { catalog }),
    tags,
  };
}
