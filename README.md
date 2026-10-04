# Mission Journal — a static blog

A self-contained website built from the weekly emails Colby sent home during
his mission. Plain HTML + CSS + a little JavaScript, no build step, no
frameworks, no database. It runs anywhere.

## Preview it locally
Double-click `index.html`. It opens in your browser and works fully offline.
Keep the folder together so the stylesheet, script, and images resolve.

## Put it on your website
Upload the **contents of this folder** to any static host:
- GitHub Pages — drop the files in a repo, enable Pages.
- Netlify / Cloudflare Pages — drag the folder onto the dashboard.
- Your own server — copy it anywhere under your web root, e.g. yoursite.com/mission/.
All links are relative, so a subfolder works fine.

## Pages
- `index.html` — landing page, all 72 letters grouped by year
- `about.html` — about the collection
- `posts/` — one .html page per weekly letter

## Design
Styled to match [colbywonn.com](https://colbywonn.com): white page, navy
accents, Quantico for headings, Poppins for body text, and the same pinned
header and footer. Light only.

## Keyboard shortcuts
On a letter page, the Left and Right arrow keys jump to the previous and next
letter.

## The 404 page
`404.html` is shown for unknown URLs by most static hosts (GitHub Pages,
Netlify, Cloudflare Pages) automatically. It's self-contained so it always
renders. If you host the site in a SUBFOLDER (e.g. a GitHub project page at
`/repo/`), open `404.html` and change the "/" in the "head back" link to your
subfolder path, e.g. "/repo/".

## Viewing on your phone
Opening the files directly on a phone (a `file://` page) is unreliable — mobile
browsers and the Files-app preview often won't load the stylesheet, script, or
images, so you get unstyled text and no photos. Serve it instead:
- Host it (GitHub Pages / Netlify / Cloudflare Pages) and open the real URL, or
- From your computer, run `python -m http.server` inside this folder, then on
  your phone (same Wi-Fi) visit `http://<your-computer-ip>:8000`.

## Files
```
index.html          landing page
about.html          about page
assets/style.css    the one stylesheet
assets/nav.js       arrow-key navigation between letters
assets/fonts/       self-hosted Quantico and Poppins
posts/              one .html per letter
images/<post>/      that letter's photos (resized to ~1600px for the web)
thumbs/<post>.jpg   small previews for the landing page
```

## Customizing
- **Colors and fonts** live in the `:root` block at the top of `assets/style.css`.
- **Site title / intro** are near the top of `index.html`; the bio is in `about.html`.

## Notes
- Letters are ordered by the date each email was sent.
- The "week N" labels are Colby's own count and drift a little near the end.
- Photos here are web-sized; full-resolution originals remain in the source
  `.eml` files (and any Google Photos albums linked in the letters).
