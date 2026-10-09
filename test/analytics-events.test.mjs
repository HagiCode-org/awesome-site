import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { gaEventAttributes, handleGaClick } from "@hagicode/hagilight-core/analytics-events";
import { locales } from "@hagicode/hagilight-starlight/locales";
import {
  analyticsLocations,
  COLLECTION_GROUP,
  COLLECTION_LIST,
  HOME_HERO,
  OUTBOUND_CANDIDATE_LIST,
  OUTBOUND_COLLECTION_CONTENT,
  OUTBOUND_OTHER,
  OUTBOUND_WARNING_CONTINUE,
  TOPIC_NAV,
  TOPIC_RAIL,
} from "../src/analytics-locations.mjs";
import { classifyExternalLink } from "../src/external-link-policy.mjs";
import { installOutboundTracking } from "../src/outbound-tracking.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const tagNames = ["data-ga-category", "data-ga-label", "data-ga-location", "data-ga-url", "data-awesome-outbound"];

class FixtureAnchor {
  constructor(href, { containers = [], attributes = {} } = {}) {
    this.tagName = "A";
    this.containers = containers;
    this.attributes = new Map(Object.entries(attributes));
    this.focused = false;
    if (href !== null) this.attributes.set("href", href);
  }
  matches(selector) { return selector === "a[href]" && this.attributes.has("href"); }
  closest(selector) {
    if (this.matches(selector)) return this;
    return this.containers.includes(selector) ? { tagName: "DIV" } : null;
  }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  hasAttribute(name) { return this.attributes.has(name); }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  removeAttribute(name) { this.attributes.delete(name); }
  focus() { this.focused = true; }
  get href() { return this.getAttribute("href"); }
  tags() {
    return Object.fromEntries(tagNames.filter((name) => this.hasAttribute(name)).map((name) => [name, this.getAttribute(name)]));
  }
  untagged() {
    return [...this.attributes].filter(([name]) => !tagNames.includes(name));
  }
}

function makeEvent(target, path = [target]) {
  return {
    target,
    prevented: false,
    stopped: false,
    composedPath: () => path,
    preventDefault() { this.prevented = true; },
    stopPropagation() { this.stopped = true; },
  };
}

function fixture(classify) {
  const listeners = [];
  const document = { baseURI: "https://site.example/base/" };
  const window = {
    location: { origin: "https://site.example" },
    addEventListener: (...args) => listeners.push(args),
  };
  const controller = classify ? installOutboundTracking(document, window, classify) : installOutboundTracking(document, window);
  const click = (anchor) => {
    const event = makeEvent(anchor);
    controller.handle(event);
    return event;
  };
  return { document, window, listeners, controller, click };
}

const candidate = { containers: [".awesome-more", ".sl-markdown-content"] };
const content = { containers: [".sl-markdown-content"] };
const warning = { containers: [".awesome-external-warning"] };

test("location constants are unique, match the spec table, and are valid gaEventAttributes locations", () => {
  assert.deepEqual([...analyticsLocations], [
    "home_hero", "topic_rail", "collection_group", "collection_list", "topic_nav",
    "outbound_candidate_list", "outbound_collection_content", "outbound_warning_continue", "outbound_other",
  ]);
  assert.deepEqual(
    [HOME_HERO, TOPIC_RAIL, COLLECTION_GROUP, COLLECTION_LIST, TOPIC_NAV,
      OUTBOUND_CANDIDATE_LIST, OUTBOUND_COLLECTION_CONTENT, OUTBOUND_WARNING_CONTINUE, OUTBOUND_OTHER],
    [...analyticsLocations],
  );
  assert.equal(new Set(analyticsLocations).size, analyticsLocations.length);
  for (const location of analyticsLocations) {
    assert.ok(location.trim());
    assert.deepEqual(gaEventAttributes({ category: "navigation", label: "label", location }), {
      "data-ga-category": "navigation",
      "data-ga-label": "label",
      "data-ga-location": location,
    });
  }
});

test("the tagger binds one capture-phase click listener on window per document", () => {
  const f = fixture();
  assert.equal(f.listeners.length, 1);
  assert.equal(f.listeners[0][0], "click");
  assert.equal(f.listeners[0][1], f.controller.handle);
  assert.equal(f.listeners[0][2], true);
  assert.equal(installOutboundTracking(f.document, f.window), f.controller);
  assert.equal(f.listeners.length, 1);

  const other = fixture();
  assert.notEqual(other.controller, f.controller);
  assert.equal(other.listeners.length, 1);
});

