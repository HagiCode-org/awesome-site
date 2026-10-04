import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { getWelcomeCopy } from "../src/home-copy.mjs";

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

function section(html, startToken, endToken) {
  const start = html.indexOf(startToken);
  const end = html.indexOf(endToken, start);
  assert.ok(start >= 0 && end > start, `expected ${startToken} ... ${endToken} in built HTML`);
  return html.slice(start, end + endToken.length);
}

function mainContent(html) {
  return section(html, "<main data-pagefind-body", "</main>");
}

function sidebarContent(html) {
  return section(html, "<sl-sidebar-pane", "</sl-sidebar-pane>");
}

function linksIn(html) {
  return [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gu)].map(([, attributes, body]) => ({
    href: attributes.match(/\bhref="([^"]+)"/u)?.[1],
    rel: attributes.match(/\brel="([^"]+)"/u)?.[1],
    label: body.replace(/<[^>]*>/gu, "").replaceAll("&amp;", "&").trim(),
  }));
}

function contentLinks(html) {
  return linksIn(mainContent(html)).filter(({ rel }) => rel !== "next" && rel !== "prev");
}

function headingIn(html) {
  return mainContent(html).match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/u)?.[1]
    .replace(/<[^>]*>/gu, "")
    .replaceAll("&amp;", "&")
    .trim();
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
  const candidates = JSON.parse(await readFile(path.join(root, "content/awesome/candidates.json"), "utf8"));
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
  assert.match(mainContent(home), /href="\/awesome\/awesome-github-profile-readme\/"/u);
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
    collections.map(({ route }) => `${siteUrl}/${route}/`).sort(),
  );

  const locales = [
    ["zh-CN", "zh-CN"],
    ["zh-Hant", "zh-Hant"],
    ["fr-FR", "fr-FR"],
    ["de-DE", "de-DE"],
    ["es-ES", "es-ES"],
    ["ja-JP", "ja-JP"],
    ["ko-KR", "ko-KR"],
    ["pt-BR", "pt-BR"],
    ["ru-RU", "ru-RU"],
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
  const allCollectionsEnglishMain = mainContent(allCollectionsEnglish);
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
  assert.match(allCollectionsEnglishMain, /href="\/awesome\/awesome-github-profile-readme\/"/u);
  for (const { route } of collections) {
    assert.equal(contentLinks(allCollectionsEnglish).filter(({ href }) => href === `/${route}/`).length, 1);
  }
  assert.match(allCollectionsEnglishMain, /href="\/awesome\/tags\/github-profile-readme\/"/u);
  assert.match(allCollectionsEnglishMain, new RegExp(`More repositories on GitHub \\(${candidates.length}\\)`));
  for (const { repositoryUrl } of candidates) {
    assert.ok(allCollectionsEnglishMain.includes(`href="${repositoryUrl}"`), `${repositoryUrl} appears in the English index`);
  }
  assert.match(mainContent(topicEnglish), /href="\/awesome\/"/u);
  assert.match(mainContent(topicEnglish), /href="\/awesome\/awesome-github-profile-readme\/"/u);
  assert.equal((collectionEnglish.match(/<h1 id="_top"/gu) ?? []).length, 1);
  assert.equal((collectionEnglish.match(/class="hagilight-content-width-toggle"/gu) ?? []).length, 1);
  assert.equal((allCollectionsEnglish.match(/class="hagilight-site-links\b/gu) ?? []).length, 1);
  assert.equal((topicEnglish.match(/class="hagilight-site-links\b/gu) ?? []).length, 1);

  const expectedAlternateLocales = ["en-US", ...locales.map(([, lang]) => lang), "x-default"];
  const expectedHomeAlternates = [
    ["en-US", ""],
    ...locales.map(([locale, lang]) => [lang, `${locale}/`]),
    ["x-default", ""],
  ];
  await assert.rejects(
    readFile(path.join(root, "dist/awesome/tags/unused-topic/index.html")),
    { code: "ENOENT" },
  );
  for (const [locale, lang] of [["root", "en-US"], ...locales]) {
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
    const localizedHomeMain = mainContent(localizedHome);
    const localizedIndexMain = mainContent(localizedIndex);
    const localizedSidebars = [localizedHome, localizedCollection, localizedIndex, localizedTopic]
      .map(sidebarContent);
    assert.equal(headingIn(localizedHome), headingIn(localizedIndex));
    const welcome = getWelcomeCopy(locale);
    assert.equal((localizedHomeMain.match(/class="awesome-welcome"/gu) ?? []).length, 1);
    for (const text of [
      welcome.eyebrow, welcome.title, welcome.intro, welcome.explore, welcome.start,
      welcome.collections, welcome.topics, welcome.languages, welcome.topicTitle, welcome.topicIntro,
      ...welcome.features.flatMap(({ title, body }) => [title, body]),
    ]) {
      assert.ok(localizedHomeMain.includes(text), `${locale} homepage contains localized welcome copy: ${text}`);
    }
    assert.match(localizedHomeMain, /href="#awesome-start"/u);
    assert.match(localizedHomeMain, /id="awesome-start" tabindex="-1"/u);
    assert.match(localizedHomeMain, /class="awesome-welcome-art" aria-hidden="true"/u);
    const welcomeStats = section(localizedHomeMain, '<dl class="awesome-welcome-stats">', "</dl>");
    const number = new Intl.NumberFormat(lang);
    for (const [label, value] of [
      [welcome.collections, collections.length],
      [welcome.topics, topics.length],
      [welcome.languages, locales.length + 1],
    ]) {
      assert.ok(welcomeStats.includes(`<dt>${label}</dt><dd>${number.format(value)}</dd>`));
    }
    const welcomeTopics = section(localizedHomeMain, '<section class="awesome-welcome-topics"', "</section>");
    const featuredLinks = linksIn(welcomeTopics);
    assert.equal(featuredLinks.length, Math.min(6, topics.length));
    for (const { href } of featuredLinks) {
      assert.ok(topics.some((topic) => href === `/${prefix}awesome/tags/${topic}/`));
    }
    assert.doesNotMatch(localizedIndexMain, /class="awesome-welcome"/u);
    assert.doesNotMatch(mainContent(localizedCollection), /class="awesome-welcome"/u);
    assert.doesNotMatch(mainContent(localizedTopic), /class="awesome-welcome"/u);
    assert.doesNotMatch(localizedHome, /guides\/getting-started/u);
    assert.match(localizedHomeMain, new RegExp(`href="/${prefix}awesome/"`));
    assert.match(localizedHomeMain, new RegExp(`href="/${prefix}awesome/awesome-github-profile-readme/"`));
    assert.match(localizedCollection, new RegExp(`<html lang="${lang}"`));
    assert.match(localizedIndex, new RegExp(`<html lang="${lang}"`));
    assert.match(localizedTopic, new RegExp(`<html lang="${lang}"`));
    assert.match(localizedIndexMain, new RegExp(`href="/${prefix}awesome/awesome-github-profile-readme/"`));
    assert.match(localizedIndexMain, new RegExp(`href="/${prefix}awesome/tags/github-profile-readme/"`));
    for (const { repositoryUrl } of candidates) {
      assert.ok(localizedIndexMain.includes(`href="${repositoryUrl}"`), `${locale} index includes ${repositoryUrl}`);
      assert.ok(localizedHomeMain.includes(`href="${repositoryUrl}"`), `${locale} home includes ${repositoryUrl}`);
    }
    assert.match(mainContent(localizedTopic), new RegExp(`href="/${prefix}awesome/"`));
    assert.match(mainContent(localizedTopic), new RegExp(`href="/${prefix}awesome/awesome-github-profile-readme/"`));
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
    for (const [language, alternatePath] of expectedHomeAlternates) {
      assert.ok(localizedHome.includes(
        `rel="alternate" hreflang="${language}" href="${siteUrl}/${alternatePath}"`,
      ));
    }
    for (const alternate of expectedAlternateLocales) {
      assert.match(localizedIndex, new RegExp(`hreflang="${alternate}"`));
      assert.match(localizedTopic, new RegExp(`hreflang="${alternate}"`));
    }
    assert.ok(localizedHome.includes(`rel="canonical" href="${siteUrl}/${prefix}"`));
    assert.match(localizedHome, new RegExp(`data-href="/${prefix}"`));
    for (const html of [localizedHome, localizedCollection, localizedIndex, localizedTopic]) {
      assert.equal((html.match(/class="hagilight-site-links\b/gu) ?? []).length, 1);
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
      collections.map(({ route }) => `${siteUrl}/${prefix}${route}/`).sort(),
    );
    for (const { route } of collections) {
      assert.equal(contentLinks(localizedIndex).filter(({ href }) => href === `/${prefix}${route}/`).length, 1);
      assert.equal(contentLinks(localizedHome).filter(({ href }) => href === `/${prefix}${route}/`).length, 1);
      assert.match(sitemapXml, new RegExp(`${siteUrl}/${prefix}${route}/`));
    }
    const expectedSidebarTitles = new Map();
    for (const collection of collections) {
      if (locale === "root") {
        expectedSidebarTitles.set(collection.id, collection.title);
      } else {
        const translation = JSON.parse(await readFile(
          path.join(root, `content/awesome/${collection.id}/translations.json`),
          "utf8",
        ));
        expectedSidebarTitles.set(collection.id, translation.translations[locale].title);
      }
    }
    for (const [pageIndex, sidebar] of localizedSidebars.entries()) {
      const articleSidebarLinks = linksIn(sidebar).filter(({ href }) =>
        collections.some(({ route }) => href === `/${prefix}${route}/`));
      assert.equal(articleSidebarLinks.length, collections.length, `${locale} sidebar ${pageIndex} has all articles`);
      assert.equal(
        linksIn(sidebar).some(({ href }) => href?.startsWith("https://github.com/")),
        false,
      );
      assert.match(sidebar, new RegExp(`href="/${prefix}awesome/"`));
      for (const collection of collections) {
        assert.ok(
          articleSidebarLinks.some(({ href, label }) =>
            href === `/${prefix}${collection.route}/` && label === expectedSidebarTitles.get(collection.id)),
          `${locale} sidebar ${pageIndex} uses the localized title for ${collection.id}`,
        );
      }
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
        assert.equal(contentLinks(topicPage).filter(({ href }) => href === `/${prefix}${route}/`).length, 1);
      }
      for (const { route } of collections.filter(({ catalog, tags = [] }) => {
        const effectiveTags = [
          ...(Array.isArray(catalog) ? catalog : [catalog]),
          ...(Array.isArray(tags) ? tags : [tags]),
        ];
        return !effectiveTags.includes(topic);
      })) {
        assert.equal(contentLinks(topicPage).filter(({ href }) => href === `/${prefix}${route}/`).length, 0);
      }
    }
  }

  const pagefindFiles = await readdir(path.join(root, "dist/pagefind"));
  for (const [locale] of locales) {
    assert.ok(pagefindFiles.some((file) => file.startsWith(`pagefind.${locale.toLowerCase()}_`)));
  }
});

test("production sidebars include all localized topic links", async () => {
  const collections = JSON.parse(await readFile(path.join(root, "content/awesome/collections.json"), "utf8"));
  const catalogs = JSON.parse(await readFile(path.join(root, "content/awesome/catalogs.json"), "utf8"));
  const topics = [...new Set(collections.flatMap(({ catalog, tags = [] }) => [
    ...(Array.isArray(catalog) ? catalog : [catalog]),
    ...(Array.isArray(tags) ? tags : [tags]),
  ]))].sort();
  const locales = ["root", "zh-CN", "zh-Hant", "fr-FR", "de-DE", "es-ES", "ja-JP", "ko-KR", "pt-BR", "ru-RU"];
  const routes = [
    "awesome/awesome-github-profile-readme",
    "awesome",
    "awesome/tags/github-profile-readme",
  ];

  for (const locale of locales) {
    const prefix = locale === "root" ? "" : `${locale}/`;
    for (const route of routes) {
      const html = await readFile(path.join(root, "dist", `${prefix}${route}/index.html`), "utf8");
      const topicLinks = linksIn(sidebarContent(html)).filter(({ href }) => href?.includes("/awesome/tags/"));
      assert.equal(topicLinks.length, topics.length, `${locale} ${route} sidebar has all topics`);
      for (const topic of topics) {
        assert.ok(
          topicLinks.some(({ href, label }) =>
            href === `/${prefix}awesome/tags/${topic}/` && label === catalogs[topic].labels[locale]),
          `${locale} ${route} sidebar localizes topic ${topic}`,
        );
      }
    }
  }
});

test("generated homepages validate while authored content keeps its title requirement", async () => {
  const fixture = path.join(root, "src/content/docs/pipeline-invalid-authored-fixture.md");
  const env = { ...process.env, SITE_URL: siteUrl };

  try {
    await writeFile(fixture, "---\ndescription: Invalid authored fixture\n---\n", { flag: "wx" });
    const invalid = spawnSync("npm", ["run", "check"], {
      cwd: root,
      env,
      encoding: "utf8",
    });
    assert.notEqual(invalid.status, 0);
    assert.match(`${invalid.stdout}${invalid.stderr}`, /pipeline-invalid-authored-fixture|title/u);
  } finally {
    await rm(fixture, { force: true });
  }
});
