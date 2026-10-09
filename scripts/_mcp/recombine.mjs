// Builds scripts/_mcp/<locale>/batch_<batch>.translated.json from:
//   work_<batch>.json  (prefix + prose, verbatim structure/tokens)
//   t_<batch>.json      ([{line, fr}])
// For kind "keep": translated = source masked (verbatim).
// Otherwise: translated = prefix + fr.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(root, "..", "..");
const locale = process.argv[2] || "fr-FR";
const batch = process.argv[3];
if (!batch) { console.error("usage: recombine.mjs <locale> <batch>"); process.exit(1); }

const work = JSON.parse(readFileSync(join(root, `work_${batch}.json`), "utf8"));
const src = JSON.parse(readFileSync(join(repoRoot, "scripts/_mcp/zh-CN", `batch_${batch}.json`), "utf8"));
const srcMap = new Map(src.map((s) => [s.line, s.masked]));
let translations = [];
try { translations = JSON.parse(readFileSync(join(root, `t_${batch}.json`), "utf8")); }
catch { console.error("no t_" + batch + ".json"); process.exit(1); }
const tmap = new Map(translations.map((t) => [t.line, t.fr]));

const out = [];
let missing = 0;
for (const w of work) {
  const masked = srcMap.get(w.line);
  if (w.kind === "keep") {
    out.push({ line: w.line, translated: masked });
  } else {
    const fr = tmap.get(w.line);
    if (fr === undefined) { console.error("MISSING translation for line " + w.line); missing++; out.push({ line: w.line, translated: masked }); }
    else out.push({ line: w.line, translated: w.prefix + fr });
  }
}
if (missing) { console.error(missing + " missing translations"); process.exit(1); }

const dir = join(repoRoot, "scripts/_mcp", locale);
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, `batch_${batch}.translated.json`), JSON.stringify(out));
console.log(`wrote ${dir}/batch_${batch}.translated.json (${out.length} lines)`);
