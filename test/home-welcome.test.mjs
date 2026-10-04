import assert from "node:assert/strict";
import test from "node:test";
import { locales } from "@hagicode/hagilight-starlight/locales";
import { getWelcomeCopy, welcomeCopy } from "../src/home-copy.mjs";

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
