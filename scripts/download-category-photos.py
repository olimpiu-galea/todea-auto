"""Regenerate category hero banners — run after download-todea-images.py."""
import subprocess
import sys
from pathlib import Path

script = Path(__file__).resolve().parent / "build-category-heroes.py"
subprocess.check_call([sys.executable, str(script)])