test("outbound anchors are tagged with the destination hostname and their container's location", () => {
  const f = fixture();
  const cases = [
    [new FixtureAnchor("https://github.com/owner/repo", candidate), "github.com", OUTBOUND_CANDIDATE_LIST],
    [new FixtureAnchor("https://example.org/page?x=1#top", content), "example.org", OUTBOUND_COLLECTION_CONTENT],
    [new FixtureAnchor("https://elsewhere.example/", { containers: [] }), "elsewhere.example", OUTBOUND_OTHER],
    [new FixtureAnchor("//scheme-relative.example/path", content), "scheme-relative.example", OUTBOUND_COLLECTION_CONTENT],
    [new FixtureAnchor("https://site.example:444/other-port", content), "site.example", OUTBOUND_COLLECTION_CONTENT],
    [new FixtureAnchor("http://site.example/insecure", content), "site.example", OUTBOUND_COLLECTION_CONTENT],
  ];
  for (const [anchor, label, location] of cases) {
    f.click(anchor);
    assert.deepEqual(anchor.tags(), {
      "data-ga-category": "navigation",
      "data-ga-label": label,
      "data-ga-location": location,
      "data-awesome-outbound": "",
    }, anchor.href);
  }
});

test("non-outbound destinations get no tag", () => {
  const f = fixture();
  const credentialed = new URL("https://outside.example/path");
  credentialed.username = "reader";
  credentialed.password = "value";
  for (const href of [
    "/local/path", "#section", "?q=value", "https://site.example/absolute", "https://site.example:443/explicit",
    "mailto:hello@example.org", "tel:+15551234567", "ftp://files.example/file",
    credentialed.href, "https://[invalid", "//[invalid",
  ]) {
    const anchor = new FixtureAnchor(href, content);
    f.click(anchor);
    assert.deepEqual(anchor.tags(), {}, href);
  }

  const noAnchor = makeEvent({ tagName: "DIV" });
  assert.doesNotThrow(() => f.controller.handle(noAnchor));
  const empty = new FixtureAnchor("", content);
  f.click(empty);
  assert.deepEqual(empty.tags(), {});
});

test("the reused continue anchor is re-evaluated on every click", () => {
  const f = fixture();
  const anchor = new FixtureAnchor("https://first.example/a", warning);
  f.click(anchor);
  assert.deepEqual(anchor.tags(), {
    "data-ga-category": "navigation",
    "data-ga-label": "first.example",
    "data-ga-location": OUTBOUND_WARNING_CONTINUE,
    "data-awesome-outbound": "",
  });

  anchor.setAttribute("href", "https://second.example/b");
  f.click(anchor);
  assert.equal(anchor.getAttribute("data-ga-label"), "second.example");
  assert.equal(anchor.getAttribute("data-ga-location"), OUTBOUND_WARNING_CONTINUE);

  anchor.setAttribute("href", "");
  f.click(anchor);
  assert.deepEqual(anchor.tags(), {});

  anchor.setAttribute("href", "https://third.example/c");
  f.click(anchor);
  assert.equal(anchor.getAttribute("data-ga-label"), "third.example");
  anchor.setAttribute("href", "/back-on-the-site");
  f.click(anchor);
  assert.deepEqual(anchor.tags(), {});
});

test("anchors tagged elsewhere keep their tags and are never marked", () => {
  const f = fixture();
  const built = new FixtureAnchor("https://github.com/HagiCode-org/site", {
    containers: [".sl-markdown-content"],
    attributes: { "data-ga-category": "community", "data-ga-label": "github", "data-ga-location": "footer" },
  });
  const labelOnly = new FixtureAnchor("https://example.org/", { attributes: { "data-ga-label": "custom" } });
  const internalHero = new FixtureAnchor("/awesome/", {
    attributes: { "data-ga-category": "navigation", "data-ga-label": "exploreCollections", "data-ga-location": HOME_HERO },
  });
  const before = [built, labelOnly, internalHero].map((anchor) => anchor.tags());
  for (const anchor of [built, labelOnly, internalHero]) f.click(anchor);
  assert.deepEqual([built, labelOnly, internalHero].map((anchor) => anchor.tags()), before);
  for (const anchor of [built, labelOnly, internalHero]) assert.equal(anchor.hasAttribute("data-awesome-outbound"), false);
});

