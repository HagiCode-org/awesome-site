// Shared continuation helper for the awesome-ios translations (scratch; removed after completion).
// Usage from the site root:
//   node content/awesome/awesome-ios/locales/.translate.mjs status <locale>
//   node content/awesome/awesome-ios/locales/.translate.mjs check <locale> <startLine> <candidateFile>
//   node content/awesome/awesome-ios/locales/.translate.mjs finish <locale>
import { readFileSync, writeFileSync, existsSync, renameSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, "../../../..");
const sourcePath = path.join(siteRoot, "sources/awesome-ios/README.md");

const source = readFileSync(sourcePath, "utf8").replace(/\n$/u, "").split("\n");
const mode = process.argv[2] ?? "";
const locale = process.argv[3] ?? "";

const progressPath = (id) => path.join(here, `.${id}.progress.md`);

function readProgress(id) {
  const p = progressPath(id);
  if (!existsSync(p)) return [];
  return readFileSync(p, "utf8").replace(/\n$/u, "").split("\n");
}

function destSpans(line) {
  const spans = [];
  let i = 0;
  while (true) {
    const j = line.indexOf("](", i);
    if (j < 0) return spans;
    let k = j + 2;
    let depth = 1;
    while (k < line.length) {
      const c = line[k];
      if (c === "\\") { k += 2; continue; }
      if (c === "(") depth += 1;
      else if (c === ")") {
        depth -= 1;
        if (depth === 0) break;
      }
      k += 1;
    }
    if (depth !== 0) return spans;
    spans.push([j + 2, k]);
    i = k + 1;
  }
}

const dests = (line) => destSpans(line).map(([a, b]) => line.slice(a, b));

function attrValues(line, names) {
  const out = [];
  const re = new RegExp(`\\b(?:${names})\\s*=\\s*"([^"]*)"`, "gu");
  for (const m of line.matchAll(re)) out.push(m[1]);
  return out.sort();
}

