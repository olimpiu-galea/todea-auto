"""Download images from todea-auto.ro for the rebuild."""
from pathlib import Path
from urllib.request import urlretrieve

try:
    from PIL import Image
except ImportError:
    Image = None

BASE = "https://www.todea-auto.ro/wp-content/uploads"
ROOT = Path(__file__).resolve().parents[1] / "public"
IMG = ROOT / "images"
CAT = IMG / "categories"
ICONS = IMG / "icons"

DOWNLOADS = [
    (f"{BASE}/2025/12/moto.png", ICONS / "moto.png"),
    (f"{BASE}/2025/12/Auto.png", ICONS / "auto.png"),
    (f"{BASE}/2025/12/truck.png", ICONS / "truck.png"),
    (f"{BASE}/2025/12/Bus.png", ICONS / "bus.png"),
    (f"{BASE}/2025/12/icon.png", ICONS / "help.png"),
    (f"{BASE}/2026/04/Todea-auto.webp", IMG / "Todea-auto.webp"),
    (f"{BASE}/2025/12/todea-graph1.webp", IMG / "todea-graph1.webp"),
    (f"{BASE}/2025/12/todea-graph2.webp", IMG / "todea-graph2.webp"),
    (f"{BASE}/2025/12/todea-graph3.webp", IMG / "todea-graph3.webp"),
    (f"{BASE}/2025/12/todea-graph4.webp", IMG / "todea-graph4.webp"),
    (f"{BASE}/2025/12/todea-graph5.webp", IMG / "todea-graph5.webp"),
    (f"{BASE}/2025/12/todea-graph6.webp", IMG / "todea-graph6.webp"),
    (f"{BASE}/2025/12/9.png", IMG / "9.png"),
    (f"{BASE}/2025/12/66.png", IMG / "66.png"),
    (f"{BASE}/2025/12/tam.webp", IMG / "tam.webp"),
    (f"{BASE}/2025/12/header3.jpg", IMG / "header3.jpg"),
    (f"{BASE}/2025/12/services2.jpg", IMG / "services2.jpg"),
    (f"{BASE}/2026/04/50182107_SL-022323-56120-04-scaled.webp", IMG / "50182107_SL-022323-56120-04-scaled.webp"),
    (f"{BASE}/2025/12/Acasa.png", ROOT / "logo-full.png"),
    (f"{BASE}/2025/12/logo-todea-negru.png", IMG / "logo-todea-negru.png"),
    (f"{BASE}/2026/06/cropped-todea-site-icon-192x192.png", ROOT / "favicon.png"),
]

CONVERT = [
    (IMG / "9.png", IMG / "fleet-auto.webp", 900),
    (IMG / "header3.jpg", IMG / "sala.webp", 900),
    (IMG / "services2.jpg", IMG / "sala-curs.webp", 900),
    (ROOT / "logo-full.png", ROOT / "logo-full.webp", 400),
    (ROOT / "logo-full.png", ROOT / "logo-header.webp", 220),
]


def resize_save(src: Path, dst: Path, max_w: int) -> None:
    im = Image.open(src).convert("RGB")
    w, h = im.size
    if w > max_w:
        im = im.resize((max_w, int(h * max_w / w)), Image.Resampling.LANCZOS)
    im.save(dst, "WEBP", quality=78, method=6)


for url, dest in DOWNLOADS:
    dest.parent.mkdir(parents=True, exist_ok=True)
    print(f"fetch {dest.name}...")
    urlretrieve(url, dest)
    print(f"  ok ({dest.stat().st_size // 1024} KB)")

if Image:
    for src, dst, max_w in CONVERT:
        if not src.exists():
            continue
        resize_save(src, dst, max_w)
        print(f"convert -> {dst.name} ({dst.stat().st_size // 1024} KB)")
        if src.suffix.lower() == ".png" and src.parent.name == "categories":
            src.unlink(missing_ok=True)

print("done")
