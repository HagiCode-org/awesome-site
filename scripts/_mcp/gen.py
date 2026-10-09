#!/usr/bin/env python3
"""Generate ja-JP/batch_XX.translated.json from zh-CN source + a translations dict.

Translation dict (tr_{XX}.json) maps line -> string that is:
  * for separator list-items (line has ' - ' with alphabetic description):
        the JAPANESE DESCRIPTION only (prefix is preserved verbatim from source)
  * for headings and full-prose lines (no separator, or blockquote prose):
        the FULL TRANSLATED LINE

Lines that are pure structure (blockquote markers like > [!NOTE], URL-only
lines) are passed through verbatim without needing a dict entry.
"""
import json, re, os, sys

BASE = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(BASE, "zh-CN")
OUT_DIR = os.path.join(BASE, "ja-JP")


def is_blockquote_marker(m):
    return re.match(r"^\s*>\s*\[!(NOTE|WARNING|TIP|IMPORTANT|CAUTION)\]\s*$", m) is not None


def is_url_only(m):
    s = m.strip()
    if s.startswith("> "):
        s = s[2:].strip()
    return bool(re.match(r"^https?://\S+$", s))


def is_heading(m):
    return bool(re.match(r"^\s*#{1,6}\s", m))


def has_alpha(s):
    return bool(re.search(r"[A-Za-z]", s))


def build(batch, tr):
    src = json.load(open(os.path.join(SRC_DIR, f"batch_{batch}.json"), encoding="utf-8"))
    out = []
    for item in src:
        m = item["masked"]
        ln = item["line"]
        if is_blockquote_marker(m) or is_url_only(m) or not has_alpha(m):
            # pure structure / non-prose -> verbatim
            out.append({"line": ln, "translated": m})
            continue
        if is_heading(m):
            out.append({"line": ln, "translated": tr[str(ln)]})
            continue
        if " - " in m:
            pre, desc = m.rsplit(" - ", 1)
            if not has_alpha(desc):
                out.append({"line": ln, "translated": m})
            else:
                out.append({"line": ln, "translated": pre + " - " + tr[str(ln)]})
            continue
        # full prose (intro paragraphs, blockquote prose)
        out.append({"line": ln, "translated": tr[str(ln)]})
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(os.path.join(OUT_DIR, f"batch_{batch}.translated.json"), "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=0)
    print(f"batch_{batch}: wrote {len(out)} lines")


if __name__ == "__main__":
    for b in sys.argv[1:]:
        tr = json.load(open(os.path.join(BASE, f"tr_{b}.json"), encoding="utf-8"))
        build(b, tr)