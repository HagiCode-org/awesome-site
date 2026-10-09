import { gaEventAttributes } from "@hagicode/hagilight-core/analytics-events";
import {
  OUTBOUND_CANDIDATE_LIST,
  OUTBOUND_COLLECTION_CONTENT,
  OUTBOUND_OTHER,
  OUTBOUND_WARNING_CONTINUE,
} from "./analytics-locations.mjs";
import { classifyExternalLink } from "./external-link-policy.mjs";

const controllers = new WeakMap();
const markerAttribute = "data-awesome-outbound";
const tagAttributes = ["data-ga-category", "data-ga-label", "data-ga-location", "data-ga-url", markerAttribute];

// More specific containers first: the warning dialog and candidate list sit inside page content.
const locationByContainer = [
  [".awesome-external-warning", OUTBOUND_WARNING_CONTINUE],
  [".awesome-more", OUTBOUND_CANDIDATE_LIST],
  [".sl-markdown-content", OUTBOUND_COLLECTION_CONTENT],
];

function findAnchor(event) {
  const path = typeof event.composedPath === "function" ? event.composedPath() : [event.target];
  for (const item of path) {
    if (item && typeof item.matches === "function" && item.matches("a[href]")) return item;
    if (item && typeof item.closest === "function") {
      const anchor = item.closest("a[href]");
      if (anchor) return anchor;
    }
  }
  return null;
}

function resolveLocation(anchor) {
  for (const [selector, location] of locationByContainer) {
    if (anchor.closest(selector)) return location;
  }
  return OUTBOUND_OTHER;
}

function clearTags(anchor) {
  for (const name of tagAttributes) anchor.removeAttribute(name);
}

function hasForeignTag(anchor) {
  return (anchor.hasAttribute("data-ga-category") || anchor.hasAttribute("data-ga-label"))
    && !anchor.hasAttribute(markerAttribute);
}

/**
 * Tag outbound anchors for Hagilight's click listener, which reads them later in the same
 * click. A listener on `window` in the capture phase runs before the one on `document`.
 * @param {Document} documentObject
 * @param {Window} windowObject
 * @param {typeof classifyExternalLink} classify
 * @returns {{ handle: (event: Event) => void }}
 */
export function installOutboundTracking(
  documentObject = document,
  windowObject = window,
  classify = classifyExternalLink,
) {
  const existing = controllers.get(documentObject);
  if (existing) return existing;

  function handle(event) {
    try {
      const anchor = findAnchor(event);
      if (!anchor || hasForeignTag(anchor)) return;

      // The allowlist skips the warning, not the report: a trusted host is still an exit.
      const result = classify(anchor.getAttribute("href"), {
        baseUrl: documentObject.baseURI,
        origin: windowObject.location.origin,
        allowlist: [],
      });
      clearTags(anchor);
      if (result.type !== "warn") return;

      const attributes = gaEventAttributes({
        category: "navigation",
        label: result.hostname,
        location: resolveLocation(anchor),
      });
      for (const [name, value] of Object.entries(attributes)) anchor.setAttribute(name, value);
      anchor.setAttribute(markerAttribute, "");
    } catch {
      // Analytics must never interfere with the click.
    }
  }

  windowObject.addEventListener("click", handle, true);
  const controller = { handle };
  controllers.set(documentObject, controller);
  return controller;
}

if (typeof document !== "undefined" && typeof window !== "undefined") {
  installOutboundTracking(document, window);
}
