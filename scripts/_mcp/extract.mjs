// Extracts, per source batch, the translatable prose from each line,
// keeping a verbatim "prefix" (markdown structure + placeholder tokens)
// that will be re-prepended unchanged after translation.
// Output: scripts/_mcp/work_<batch>.json  -> [{line, kind, prefix, prose}]
//   kind: "keep"  -> output identical to source (no-prose line)
//   kind: "text"  -> whole line is prose (prefix empty)
//   kind: "heading" / "bullet" -> prefix + prose
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(root, "..", "..");
const batch = process.argv[2];
if (!batch) { console.error("usage: extract.mjs <batch>"); process.exit(1); }

const src = JSON.parse(readFileSync(join(repoRoot, "scripts/_mcp/zh-CN", `batch_${batch}.json`), "utf8"));
const out = [];

for (const it of src) {
  const m = it.masked;
  // Heading
  const h = m.match(/^(#{1,6}\s)([\s\S]*)$/);
  if (h) {
    const hashes = h[1];
    let rest = h[2];
    const anchor = rest.match(/^([\s\S]*?<\/a>)/);
    if (anchor) {
      out.push({ line: it.line, kind: "heading", prefix: hashes + anchor[1], prose: rest.slice(anchor[1].length) });
    } else {
      out.push({ line: it.line, kind: "heading", prefix: hashes, prose: rest });
    }
    continue;
  }
  // Blockquote callouts (no prose)
  if (/^>\s*\[![\s\S]*\]\s*$/.test(m)) {
    out.push({ line: it.line, kind: "keep", prefix: "", prose: "" });
    continue;
  }
  // Blockquote with text
  if (/^>\s/.test(m)) {
    out.push({ line: it.line, kind: "text", prefix: "> ", prose: m.slice(2) });
    continue;
  }
  // Bullet / list item: translate after the LAST " - "
  if (/^\s*[\*\-]\s/.test(m)) {
    const idx = m.lastIndexOf(" - ");
    if (idx === -1) {
      out.push({ line: it.line, kind: "keep", prefix: "", prose: "" });
    } else {
      out.push({ line: it.line, kind: "bullet", prefix: m.slice(0, idx + 3), prose: m.slice(idx + 3) });
    }
    continue;
  }
  // Plain paragraph / plain text
  out.push({ line: it.line, kind: "text", prefix: "", prose: m });
}

writeFileSync(join(root, `work_${batch}.json`), JSON.stringify(out, null, 0));
console.log(`batch ${batch}: ${out.length} lines -> work_${batch}.json`);
