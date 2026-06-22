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
- `index.html` — landing page, all 45 letters grouped by year
- `about.html` — about the collection
- `posts/` — one .html page per weekly letter

## Light / Dark / Midnight
A theme toggle (sun / moon / stars) sits in the navbar. The choice is saved in
the browser (localStorage) and applied before the page paints, so it never
flickers. With no saved choice, it follows the visitor's OS light/dark setting.
Midnight is opt-in. The logic is in `assets/theme.js`; the no-flash snippet is
inline in each page's <head>.

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
assets/style.css    the one stylesheet — themes + layout live here
assets/theme.js     theme toggle behavior
posts/              one .html per letter
images/<post>/      that letter's photos (resized to ~1600px for the web)
thumbs/<post>.jpg   small previews for the landing page
```

## Customizing
- **Colors** live at the top of `assets/style.css`: the `:root` block is the
  light theme; `[data-theme="dark"]` and `[data-theme="midnight"]` override it.
- **Type & layout** sizing uses `clamp()`, so it scales smoothly with the window.
- **Site title / intro** are near the top of `index.html`; the bio is in `about.html`.
- **Fonts** (Newsreader + IBM Plex Mono) load from Google Fonts; swap the
  `<link>` in each page's <head> to self-host them.

## Notes
- Letters are ordered by the date each email was sent.
- The "week N" labels are Colby's own count and drift a little near the end.
- Photos here are web-sized; full-resolution originals remain in the source
  `.eml` files (and any Google Photos albums linked in the letters).
