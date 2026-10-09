import fs from 'fs';

const src = JSON.parse(fs.readFileSync('./scripts/_mcp/zh-CN/batch_08.json', 'utf8'));
let lines = fs.readFileSync('/tmp/batch_08_de.txt', 'utf8').split('\n');
while (lines.length && lines[lines.length - 1] === '') lines.pop();

if (lines.length !== src.length) {
  console.error('COUNT MISMATCH', lines.length, src.length);
  process.exit(1);
}

const out = src.map((o, i) => {
  const masked = o.masked;
  const tr = lines[i];
  if (/^#{1,6}\s/.test(masked)) {
    return { line: o.line, translated: tr };
  }
  const isListItem = masked.trimStart().startsWith('-');
  if (isListItem) {
    const idx = masked.lastIndexOf(' - ');
    if (idx === -1) {
      // no-prose list item (e.g. a bare URL): keep source verbatim
      return { line: o.line, translated: masked };
    }
    const prefix = masked.slice(0, idx + 3); // includes the " - "
    return { line: o.line, translated: prefix + tr };
  }
  // prose line (no list marker, no heading): full translation
  return { line: o.line, translated: tr };
});

fs.writeFileSync('./scripts/_mcp/de-DE/batch_08.translated.json', JSON.stringify(out, null, 0) + '\n');
console.log('wrote', out.length, 'entries');
