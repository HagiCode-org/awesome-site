import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "../../../../.."))
SRC = os.path.join(ROOT, "sources/awesome-ios/README.md")
OUT = os.path.join(HERE, "ja-JP.assembled.md")


def read_lines(path):
    text = open(path, encoding="utf-8").read()
    assert text.endswith("\n"), path
    return text[:-1].split("\n")


def dest_spans(line):
    spans = []
    i = 0
    while True:
        j = line.find("](", i)
        if j < 0:
            return spans
        k = j + 2
        depth = 1
        while k < len(line):
            c = line[k]
            if c == "\\":
                k += 2
                continue
            if c == "(":
                depth += 1
            elif c == ")":
                depth -= 1
                if depth == 0:
                    break
            k += 1
        if depth != 0:
            return spans
        spans.append((j + 2, k))
        i = k + 1


def placeholder(line):
    out = []
    last = 0
    for a, b in dest_spans(line):
        out.append(line[last:a])
        out.append("§")
        last = b
    out.append(line[last:])
    return "".join(out)


def dests(line):
    return [line[a:b] for a, b in dest_spans(line)]


def show(a, b):
    src = read_lines(SRC)
    print("\n".join(placeholder(l) for l in src[a - 1:b]))


PREFIX = re.compile(r"^\s*(?:[-*+]|\d+\.)\s+\[(?:[^\]\\]|\\.)*\]\(§\)")


def assemble():
    src = read_lines(SRC)
    parts = []
    for path in glob.glob(os.path.join(HERE, "p*.md")):
        m = re.fullmatch(r"p(\d+)-(\d+)\.md", os.path.basename(path))
        if m:
            parts.append((int(m.group(1)), int(m.group(2)), path))
    parts.sort()
    expected = 1
    out = []
    ok = True
    for a, b, path in parts:
        if a != expected:
            print(f"gap/overlap: expected part starting at {expected}, got {a}")
            ok = False
        text = open(path, encoding="utf-8").read()
        if not text.endswith("\n"):
            print(f"{os.path.basename(path)}: missing final newline")
            ok = False
            text += "\n"
        lines = text[:-1].split("\n")
        if len(lines) != b - a + 1:
            print(f"{os.path.basename(path)}: {len(lines)} lines, expected {b - a + 1}")
            ok = False
        for offset, line in enumerate(lines):
            n = a + offset
            if n > len(src):
                break
            if line.startswith("@"):
                m = PREFIX.match(placeholder(src[n - 1]))
                if not m:
                    print(f"line {n}: '@' used but source has no entry prefix")
                    ok = False
                else:
                    line = m.group(0) + line[1:]
            originals = dests(src[n - 1])
            count = line.count("](§)")
            if count != len(originals) or len(dest_spans(line)) != len(originals):
                print(f"line {n}: {count} placeholders / {len(dest_spans(line))} destinations, expected {len(originals)}")
                ok = False
                out.append(line)
                continue
            pieces = line.split("](§)")
            restored = pieces[0]
            for idx, original in enumerate(originals):
                restored += "](" + original + ")" + pieces[idx + 1]
            out.append(restored)
        expected = b + 1
    if expected != len(src) + 1:
        print(f"coverage ends at {expected - 1}, source has {len(src)} lines")
        ok = False
    open(OUT, "w", encoding="utf-8").write("\n".join(out) + "\n")
    print(("OK" if ok else "PROBLEMS") + f": wrote {len(out)} lines to {OUT}")


JA = re.compile(r"[\u3040-\u30ff\u3400-\u9fff\uff01-\uff60]")
LIST = re.compile(r"^(\s*)([-*+]|\d+\.)(\s+)")
HEAD = re.compile(r"^(#+)(\s+)")
CODE = re.compile(r"`[^`]*`")
BARE = re.compile(r"https?://[^\s)<]*|www\.[^\s)<]*")
EMOJI = re.compile(r":[a-z0-9_+-]+:|[\U0001F000-\U0001FFFF\u2600-\u27BF\u2B00-\u2BFF\u23E9-\u23FA]")


def strip_dests(line):
    return re.sub(r"\]\([^)]*\)", "]()", line)


def check(path=None):
    src = read_lines(SRC)
    dst = read_lines(path or OUT)
    problems = 0
    if len(src) != len(dst):
        print(f"line count {len(dst)} != {len(src)}")
        problems += 1
    for n, (s, d) in enumerate(zip(src, dst), 1):
        msgs = []
        if (s.strip() == "") != (d.strip() == ""):
            msgs.append("blank mismatch")
        ms, md = LIST.match(s), LIST.match(d)
        if bool(ms) != bool(md) or (ms and ms.group(0) != md.group(0)):
            msgs.append("list prefix mismatch")
        hs, hd = HEAD.match(s), HEAD.match(d)
        if bool(hs) != bool(hd) or (hs and hs.group(0) != hd.group(0)):
            msgs.append("heading prefix mismatch")
        if dests(s) != dests(d):
            msgs.append("destinations differ")
        if CODE.findall(s) != CODE.findall(d):
            msgs.append("inline code differs")
        if BARE.findall(strip_dests(s)) != BARE.findall(strip_dests(d)):
            msgs.append("bare urls differ")
        if EMOJI.findall(s) != EMOJI.findall(d):
            msgs.append("emoji differ")
        if s.lstrip().startswith(("<", "**[")) is False and s != d:
            pass
        prose = re.sub(r"\[[^\]]*\]\([^)]*\)", "", s)
        prose = CODE.sub("", prose)
        words = re.findall(r"[A-Za-z]{3,}", prose)
        if len(words) >= 3 and not JA.search(d):
            msgs.append("no Japanese text")
        if s == d and s.strip() and not s.startswith("<") and not s.lstrip().startswith("</"):
            if re.search(r"[A-Za-z]{3,}", prose) and len(words) >= 1:
                msgs.append("identical to source")
        if msgs:
            problems += 1
            print(f"{n}: {', '.join(msgs)}\n  S: {s[:160]}\n  T: {d[:160]}")
    print(f"{problems} problem line(s)")


if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "show":
        show(int(sys.argv[2]), int(sys.argv[3]))
    elif cmd == "assemble":
        assemble()
    elif cmd == "check":
        check(sys.argv[2] if len(sys.argv) > 2 else None)
