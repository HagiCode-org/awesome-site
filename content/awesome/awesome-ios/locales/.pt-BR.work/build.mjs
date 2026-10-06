// Scratch merge/validate helper for the pt-BR translation (deleted after use).
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(workDir, "../../../../..");
const sourcePath = path.join(siteRoot, "sources/awesome-ios/README.md");
const targetPath = path.join(siteRoot, "content/awesome/awesome-ios/locales/pt-BR.md");
const outPath = path.join(workDir, "out.md");

const [mode = "check", fromArg, toArg] = process.argv.slice(2);
const source = readFileSync(sourcePath, "utf8");
const lines = source.split("\n");
const entryRe = /^(\s*[-*+]\s+\[[^\]]*\]\(([^)]*)\))(.*)$/u;
const backToTop = "**[back to top](#contributing-and-collaborating)**";

const records = new Map();
const problems = [];
for (const file of readdirSync(workDir).filter((name) => name.endsWith(".txt")).sort()) {
  readFileSync(path.join(workDir, file), "utf8").split("\n").forEach((raw, index) => {
    if (!raw.trim()) return;
    const match = /^(\d+)\|(.*)$/u.exec(raw);
    if (!match) {
      problems.push(`${file}:${index + 1}: malformed record: ${raw.slice(0, 80)}`);
      return;
    }
    const lineNo = Number(match[1]);
    if (records.has(lineNo)) problems.push(`${file}:${index + 1}: duplicate record for line ${lineNo}`);
    records.set(lineNo, match[2]);
  });
}

const targetsOf = (text) => [...text.matchAll(/\]\(([^)]*)\)|(?:href|src)="([^"]*)"/gu)]
  .map((m) => (m[1] ?? m[2]).trim()).sort().join("\n");
const markerOf = (text) => /^\s*(?:[-*+]\s+|#{1,6}\s+|\*\*|\*|<\/?[a-z]+)?/u.exec(text)[0];

const output = [];
const missing = [];
const unchanged = [];
for (let i = 0; i < lines.length; i += 1) {
  const lineNo = i + 1;
  const line = lines[i];
  const record = records.get(lineNo);
  records.delete(lineNo);
  if (!line.trim()) {
    if (record !== undefined) problems.push(`line ${lineNo}: record given for blank line`);
    output.push(line);
    continue;
  }
  if (line.trim() === backToTop) {
    if (record !== undefined) problems.push(`line ${lineNo}: record given for back-to-top line`);
    output.push(line.replace("[back to top]", "[voltar ao topo]"));
    continue;
  }
  const entry = entryRe.exec(line);
  const isToc = entry && entry[2].trim().startsWith("#");
  const needsRecord = !entry || isToc || entry[3].trim() !== "";
  if (record === undefined) {
    if (needsRecord) missing.push(lineNo);
    output.push(line);
    continue;
  }
  if (!needsRecord && !record.startsWith("@")) {
    problems.push(`line ${lineNo}: description record given for entry without description`);
  }
  let translated;
  if (record === "=") {
    translated = line;
    unchanged.push(lineNo);
  } else if (record.startsWith("@") || !entry || isToc) {
    translated = record.startsWith("@") ? record.slice(1) : record;
    if (markerOf(translated) !== markerOf(line)) {
      problems.push(`line ${lineNo}: line marker changed: ${JSON.stringify(markerOf(line))} -> ${JSON.stringify(markerOf(translated))}`);
    }
  } else {
    translated = entry[1] + record;
  }
  if (targetsOf(translated) !== targetsOf(line)) {
    problems.push(`line ${lineNo}: link targets changed\n  src: ${line}\n  out: ${translated}`);
  }
  if (record !== "=" && translated === line) unchanged.push(lineNo);
  output.push(translated);
}
for (const lineNo of records.keys()) problems.push(`record for nonexistent line ${lineNo}`);

const inRange = (n) => (!fromArg || n >= Number(fromArg)) && (!toArg || n <= Number(toArg));
const shownMissing = missing.filter(inRange);
console.log(`records=${[...readdirSync(workDir)].filter((n) => n.endsWith(".txt")).length} files; missing=${missing.length} (in range: ${shownMissing.length}); unchanged=${unchanged.length}; problems=${problems.length}`);
if (shownMissing.length) console.log(`missing lines: ${shownMissing.slice(0, 60).join(",")}${shownMissing.length > 60 ? ",..." : ""}`);
if (problems.length) console.log(problems.join("\n"));
if (mode === "unchanged") console.log(unchanged.map((n) => `${n}: ${lines[n - 1]}`).join("\n"));

if (mode === "write" || mode === "final") {
  if (missing.length || problems.length) {
    console.error("refusing to write: incomplete or invalid records");
    process.exit(1);
  }
  const body = output.join("\n");
  const { inspectMarkdown, assertEquivalentStructure } = await import(
    path.join(siteRoot, "src/plugins/awesome-content.mjs")
  );
  const options = { collectionId: "awesome-ios", readmePath: "README.md" };
  const sourceStructure = inspectMarkdown(source, options);
  const translatedStructure = inspectMarkdown(body, options);
  for (const key of ["headings", "lists", "tables", "code", "targets"]) {
    const same = JSON.stringify(sourceStructure[key]) === JSON.stringify(translatedStructure[key]);
    console.log(`${key}: ${same ? "ok" : "MISMATCH"} (${sourceStructure[key].length})`);
  }
  assertEquivalentStructure(sourceStructure, translatedStructure, { collectionId: "awesome-ios", locale: "pt-BR" });
  if (body.trim() === source.trim()) throw new Error("translation identical to source");
  writeFileSync(mode === "final" ? targetPath : outPath, body);
  console.log(`wrote ${mode === "final" ? targetPath : outPath} (${body.split("\n").length} lines)`);
}
