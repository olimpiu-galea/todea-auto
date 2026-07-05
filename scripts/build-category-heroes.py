"""Build category hero banners from official vehicle icons (same style as category cards)."""
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1] / "public"
ICONS = ROOT / "images" / "icons"
OUT = ROOT / "images" / "categories"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 960, 540
# Match card gradient: linear-gradient(145deg, #1a1a1a 0%, #243044 55%, #8a3a12 100%)
GRAD_TOP = (26, 26, 26)
GRAD_MID = (36, 48, 68)
GRAD_BOTTOM = (138, 58, 18)


def gradient_bg() -> Image.Image:
    bg = Image.new("RGB", (W, H), GRAD_TOP)
    draw = ImageDraw.Draw(bg)
    for y in range(H):
        t = y / H
        if t < 0.55:
            u = t / 0.55
            r = int(GRAD_TOP[0] * (1 - u) + GRAD_MID[0] * u)
            g = int(GRAD_TOP[1] * (1 - u) + GRAD_MID[1] * u)
            b = int(GRAD_TOP[2] * (1 - u) + GRAD_MID[2] * u)
        else:
            u = (t - 0.55) / 0.45
            r = int(GRAD_MID[0] * (1 - u) + GRAD_BOTTOM[0] * u)
            g = int(GRAD_MID[1] * (1 - u) + GRAD_BOTTOM[1] * u)
            b = int(GRAD_MID[2] * (1 - u) + GRAD_BOTTOM[2] * u)
        draw.line([(0, y), (W, y)], fill=(r, g, b))
    return bg


def paste_icon(bg: Image.Image, icon_path: Path, scale: float = 0.72) -> Image.Image:
    icon = Image.open(icon_path).convert("RGBA")
    iw, ih = icon.size
    target = int(min(W, H) * scale)
    ratio = min(target / iw, target / ih)
    nw, nh = int(iw * ratio), int(ih * ratio)
    icon = icon.resize((nw, nh), Image.Resampling.LANCZOS)
    x = (W - nw) // 2
    y = (H - nh) // 2
    bg = bg.convert("RGBA")
    bg.paste(icon, (x, y), icon)
    return bg.convert("RGB")


def save_webp(img: Image.Image, dest: Path) -> None:
    img.save(dest, "WEBP", quality=82, method=6)
    print(f"  {dest.name} ({dest.stat().st_size // 1024} KB)")


ICON_MAP = {
    "motociclete-hero.webp": ICONS / "moto.png",
    "autoturisme-hero.webp": ICONS / "auto.png",
    "camioane-hero.webp": ICONS / "truck.png",
    "autobuze-hero.webp": ICONS / "bus.png",
}

for name, icon in ICON_MAP.items():
    print(f"build {name}...")
    banner = paste_icon(gradient_bg(), icon)
    save_webp(banner, OUT / name)

print("done")