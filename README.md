# Awesome Site

A static, multilingual collection site built with Astro, Starlight, and Hagilight. Site-authored pages and pinned upstream README sources are maintained separately; the site does not ingest OpenSpec content or depend on the `openspec-docs` repository.

## Requirements

- Node.js 22.12 or later
- npm 9.6.5 or later
- Git with submodule support

## Install and run

Clone with the pinned source submodules, or initialize them after cloning:

```sh
git clone --recurse-submodules https://github.com/HagiCode-org/awesome-site.git
cd awesome-site
# For an existing checkout:
git submodule update --init --recursive
npm ci
npm run dev
```

`npm run dev` defaults to `http://localhost:36265`, and the development server and preview use strict port `36265`. Set `SITE_URL` for checks, builds, tests, and previews:

```sh
SITE_URL=http://localhost:36265 npm run check
SITE_URL=http://localhost:36265 npm run build
SITE_URL=http://localhost:36265 npm test
SITE_URL=http://localhost:36265 npm run preview
```

`dev`, `check`, and `build` prepare collection pages before using them. `preview` serves an existing build without regenerating content. Run `npm test` after a successful build.

## Content ownership and locales

The authored homepage lives at `src/content/docs/index.md` and requires a non-empty `title` in frontmatter.

`content/awesome/collections.json` is the collection registry. Each imported source is a pinned submodule under `sources/`; the original source is `awesome-github-profile-readme`. The 50 repositories in `awesome-repositories.md` remain the audit inventory, while only the 47 meeting the dated 1,000-star threshold and single canonical Markdown README requirement are checked out as submodules. The 2026-10-03 snapshot excludes `awesome-redis` (746 stars), `awesome-kotlin` (its README is an introduction, not the collection), and `awesome-public-datasets` (its README is reStructuredText). Git records each selected source's exact commit, so later upstream commits do not change a build until the gitlink is deliberately updated.

Onboard a listed repository with `git submodule add https://github.com/<owner>/<repo>.git sources/<id>`, which checks out the remote's current default-branch HEAD and records that exact commit. Record its GitHub star count and canonical one-file README in the dated audit snapshot. Missing LICENSE files do not automatically disqualify a star-qualified candidate, but a license or explicit permission confirming redistribution is still required before copying the README into published content. The current verifier recognizes `CC0-1.0`, `MIT`, `Apache-2.0`, `Unlicense`, and `WTFPL`; do not infer permission from a missing or ambiguous license. Also verify source language and safety compatibility. Unverified permissions, rejected content, or missing reviewed translations keep that collection out of the published set.

Each collection registration requires `catalog` as one topic key or an array. `content/awesome/catalogs.json` defines stable topic keys and nonempty labels for `root` and all nine locales. Docs may also provide `tags`; effective tags preserve explicit tag order and append catalog keys, with duplicates removed. Every effective collection tag must exist in the taxonomy. Technology names may keep their usual spelling across locales; translate human topic labels.

Reviewed translation inputs live under `content/awesome/<id>/`. Generated collection pages and discovery indexes under `src/content/docs/**/awesome/`, plus `.awesome-content-manifest.json`, are pipeline-owned; do not edit them directly. The manifest tracks articles, all-collection indexes, and used-topic indexes together, and preparation removes obsolete generated topic pages without replacing authored files. Homepage files remain authored content.

The site publishes English at unprefixed routes and nine locale editions at `/zh-CN/`, `/zh-Hant/`, `/fr-FR/`, `/de-DE/`, `/es-ES/`, `/ja-JP/`, `/ko-KR/`, `/pt-BR/`, and `/ru-RU/`. Hagilight owns `/rss.xml`, its English alias `/rss.en.xml`, the locale RSS feeds, and `robots.txt`; Astro's sitemap integration owns the sitemap. Feeds and search contain actual locale editions, not English fallback copies. Requests for untranslated optional authored pages recover to their English source.

## Translate or update a collection

Export a translation work package without overwriting existing files:

```sh
npm run content:export -- --collection awesome-github-profile-readme --output /tmp/agpr-translation
```

The export contains the byte-preserved README and license, pinned revision, SHA-256 source digest, target locale list, and full-coverage instructions. Translate the complete README for each target locale. Preserve names, code, list/table entries, link and image destinations, and section order. Store each body at `content/awesome/<id>/locales/<locale>.md`.

For every locale, record a localized `title` and `description`, the current `sourceDigest`, `reviewStatus: "reviewed"`, and a truthful `isAITranslation` boolean in `content/awesome/<id>/translations.json`. AI translations must set `isAITranslation: true`; the published edition then shows an AI-translation disclosure. Builds validate review status and structure but do not contact translation services or claim that structural checks prove linguistic quality.

Run the content gate before building:

```sh
npm run content:check
npm run content:prepare
```

If the source README changes, export it again and update all translations to the new digest. Missing, stale, unreviewed, unsafe, or structurally incomplete content fails with a collection/locale diagnostic before generated pages are replaced. Fix the reported inputs and rerun preparation; authored files and the previous generated set remain intact on validation or staging failure.

## Build and publication

Local builds may use `http://localhost:36265`. The publication workflow requires the repository variable `SITE_URL` to be a non-loopback HTTPS origin without credentials, path, query, or fragment; configure it to the intended production origin. The workflow validates this before installing dependencies and building.

The publication job only hands off its existing static payload after content preparation, checks, build, and regression tests succeed. The payload layout remains `.deploy/gh-pages/` with `dist/`, `esa.jsonc`, and `wrangler.jsonc`. A successful build proves a valid static snapshot was assembled; it does not prove that an external hosting service has published it or that the live site is reachable.

Relative repository images are pinned to the source revision. Other external assets and linked profiles remain remote upstream dependencies and may become unavailable; the build does not mirror them.

Analytics and site promotions remain disabled. Do not edit generated HTML, Pagefind, RSS, robots, or sitemap output in `dist/`.
