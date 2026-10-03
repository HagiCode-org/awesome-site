import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const siteUrl = "http://localhost:36265";

function configResult(value, includeSiteUrl = true) {
  const env = { ...process.env };
  if (includeSiteUrl) env.SITE_URL = value;
  else delete env.SITE_URL;
  return spawnSync(
    process.execPath,
    ["--input-type=module", "-e", 'await import("./astro.config.mjs")'],
    { cwd: root, env, encoding: "utf8" },
  );
}

test("SITE_URL is required and must be an absolute HTTP(S) URL", () => {
  const cases = [
    [undefined, false],
    ["not a URL"],
    ["/relative/path"],
    ["ftp://example.com"],
  ];

  for (const [value, includeSiteUrl = true] of cases) {
    const result = configResult(value, includeSiteUrl);
    assert.notEqual(result.status, 0);
    assert.match(`${result.stdout}${result.stderr}`, /SITE_URL/u);
  }

  assert.equal(configResult(siteUrl).status, 0);
});

test("built pages use Awesome Site identity, local routes, shared shell, and generated search", async () => {
  const [home, guide, notFound, robots, sitemap, feed, feedAlias, pagefind] = await Promise.all([
    readFile(path.join(root, "dist/index.html"), "utf8"),
    readFile(path.join(root, "dist/guides/getting-started/index.html"), "utf8"),
    readFile(path.join(root, "dist/404.html"), "utf8"),
    readFile(path.join(root, "dist/robots.txt"), "utf8"),
    readFile(path.join(root, "dist/sitemap-0.xml"), "utf8"),
    readFile(path.join(root, "dist/rss.xml"), "utf8"),
    readFile(path.join(root, "dist/rss.en.xml"), "utf8"),
    readdir(path.join(root, "dist/pagefind")),
  ]);

  for (const html of [home, guide]) {
    assert.match(html, /Awesome Site/u);
    assert.equal((html.match(/class="hagilight-site-links\b/gu) ?? []).length, 1);
    assert.doesNotMatch(
      html,
      /openspec\.hagicode\.com|github\.com\/HagiCode-org\/site|docs\.hagicode\.com|www\.hagicode\.com/u,
    );
    assert.doesNotMatch(html, /googletagmanager|google-analytics|51la|promoto|hagilight-article-promotion/u);
  }

  assert.match(home, new RegExp(`rel="canonical" href="${siteUrl}/"`));
  assert.match(home, /href="\/guides\/getting-started\/"/u);
  assert.match(guide, new RegExp(`rel="canonical" href="${siteUrl}/guides/getting-started/"`));
  assert.match(guide, /href="\/"/u);
  assert.match(notFound, /404/u);
  assert.match(notFound, /href="\/"/u);
  assert.match(robots, new RegExp(`Sitemap: ${siteUrl}/sitemap-index\\.xml`));
  assert.match(sitemap, new RegExp(`${siteUrl}/guides/getting-started/`));
  assert.ok(pagefind.some((file) => file.startsWith("pagefind.")));

  const itemLinks = (xml) => {
    assert.match(xml, /^<\?xml/u);
    assert.match(xml, new RegExp(`<link>${siteUrl}/</link>`));
    return [...xml.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>[\s\S]*?<\/item>/gu)]
      .map(([, link]) => link);
  };
  assert.deepEqual(itemLinks(feed), itemLinks(feedAlias));
  assert.deepEqual(itemLinks(feed), [
    `${siteUrl}/guides/getting-started/`,
    `${siteUrl}/`,
  ]);
});

test("authored content requires a title and valid additions build", async () => {
  const fixtureDirectory = path.join(root, "src/content/docs/guides");
  const fixture = path.join(fixtureDirectory, "temporary-content-contract.md");
  const content = `---\ntitle: Temporary content contract\n---\n\nTemporary content.\n`;
  const env = { ...process.env, SITE_URL: siteUrl };

  try {
    await writeFile(fixture, content, { flag: "wx" });
    execFileSync("npm", ["run", "build"], { cwd: root, env, stdio: "pipe" });
    await readFile(path.join(root, "dist/guides/temporary-content-contract/index.html"), "utf8");

    await writeFile(fixture, "---\ndescription: Missing title\n---\n\nInvalid content.\n");
    const invalid = spawnSync("npm", ["run", "check"], {
      cwd: root,
      env,
      encoding: "utf8",
    });
    assert.notEqual(invalid.status, 0);
    assert.match(`${invalid.stdout}${invalid.stderr}`, /title|temporary-content-contract/iu);
  } finally {
    await rm(fixture, { force: true });
  }

  execFileSync("npm", ["run", "build"], { cwd: root, env, stdio: "pipe" });
});
