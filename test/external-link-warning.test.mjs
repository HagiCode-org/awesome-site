import assert from "node:assert/strict";
import test from "node:test";
import { locales } from "@hagicode/hagilight-starlight/locales";
import {
  classifyExternalLink,
  externalHostnameAllowlist,
  normalizeExternalHostnameAllowlist,
} from "../src/external-link-policy.mjs";
import {
  externalLinkWarningCopy,
  getExternalLinkWarningCopy,
} from "../src/external-link-copy.mjs";
import { initializeExternalLinkWarning } from "../src/external-link-warning.mjs";

const context = { baseUrl: "https://site.example/section/page", origin: "https://site.example" };
const credentialedDestination = new URL("https://outside.example/path");
credentialedDestination.username = "reader";
credentialedDestination.password = "value";

test("external-link policy distinguishes website navigation from bypasses and invalid URLs", () => {
  for (const href of [
    "/local/path", "?q=value", "#section", "https://site.example:443/another",
    "mailto:hello@example.org", "tel:+15551234567", "ftp://files.example/file",
  ]) {
    assert.deepEqual(classifyExternalLink(href, context), { type: "bypass" }, href);
  }
  for (const href of [
    "https://outside.example/a?b=c#fragment",
    "//outside.example/path",
    "http://site.example/path",
    "https://site.example:444/path",
  ]) {
    assert.deepEqual(classifyExternalLink(href, context).type, "warn", href);
  }
  for (const href of ["https://[invalid", "//[invalid", credentialedDestination.href]) {
    assert.deepEqual(classifyExternalLink(href, context), { type: "invalid" }, href);
  }
  assert.deepEqual(externalHostnameAllowlist, []);
});

test("hostname exceptions are normalized and match exact hostnames only", () => {
  assert.deepEqual([...normalizeExternalHostnameAllowlist(["TRUSTED.example", "é.example", "trusted.example."])], [
    "trusted.example", "xn--9ca.example", "trusted.example.",
  ]);
  assert.throws(() => normalizeExternalHostnameAllowlist(["https://trusted.example"]), /Invalid external hostname/u);
  assert.throws(() => normalizeExternalHostnameAllowlist(["trusted.example:443"]), /Invalid external hostname/u);
  assert.throws(() => normalizeExternalHostnameAllowlist([" trusted.example "]), /Invalid external hostname/u);

  assert.equal(classifyExternalLink("https://TRUSTED.example:8443/path", {
    ...context, allowlist: ["trusted.example"],
  }).type, "bypass");
  for (const hostname of ["sub.trusted.example", "trusted.example.attacker.test", "nottrusted.example", "trusted.example."]) {
    assert.equal(classifyExternalLink(`https://${hostname}/`, {
      ...context, allowlist: ["trusted.example"],
    }).type, "warn", hostname);
  }
  assert.equal(classifyExternalLink("https://trusted.example/", {
    ...context, allowlist: ["trusted.example"],
  }).type, "bypass");
  const allowlistedWithCredentials = new URL("https://trusted.example/");
  allowlistedWithCredentials.username = "reader";
  allowlistedWithCredentials.password = "value";
  assert.equal(classifyExternalLink(allowlistedWithCredentials.href, {
    ...context, allowlist: ["trusted.example"],
  }).type, "invalid");
});

test("warning copy covers every configured locale and rejects unknown keys", () => {
  assert.deepEqual(Object.keys(externalLinkWarningCopy).sort(), Object.keys(locales).sort());
  for (const locale of Object.keys(locales)) {
    const copy = getExternalLinkWarningCopy(locale);
    for (const key of ["heading", "explanation", "destination", "stay", "continue", "invalid", "fallback"]) {
      assert.equal(typeof copy[key], "string");
      assert.ok(copy[key].trim(), `${locale}/${key} must not be empty`);
      if (locale !== "root") assert.notEqual(copy[key], externalLinkWarningCopy.root[key]);
    }
  }
  assert.throws(() => getExternalLinkWarningCopy("unknown"), /Unsupported external-link warning locale/u);
  assert.throws(() => getExternalLinkWarningCopy("toString"), /Unsupported external-link warning locale/u);
});

