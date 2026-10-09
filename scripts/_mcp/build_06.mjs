import fs from "fs";

const src = JSON.parse(fs.readFileSync("scripts/_mcp/zh-CN/batch_06.json", "utf8"));
const lines = fs.readFileSync("/tmp/batch_06_de.txt", "utf8").split("\n");

// Drop a trailing empty element if present
if (lines.length > src.length && lines[lines.length - 1].trim() === "") lines.pop();

if (lines.length !== src.length) {
  console.error(`LENGTH MISMATCH: translations=${lines.length} source=${src.length}`);
  process.exit(1);
}

const out = src.map((o, i) => ({ line: o.line, translated: lines[i] }));
fs.writeFileSync("scripts/_mcp/de-DE/batch_06.translated.json", JSON.stringify(out, null, 0) + "\n");
console.log("wrote", out.length, "entries");
