// Build helper for ja-JP translation of awesome README batches.
// Strategy: split each source line into a VERBATIM head (markdown markers,
// @@Lx@@/@@Cx@@ tokens, URLs, emoji, connectors) and a prose TAIL (the only
// part that needs translation). The head is copied from source so placeholder
// tokens can never be corrupted. Structure-only lines are emitted verbatim.
//
// Modes:
//   node _ja_build.mjs skeleton <batch>   -> print lines needing translation
//   node _ja_build.mjs build <batch>      -> assemble ja-JP output from trans file
//
// translations file: scripts/_mcp/ja-JP/trans_<batch>.json  { "<line>": "<jp tail>" }

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(root, "..", "..");
const base = join(repoRoot, "scripts/_mcp");
const mode = process.argv[2];
const batch = process.argv[3];

const TOKEN_RE = /@@[LC]\d+@@/g;
function tokens(s) {
  const m = s.match(TOKEN_RE);
  return m ? m.sort() : [];
}

// Split a masked line into { head, tail, structure }
function splitLine(s) {
  // Heading: ## / ### with optional leading emoji + <a ...></a> anchor, human text last
  let m = s.match(/^(#{1,6}\s+)(.*?)([A-Za-z][\w\s'&/\-]*)$/);
  if (m) return { head: m[1] + m[2], tail: m[3], structure: false };

  // List / blockquote entry with a " - " or " – " / " — " connector (last one wins).
  // NBSP (U+00A0) may follow the dash, so allow \s* after the dash glyph.
  m = s.match(/^(.*(?: - | –\s*| —\s*))([\s\S]*)$/);
  if (m) return { head: m[1], tail: m[2], structure: false };

  // Leading token run (e.g. "@@L0@@ is an open protocol...")
  m = s.match(/^((?:@@[LC]\d+@@\s*)+)([\s\S]*)$/);
  if (m) return { head: m[1], tail: m[2], structure: false };

  // Default: whole line is prose
  return { head: "", tail: s, structure: false };
}

function isStructure(tail) {
  if (tail.trim() === "") return true;
  let t = tail;
  t = t.replace(TOKEN_RE, "");
  t = t.replace(/\[![A-Za-z]+\]/g, ""); // callout markers
  t = t.replace(/\]\([^)]*\)/g, ""); // markdown link targets ](\S*)
  t = t.replace(/https?:\/\/\S+/g, ""); // urls
  t = t.replace(/\p{Emoji}/gu, ""); // emoji
  t = t.replace(/[^\p{L}]/gu, ""); // keep only letters
  return t.length === 0;
}

if (mode === "skeleton") {
  const src = JSON.parse(readFileSync(join(base, "zh-CN", `batch_${batch}.json`), "utf8"));
  let n = 0;
  for (const it of src) {
    const { head, tail } = splitLine(it.masked);
    if (isStructure(tail)) continue;
    n++;
    console.error(`L${it.line}\tHEAD[${head}]\tTAIL[${tail}]`);
  }
  console.error(`\n# ${n} lines need translation in batch_${batch}`);
  process.exit(0);
}

if (mode === "build") {
  const src = JSON.parse(readFileSync(join(base, "zh-CN", `batch_${batch}.json`), "utf8"));
  // merge all trans_<batch>*.json chunk files
  const files = readdirSync(join(base, "ja-JP"))
    .filter((f) => new RegExp(`^trans_${batch}.*\\.json$`).test(f))
    .sort();
  let trans = {};
  for (const f of files) {
    const part = JSON.parse(readFileSync(join(base, "ja-JP", f), "utf8"));
    trans = { ...trans, ...part };
  }
  if (files.length === 0) {
    console.error(`No translations files trans_${batch}*.json`);
    process.exit(1);
  }
  console.error(`Loaded translations from: ${files.join(", ")}`);
  const out = [];
  let missing = 0;
  for (const it of src) {
    const { head, tail } = splitLine(it.masked);
    if (isStructure(tail)) {
      out.push({ line: it.line, translated: it.masked });
      continue;
    }
    const key = String(it.line);
    const jp = trans[key];
    if (jp === undefined) {
      console.error(`MISSING translation for line ${it.line}`);
      missing++;
      out.push({ line: it.line, translated: it.masked });
      continue;
    }
    const translated = head + jp;
    // token sanity per line
    const a = tokens(it.masked), b = tokens(translated);
    if (a.length !== b.length || a.some((t, i) => t !== b[i])) {
      console.error(`TOKEN MISMATCH line ${it.line}\n  src: ${it.masked}\n  out: ${translated}`);
    }
    out.push({ line: it.line, translated });
  }
  const outPath = join(base, "ja-JP", `batch_${batch}.translated.json`);
  writeFileSync(outPath, JSON.stringify(out, null, 0));
  console.error(`Wrote ${out.length} lines to ${outPath}; missing=${missing}`);
  process.exit(0);
}

console.error("Usage: node _ja_build.mjs <skeleton|build> <batch>");
process.exit(1);