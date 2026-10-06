// Scratch helper for the de-DE translation (removed after completion).
import { appendFileSync, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, "../../../..");
const src = readFileSync(path.join(repo, "sources/awesome-ios/README.md"), "utf8").split("\n");
if (src.at(-1) === "") src.pop();
const workPath = path.join(here, ".de-DE.md.work");

function dests(line) {
  const out = [];
  let i = 0;
  while ((i = line.indexOf("](", i)) !== -1) {
    let j = i + 2;
    let depth = 1;
    while (j < line.length && depth > 0) {
      if (line[j] === "(") depth += 1;
      else if (line[j] === ")") depth -= 1;
      j += 1;
    }
    if (depth !== 0) break;
    out.push({ start: i + 2, end: j - 1, value: line.slice(i + 2, j - 1) });
    i = j;
  }
  return out;
}

const mask = (line) => {
  let result = "";
  let last = 0;
  for (const d of dests(line)) {
    result += `${line.slice(last, d.start)}@`;
    last = d.end;
  }
  return result + line.slice(last);
};

const prefix = (line) => line.match(/^(\s*(?:[-*+]\s|\d+\.\s|#{1,6}\s|>\s?)?)/u)[0];
const firstText = (line) => line.match(/^\s*[-*+] \[([^\]]*)\]\(/u)?.[1];
const attrs = (line) => [...line.matchAll(/\b(?:href|src)="[^"]*"/gu)].map((m) => m[0]);

const [mode, a, b] = process.argv.slice(2);
const start = Number(a);
const end = Number(b);

if (mode === "show") {
  console.log(`=== ${start}-${end} ===\n${src.slice(start - 1, end).map(mask).join("\n")}\n=== end ===`);
} else if (mode === "append") {
  const current = existsSync(workPath) ? readFileSync(workPath, "utf8").split("\n").length - 1 : 0;
  if (current !== start - 1) throw new Error(`work file has ${current} lines; expected ${start - 1}`);
  let input = readFileSync(0, "utf8");
  if (input.endsWith("\n")) input = input.slice(0, -1);
  const tpl = input.split("\n");
  if (tpl.length !== end - start + 1) throw new Error(`got ${tpl.length} lines; expected ${end - start + 1}`);
  const errors = [];
  const notes = [];
  const merged = tpl.map((line, offset) => {
    const n = start + offset;
    const source = src[n - 1];
    const values = dests(source).map((d) => d.value);
    let k = 0;
    let out = line.replace(/\]\(@(\d*)\)/gu, (_, index) => {
      const value = values[index ? Number(index) - 1 : k++];
      if (value === undefined) errors.push(`${n}: too many placeholders`);
      return `](${value})`;
    });
    out = out.trimEnd() + source.slice(source.trimEnd().length);
    const got = dests(out).map((d) => d.value).sort();
    if (JSON.stringify(got) !== JSON.stringify([...values].sort())) errors.push(`${n}: destinations differ`);
    if ((source.trim() === "") !== (out.trim() === "")) errors.push(`${n}: blank mismatch`);
    if (prefix(source) !== prefix(out)) errors.push(`${n}: prefix mismatch`);
    for (const attr of attrs(source)) if (!out.includes(attr)) errors.push(`${n}: missing ${attr}`);
    const name = firstText(source);
    if (name !== undefined && !values[0]?.startsWith("#") && firstText(out) !== name) {
      notes.push(`${n}: name "${name}" -> "${firstText(out)}"`);
    }
    if (source.trim() && out === source) notes.push(`${n}: unchanged`);
    return out;
  });
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exit(1);
  }
  appendFileSync(workPath, `${merged.join("\n")}\n`);
  console.log(`appended ${start}-${end}; work file now ${end} lines`);
  if (notes.length) console.log(notes.join("\n"));
} else {
  throw new Error("usage: show|append <start> <end>");
}
