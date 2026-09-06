#!/usr/bin/env python3
"""
Generates the site's map imagery as self-hosted SVG.

These replace images that were hotlinked from lh3.googleusercontent.com
(Google's AI-preview CDN). Those URLs are not owned by the site and can
expire without warning. SVG is a few KB, scales crisply, and uses the
brand palette directly.

Deterministic: same seed in, same file out. Re-run to regenerate.
"""

import random
import math
import os

NAVY_DEEP = "#0b1220"
NAVY = "#132033"
STREET = "#24344c"
STREET_HI = "#33475f"
WATER = "#16283f"
RED = "#bb0112"

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "img")


def street_grid(rng, w, h, density=26):
    """Irregular street network — jittered grid plus a few diagonals."""
    parts = []
    step = w / density

    # Vertical-ish streets
    x = 0.0
    while x < w:
        jitter = rng.uniform(-step * 0.3, step * 0.3)
        width = 1.6 if rng.random() < 0.18 else 0.7
        color = STREET_HI if width > 1 else STREET
        pts = []
        y = -10.0
        cx = x + jitter
        while y < h + 10:
            cx += rng.uniform(-3, 3)
            pts.append(f"{cx:.0f},{y:.0f}")
            y += h / 6
        parts.append(
            f'<polyline points="{" ".join(pts)}" fill="none" '
            f'stroke="{color}" stroke-width="{width}"/>'
        )
        x += step * rng.uniform(0.75, 1.35)

    # Horizontal-ish streets
    y = 0.0
    while y < h:
        jitter = rng.uniform(-step * 0.3, step * 0.3)
        width = 1.6 if rng.random() < 0.18 else 0.7
        color = STREET_HI if width > 1 else STREET
        pts = []
        x = -10.0
        cy = y + jitter
        while x < w + 10:
            cy += rng.uniform(-3, 3)
            pts.append(f"{x:.0f},{cy:.0f}")
            x += w / 6
        parts.append(
            f'<polyline points="{" ".join(pts)}" fill="none" '
            f'stroke="{color}" stroke-width="{width}"/>'
        )
        y += step * rng.uniform(0.75, 1.35)

    # Curved arterials sweeping across the grid
    for _ in range(3):
        ang = rng.uniform(0, math.pi)
        cx, cy = rng.uniform(w * 0.2, w * 0.8), rng.uniform(h * 0.2, h * 0.8)
        length = max(w, h) * 1.6
        pts = []
        t = -length / 2
        drift = rng.uniform(-0.35, 0.35)
        while t < length / 2:
            a = ang + drift * (t / length)
            pts.append(f"{cx + math.cos(a) * t:.0f},{cy + math.sin(a) * t:.0f}")
            t += length / 14
        parts.append(
            f'<polyline points="{" ".join(pts)}" fill="none" stroke="{STREET_HI}" '
            f'stroke-width="2.6" stroke-linecap="round" opacity="0.85"/>'
        )
    return "\n".join(parts)


def blocks(rng, w, h, count):
    """Faint building footprints so the grid reads as a settled city."""
    parts = []
    for _ in range(count):
        bw = rng.uniform(6, 20)
        bh = rng.uniform(6, 20)
        x = rng.uniform(0, w - bw)
        y = rng.uniform(0, h - bh)
        parts.append(
            f'<rect x="{x:.0f}" y="{y:.0f}" width="{bw:.0f}" height="{bh:.0f}" '
            f'rx="1.5" fill="{STREET}" opacity="{rng.uniform(0.25, 0.6):.2f}"/>'
        )
    return "\n".join(parts)


def river(rng, w, h):
    pts = []
    x = -20.0
    y = rng.uniform(h * 0.25, h * 0.75)
    while x < w + 20:
        y += rng.uniform(-h * 0.06, h * 0.06)
        y = max(h * 0.1, min(h * 0.9, y))
        pts.append(f"{x:.0f},{y:.0f}")
        x += w / 9
    return (
        f'<polyline points="{" ".join(pts)}" fill="none" stroke="{WATER}" '
        f'stroke-width="18" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>'
    )


def heat(rng, w, h, clusters, spread=1.0):
    """Customer-density blobs plus individual points."""
    parts = []
    centers = []
    for _ in range(clusters):
        cx = rng.uniform(w * 0.12, w * 0.88)
        cy = rng.uniform(h * 0.15, h * 0.85)
        r = rng.uniform(w * 0.07, w * 0.16) * spread
        centers.append((cx, cy, r))
        parts.append(
            f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{r:.0f}" fill="url(#heat)"/>'
        )

    for cx, cy, r in centers:
        for _ in range(int(r / 3)):
            a = rng.uniform(0, math.tau)
            d = abs(rng.gauss(0, r * 0.45))
            px = cx + math.cos(a) * d
            py = cy + math.sin(a) * d
            if 0 < px < w and 0 < py < h:
                parts.append(
                    f'<circle cx="{px:.0f}" cy="{py:.0f}" r="{rng.uniform(1.3, 2.6):.0f}" '
                    f'fill="{RED}" opacity="{rng.uniform(0.5, 0.95):.2f}"/>'
                )
    return "\n".join(parts)


def svg_doc(w, h, body, defs_extra=""):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img">
  <defs>
    <radialGradient id="heat">
      <stop offset="0%" stop-color="{RED}" stop-opacity="0.55"/>
      <stop offset="55%" stop-color="{RED}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="{RED}" stop-opacity="0"/>
    </radialGradient>
    {defs_extra}
  </defs>
  <rect width="{w}" height="{h}" fill="{NAVY_DEEP}"/>
  <rect width="{w}" height="{h}" fill="{NAVY}" opacity="0.6"/>
  {body}
</svg>
"""


def build_map(seed, w, h, clusters, spread=1.0, with_river=True, density=38):
    rng = random.Random(seed)
    body = []
    if with_river:
        body.append(river(rng, w, h))
    body.append(f'<g>{blocks(rng, w, h, int(w * h / 900))}</g>')
    body.append(f'<g opacity="0.9">{street_grid(rng, w, h, density)}</g>')
    body.append(heat(rng, w, h, clusters, spread))
    return svg_doc(w, h, "\n".join(body))


def build_backdrop(seed, w, h):
    """Wider, quieter version for page backgrounds behind text."""
    rng = random.Random(seed)
    body = [
        river(rng, w, h),
        f'<g opacity="0.5">{blocks(rng, w, h, int(w * h / 1400))}</g>',
        f'<g opacity="0.5">{street_grid(rng, w, h, 46)}</g>',
        f'<g opacity="0.7">{heat(rng, w, h, 5, 1.3)}</g>',
    ]
    return svg_doc(w, h, "\n".join(body))


def main():
    os.makedirs(OUT, exist_ok=True)
    files = {
        "backdrop-hero.svg": build_backdrop(11, 1600, 900),
        "backdrop-services.svg": build_backdrop(23, 1600, 900),
        "backdrop-contact.svg": build_backdrop(37, 1600, 900),
        "map-landscaping.svg": build_map(101, 800, 600, 4, 1.15),
        "map-hvac.svg": build_map(202, 800, 600, 6, 0.95),
        "map-coffee.svg": build_map(303, 800, 600, 3, 0.8, density=48),
        "map-youth-sports.svg": build_map(404, 800, 600, 5, 1.05),
    }
    for name, content in files.items():
        path = os.path.join(OUT, name)
        with open(path, "w") as f:
            f.write(content)
        print(f"{name:28} {len(content)/1024:6.1f} KB")


if __name__ == "__main__":
    main()
