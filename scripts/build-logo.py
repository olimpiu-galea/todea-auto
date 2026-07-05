"""Build transparent TODEA logos — flood-fill only (no text recolor).

Header: Acasa.png — original bronze/orange artwork + dark text.
Footer: logo-todea-negru.png — white text for dark footer.
"""
from __future__ import annotations

from collections import deque
from pathlib import Path
from urllib.request import urlretrieve

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public"
ASSETS = {
    "header": (
        "https://www.todea-auto.ro/wp-content/uploads/2025/12/Acasa.png",
        ROOT / "logo-acasa-src.png",
    ),
    "footer": (
        "https://www.todea-auto.ro/wp-content/uploads/2025/12/logo-todea-negru.png",
        ROOT / "logo-negru-src.png",
    ),
}


def fetch(url: str, dest: Path) -> None:
    if not dest.exists():
        print(f"download {dest.name}...")
        urlretrieve(url, dest)


def remove_black_bg(im: Image.Image) -> Image.Image:
    im = im.copy().convert("RGBA")
    px = im.load()
    w, h = im.size

    def is_bg(r: int, g: int, b: int, a: int) -> bool:
        return a > 0 and r <= 20 and g <= 20 and b <= 20

    seen: set[tuple[int, int]] = set()
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        q.append((x, 0))
        q.append((x, h - 1))
    for y in range(h):
        q.append((0, y))
        q.append((w - 1, y))

    while q:
        x, y = q.popleft()
        if (x, y) in seen or x < 0 or y < 0 or x >= w or y >= h:
            continue
        r, g, b, a = px[x, y]
        if not is_bg(r, g, b, a):
            continue
        seen.add((x, y))
        px[x, y] = (0, 0, 0, 0)
        q.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])
    return im


def trim(im: Image.Image, pad: int = 6) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    x0, y0, x1, y1 = bbox
    return im.crop(
        (
            max(0, x0 - pad),
            max(0, y0 - pad),
            min(im.width, x1 + pad),
            min(im.height, y1 + pad),
        )
    )


def export(im: Image.Image, header_file: str, full_file: str, png_header: bool = False) -> None:
    w, h = im.size
    full = im.resize((max(1, int(w * 120 / h)), 120), Image.Resampling.LANCZOS)
    header = im.resize((max(1, int(w * 72 / h)), 72), Image.Resampling.LANCZOS)
    full.save(ROOT / full_file, "WEBP", lossless=True, method=6)
    header.save(ROOT / header_file, "WEBP", lossless=True, method=6)
    if png_header:
        header.save(ROOT / "logo-header.png", "PNG", optimize=True)
    print(f"  {full_file} {full.size}")
    print(f"  {header_file} {header.size}")
    if png_header:
        print(f"  logo-header.png {header.size}")


def main() -> None:
    ROOT.mkdir(parents=True, exist_ok=True)

    fetch(*ASSETS["header"])
    header_src = trim(remove_black_bg(Image.open(ASSETS["header"][1])))
    print("header (Acasa, transparent bg, original colors):")
    export(header_src, "logo-header.webp", "logo-full.webp", png_header=True)
    header_src.save(ROOT / "logo-full.png")

    fetch(*ASSETS["footer"])
    footer_src = trim(remove_black_bg(Image.open(ASSETS["footer"][1])))
    print("footer (white text, transparent bg):")
    export(footer_src, "logo-footer-header.webp", "logo-footer.webp")

    icon = trim(header_src, 4)
    icon.thumbnail((192, 192), Image.Resampling.LANCZOS)
    fav = Image.new("RGBA", (192, 192), (0, 0, 0, 0))
    fav.paste(icon, ((192 - icon.width) // 2, (192 - icon.height) // 2), icon)
    fav.save(ROOT / "favicon.png")
    print("done")


if __name__ == "__main__":
    main()