class FixtureElement {
  constructor(tagName = "div", attributes = {}) {
    this.tagName = tagName.toUpperCase();
    this.attributes = new Map(Object.entries(attributes));
    this.children = new Map();
    this.isConnected = true;
    this.textContent = "";
    this.hidden = false;
  }
  matches(selector) { return selector === "a[href]" && this.tagName === "A" && this.hasAttribute("href"); }
  closest(selector) { return this.matches(selector) ? this : null; }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  hasAttribute(name) { return this.attributes.has(name); }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  removeAttribute(name) { this.attributes.delete(name); }
  querySelector(selector) { return this.children.get(selector) ?? null; }
  querySelectorAll(selector) {
    if (!selector.includes("a[href]")) return [...this.children.values()].filter((child) => child.tagName === "BUTTON");
    return [...this.children.values()].filter((child) =>
      child.tagName === "BUTTON" || (child.tagName === "A" && child.hasAttribute("href")));
  }
  contains(element) { return [...this.children.values()].includes(element); }
  focus() {
    this.focused = true;
    if (this.ownerDocument) this.ownerDocument.activeElement = this;
  }
  click() { this.ownerDocument.dispatch("click", makeEvent(this, { button: 0 })); }
  set href(value) { this.setAttribute("href", value); }
  get href() { return this.getAttribute("href"); }
  set target(value) { this.setAttribute("target", value); }
  get target() { return this.getAttribute("target"); }
  set rel(value) { this.setAttribute("rel", value); }
  get rel() { return this.getAttribute("rel"); }
}

class FixtureDialog extends FixtureElement {
  constructor() {
    super("dialog");
    this.open = false;
    for (const selector of [
      "#awesome-external-warning-heading",
      "#awesome-external-warning-explanation",
      "[data-warning-host]",
      "[data-warning-url]",
      "[data-warning-error]",
      "[data-warning-stay]",
      "[data-warning-continue]",
    ]) this.children.set(selector, new FixtureElement(
      selector === "[data-warning-continue]" ? "a"
        : selector === "[data-warning-stay]" ? "button" : "p",
    ));
    this.children.get("#awesome-external-warning-heading").textContent = "Leave Awesome Site?";
    this.children.get("#awesome-external-warning-explanation").textContent = "We do not control this website.";
    this.setAttribute("data-warning-fallback", "Leaving this site.");
    this.children.set(".awesome-external-warning-label", new FixtureElement("p"));
    this.children.get(".awesome-external-warning-label").textContent = "Destination";
    this.children.get("[data-warning-error]").textContent = "Invalid destination.";
    this.children.get("[data-warning-stay]").textContent = "Stay";
    this.children.get("[data-warning-continue]").ownerDocument = null;
    this.children.get("[data-warning-continue]").setAttribute("aria-disabled", "true");
  }
  showModal() { this.open = true; }
  close() { this.open = false; }
}

class FixtureDocument {
  constructor(dialog) {
    this.baseURI = "https://site.example/base/";
    this.dialog = dialog;
    this.listeners = new Map();
    for (const child of dialog.children.values()) child.ownerDocument = this;
  }
  querySelector(selector) { return selector === ".awesome-external-warning" ? this.dialog : null; }
  addEventListener(type, listener) {
    const listeners = this.listeners.get(type) ?? [];
    listeners.push(listener);
    this.listeners.set(type, listeners);
  }
  dispatch(type, event) {
    event.type = type;
    for (const listener of this.listeners.get(type) ?? []) listener(event);
  }
}

