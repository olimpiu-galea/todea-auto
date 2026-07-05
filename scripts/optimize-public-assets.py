"""Optimize public assets for production — display-size only, no visual change."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public"


def resize_png(path: Path, max_width: int) -> None:
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    if w <= max_width:
        im.save(path, "PNG", optimize=True)
        return
    nw = max_width
    nh = int(h * nw / w)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    before = path.stat().st_size
    im.save(path, "PNG", optimize=True)
    after = path.stat().st_size
    print(f"  {path.name}: {w}x{h} -> {nw}x{nh}, {before // 1024} -> {after // 1024} KB")


def resize_webp(path: Path, max_width: int, quality: int = 78) -> None:
    im = Image.open(path).convert("RGB")
    w, h = im.size
    if w <= max_width:
        return
    nw = max_width
    nh = int(h * nw / w)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    before = path.stat().st_size
    im.save(path, "WEBP", quality=quality, method=6)
    after = path.stat().st_size
    print(f"  {path.name}: {w}x{h} -> {nw}x{nh}, {before // 1024} -> {after // 1024} KB")


def main() -> None:
    logo = ROOT / "logo-header.png"
    if logo.exists():
        print("logo-header.png")
        resize_png(logo, 280)

    strip = ROOT / "images" / "header-road-strip.png"
    if strip.exists():
        print("header-road-strip.png")
        resize_png(strip, 1600)

    for name, max_w in (("hero-bg.png", 1920), ("hero-bg-mobile.png", 960)):
        p = ROOT / "images" / name
        if p.exists():
            print(name)
            resize_png(p, max_w)

    hero = ROOT / "images" / "Todea-auto.webp"
    if hero.exists():
        print("Todea-auto.webp")
        resize_webp(hero, 900)

    print("done")


if __name__ == "__main__":
    main()
