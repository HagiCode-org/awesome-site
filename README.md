# Awesome Site

An English-only, static documentation site built with Astro, Starlight, and
Hagilight. It uses its own authored Markdown and locked dependencies; it does
not ingest OpenSpec content or depend on the `openspec-docs` repository.

## Requirements

- Node.js 22.12 or later
- npm 9.6.5 or later

## Install and run

```sh
npm ci
SITE_URL=http://localhost:36265 npm run dev
```

The development server and production preview use port `36265` (not Astro's
default port). The port is strict: the server fails rather than silently
choosing another port if `36265` is occupied.

Set `SITE_URL` to an absolute HTTP(S) URL for every site-generating command.
For local work use `http://localhost:36265`; use the intended origin when
building for another environment:

```sh
SITE_URL=http://localhost:36265 npm run check
SITE_URL=http://localhost:36265 npm run build
SITE_URL=http://localhost:36265 npm test
SITE_URL=http://localhost:36265 npm run preview
```

Run `npm test` after a successful build. It checks generated pages and
discovery output, exercises configuration failures, and temporarily builds a
valid authored page before confirming missing titles fail validation.

## Content and output

Author pages as Markdown under `src/content/docs/`. Every page needs a
non-empty `title` in its frontmatter; for example,
`src/content/docs/guides/example.md` publishes at `/guides/example/`. The home
page is `src/content/docs/index.md`. Starlight validates the content schema.

Astro, Starlight, and Hagilight own the generated HTML, assets, Pagefind search
index, RSS feeds, robots file, and sitemap in `dist/`. Do not edit generated
output. The build includes `dist/404.html`; a static host or server must serve
that file for unknown routes.

The site currently exposes English content only. Analytics, tracking, and
promotion surfaces are disabled. It does not import OpenSpec articles, modify
the reference repository, or configure hosting or deployment automation.