function makeEvent(target, options = {}) {
  return {
    target,
    type: options.type ?? "click",
    button: options.button ?? 0,
    key: options.key,
    ctrlKey: options.ctrlKey ?? false,
    metaKey: options.metaKey ?? false,
    shiftKey: options.shiftKey ?? false,
    defaultPrevented: options.defaultPrevented ?? false,
    prevented: false,
    composedPath: () => [target],
    preventDefault() { this.prevented = true; this.defaultPrevented = true; },
  };
}

function fixture({ modal = true, confirm = true } = {}) {
  const dialog = new FixtureDialog();
  if (!modal) {
    dialog.showModal = undefined;
    dialog.close = undefined;
  }
  const document = new FixtureDocument(dialog);
  const timeouts = [];
  const opened = [];
  const alerts = [];
  const window = {
    location: { origin: "https://site.example", assign: (url) => opened.push(["same", url]) },
    confirm: (message) => { window.confirmMessage = message; return confirm; },
    alert: (message) => alerts.push(message),
    open: (...args) => opened.push(["new", ...args]),
    setTimeout: (callback) => timeouts.push(callback),
  };
  const controller = initializeExternalLinkWarning(document, window);
  const anchor = (href, attributes = {}) => {
    const element = new FixtureElement("a", { href, ...attributes });
    element.ownerDocument = document;
    return element;
  };
  return { dialog, document, window, controller, anchor, timeouts, opened, alerts };
}

test("delegated handling snapshots destinations, intent, and current pending modal", () => {
  const f = fixture();
  const source = f.anchor("https://outside.example/first?x=1");
  const nested = new FixtureElement("span");
  nested.closest = () => source;
  const firstEvent = makeEvent(nested);
  f.controller.handle(firstEvent);
  assert.equal(firstEvent.prevented, true);
  assert.equal(f.dialog.open, true);
  assert.deepEqual(f.opened, []);
  assert.equal(f.dialog.querySelector("[data-warning-url]").textContent, "https://outside.example/first?x=1");
  source.setAttribute("href", "https://outside.example/changed");

  const second = f.anchor("https://other.example/");
  const secondEvent = makeEvent(second);
  f.controller.handle(secondEvent);
  assert.equal(secondEvent.prevented, true);
  assert.equal(f.dialog.querySelector("[data-warning-url]").textContent, "https://outside.example/first?x=1");

  const continuation = f.dialog.querySelector("[data-warning-continue]");
  const continuationEvent = makeEvent(continuation);
  f.controller.handle(continuationEvent);
  assert.equal(continuationEvent.prevented, false);
  assert.equal(continuation.href, "https://outside.example/first?x=1");
  assert.equal(continuationEvent.defaultPrevented, false);
  f.timeouts.shift()();
  assert.equal(f.dialog.open, false);
  assert.equal(continuation.hasAttribute("href"), false);

  const middleAnchor = f.anchor("https://outside.example/middle");
  const middleEvent = makeEvent(middleAnchor, { button: 1 });
  middleEvent.type = "auxclick";
  f.controller.handle(middleEvent);
  const newContinuation = f.dialog.querySelector("[data-warning-continue]");
  assert.equal(middleEvent.prevented, true);
  assert.equal(newContinuation.target, "_blank");
  assert.equal(newContinuation.rel, "noopener noreferrer");
});

test("cancellation, modifiers, right clicks, and canceled events preserve expected behavior", () => {
  const f = fixture();
  const anchor = f.anchor("https://outside.example/path");
  const canceled = makeEvent(anchor, { defaultPrevented: true });
  f.controller.handle(canceled);
  assert.equal(f.dialog.open, false);

  const rightClick = makeEvent(anchor, { button: 2 });
  f.controller.handle(rightClick);
  assert.equal(rightClick.prevented, false);

  const modified = makeEvent(anchor, { metaKey: true });
  f.controller.handle(modified);
  const continuation = f.dialog.querySelector("[data-warning-continue]");
  assert.equal(continuation.target, "_blank");
  assert.equal(continuation.rel, "noopener noreferrer");

  f.document.dispatch("click", makeEvent(f.dialog.querySelector("[data-warning-stay]")));
  assert.equal(f.dialog.open, false);
  assert.equal(anchor.focused, true);
  assert.equal(continuation.hasAttribute("href"), false);

  const next = f.anchor("https://elsewhere.example/");
  f.controller.handle(makeEvent(next));
  assert.equal(f.dialog.querySelector("[data-warning-url]").textContent, "https://elsewhere.example/");
});

