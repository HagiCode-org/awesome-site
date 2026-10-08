import json, re, sys, time, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

SRC_DIR = "/home/newbe36524/repos/hagi/hagicode-mono/repos/awesome-site/scripts/_mcp/zh-CN"
DST_DIR = "/home/newbe36524/repos/hagi/hagicode-mono/repos/awesome-site/scripts/_mcp/ko-KR"

# leading markdown marker: spaces + (heading #'s | bullet - * + | blockquote > | numbered n.) + whitespace
MARKER_RE = re.compile(r'^(\s*(?:#{1,6}|[-*+]|\d+\.|>+)\s+)')

# protected tokens: placeholders, HTML tags, GitHub alerts, keycaps, and runs of
# symbol/emoji/punctuation codepoints (en/em dash, curly quotes, ellipsis, emoji, ZWJ, VS...).
PROTECT_RE = re.compile(
    r'(@@L\d+@@|@@C\d+@@'                                   # link/code placeholders
    r'|<[^>]+>'                                              # html anchors
    r'|\[![A-Z]+\]'                                          # github alert keyword
    r'|[0-9#]\uFE0F\u20E3'                                   # keycap (e.g. #️⃣)
    r'|[\u2010-\u206F\u2190-\u21FF\u2300-\u27BF\u2B00-\u2BFF'
    r'\uFE00-\uFE0F\u200D\u20E3\U0001F000-\U0001FAFF]+)'     # symbol / emoji runs
)

GTX = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t"

def gtranslate(text, tries=8):
    if not text.strip():
        return text
    q = urllib.parse.urlencode({"q": text})
    url = GTX + "&" + q
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    delay = 1.0
    for attempt in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=20) as r:
                data = json.loads(r.read().decode("utf-8"))
            return "".join(seg[0] for seg in data[0] if seg[0] is not None)
        except Exception as e:
            if attempt < tries - 1:
                time.sleep(delay + (attempt % 3))
                delay = min(delay * 2, 30)
            else:
                print("ERR translate:", repr(text)[:80], e, file=sys.stderr)
                return text
    return text

def is_translatable(masked):
    # true if there is actual English prose to translate (ignoring markers/placeholders/emoji)
    m = MARKER_RE.match(masked)
    body = masked[m.end():] if m else masked
    body = PROTECT_RE.sub("", body)
    body = body.strip()
    return bool(body) and any(c.isascii() and c.isalpha() for c in body)

def translate_piece(p):
    # preserve exact leading/trailing whitespace; translate only the core
    left = p[:len(p) - len(p.lstrip())]
    right = p[len(p.rstrip()):]
    core = p.strip()
    if not core:
        return p
    return left + gtranslate(core) + right

def process_entry(e):
    s = e["masked"]
    m = MARKER_RE.match(s)
    if m:
        marker = m.group(1)
        body = s[m.end():]
    else:
        marker = ""
        body = s
    parts = PROTECT_RE.split(body)   # even idx = text, odd idx = protected token
    for i in range(0, len(parts), 2):
        parts[i] = translate_piece(parts[i])
    translated = marker + "".join(parts)
    return {"line": e["line"], "translated": translated}

def main():
    idx = int(sys.argv[1])
    src = f"{SRC_DIR}/batch_{idx:02d}.json"
    dst = f"{DST_DIR}/batch_{idx:02d}.translated.json"
    data = json.load(open(src, encoding="utf-8"))
    out = [None] * len(data)
    with ThreadPoolExecutor(max_workers=4) as ex:
        futs = {ex.submit(process_entry, e): j for j, e in enumerate(data)}
        for f in as_completed(futs):
            j = futs[f]
            out[j] = f.result()
    # repair: any entry whose translation still equals the English original but
    # actually had translatable prose (i.e. the request failed / got rate-limited)
    src_by_line = {e["line"]: e["masked"] for e in data}
    for o in out:
        if o["translated"] == src_by_line[o["line"]] and is_translatable(src_by_line[o["line"]]):
            for attempt in range(10):
                t = process_entry({"line": o["line"], "masked": src_by_line[o["line"]]})["translated"]
                if t != src_by_line[o["line"]]:
                    o["translated"] = t
                    break
                time.sleep(2 + attempt)
    # safety: ensure ordering matches original and placeholders preserved
    for o, e in zip(out, data):
        assert o["line"] == e["line"]
        if len(re.findall(r'@@L\d+@@', o["translated"])) != len(re.findall(r'@@L\d+@@', e["masked"])):
            print("WARN placeholder mismatch line", o["line"], file=sys.stderr)
    json.dump(out, open(dst, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    untranslated = sum(1 for o in out if o["translated"] == src_by_line[o["line"]] and is_translatable(src_by_line[o["line"]]))
    print(f"batch_{idx:02d}: {len(out)} (untranslated leftovers: {untranslated})")

if __name__ == "__main__":
    main()