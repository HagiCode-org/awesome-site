import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

export function splitLine(s) {
  if (/^>\s*\[!.*\]\s*$/.test(s)) return { prefix: s, tail: "" };
  let m;
  if ((m = s.match(/^(###\s+.*?<\/a>)([\s\S]*)$/))) return { prefix: m[1], tail: m[2] };
  if ((m = s.match(/^(##\s+)([\s\S]*)$/))) return { prefix: m[1], tail: m[2] };
  if ((m = s.match(/^(>\s*\*\s+)([\s\S]*)$/))) return { prefix: m[1], tail: m[2] };
  if ((m = s.match(/^(>\s*@@L0@@\s*[–-]\s+)([\s\S]*)$/))) return { prefix: m[1], tail: m[2] };
  if (/^[-*]\s/.test(s) && (m = s.match(/^(.*(?: - | – ))([\s\S]*)$/))) return { prefix: m[1], tail: m[2] };
  return { prefix: "", tail: s };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const batch = process.argv[2];
  const src = JSON.parse(readFileSync(join(root, "zh-CN", `batch_${batch}.json`), "utf8"));
  for (const o of src) {
    const { tail } = splitLine(o.masked);
    if (tail.trim().length > 0) console.log(`${o.line}\t${tail}`);
  }
}