"""Remove assets not referenced by the live site (scripts can re-download sources)."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "public"

# Runtime references only — build scripts re-fetch missing sources.
KEEP = {
    "favicon.png",
    "logo-footer.webp",
    "logo-full.webp",
    "logo-header.png",
    "robots.txt",
    "sitemap.xml",
    "llms.txt",
    "images/Todea-auto.webp",
    "images/hero-bg.png",
    "images/hero-bg-mobile.png",
    "images/header-road-strip.png",
    "images/sala-curs.webp",
    "images/sala.webp",
    "images/todea-graph1.webp",
    "images/todea-graph2.webp",
    "images/todea-graph4.webp",
    "images/todea-graph5.webp",
    "images/icons/auto.png",
    "images/icons/bus.png",
    "images/icons/help.png",
    "images/icons/moto.png",
    "images/icons/truck.png",
    "images/categories/autobuze-hero.webp",
    "images/categories/autoturisme-hero.webp",
    "images/categories/camioane-hero.webp",
    "images/categories/motociclete-hero.webp",
    # Logo rebuild sources (build-logo.py)
    "logo-acasa-src.png",
    "logo-negru-src.png",
}

removed = 0
saved = 0
for path in sorted(ROOT.rglob("*")):
    if not path.is_file():
        continue
    rel = path.relative_to(ROOT).as_posix()
    if rel in KEEP:
        continue
    size = path.stat().st_size
    path.unlink()
    removed += 1
    saved += size
    print(f"  removed {rel} ({size // 1024} KB)")

print(f"done — {removed} files, {saved // 1024} KB freed")
