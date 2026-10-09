// Token-safe French translation pipeline.
// Reads each source batch, translates only natural-language prose, and writes
// fr-FR/batch_XX.translated.json with exact @@Lx@@ / @@Cx@@ tokens preserved.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SKIP, PHRASES, WORDS, HEADING_OVERRIDES, TEXT_OVERRIDES } from "./fr_dict.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(root, "..", "..");
const srcDir = join(repoRoot, "scripts/_mcp", "zh-CN");
const outDir = join(repoRoot, "scripts/_mcp", "fr-FR");
mkdirSync(outDir, { recursive: true });

const TOKEN_RE = /@@[LC]\d+@@/g;

function protectSpecials(text) {
  const saved = [];
  let t = text.replace(/https?:\/\/\S+/g, (m) => { saved.push(m); return "§" + (saved.length - 1) + "§"; });
  t = t.replace(/<[^>]+>/g, (m) => { saved.push(m); return "§" + (saved.length - 1) + "§"; });
  t = t.replace(/\[!?[A-Z][A-Z0-9]*\]/g, (m) => { saved.push(m); return "§" + (saved.length - 1) + "§"; });
  return { t, saved };
}
function restoreSpecials(t, saved) {
  return t.replace(/§(\d+)§/g, (_, i) => saved[+i]);
}
function translateWord(w) {
  const low = w.toLowerCase();
  if (SKIP.has(low)) return w;
  if (WORDS[low] !== undefined) return WORDS[low];
  return w;
}
function wordTranslate(text) {
  const { t, saved } = protectSpecials(text);
  let out = t;
  for (const pair of PHRASES) out = out.replace(pair[0], pair[1]);
  out = out.replace(/[A-Za-z][A-Za-z'’-]*/g, (w) => translateWord(w));
  return restoreSpecials(out, saved);
}
function translateHeading(chunk) {
  const anchorEnd = chunk.lastIndexOf("</a>");
  let prefix, visible;
  if (anchorEnd !== -1) {
    prefix = chunk.slice(0, anchorEnd + 4);
    visible = chunk.slice(anchorEnd + 4);
  } else {
    const m = chunk.match(/^(#+\s)([\s\S]*)$/);
    prefix = m ? m[1] : "";
    visible = m ? m[2] : chunk;
  }
  const key = visible.trim();
  const tr = HEADING_OVERRIDES[key] !== undefined ? HEADING_OVERRIDES[key] : wordTranslate(key);
  return prefix + tr;
}
function translateChunk(chunk) {
  if (!chunk.trim()) return chunk;
  if (/^#+\s/.test(chunk)) return translateHeading(chunk);
  return wordTranslate(chunk);
}
function translateLine(masked) {
  if (TEXT_OVERRIDES[masked] !== undefined) return TEXT_OVERRIDES[masked];
  const tokens = masked.match(TOKEN_RE) || [];
  const texts = masked.split(TOKEN_RE);
  let out = "";
  for (let i = 0; i < texts.length; i++) {
    out += translateChunk(texts[i]);
    if (i < tokens.length) out += tokens[i];
  }
  return out;
}
const batches = process.argv.slice(2).length ? process.argv.slice(2) : ["00", "01", "02", "03", "04"];
for (const b of batches) {
  const src = JSON.parse(readFileSync(join(srcDir, "batch_" + b + ".json"), "utf8"));
  const out = src.map((it) => ({ line: it.line, translated: translateLine(it.masked) }));
  writeFileSync(join(outDir, "batch_" + b + ".translated.json"), JSON.stringify(out, null, 0));
  console.log("wrote fr-FR/batch_" + b + ".translated.json (" + out.length + " lines)");
}