test("the injected classifier receives the document base, the origin, and empty allowlists", () => {
  const calls = [];
  const f = fixture((href, context) => {
    calls.push([href, context]);
    return classifyExternalLink(href, context);
  });
  const anchor = new FixtureAnchor("https://trusted.example/page", content);
  f.click(anchor);
  assert.deepEqual(calls, [[
    "https://trusted.example/page",
    { baseUrl: "https://site.example/base/", origin: "https://site.example", allowlist: [], domainAllowlist: [] },
  ]]);
  assert.equal(anchor.getAttribute("data-ga-label"), "trusted.example");
});

test("links to the trusted domain skip the warning but are still reported as outbound", () => {
  const f = fixture();
  const anchor = new FixtureAnchor("https://docs.hagicode.com/guide", content);
  f.click(anchor);
  assert.equal(classifyExternalLink("https://docs.hagicode.com/guide", {
    baseUrl: "https://site.example/base/", origin: "https://site.example",
  }).type, "bypass");
  assert.equal(anchor.getAttribute("data-ga-label"), "docs.hagicode.com");
  assert.equal(anchor.hasAttribute("data-awesome-outbound"), true);
});

test("tagging never touches the event, the destination, or focus, and failures are swallowed", () => {
  const f = fixture();
  const anchor = new FixtureAnchor("https://outside.example/path", {
    containers: [".sl-markdown-content"],
    attributes: { target: "_blank", rel: "noopener", download: "file.zip" },
  });
  const before = anchor.untagged();
  const event = f.click(anchor);
  assert.equal(event.prevented, false);
  assert.equal(event.stopped, false);
  assert.deepEqual(anchor.untagged(), before);
  assert.equal(anchor.focused, false);

  const throwing = fixture(() => { throw new Error("classifier failure"); });
  const target = new FixtureAnchor("https://outside.example/path", content);
  assert.doesNotThrow(() => throwing.click(target));
  assert.deepEqual(target.tags(), {});

  const brokenPath = { target: anchor, composedPath() { throw new Error("no path"); } };
  assert.doesNotThrow(() => f.controller.handle(brokenPath));

  const fallback = new FixtureAnchor("https://fallback.example/", content);
  f.controller.handle({ target: fallback });
  assert.equal(fallback.getAttribute("data-ga-label"), "fallback.example");
  assert.doesNotThrow(() => f.controller.handle({}));
});

test("the tagged click reaches the real Hagilight reporter as one link_click event", () => {
  const f = fixture();
  const report = (anchor, path = [anchor]) => {
    const event = makeEvent(anchor, path);
    f.controller.handle(event);
    const sent = [];
    handleGaClick(event, (action, params) => sent.push([action, params]));
    return sent;
  };
  const expected = (label, location, url) => [["link_click", {
    event_category: "navigation",
    event_label: label,
    link_location: location,
    link_url: url,
    transport_type: "beacon",
  }]];

  const candidateLink = new FixtureAnchor("https://github.com/owner/repo", candidate);
  assert.deepEqual(report(candidateLink), expected("github.com", OUTBOUND_CANDIDATE_LIST, "https://github.com/owner/repo"));

  const contentLink = new FixtureAnchor("https://example.org/doc?x=1", content);
  assert.deepEqual(
    report(contentLink, [{ tagName: "SPAN" }, contentLink, { tagName: "MAIN" }]),
    expected("example.org", OUTBOUND_COLLECTION_CONTENT, "https://example.org/doc?x=1"),
  );

  const continueLink = new FixtureAnchor("https://github.com/owner/repo", warning);
  assert.deepEqual(report(continueLink), expected("github.com", OUTBOUND_WARNING_CONTINUE, "https://github.com/owner/repo"));

  const internal = new FixtureAnchor("/awesome/awesome-go/", content);
  assert.deepEqual(report(internal, [internal, { tagName: "MAIN" }]), []);

  const hero = new FixtureAnchor("/awesome/", {
    attributes: { "data-ga-category": "navigation", "data-ga-label": "exploreCollections", "data-ga-location": HOME_HERO },
  });
  assert.deepEqual(report(hero), expected("exploreCollections", HOME_HERO, "/awesome/"));
});

const homePath = (locale) => path.join(root, "dist", locale === "root" ? "" : locale, "index.html");

function tagged(html, location) {
  return [...html.matchAll(/<a\b[^>]*>/gu)]
    .map(([tag]) => ({
      tag,
      category: tag.match(/\bdata-ga-category="([^"]*)"/u)?.[1],
      label: tag.match(/\bdata-ga-label="([^"]*)"/u)?.[1],
      location: tag.match(/\bdata-ga-location="([^"]*)"/u)?.[1],
      href: tag.match(/\bhref="([^"]*)"/u)?.[1],
      topic: tag.match(/\bdata-topic="([^"]*)"/u)?.[1],
    }))
    .filter((link) => link.location === location);
}

