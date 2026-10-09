export const externalHostnameAllowlist = Object.freeze([]);

// Each entry trusts the domain itself and every subdomain of it, on a label boundary.
export const externalDomainAllowlist = Object.freeze(["hagicode.com"]);

/**
 * @param {string[]} entries
 * @returns {Set<string>}
 */
export function normalizeExternalHostnameAllowlist(entries) {
  if (!Array.isArray(entries)) {
    throw new TypeError("External hostname allowlist must be an array");
  }

  return new Set(entries.map((entry) => {
    if (typeof entry !== "string" || entry.length === 0 || entry !== entry.trim() || /[/:?#@]/u.test(entry)) {
      throw new TypeError(`Invalid external hostname allowlist entry "${entry}"`);
    }
    let parsed;
    try {
      parsed = new URL(`https://${entry}/`);
    } catch {
      throw new TypeError(`Invalid external hostname allowlist entry "${entry}"`);
    }
    if (parsed.hostname !== parsed.host || parsed.username || parsed.password) {
      throw new TypeError(`Invalid external hostname allowlist entry "${entry}"`);
    }
    return parsed.hostname.toLowerCase();
  }));
}

const allowedExternalHostnames = normalizeExternalHostnameAllowlist(externalHostnameAllowlist);
const allowedExternalDomains = normalizeExternalHostnameAllowlist(externalDomainAllowlist);

/**
 * @param {Set<string>} domains
 * @param {string} hostname
 */
function matchesDomain(domains, hostname) {
  const name = hostname.toLowerCase();
  for (const domain of domains) {
    if (name === domain || name.endsWith(`.${domain}`)) return true;
  }
  return false;
}

/**
 * @param {string | null | undefined} href
 * @param {{ baseUrl: string, origin: string, allowlist?: string[], domainAllowlist?: string[] }} context
 * @returns {{ type: "bypass" } | { type: "warn", url: string, hostname: string } | { type: "invalid" }}
 */
export function classifyExternalLink(href, {
  baseUrl,
  origin,
  allowlist = externalHostnameAllowlist,
  domainAllowlist = externalDomainAllowlist,
}) {
  const allowedHostnames = allowlist === externalHostnameAllowlist
    ? allowedExternalHostnames
    : normalizeExternalHostnameAllowlist(allowlist);
  const allowedDomains = domainAllowlist === externalDomainAllowlist
    ? allowedExternalDomains
    : normalizeExternalHostnameAllowlist(domainAllowlist);
  if (typeof href !== "string" || href.trim() === "") return { type: "bypass" };

  let url;
  try {
    url = new URL(href, baseUrl);
  } catch {
    return /^(?:https?:|\/\/)/iu.test(href.trim()) ? { type: "invalid" } : { type: "bypass" };
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return { type: "bypass" };
  if (url.username || url.password) return { type: "invalid" };

  const currentOrigin = new URL(origin).origin;
  if (
    url.origin === currentOrigin
    || allowedHostnames.has(url.hostname.toLowerCase())
    || matchesDomain(allowedDomains, url.hostname)
  ) {
    return { type: "bypass" };
  }
  return { type: "warn", url: url.href, hostname: url.hostname };
}
