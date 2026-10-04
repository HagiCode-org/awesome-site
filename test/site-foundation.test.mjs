import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const siteUrl = new URL(process.env.SITE_URL ?? "http://localhost:36265").origin;

function configResult(value, includeSiteUrl = true, command = "build") {
  const env = { ...process.env };
  if (includeSiteUrl) env.SITE_URL = value;
  else delete env.SITE_URL;
  env.CONFIG_COMMAND = command;
  return spawnSync(
    process.execPath,
    [
      "--input-type=module",
      "-e",
      'process.argv[2] = process.env.CONFIG_COMMAND ?? "build"; const config = (await import("./astro.config.mjs")).default; if (process.argv[2] === "dev" && config.site !== "http://localhost:36265") process.exit(1)',
    ],
    { cwd: root, env, encoding: "utf8" },
  );
}

test("SITE_URL is required outside dev and must be an absolute HTTP(S) URL", () => {
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

  assert.equal(configResult(undefined, false, "dev").status, 0);
});

test("built pages use Awesome Site identity, local routes, shared shell, and generated search", async () => {
  const collections = JSON.parse(await readFile(path.join(root, "content/awesome/collections.json"), "utf8"));
  const topics = [...new Set(collections.flatMap(({ catalog, tags = [] }) => [
    ...(Array.isArray(catalog) ? catalog : [catalog]),
    ...(Array.isArray(tags) ? tags : [tags]),
  ]))].sort();
  const [home, notFound, robots, sitemap, feed, feedAlias, pagefind] = await Promise.all([
    readFile(path.join(root, "dist/index.html"), "utf8"),
    readFile(path.join(root, "dist/404.html"), "utf8"),
    readFile(path.join(root, "dist/robots.txt"), "utf8"),
    readFile(path.join(root, "dist/sitemap-0.xml"), "utf8"),
    readFile(path.join(root, "dist/rss.xml"), "utf8"),
    readFile(path.join(root, "dist/rss.en.xml"), "utf8"),
    readdir(path.join(root, "dist/pagefind")),
  ]);

  assert.match(home, /Awesome Site/u);
  assert.equal((home.match(/class="hagilight-site-links\b/gu) ?? []).length, 1);
  assert.match(home, /href="https:\/\/www\.hagicode\.com\/en-US\/desktop\/"[^>]*>Download Hagicode</u);
  assert.match(home, /href="https:\/\/github\.com\/HagiCode-org\/site"[^>]*>GitHub</u);
  assert.match(home, /href="https:\/\/tasks\.hagicode\.com\/"[^>]*>HagiTask</u);
  assert.match(home, /class="hagilight-article-promotion(?:\s|")/u);
  assert.doesNotMatch(home, /googletagmanager|google-analytics|51la/u);

  assert.ok(home.includes(`rel="canonical" href="${siteUrl}/"`));
  assert.match(home, /href="\/awesome\/awesome-github-profile-readme\/"/u);
  assert.match(notFound, /404/u);
  assert.match(notFound, /href="\/"/u);
  assert.match(robots, new RegExp(`Sitemap: ${siteUrl}/sitemap-index\\.xml`));
  assert.doesNotMatch(sitemap, /guides\/getting-started/u);
  assert.ok(pagefind.some((file) => file.startsWith("pagefind.")));

  const itemLinks = (xml) => {
    assert.match(xml, /^<\?xml/u);
    return [...xml.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>[\s\S]*?<\/item>/gu)]
      .map(([, link]) => link);
  };
  assert.deepEqual(itemLinks(feed), itemLinks(feedAlias));
  assert.deepEqual(
    itemLinks(feed).sort(),
    [...collections.map(({ route }) => `${siteUrl}/${route}/`), `${siteUrl}/`].sort(),
  );

  const locales = [
    ["zh-CN", "zh-CN", "欢迎来到 Awesome Site"],
    ["zh-Hant", "zh-Hant", "歡迎來到 Awesome Site"],
    ["fr-FR", "fr-FR", "Bienvenue sur Awesome Site"],
    ["de-DE", "de-DE", "Willkommen bei Awesome Site"],
    ["es-ES", "es-ES", "Te damos la bienvenida"],
    ["ja-JP", "ja-JP", "Awesome Site へようこそ"],
    ["ko-KR", "ko-KR", "Awesome Site에 오신 것을 환영합니다"],
    ["pt-BR", "pt-BR", "Boas-vindas ao Awesome Site"],
    ["ru-RU", "ru-RU", "Добро пожаловать в Awesome Site"],
  ];

  const htmlFor = async (locale, route) => {
    const prefix = locale === "root" ? "" : `${locale}/`;
    const file = route
      ? `${prefix}${route}/index.html`
      : `${prefix}index.html`;
    return readFile(path.join(root, "dist", file), "utf8");
  };

  const [collectionEnglish, sitemapXml] = await Promise.all([
    htmlFor("root", "awesome/awesome-github-profile-readme"),
    readFile(path.join(root, "dist/sitemap-0.xml"), "utf8"),
  ]);
  const [allCollectionsEnglish, topicEnglish] = await Promise.all([
    htmlFor("root", "awesome"),
    htmlFor("root", "awesome/tags/github-profile-readme"),
  ]);
  const sitemapRoutes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/gu)]
    .map(([, link]) => link)
    .filter((link) => new URL(link).pathname.includes("/awesome/"))
    .sort();
  const expectedSitemapRoutes = ["", ...locales.map(([locale]) => `${locale}/`)].flatMap((prefix) => [
    `${siteUrl}/${prefix}awesome/`,
    ...collections.map(({ route }) => `${siteUrl}/${prefix}${route}/`),
    ...topics.map((topic) => `${siteUrl}/${prefix}awesome/tags/${topic}/`),
  ]).sort();
  assert.deepEqual(sitemapRoutes, expectedSitemapRoutes);

  const englishCollection = `${siteUrl}/awesome/awesome-github-profile-readme/`;
  assert.match(collectionEnglish, /https:\/\/raw\.githubusercontent\.com\/abhisheknaiidu\/awesome-github-profile-readme\/[a-f0-9]{40}\/assets\/agpr\.gif/u);
  assert.match(collectionEnglish, /CC0-1\.0/u);
  assert.match(collectionEnglish, new RegExp(`href="${englishCollection}"`));
  assert.match(collectionEnglish, /awesome-topic-nav/u);
  assert.match(collectionEnglish, /href="\/awesome\/tags\/github-profile-readme\/"/u);
  assert.match(allCollectionsEnglish, /href="\/awesome\/awesome-github-profile-readme\/"/u);
  for (const { route } of collections) {
    assert.equal((allCollectionsEnglish.match(new RegExp(`href="/${route}/"`, "gu")) ?? []).length, 1);
  }
  assert.match(allCollectionsEnglish, /href="\/awesome\/tags\/github-profile-readme\/"/u);
  assert.match(topicEnglish, /href="\/awesome\/"/u);
  assert.match(topicEnglish, /href="\/awesome\/awesome-github-profile-readme\/"/u);
  assert.equal((collectionEnglish.match(/<h1 id="_top"/gu) ?? []).length, 1);
  assert.equal((collectionEnglish.match(/class="hagilight-content-width-toggle"/gu) ?? []).length, 1);
  assert.equal((allCollectionsEnglish.match(/class="hagilight-site-links\b/gu) ?? []).length, 1);
  assert.equal((topicEnglish.match(/class="hagilight-site-links\b/gu) ?? []).length, 1);

  const expectedAlternateLocales = ["en-US", ...locales.map(([, lang]) => lang), "x-default"];
  await assert.rejects(
    readFile(path.join(root, "dist/awesome/tags/unused-topic/index.html")),
    { code: "ENOENT" },
  );
  for (const [locale, lang, homeText] of [["root", "en-US", "Welcome to Awesome Site"], ...locales]) {
    const prefix = locale === "root" ? "" : `${locale}/`;
    await assert.rejects(
      readFile(path.join(root, "dist", `${prefix}guides/getting-started/index.html`)),
      { code: "ENOENT" },
    );
    const [localizedHome, localizedCollection, localizedIndex, localizedTopic, localeFeed] = await Promise.all([
      htmlFor(locale, ""),
      htmlFor(locale, "awesome/awesome-github-profile-readme"),
      htmlFor(locale, "awesome"),
      htmlFor(locale, "awesome/tags/github-profile-readme"),
      readFile(path.join(root, "dist", `rss.${locale === "root" ? "en" : locale}.xml`), "utf8"),
    ]);

    assert.match(localizedHome, new RegExp(`<html lang="${lang}"`));
    assert.ok(localizedHome.includes(homeText), `${locale} home should contain localized prose`);
    assert.doesNotMatch(localizedHome, /guides\/getting-started/u);
    assert.match(localizedHome, new RegExp(`href="/${prefix}awesome/"`));
    assert.match(localizedHome, new RegExp(`href="/${prefix}awesome/awesome-github-profile-readme/"`));
    assert.match(localizedCollection, new RegExp(`<html lang="${lang}"`));
    assert.match(localizedIndex, new RegExp(`<html lang="${lang}"`));
    assert.match(localizedTopic, new RegExp(`<html lang="${lang}"`));
    assert.match(localizedIndex, new RegExp(`href="/${prefix}awesome/awesome-github-profile-readme/"`));
    assert.match(localizedIndex, new RegExp(`href="/${prefix}awesome/tags/github-profile-readme/"`));
    assert.match(localizedTopic, new RegExp(`href="/${prefix}awesome/"`));
    assert.match(localizedTopic, new RegExp(`href="/${prefix}awesome/awesome-github-profile-readme/"`));
    for (const html of [localizedHome, localizedCollection, localizedIndex, localizedTopic]) {
      assert.match(html, /class="hagilight-article-promotion(?:\s|")/u, `${locale} pages show the HagiCode promotion`);
    }
    assert.match(localizedCollection, new RegExp(`blob/[a-f0-9]{40}/README\\.md`));
    assert.match(localizedCollection, /CC0-1\.0/u);
    assert.match(localizedCollection, new RegExp(`href="${englishCollection}"`));
    if (locale === "root") {
      assert.doesNotMatch(localizedCollection, /AI-assisted translation/u);
    } else {
      assert.match(localizedCollection, /AI-assisted translation/u);
    }
    assert.match(localizedCollection, /<hagilight-language-chooser/u);
    assert.match(localizedCollection, new RegExp(`data-locale="${locale}"[^>]*aria-selected="true"`));
    assert.match(localizedTopic, /<hagilight-language-chooser/u);
    assert.match(localizedTopic, new RegExp(`data-href="/${prefix}awesome/tags/github-profile-readme/"`));
    for (const alternate of expectedAlternateLocales) {
      assert.match(localizedIndex, new RegExp(`hreflang="${alternate}"`));
      assert.match(localizedTopic, new RegExp(`hreflang="${alternate}"`));
    }
    assert.equal((localizedIndex.match(/class="hagilight-site-links\b/gu) ?? []).length, 1);
    assert.equal((localizedTopic.match(/class="hagilight-site-links\b/gu) ?? []).length, 1);
    assert.match(
      localizedCollection,
      new RegExp(`data-href="/${prefix}awesome/awesome-github-profile-readme/"`),
    );
    for (const alternate of expectedAlternateLocales) {
      assert.match(localizedCollection, new RegExp(`hreflang="${alternate}"`));
    }

    const ids = new Set([...localizedCollection.matchAll(/\sid="([^"]+)"/gu)].map(([, id]) => id));
    for (const [, fragment] of localizedCollection.matchAll(/href="#([^"]+)"/gu)) {
      assert.ok(ids.has(fragment), `${locale} collection fragment #${fragment} should exist`);
    }
    assert.match(localeFeed, new RegExp(`<language>${lang}</language>`));
    assert.doesNotMatch(localeFeed, /guides\/getting-started/u);
    assert.deepEqual(
      itemLinks(localeFeed).sort(),
      [
        ...collections.map(({ route }) => `${siteUrl}/${prefix}${route}/`),
        `${siteUrl}/${prefix}`,
      ].sort(),
    );
    for (const { route } of collections) {
      assert.equal((localizedIndex.match(new RegExp(`href="/${prefix}${route}/"`, "gu")) ?? []).length, 1);
      assert.match(sitemapXml, new RegExp(`${siteUrl}/${prefix}${route}/`));
    }
    for (const topic of topics) {
      const topicPage = await htmlFor(locale, `awesome/tags/${topic}`);
      const members = collections.filter(({ catalog, tags = [] }) => {
        const effectiveTags = [
          ...(Array.isArray(catalog) ? catalog : [catalog]),
          ...(Array.isArray(tags) ? tags : [tags]),
        ];
        return effectiveTags.includes(topic);
      });
      for (const { route } of members) {
        assert.equal((topicPage.match(new RegExp(`href="/${prefix}${route}/"`, "gu")) ?? []).length, 1);
      }
      for (const { route } of collections.filter(({ catalog, tags = [] }) => {
        const effectiveTags = [
          ...(Array.isArray(catalog) ? catalog : [catalog]),
          ...(Array.isArray(tags) ? tags : [tags]),
        ];
        return !effectiveTags.includes(topic);
      })) {
        assert.doesNotMatch(topicPage, new RegExp(`href="/${prefix}${route}/"`, "u"));
      }
    }
  }

  const pagefindFiles = await readdir(path.join(root, "dist/pagefind"));
  for (const [locale] of locales) {
    assert.ok(pagefindFiles.some((file) => file.startsWith(`pagefind.${locale.toLowerCase()}_`)));
  }
});

test("localized homepage content requires a title", async () => {
  const fixture = path.join(root, "src/content/docs/fr-FR/index.md");
  const original = await readFile(fixture, "utf8");
  const content = original.replace(/^title:.*\n/mu, "");
  const env = { ...process.env, SITE_URL: siteUrl };

  try {
    await writeFile(fixture, content);
    const invalid = spawnSync("npm", ["run", "check"], {
      cwd: root,
      env,
      encoding: "utf8",
    });
    assert.notEqual(invalid.status, 0);
    assert.match(`${invalid.stdout}${invalid.stderr}`, /fr-FR\/index\.md: missing a nonempty title/u);
  } finally {
    await writeFile(fixture, original);
  }
});
