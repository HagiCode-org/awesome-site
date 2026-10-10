import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workflow = await readFile(new URL("../.github/workflows/deploy-gh-pages.yml", import.meta.url), "utf8");
const build = workflow.slice(workflow.indexOf("  build:"), workflow.indexOf("  publish:"));
const publish = workflow.slice(workflow.indexOf("  publish:"));

test("publication replaces gh-pages with a single latest commit", () => {
  assert.match(publish, /uses: peaceiris\/actions-gh-pages@v4/u);
  assert.match(publish, /publish_branch: gh-pages/u);
  assert.match(publish, /force_orphan: true/u);
  assert.match(publish, /enable_jekyll: false/u);
});

test("publication keeps write access on the publish job and serializes runs", () => {
  assert.match(build, /permissions:\n\s+contents: read/u);
  assert.doesNotMatch(build, /contents: write/u);
  assert.match(publish, /permissions:\n\s+contents: write/u);
  assert.match(workflow, /concurrency:\n\s+group: awesome-site-gh-pages\n\s+cancel-in-progress: false/u);
});
