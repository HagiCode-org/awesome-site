// Assembles es-ES/batch_XX.translated.json from a translation map.
// Map = { prose: {line: "spanish prose after the ' - ' separator"},
//         full:  {line: "full translated line (headings, sentences, blockquotes)"} }
// Lines not present in either map are copied verbatim (structure/URL-only lines),
// so placeholder tokens, URLs, emoji and markdown are preserved automatically.
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const locale = "es-ES";
const batch = process.argv[2];
if (!batch) {
  console.error("usage: node build_es.mjs batch_XX");
  process.exit(1);
}

const srcPath = join(root, "scripts/_mcp/zh-CN", batch + ".json");
const mapPath = join(root, "scripts/_mcp", locale, "_maps", batch + ".map.json");
const outPath = join(root, "scripts/_mcp", locale, batch + ".translated.json");

const src = JSON.parse(readFileSync(srcPath, "utf8"));
const { prose = {}, full = {} } = JSON.parse(readFileSync(mapPath, "utf8"));

const out = src.map((it) => {
  const m = it.masked;
  let tr;
  if (full[it.line] !== undefined) {
    tr = full[it.line];
  } else if (prose[it.line] !== undefined) {
    const idx = m.indexOf(" - ");
    if (idx === -1) {
      // no separator found; keep verbatim to avoid corrupting
      tr = m;
    } else {
      tr = m.slice(0, idx + 3) + prose[it.line];
    }
  } else {
    tr = m; // verbatim
  }
  return { line: it.line, translated: tr };
});

writeFileSync(outPath, JSON.stringify(out));
console.log(`wrote ${out.length} entries to ${outPath}`);