function balanced(html, startToken, open, close) {
  const start = html.indexOf(startToken);
  assert.ok(start >= 0, `expected ${startToken} in built HTML`);
  let depth = 1;
  let position = start + startToken.length;
  while (depth > 0) {
    const nextOpen = html.indexOf(open, position);
    const nextClose = html.indexOf(close, position);
    assert.ok(nextClose >= 0, `unterminated ${startToken} in built HTML`);
    if (nextOpen >= 0 && nextOpen < nextClose) {
      depth += 1;
      position = nextOpen + open.length;
    } else {
      depth -= 1;
      position = nextClose + close.length;
    }
  }
  return html.slice(start, position);
}

test("built home page tags the hero, topic rail, groups, and collection entries", async () => {
  const html = await readFile(homePath("root"), "utf8");
  const hero = tagged(html, HOME_HERO);
  assert.deepEqual(hero.map(({ label }) => label), ["exploreCollections", "startBrowsing"]);
  assert.deepEqual(hero.map(({ href }) => href), ["/awesome/", "#awesome-start"]);

  const rail = tagged(html, TOPIC_RAIL);
  assert.ok(rail.length > 1);
  assert.equal(rail[0].label, "allTopics");
  assert.equal(rail[0].topic, "");
  for (const link of rail.slice(1)) {
    assert.equal(link.label, link.topic);
    assert.equal(link.href, `/awesome/tags/${link.topic}/`);
  }

  const groups = tagged(html, COLLECTION_GROUP);
  assert.ok(groups.length > 0);
  for (const link of groups) assert.equal(link.href, `/awesome/tags/${link.label}/`);

  const entries = tagged(html, COLLECTION_LIST);
  assert.ok(entries.length > 0);
  assert.equal(new Set(entries.map(({ label }) => label)).size, entries.length);
  for (const link of [...hero, ...rail, ...groups, ...entries]) assert.equal(link.category, "navigation");
  assert.equal(tagged(html, TOPIC_NAV).length, 0);
});

test("built collection pages tag the topic navigation and leave content links untagged", async () => {
  const collections = JSON.parse(await readFile(path.join(root, "content/awesome/collections.json"), "utf8"));
  const html = await readFile(path.join(root, "dist/awesome", collections[0].id, "index.html"), "utf8");
  const nav = balanced(html, '<nav class="awesome-topic-nav"', "<nav", "</nav>");
  const links = tagged(nav, TOPIC_NAV);
  assert.ok(links.length > 0);
  assert.equal((nav.match(/<a\b/gu) ?? []).length, links.length);
  for (const link of links) {
    assert.equal(link.category, "navigation");
    assert.equal(link.href, `/awesome/tags/${link.label}/`);
  }

  const body = balanced(html, '<div class="sl-markdown-content"', "<div", "</div>");
  const anchors = body.match(/<a\b[^>]*>/gu) ?? [];
  assert.ok(anchors.length > 0);
  assert.ok(anchors.some((tag) => /\bhref="https?:\/\//u.test(tag)));
  assert.equal(anchors.filter((tag) => /\bdata-ga-/u.test(tag)).length, 0);
});

test("built candidate list links carry no build-time tag", async () => {
  const html = await readFile(homePath("root"), "utf8");
  const more = balanced(html, '<details class="awesome-more"', "<details", "</details>");
  const anchors = more.match(/<a\b[^>]*>/gu) ?? [];
  assert.ok(anchors.length > 0);
  assert.equal(anchors.filter((tag) => /\bdata-(?:ga-|awesome-outbound)/u.test(tag)).length, 0);
});

test("every locale home page reports the same labels, and the 404 page loads no Google Analytics", async () => {
  const signature = (html) => [HOME_HERO, TOPIC_RAIL, COLLECTION_GROUP, COLLECTION_LIST]
    .map((location) => tagged(html, location).map(({ label }) => label).sort());
  const baseline = signature(await readFile(homePath("root"), "utf8"));
  for (const labels of baseline) assert.ok(labels.length > 0, "the root home page must carry tags");
  assert.equal(Object.keys(locales).length, 10);
  for (const locale of Object.keys(locales)) {
    assert.deepEqual(signature(await readFile(homePath(locale), "utf8")), baseline, locale);
  }

  const notFound = await readFile(path.join(root, "dist/404.html"), "utf8");
  assert.doesNotMatch(notFound, /googletagmanager\.com\/gtag\/js/u);
});
