import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const work = path.dirname(new URL(import.meta.url).pathname);
const source = await readFile("sources/awesome-ios/README.md", "utf8");
const lines = source.split("\n");
if (lines.at(-1) === "") lines.pop();
const urls = [];
const skeleton = lines.map((line) => line.replace(/\]\(([^)]*)\)/gu, (match, destination) => {
  if (destination.trim().startsWith("#")) return match;
  urls.push(destination);
  return `](@${urls.length})`;
}));
await writeFile(path.join(work, "skeleton.md"), `${skeleton.join("\n")}\n`);
await writeFile(path.join(work, "urls.json"), JSON.stringify(urls));
console.log(`lines=${lines.length} urls=${urls.length}`);
