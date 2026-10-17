import assert from "node:assert/strict";
import test from "node:test";
import { locales } from "@hagicode/hagilight-starlight/locales";
import { browserCopy, getBrowserCopy, getWelcomeCopy, welcomeCopy } from "../src/home-copy.mjs";

test("welcome content covers every configured locale without English fallbacks", () => {
  assert.deepEqual(Object.keys(welcomeCopy).sort(), Object.keys(locales).sort());
  const textKeys = [
    "eyebrow", "title", "intro", "explore", "start", "collections",
    "topics", "languages", "topicTitle", "topicIntro",
  ];
  for (const locale of Object.keys(locales)) {
    const copy = getWelcomeCopy(locale);
    for (const key of textKeys) {
      assert.equal(typeof copy[key], "string");
      assert.ok(copy[key].trim(), `${locale}/${key} is not empty`);
      if (locale !== "root") assert.notEqual(copy[key], welcomeCopy.root[key], `${locale}/${key} is translated`);
    }
    assert.equal(copy.features.length, 3);
    for (const [index, feature] of copy.features.entries()) {
      for (const key of ["title", "body"]) {
        assert.ok(feature[key].trim(), `${locale}/features/${index}/${key} is not empty`);
        if (locale !== "root") assert.notEqual(feature[key], welcomeCopy.root.features[index][key]);
      }
    }
  }
  assert.throws(() => getWelcomeCopy("unknown"), /Unsupported welcome locale/u);
  assert.throws(() => getWelcomeCopy("toString"), /Unsupported welcome locale/u);
});

test("collection browser copy covers every locale with a translated, well-formed count template", () => {
  assert.deepEqual(Object.keys(browserCopy).sort(), Object.keys(locales).sort());
  for (const locale of Object.keys(locales)) {
    const copy = getBrowserCopy(locale);
    for (const [key, value] of Object.entries(copy)) {
      assert.ok(value.trim(), `${locale}/${key} is not empty`);
      if (locale !== "root") assert.notEqual(value, browserCopy.root[key], `${locale}/${key} is translated`);
    }
    assert.deepEqual(Object.keys(copy).sort(), Object.keys(browserCopy.root).sort());
    assert.ok(copy.showing.includes("{shown}") && copy.showing.includes("{total}"), `${locale}/showing has both placeholders`);
  }
  assert.throws(() => getBrowserCopy("toString"), /Unsupported browser locale/u);
});

test("topic map draws one dot per collection, deterministically, without overlap", async () => {
  const { TOPIC_MAP_SIZE, layoutTopicMap } = await import("../src/topic-map.mjs");
  const tagLists = [
    ["ai"], ["ai"], ["ai", "llm"], ["llm"], ["rust"], ["security"], ["security"], ["security"], ["security"], ["go"],
  ];
  const map = layoutTopicMap(tagLists);
  assert.equal(map.nodes.length, 5);
  assert.deepEqual(Object.fromEntries(map.nodes.map(({ topic, count }) => [topic, count])), { security: 4, ai: 3, llm: 2, go: 1, rust: 1 });
  for (const node of map.nodes) assert.equal(node.dots.length, node.count);
  assert.equal(map.nodes.reduce((sum, node) => sum + node.dots.length, 0), 11);
  assert.deepEqual(layoutTopicMap(tagLists), map);
  const half = TOPIC_MAP_SIZE / 2;
  for (const [index, a] of map.nodes.entries()) {
    assert.ok(Math.hypot(a.x - half, a.y - half) + a.r <= half, `${a.topic} stays inside the map`);
    for (const b of map.nodes.slice(index + 1)) {
      assert.ok(Math.hypot(a.x - b.x, a.y - b.y) >= a.r + b.r, `${a.topic} and ${b.topic} do not overlap`);
    }
  }
  assert.deepEqual(layoutTopicMap([]).nodes, []);

  const { estimateLabelWidth, placeLabels } = await import("../src/topic-map.mjs");
  const widths = map.nodes.map(({ topic }) => estimateLabelWidth(topic));
  const places = placeLabels(map.nodes, widths);
  assert.equal(places.length, map.nodes.length);
  for (const place of places) assert.ok(["start", "middle", "end"].includes(place.anchor));
  assert.ok(estimateLabelWidth("网络安全") > estimateLabelWidth("abcd"), "full-width glyphs measure wider");
});
