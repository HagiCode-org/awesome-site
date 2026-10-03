import { isIP } from "node:net";

function isLoopback(hostname) {
  const host = hostname.toLowerCase().replace(/^\[|\]$/gu, "").replace(/\.$/u, "");
  if (host === "localhost" || host.endsWith(".localhost") || host === "::1") return true;
  if (isIP(host) === 4) return Number(host.split(".")[0]) === 127;
  const mapped = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/iu.exec(host)?.[1];
  return Boolean(mapped && Number(mapped.split(".")[0]) === 127);
}

const value = process.env.SITE_URL;
let url;
try {
  if (!value) throw new Error("SITE_URL is required");
  url = new URL(value);
} catch (error) {
  console.error(`Invalid production SITE_URL: ${error.message}`);
  process.exitCode = 1;
}

if (url && (
  url.protocol !== "https:" ||
  url.username ||
  url.password ||
  url.pathname !== "/" ||
  url.search ||
  url.hash ||
  isLoopback(url.hostname)
)) {
  console.error("SITE_URL must be a non-loopback HTTPS origin without credentials, path, query, or fragment.");
  process.exitCode = 1;
}
