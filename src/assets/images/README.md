# Website images

The site imports responsive WebP variants through `src/data/images.js`. The browser
selects the appropriate width for its viewport and display density. The hero photo
also has a 2560 px variant for larger displays. Original JPEGs live in `originals/`
for future editing; they are not imported and are not included in the production
website bundle.

| Original supplied filename | Maintainable name |
| --- | --- |
| `IMG_0709.jpg` | `studio-electric-guitar` (hero) |
| `IMG_0712.jpg` | `studio-acoustic-guitar` (about) |
| `Gomez Band Promo-3.jpg` | `city-beige-coat` |
| `Promo - As Soon as Tomorrow Single-25 (1).jpg` | `tomorrow-stone-columns` |
| `Promo - As Soon as Tomorrow Single-35 (1).jpg` | `tomorrow-station-bench` |
| `Promo - As Soon as Tomorrow Single-49.jpg` | `tomorrow-station-stairs` |
| `promoooo.jpg` | `tomorrow-city-street` |
| Previous `logo.jpg` | `band-logo` (preserved branding) |

All seven supplied photos appear in the gallery. The photo files are normalized
to sRGB with their original orientation, without cropping. Responsive photo widths
are 640, 1280 and 1920 px, saved as WebP at quality 84. The logo has 320, 640 and
1280 px lossless WebP variants.

To regenerate the variants and manifest after updating an original, run:

```sh
python3 scripts/optimize-images.py
```

The script requires Pillow (`PIL`), performs no network requests, and verifies that
each written variant can be decoded and has the expected dimensions. Keep imports
pointing at `src/data/images.js` so originals stay out of the website downloads.
