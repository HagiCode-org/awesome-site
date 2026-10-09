import { readFileSync } from "node:fs";
for (const b of ["00", "02", "03", "04"]) {
  const src = JSON.parse(readFileSync(`scripts/_mcp/zh-CN/batch_${b}.json`, "utf8"));
  let prose = 0, struct = 0;
  for (const it of src) {
    const m = it.masked;
    const stripped = m.replace(/@@[LC]\d+@@/g, "");
    const clean = stripped.replace(/[^\x00-\x7F]/g, "").replace(/[#>*`\-\s\[\]!\(\)\.\|]/g, "").trim();
    if (/[A-Za-z]/.test(clean)) prose++; else struct++;
  }
  console.log(`batch_${b} prose=${prose} struct=${struct}`);
}
