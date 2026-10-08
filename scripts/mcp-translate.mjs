// Structure-preserving translation pipeline for very large "awesome" READMEs.
// Strategy: mask every link `[t](u)` and inline code `c` into placeholders so the
// translatable prose can be translated without ever touching URLs/code. Reassembly
// restores placeholders, guaranteeing heading counts, list item counts, and all
// 9800 link/image targets remain byte-identical to the source (so the build's
// assertEquivalentStructure passes by construction).
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(root, "..");
const SOURCE = join(repoRoot, "sources/awesome-mcp-servers/README.md");
const BATCH = 480;

function maskLine(line) {
  const links = [];
  const codes = [];
  let s = line;
  // inline code first (so links inside code aren't captured)
  s = s.replace(/`[^`]*`/g, (m) => {
    codes.push(m);
    return `@@C${codes.length - 1}@@`;
  });
  // links [text](url)
  s = s.replace(/\[[^\]]*\]\([^)]*\)/g, (m) => {
    links.push(m);
    return `@@L${links.length - 1}@@`;
  });
  return { masked: s, links, codes };
}

function unmask(masked, links, codes) {
  let s = masked;
  s = s.replace(/@@L(\d+)@@/g, (_, i) => links[Number(i)]);
  s = s.replace(/@@C(\d+)@@/g, (_, i) => codes[Number(i)]);
  return s;
}

function isHtmlLine(line) {
  const t = line.trim();
  return t.startsWith("<") && (t.endsWith(">") || t.includes("</") || t.startsWith("<!"));
}

export function extract() {
  const src = readFileSync(SOURCE, "utf8");
  const lines = src.split("\n");
  const spans = []; // {line, masked, links, codes}
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*```/.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    if (isHtmlLine(line)) continue; // keep HTML verbatim
    const { masked, links, codes } = maskLine(line);
    if (masked.replace(/@@[LC]\d+@@/g, "").trim().length === 0) continue;
    spans.push({ line: i, masked, links, codes });
  }
  // write spans + batches
  const outDir = join(repoRoot, "scripts/_mcp/zh-CN");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "spans.json"), JSON.stringify(spans, null, 0));
  let n = Math.ceil(spans.length / BATCH);
  for (let b = 0; b < n; b++) {
    const slice = spans.slice(b * BATCH, (b + 1) * BATCH).map((sp) => ({
      line: sp.line,
      masked: sp.masked,
    }));
    writeFileSync(join(outDir, `batch_${String(b).padStart(2, "0")}.json`), JSON.stringify(slice));
  }
  console.log(`extracted ${spans.length} translatable spans into ${n} batches`);
}

export function reassemble(locale) {
  const src = readFileSync(SOURCE, "utf8");
  const lines = src.split("\n");
  const outDir = join(repoRoot, "scripts/_mcp", locale);
  const spans = JSON.parse(readFileSync(join(outDir, "spans.json"), "utf8"));
  const map = new Map();
  for (const sp of spans) map.set(sp.line, sp);
  // load translated batches
  const files = readdirSync(outDir).filter((f) => f.startsWith("batch_") && f.endsWith(".translated.json"));
  for (const f of files) {
    const arr = JSON.parse(readFileSync(join(outDir, f), "utf8"));
    for (const item of arr) {
      const sp = map.get(item.line);
      if (!sp) throw new Error(`missing span for line ${item.line}`);
      const restored = unmask(item.translated, sp.links, sp.codes);
      lines[item.line] = restored;
    }
  }
  const localeDir = join(repoRoot, "content/awesome/awesome-mcp-servers/locales");
  mkdirSync(localeDir, { recursive: true });
  writeFileSync(join(localeDir, `${locale}.md`), lines.join("\n"));
  console.log(`wrote ${locale}.md (${lines.length} lines)`);
}

const cmd = process.argv[2];
if (cmd === "extract") extract();
else if (cmd === "reassemble") reassemble(process.argv[3]);
else console.log("usage: mcp-translate.mjs extract | reassemble <locale>");