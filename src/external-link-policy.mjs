export const externalHostnameAllowlist = Object.freeze([]);

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

/**
 * @param {string | null | undefined} href
 * @param {{ baseUrl: string, origin: string, allowlist?: string[] }} context
 * @returns {{ type: "bypass" } | { type: "warn", url: string, hostname: string } | { type: "invalid" }}
 */
export function classifyExternalLink(href, { baseUrl, origin, allowlist = externalHostnameAllowlist }) {
  const allowedHostnames = allowlist === externalHostnameAllowlist
    ? allowedExternalHostnames
    : normalizeExternalHostnameAllowlist(allowlist);
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
  if (url.origin === currentOrigin || allowedHostnames.has(url.hostname.toLowerCase())) {
    return { type: "bypass" };
  }
  return { type: "warn", url: url.href, hostname: url.hostname };
}
