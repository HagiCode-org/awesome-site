// Verifies that every batch_XX.translated.json preserves the exact set of
// @@Lx@@ / @@Cx@@ placeholder tokens compared to the source batch_XX.json,
// and that every source line is covered by a translation entry.
// Usage: node scripts/_mcp/verify.mjs [locale]
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(root, "..", "..");
const localeArg = process.argv[2];

function tokens(s) {
  const m = s.match(/@@[LC]\d+@@/g);
  return m ? m.sort() : [];
}

function checkLocale(locale) {
  const dir = join(repoRoot, "scripts/_mcp", locale);
  const srcDir = join(repoRoot, "scripts/_mcp", "zh-CN");
  const translatedFiles = readdirSync(dir).filter((f) => /^batch_.*\.translated\.json$/.test(f));
  let errors = 0;
  let total = 0;
  for (const tf of translatedFiles) {
    const sf = tf.replace(/\.translated\.json$/, ".json");
    const srcPath = join(srcDir, sf);
    let src;
    try {
      src = JSON.parse(readFileSync(srcPath, "utf8"));
    } catch (e) {
      console.log(`  [${locale}] NO source batch for ${tf} (expected ${sf})`);
      errors++;
      continue;
    }
    const translated = JSON.parse(readFileSync(join(dir, tf), "utf8"));
    const map = new Map(translated.map((t) => [t.line, t.translated]));
    for (const item of src) {
      total++;
      const tr = map.get(item.line);
      if (tr === undefined) {
        console.log(`  [${locale}] ${tf} line ${item.line}: NO translation`);
        errors++;
        continue;
      }
      const a = tokens(item.masked);
      const b = tokens(tr);
      if (a.length !== b.length || a.some((t, i) => t !== b[i])) {
        console.log(`  [${locale}] ${tf} line ${item.line}: token mismatch`);
        console.log(`     src:  ${item.masked}`);
        console.log(`     tr:   ${tr}`);
        errors++;
      }
    }
  }
  console.log(`[${locale}] checked ${total} lines, ${errors} errors`);
  return errors;
}

const base = join(repoRoot, "scripts/_mcp");
const locales = localeArg
  ? [localeArg]
  : readdirSync(base).filter((d) => {
      try {
        return readdirSync(join(base, d)).some((f) => f.endsWith(".translated.json"));
      } catch {
        return false; // skip non-directories (e.g. loose .py files)
      }
    });

let totalErrors = 0;
for (const loc of locales) totalErrors += checkLocale(loc);
console.log(totalErrors === 0 ? "ALL OK" : `${totalErrors} TOTAL ERRORS`);
process.exit(totalErrors === 0 ? 0 : 1);