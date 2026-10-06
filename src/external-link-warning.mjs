import { classifyExternalLink } from "./external-link-policy.mjs";

const controllers = new WeakMap();

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

function newContextRequested(event, anchor, isMiddleClick) {
  const target = anchor.getAttribute("target")?.trim().toLowerCase() ?? "";
  return isMiddleClick
    || event.ctrlKey === true
    || event.metaKey === true
    || event.shiftKey === true
    || (target !== "" && target !== "_self");
}

function pendingIntent(anchor, url, event, isMiddleClick) {
  return {
    url,
    anchor,
    download: anchor.hasAttribute("download") ? anchor.getAttribute("download") ?? "" : null,
    newContext: newContextRequested(event, anchor, isMiddleClick),
    continuing: false,
  };
}

function text(element, value) {
  if (element) element.textContent = value;
}

function setContinuation(anchor, intent) {
  anchor.removeAttribute("href");
  anchor.removeAttribute("target");
  anchor.removeAttribute("rel");
  anchor.removeAttribute("download");
  if (!intent || intent.invalid) {
    anchor.setAttribute("aria-disabled", "true");
    anchor.setAttribute("tabindex", "-1");
    return;
  }
  anchor.href = intent.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  if (intent.download !== null) anchor.setAttribute("download", intent.download);
  anchor.removeAttribute("aria-disabled");
  anchor.removeAttribute("tabindex");
}

function clearContinuation(anchor) {
  if (!anchor) return;
  anchor.removeAttribute("href");
  anchor.removeAttribute("target");
  anchor.removeAttribute("rel");
  anchor.removeAttribute("download");
  anchor.setAttribute("aria-disabled", "true");
  anchor.setAttribute("tabindex", "-1");
}

function warningMessage(dialog, hostname, url) {
  const fallback = dialog.getAttribute("data-warning-fallback") ?? "";
  const destination = dialog.querySelector(".awesome-external-warning-label")?.textContent ?? "";
  return `${fallback}\n${destination}: ${hostname}\n${url}`;
}

function activateFallback(intent, dialog, windowObject, finish) {
  const hostname = dialog.querySelector("[data-warning-host]")?.textContent ?? "";
  const url = dialog.querySelector("[data-warning-url]")?.textContent ?? "";
  const confirmed = windowObject.confirm(warningMessage(dialog, hostname, url));
  if (!confirmed) {
    finish();
    return;
  }
  const continuation = dialog.querySelector("[data-warning-continue]");
  if (continuation && intent.download !== null) {
    setContinuation(continuation, intent);
    continuation.click();
    return;
  }
  windowObject.open(intent.url, "_blank", "noopener,noreferrer");
  finish(false);
}

/**
 * Bind delegated external-link handling once for a document.
 * @param {Document} documentObject
 * @param {Window} windowObject
 * @returns {{ handle: (event: Event) => void, refresh: () => void }}
 */
export function initializeExternalLinkWarning(
  documentObject = document,
  windowObject = window,
) {
  const existing = controllers.get(documentObject);
  if (existing) {
    existing.refresh();
    return existing;
  }

  let dialog = null;
  let pending = null;
  let continuation = null;

  function refresh() {
    if (pending) finish();
    dialog = documentObject.querySelector(".awesome-external-warning");
    continuation = dialog?.querySelector("[data-warning-continue]") ?? null;
    if (continuation) clearContinuation(continuation);
  }

  function finish(restoreFocus = true) {
    const previous = pending;
    pending = null;
    if (continuation) clearContinuation(continuation);
    if (dialog?.open) dialog.close();
    if (restoreFocus && previous?.anchor.isConnected) previous.anchor.focus();
  }

  function display(intent) {
    if (!dialog) return false;
    const host = dialog.querySelector("[data-warning-host]");
    const destination = dialog.querySelector("[data-warning-url]");
    const error = dialog.querySelector("[data-warning-error]");
    text(host, intent.hostname ?? "");
    text(destination, intent.url ?? "");
    if (error) error.hidden = !intent.invalid;
    setContinuation(continuation, intent.invalid ? { invalid: true } : intent);

    if (typeof dialog.showModal === "function" && typeof dialog.close === "function") {
      dialog.showModal();
      dialog.querySelector("[data-warning-stay]")?.focus();
      return true;
    }

    if (intent.invalid) {
      windowObject.alert(error?.textContent ?? "");
      finish();
      return false;
    }
    activateFallback(intent, dialog, windowObject, finish);
    return false;
  }

  function handle(event) {
    if (event.defaultPrevented) return;
    const isClick = event.type === "click";
    const isMiddleAux = event.type === "auxclick" && event.button === 1;
    if (isClick && event.button !== 0) return;
    if (!isClick && !isMiddleAux) return;
    if (event.button === 2) return;

    const anchor = findAnchor(event);
    if (!anchor) return;
    if (anchor === continuation && pending && !pending.invalid) {
      if (pending.continuing) {
        event.preventDefault();
        return;
      }
      pending.continuing = true;
      windowObject.setTimeout(() => finish(false), 0);
      return;
    }

    if (pending) {
      event.preventDefault();
      return;
    }

    const result = classifyExternalLink(anchor.getAttribute("href"), {
      baseUrl: documentObject.baseURI,
      origin: windowObject.location.origin,
    });
    if (result.type === "bypass") return;

    event.preventDefault();
    const intent = pendingIntent(anchor, result.type === "warn" ? result.url : "", event, isMiddleAux);
    if (result.type === "invalid") {
      pending = { ...intent, invalid: true };
      display(pending);
      return;
    }

    intent.hostname = result.hostname;
    pending = intent;
    display(pending);
  }

  function onCancel(event) {
    event.preventDefault();
    finish();
  }

  function onStay(event) {
    if (!dialog?.contains(event.target) || event.target !== dialog.querySelector("[data-warning-stay]")) return;
    event.preventDefault();
    finish();
  }

  function onClose() {
    if (pending) finish();
  }

  function onKeydown(event) {
    if (event.key !== "Tab" || !dialog?.open) return;
    const focusable = [...dialog.querySelectorAll(
      'a[href]:not([aria-disabled="true"]), button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )].filter((element) => !element.hidden);
    if (focusable.length === 0) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const index = focusable.indexOf(documentObject.activeElement);
    if ((event.shiftKey && index <= 0) || (!event.shiftKey && index === focusable.length - 1)) {
      event.preventDefault();
      focusable[event.shiftKey ? focusable.length - 1 : 0].focus();
    } else if (index < 0 && !event.shiftKey) {
      event.preventDefault();
      focusable[0].focus();
    }
  }

  refresh();
  documentObject.addEventListener("click", handle);
  documentObject.addEventListener("auxclick", handle);
  documentObject.addEventListener("click", onStay);
  documentObject.addEventListener("cancel", onCancel, true);
  documentObject.addEventListener("close", onClose, true);
  documentObject.addEventListener("keydown", onKeydown, true);
  documentObject.addEventListener("astro:page-load", refresh);
  const controller = { handle, refresh };
  controllers.set(documentObject, controller);
  return controller;
}

if (typeof document !== "undefined" && typeof window !== "undefined") {
  initializeExternalLinkWarning(document, window);
}