function bareUrls(line) {
  let scrubbed = line;
  for (const [a, b] of [...destSpans(line)].reverse()) {
    scrubbed = scrubbed.slice(0, a) + scrubbed.slice(b);
  }
  scrubbed = scrubbed.replace(/\b(?:href|src)\s*=\s*"[^"]*"/gu, "");
  return [...scrubbed.matchAll(/https?:\/\/[^\s<>)\]"']+/gu)].map((m) => m[0].replace(/[.,:;!?*_~]+$/u, "")).sort();
}

const codeSpans = (line) => [...line.matchAll(/`[^`]+`/gu)].map((m) => m[0]).sort();
const tagNames = (line) => [...line.matchAll(/<\/?([a-zA-Z][a-zA-Z0-9]*)/gu)].map((m) => m[1]).join(",");
const countChar = (line, ch) => line.split(ch).length - 1;
const prefixOf = (line) => /^(\s*(?:[-*+]\s|\d+\.\s|#{1,6}\s|>\s?)?)/u.exec(line)[0];
const cjk = /[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff\uac00-\ud7af]/u;
const zhLike = (id) => id.startsWith("zh") || id === "ja-JP" || id === "ko-KR";

function hasProseBeyondLink(line) {
  const stripped = line.replace(/^\s*[-*+]\s+\[[^\]]*\]\([^)]*\)/u, ")").replace(/\*\*\[.*\]\([^)]*\)\*\*/u, "");
  return /\)\s*[-–—:]?\s*\S/u.test(stripped) || !/^\s*[-*+]\s+\[[^\]]*\]\([^)]*\)\s*$/u.test(line);
}

function validateChunk(id, start, candidateLines) {
  const errors = [];
  const warnings = [];
  const end = start + candidateLines.length - 1;
  if (end > source.length) errors.push(`range ${start}-${end} exceeds source length ${source.length}`);
  for (let offset = 0; offset < candidateLines.length; offset += 1) {
    const n = start + offset;
    if (n > source.length) break;
    const s = source[n - 1];
    const t = candidateLines[offset];
    const where = `line ${n}`;
    if (s.trim() === "") {
      if (t !== s) errors.push(`${where}: blank line must be copied verbatim`);
      continue;
    }
    if (t.trim() === "") { errors.push(`${where}: translated line is blank`); continue; }
    if (prefixOf(s) !== prefixOf(t)) errors.push(`${where}: line prefix ${JSON.stringify(prefixOf(s))} != ${JSON.stringify(prefixOf(t))}`);
    if (JSON.stringify(dests(s).sort()) !== JSON.stringify(dests(t).sort())) {
      errors.push(`${where}: markdown link destinations differ\n  src: ${s.slice(0, 160)}\n  got: ${t.slice(0, 160)}`);
    }
    if (JSON.stringify(attrValues(s, "href|src")) !== JSON.stringify(attrValues(t, "href|src"))) {
      errors.push(`${where}: href/src attributes differ`);
    }
    if (JSON.stringify(bareUrls(s)) !== JSON.stringify(bareUrls(t))) {
      errors.push(`${where}: bare URLs differ\n  src: ${s.slice(0, 160)}\n  got: ${t.slice(0, 160)}`);
    }
    if (JSON.stringify(codeSpans(s)) !== JSON.stringify(codeSpans(t))) errors.push(`${where}: inline code spans differ`);
    if (countChar(s, "`") !== countChar(t, "`")) errors.push(`${where}: backtick count differs`);
    if (countChar(s, "*") !== countChar(t, "*")) errors.push(`${where}: asterisk count differs`);
    if (tagNames(s) !== tagNames(t)) errors.push(`${where}: HTML tag sequence differs`);
    if (t === s) {
      if (hasProseBeyondLink(s)) warnings.push(`${where}: identical to source (prose?) ${s.slice(0, 120)}`);
    } else if (zhLike(id) && !cjk.test(t) && hasProseBeyondLink(s)) {
      warnings.push(`${where}: no CJK characters in prose line ${t.slice(0, 120)}`);
    }
  }
  return { errors, warnings, end };
}

function cmdStatus(id) {
  const progress = readProgress(id);
  console.log(`${id}: ${progress.length}/${source.length} lines covered`);
}

function cmdReport(id) {
  const progress = readProgress(id);
  const suspicious = [];
  for (let i = 0; i < progress.length; i += 1) {
    if (progress[i] === source[i] && progress[i].trim() && hasProseBeyondLink(source[i])) {
      suspicious.push(i + 1);
    }
  }
  console.log(suspicious.length ? suspicious.join("\n") : "clean");
}

function cmdFix(id, lineArg, fileArg) {
  const lineNo = Number(lineArg);
  if (!Number.isSafeInteger(lineNo) || lineNo < 1 || lineNo > source.length) {
    throw new Error("line number out of range");
  }
  const progress = readProgress(id);
  if (lineNo > progress.length) throw new Error(`progress has only ${progress.length} lines`);
  const replacement = readFileSync(fileArg, "utf8").replace(/\n$/u, "");
  if (replacement.includes("\n")) throw new Error("replacement must be exactly one line");
  const { errors } = validateChunk(id, lineNo, [replacement]);
  if (errors.length) {
    console.log(`ERRORS:`);
    for (const e of errors) console.log(`  ${e}`);
    process.exit(1);
  }
  progress[lineNo - 1] = replacement;
  writeFileSync(progressPath(id), `${progress.join("\n")}\n`);
  console.log(`OK ${id}: fixed line ${lineNo}`);
}

function cmdCheck(id, startArg, fileArg) {
  const start = Number(startArg);
  if (!Number.isSafeInteger(start) || start < 1) throw new Error("start line must be a positive integer");
  const progress = readProgress(id);
  if (start !== progress.length + 1) {
    throw new Error(`progress file has ${progress.length} lines; expected start ${progress.length + 1}, got ${start}`);
  }
  const candidate = readFileSync(fileArg, "utf8");
  const candidateLines = candidate.replace(/\n$/u, "").split("\n");
  const { errors, warnings, end } = validateChunk(id, start, candidateLines);
  for (const w of warnings) console.log(`WARN ${w}`);
  if (errors.length) {
    console.log(`ERRORS (${errors.length}):`);
    for (const e of errors.slice(0, 100)) console.log(`  ${e}`);
    process.exit(1);
  }
  writeFileSync(progressPath(id), `${progress.concat(candidateLines).join("\n")}\n`);
  console.log(`OK ${id}: appended ${start}-${end}; progress now ${end}/${source.length}`);
}

async function cmdFinish(id) {
  const progress = readProgress(id);
  if (progress.length !== source.length) {
    console.log(`${id}: progress has ${progress.length} lines, source has ${source.length}; not ready`);
    process.exit(1);
  }
  const { inspectMarkdown, assertEquivalentStructure } = await import(
    path.join(siteRoot, "src/plugins/awesome-content.mjs")
  );
  const body = `${progress.join("\n")}\n`;
  const sourceText = readFileSync(sourcePath, "utf8");
  if (body.trim() === sourceText.trim()) throw new Error("translation identical to source");
  const options = { collectionId: "awesome-ios", readmePath: "README.md" };
  const sourceStructure = inspectMarkdown(sourceText, options);
  const structure = inspectMarkdown(body, options);
  assertEquivalentStructure(sourceStructure, structure, { collectionId: "awesome-ios", locale: id });
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
  const identical = sourceText.replace(/\n$/u, "").split("\n")
    .filter((line, index) => line.trim() && line === progress[index]).length;
  console.log(`structure OK: headings=${structure.headings.length} lists=${structure.lists.length} targets=${structure.targets.length} identicalNonBlankLines=${identical}`);
  const finalPath = path.join(here, `${id}.md`);
  const staging = `${finalPath}.staging`;
  writeFileSync(staging, body);
  renameSync(staging, finalPath);
  console.log(`wrote ${path.relative(siteRoot, finalPath)}`);
}

const id = mode === "status" || mode === "check" || mode === "finish" || mode === "report" || mode === "fix"
  ? locale
  : undefined;
if (!id) throw new Error("usage: .translate.mjs <status|report|fix|check|finish> <locale> [args]");
if (mode === "status") cmdStatus(id);
else if (mode === "report") cmdReport(id);
else if (mode === "fix") cmdFix(id, process.argv[4], process.argv[5]);
else if (mode === "check") cmdCheck(id, process.argv[4], process.argv[5]);
else if (mode === "finish") await cmdFinish(id);
