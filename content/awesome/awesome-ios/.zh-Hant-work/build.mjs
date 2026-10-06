import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  assertEquivalentStructure,
  inspectMarkdown,
} from "../../../../src/plugins/awesome-content.mjs";

const work = path.dirname(new URL(import.meta.url).pathname);
const finalPath = path.resolve(work, "../locales/zh-Hant.md");
const writeFinal = process.argv.includes("--final");
const source = await readFile("sources/awesome-ios/README.md", "utf8");
const skeleton = (await readFile(path.join(work, "skeleton.md"), "utf8")).replace(/\n$/u, "").split("\n");
const urls = JSON.parse(await readFile(path.join(work, "urls.json"), "utf8"));
const total = skeleton.length;

const parts = (await readdir(work))
  .map((name) => /^p(\d{4})-(\d{4})\.md$/u.exec(name))
  .filter(Boolean)
  .map((match) => ({ name: match[0], start: Number(match[1]), end: Number(match[2]) }))
  .sort((a, b) => a.start - b.start);

const errors = [];
const translated = new Array(total).fill(null);
for (const part of parts) {
  const text = (await readFile(path.join(work, part.name), "utf8")).replace(/\n$/u, "");
  const lines = text.split("\n");
  const expected = part.end - part.start + 1;
  if (lines.length !== expected) {
    errors.push(`${part.name}: has ${lines.length} lines, expected ${expected}`);
    continue;
  }
  lines.forEach((line, index) => {
    const lineNo = part.start + index;
    if (translated[lineNo - 1] !== null) errors.push(`${part.name}: overlaps line ${lineNo}`);
    translated[lineNo - 1] = line;
  });
}

const destinations = (line) => [...line.matchAll(/\]\(([^)]*)\)/gu)].map((m) => m[1]).sort();
const codeSpans = (line) => [...line.matchAll(/`[^`]+`/gu)].map((m) => m[0]).sort();
const tags = (line) => [...line.matchAll(/<\/?([a-zA-Z][a-zA-Z0-9]*)/gu)].map((m) => m[1]).join(",");
const prefix = (line) => /^\s*(?:[-*+]\s+|#{1,6}\s+)?/u.exec(line)[0];
const count = (line, char) => line.split(char).length - 1;
const cjk = /[\u3400-\u9fff\uf900-\ufaff]/u;
const sourceLines = source.replace(/\n$/u, "").split("\n");

const untranslated = [];
const usedPlaceholders = new Map();
for (let i = 0; i < total; i += 1) {
  const tr = translated[i];
  if (tr === null) continue;
  const sk = skeleton[i];
  const where = `line ${i + 1}`;
  if (sk.trim() === "" || tr.trim() === "") {
    if (sk !== tr) errors.push(`${where}: blank line mismatch`);
    continue;
  }
  if (prefix(sk) !== prefix(tr)) errors.push(`${where}: prefix ${JSON.stringify(prefix(sk))} != ${JSON.stringify(prefix(tr))}`);
  if (JSON.stringify(destinations(sk)) !== JSON.stringify(destinations(tr))) {
    errors.push(`${where}: destinations ${JSON.stringify(destinations(sk))} != ${JSON.stringify(destinations(tr))}`);
  }
  if (JSON.stringify(codeSpans(sk)) !== JSON.stringify(codeSpans(tr))) errors.push(`${where}: inline code differs`);
  if (tags(sk) !== tags(tr)) errors.push(`${where}: HTML tags differ`);
  if (count(sk, "*") !== count(tr, "*")) errors.push(`${where}: asterisk count ${count(sk, "*")} != ${count(tr, "*")}`);
  if (count(sk, "`") !== count(tr, "`")) errors.push(`${where}: backtick count differs`);
  for (const url of sk.match(/(?<![("=])https?:\/\/[^\s<)]+/gu) ?? []) {
    const bare = url.replace(/[.,:;!?*_~]+$/u, "");
    if (!tr.includes(bare)) errors.push(`${where}: bare URL ${bare} missing`);
  }
  for (const m of tr.matchAll(/\]\(@(\d+)\)/gu)) {
    usedPlaceholders.set(m[1], (usedPlaceholders.get(m[1]) ?? 0) + 1);
  }
  if (!cjk.test(tr)) untranslated.push(i + 1);
}
for (const [id, uses] of usedPlaceholders) {
  if (uses !== 1) errors.push(`placeholder @${id} used ${uses} times`);
}

const covered = translated.filter((line) => line !== null).length;
console.log(`parts=${parts.length} covered=${covered}/${total}`);
const reportUntranslated = untranslated.filter((lineNo) => {
  const sk = skeleton[lineNo - 1];
  return /\)\s*[-–—:]?\s*\S/u.test(sk.replace(/^\s*[-*+]\s+\[[^\]]*\]\([^)]*\)/u, ")")) || !/^\s*[-*+]\s+\[[^\]]*\]\([^)]*\)\s*$/u.test(sk);
});
if (reportUntranslated.length) {
  console.log(`lines without CJK that may need review (${reportUntranslated.length}):`);
  for (const lineNo of reportUntranslated) console.log(`  ${lineNo}: ${translated[lineNo - 1]}`);
}
if (errors.length) {
  console.log(`errors (${errors.length}):`);
  for (const error of errors.slice(0, 200)) console.log(`  ${error}`);
  process.exit(1);
}
if (covered !== total) {
  console.log("partial coverage; skipping assembly");
  process.exit(0);
}

const body = `${translated.map((line) => line.replace(/\]\(@(\d+)\)/gu, (match, id) => {
  const url = urls[Number(id) - 1];
  if (url === undefined) throw new Error(`unknown placeholder @${id}`);
  return `](${url})`;
})).join("\n")}\n`;
if (usedPlaceholders.size !== urls.length) {
  throw new Error(`used ${usedPlaceholders.size} placeholders, expected ${urls.length}`);
}

const options = { collectionId: "awesome-ios", readmePath: "README.md" };
const sourceStructure = inspectMarkdown(source, options);
const structure = inspectMarkdown(body, options);
assertEquivalentStructure(sourceStructure, structure, { collectionId: "awesome-ios", locale: "zh-Hant" });
if (body.trim() === source.trim()) throw new Error("translation identical to source");
const ids = new Set();
sourceStructure.headingDetails.forEach((heading, index) => {
  const sourceId = heading.id;
  const targetId = structure.headingDetails[index].id;
  if (!sourceId || !targetId || ids.has(targetId) || ids.has(sourceId)) {
    throw new Error(`heading anchor collision at "${sourceId}" -> "${targetId}"`);
  }
  ids.add(targetId);
  if (sourceId !== targetId) ids.add(sourceId);
});
const identical = sourceLines.filter((line, index) => line.trim() && line === body.split("\n")[index]).length;
console.log(`structure OK: headings=${structure.headings.length} lists=${structure.lists.length} targets=${structure.targets.length} code=${structure.code.length} identicalNonBlankLines=${identical}`);
await writeFile(path.join(work, "out.md"), body);
if (writeFinal) {
  await writeFile(finalPath, body);
  console.log(`wrote ${path.relative(process.cwd(), finalPath)}`);
}
