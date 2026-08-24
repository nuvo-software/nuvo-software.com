# nuvō

Company site for [nuvo-software.com](https://nuvo-software.com) — custom software, DevOps, and in-house apps.

## Local

```bash
npm install
npm run dev
```

Copy lives in [`src/content/site.ts`](src/content/site.ts). Brand SVGs (Fiverr kits 1 and 5 only) are in `public/brand/`.

The site defaults to a bright theme and keeps the original ink canvas as **Dark** (sun/moon toggle in the nav, or OS preference until you pick one). Dark mode uses the over-dark lockup and mark.

### App screenshots and store links

Each app card has a same-height screenshot well on top. Turns fills it with `public/apps/turns.png`; Buckaroo and Stable show a placeholder until frames exist. iOS AppIcons (`{id}-icon.png`, exported from each app’s Icon Composer document) sit beside the name below. Set `screenshot` / `icon` in `src/content/site.ts`. Set `storeUrl` to turn the “App Store — coming soon” line into a link (Turns links to the App Store already); apps with `Android` in `platforms` also get a Google Play line, which `playUrl` turns into a link. Platforms listed in `platformsSoon` (Turns: Mac and visionOS) render as dashed “coming soon” chips.

## GitHub Pages

Pushes to `main` build and deploy via [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

1. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Create the mailbox `hello@nuvo-software.com` at your email host.
3. Point DNS for `nuvo-software.com` at GitHub Pages (apex A records, or `www` CNAME to `nuvo-software.github.io`). HTTPS is issued after DNS verifies.
