// LLM-quality French rebuild for fr-FR mcp-servers batches.
// Reads zh-CN source batch (masked lines) + a translation dict
// fr-FR/llm_<batch>.json == { "<line>": "<french tail or full line>" }
// and reconstructs fr-FR/batch_<batch>.translated.json preserving all
// @@Lx@@ / @@Cx@@ tokens, emoji, URLs and connectors (head is copied verbatim).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(root, "..", "..");
const TOKEN_RE = /@@[LC]\d+@@/g;

const batch = process.argv[2];
if (!batch) { console.error("usage: fr_llm_build.mjs <batch>"); process.exit(1); }

function splitLine(s) {
  let m = s.match(/^(#{1,6}\s+)(.*?)([A-Za-z][\w\s'&/\-]*)$/);
  if (m) return { head: m[1] + m[2], tail: m[3] };
  m = s.match(/^(.*(?: - | –\s*| —\s*))([\s\S]*)$/);
  if (m) return { head: m[1], tail: m[2] };
  m = s.match(/^((?:@@[LC]\d+@@\s*)+)([\s\S]*)$/);
  if (m) return { head: m[1], tail: m[2] };
  return { head: "", tail: s };
}
function isStructure(tail) {
  if (tail.trim() === "") return true;
  let t = tail.replace(TOKEN_RE, "").replace(/\[![A-Za-z]+\]/g, "")
    .replace(/\]\([^)]*\)/g, "").replace(/https?:\/\/\S+/g, "")
    .replace(/\p{Emoji}/gu, "").replace(/[^\p{L}]/gu, "");
  return t.length === 0;
}

const src = JSON.parse(readFileSync(join(repoRoot, "scripts/_mcp/zh-CN", `batch_${batch}.json`), "utf8"));
const dict = JSON.parse(readFileSync(join(root, "fr-FR", `llm_${batch}.json`), "utf8"));

const out = [];
let missing = 0, kept = 0;
for (const it of src) {
  const line = String(it.line);
  const { head, tail } = splitLine(it.masked);
  if (isStructure(tail)) { out.push({ line: it.line, translated: it.masked }); kept++; continue; }
  const fr = dict[line];
  if (fr === undefined || fr === null) {
    console.error(`MISSING fr for line ${it.line}`);
    missing++;
    out.push({ line: it.line, translated: it.masked });
    continue;
  }
  out.push({ line: it.line, translated: head + fr });
}
const dir = join(repoRoot, "scripts/_mcp", "fr-FR");
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, `batch_${batch}.translated.json`), JSON.stringify(out));
console.log(`wrote fr-FR/batch_${batch}.translated.json (${out.length} lines; kept-structure=${kept}; missing=${missing})`);
if (missing) process.exit(1);
