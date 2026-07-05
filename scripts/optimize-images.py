"""Compress all site images for faster loads."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public"
IMAGES = ROOT / "images"

# Convert heavy originals once (skip if webp already exists and is newer)
CONVERT = [
    (IMAGES / "9.png", IMAGES / "fleet-auto.webp", 900),
    (IMAGES / "66.png", IMAGES / "fleet-heavy.webp", 900),
    (IMAGES / "header3.jpg", IMAGES / "sala.webp", 900),
    (IMAGES / "services2.jpg", IMAGES / "sala-curs.webp", 900),
    (ROOT / "logo-full.png", ROOT / "logo-full.webp", 320),
]

MAX_WIDTH = {
    "Todea-auto.webp": 900,
    "todea-graph1.webp": 800,
    "todea-graph2.webp": 800,
    "todea-graph3.webp": 800,
    "todea-graph4.webp": 800,
    "todea-graph5.webp": 800,
    "todea-graph6.webp": 800,
    "tam.webp": 900,
    "50182107_SL-022323-56120-04-scaled.webp": 1000,
    "fleet-auto.webp": 900,
    "fleet-heavy.webp": 900,
    "sala.webp": 900,
    "sala-curs.webp": 900,
}

QUALITY = 70


def save_webp(im: Image.Image, dst: Path) -> None:
    im.save(dst, "WEBP", quality=QUALITY, method=6)


def resize(im: Image.Image, max_w: int) -> Image.Image:
    w, h = im.size
    if w <= max_w:
        return im
    return im.resize((max_w, int(h * max_w / w)), Image.Resampling.LANCZOS)


for src, dst, max_w in CONVERT:
    if not src.exists():
        continue
    im = resize(Image.open(src).convert("RGB"), max_w)
    save_webp(im, dst)
    print(f"convert {src.name} -> {dst.name} ({dst.stat().st_size // 1024} KB)")

for webp in sorted(IMAGES.glob("*.webp")):
    max_w = MAX_WIDTH.get(webp.name, 900)
    before = webp.stat().st_size
    im = resize(Image.open(webp).convert("RGB"), max_w)
    tmp = webp.with_suffix(".tmp.webp")
    save_webp(im, tmp)
    tmp.replace(webp)
    after = webp.stat().st_size
    print(f"recompress {webp.name}: {before // 1024} -> {after // 1024} KB")

logo = ROOT / "logo-full.webp"
if logo.exists():
    before = logo.stat().st_size
    im = resize(Image.open(logo).convert("RGB"), 320)
    save_webp(im, logo)
    print(f"logo-full.webp: {before // 1024} -> {logo.stat().st_size // 1024} KB")