test("invalid destinations show no active continuation and clear after cancellation", () => {
  const f = fixture();
  const anchor = f.anchor(credentialedDestination.href);
  f.controller.handle(makeEvent(anchor));
  const continuation = f.dialog.querySelector("[data-warning-continue]");
  assert.equal(f.dialog.querySelector("[data-warning-error]").hidden, false);
  assert.equal(continuation.hasAttribute("href"), false);
  assert.equal(continuation.getAttribute("aria-disabled"), "true");
  assert.equal(f.dialog.querySelector("[data-warning-host]").textContent, "");
  assert.equal(f.dialog.querySelector("[data-warning-url]").textContent, "");
  f.document.dispatch("cancel", makeEvent(f.dialog));
  assert.equal(f.dialog.open, false);
  assert.equal(anchor.focused, true);
});

test("Tab wraps within the native modal at both focus boundaries", () => {
  const f = fixture();
  f.controller.handle(makeEvent(f.anchor("https://outside.example/")));
  const stay = f.dialog.querySelector("[data-warning-stay]");
  const continuation = f.dialog.querySelector("[data-warning-continue]");

  continuation.focus();
  const forward = makeEvent(continuation, { type: "keydown", key: "Tab" });
  f.document.dispatch("keydown", forward);
  assert.equal(forward.prevented, true);
  assert.equal(f.document.activeElement, stay);

  stay.focus();
  const backward = makeEvent(stay, { type: "keydown", key: "Tab", shiftKey: true });
  f.document.dispatch("keydown", backward);
  assert.equal(backward.prevented, true);
  assert.equal(f.document.activeElement, continuation);
});

test("dynamic links, downloads, and duplicate initialization keep one listener set", () => {
  const f = fixture();
  const listenerCounts = [...f.document.listeners.values()].map((listeners) => listeners.length);
  initializeExternalLinkWarning(f.document, f.window);
  assert.deepEqual([...f.document.listeners.values()].map((listeners) => listeners.length), listenerCounts);

  const dynamicLink = f.anchor("https://outside.example/file", { download: "archive.zip", target: "named-frame" });
  const event = makeEvent(dynamicLink, { shiftKey: true });
  f.controller.handle(event);
  const continuation = f.dialog.querySelector("[data-warning-continue]");
  assert.equal(continuation.href, "https://outside.example/file");
  assert.equal(continuation.target, "_blank");
  assert.equal(continuation.rel, "noopener noreferrer");
  assert.equal(continuation.getAttribute("download"), "archive.zip");
});

test("fallback requires confirmation, blocks invalid destinations, and opens external sites in a new tab", () => {
  const f = fixture({ modal: false });
  const external = f.anchor("https://outside.example/path");
  f.controller.handle(makeEvent(external));
  assert.match(f.window.confirmMessage, /Destination: outside\.example/u);
  assert.deepEqual(f.opened, [["new", "https://outside.example/path", "_blank", "noopener,noreferrer"]]);

  const newContext = f.anchor("https://outside.example/new", { target: "_blank" });
  f.controller.handle(makeEvent(newContext));
  assert.deepEqual(f.opened[1], ["new", "https://outside.example/new", "_blank", "noopener,noreferrer"]);

  const invalid = f.anchor("https://user:secret@outside.example/");
  f.controller.handle(makeEvent(invalid));
  assert.deepEqual(f.alerts, ["Invalid destination."]);
  assert.equal(f.opened.length, 2);
  assert.doesNotMatch(f.window.confirmMessage, /secret/u);
});