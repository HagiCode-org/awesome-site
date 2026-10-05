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

The English homepage at `/` and the nine locale homepages at `/zh-CN/`, `/zh-Hant/`, `/fr-FR/`, `/de-DE/`, `/es-ES/`, `/ja-JP/`, `/ko-KR/`, `/pt-BR/`, and `/ru-RU/` are generated from the validated collection registry, reviewed translations, topic catalogs, and GitHub-only candidates. Each root retains the same collection directory as its `/awesome/` compatibility route; its title, descriptions, topic labels, counts, and hosted-versus-GitHub-only sections are localized. The homepage-only `HomeWelcome.astro` component adds welcome content, exploration links, live registry counts, and featured topics above that directory. Maintain its ten language editions in `src/home-copy.mjs`, not the generated Markdown. Its responsive artwork and short entrance animations use CSS only and respect reduced-motion preferences.

`content/awesome/collections.json` is the collection registry. Each imported source is a pinned submodule under `sources/`; the original source is `awesome-github-profile-readme`. The source review ledger records the imported sources, GitHub-only candidates, and the three documented exclusions: `awesome-redis` (746 stars at the 2026-10-03 review), `awesome-kotlin` (its README is an introduction, not the collection), and `awesome-public-datasets` (its README is reStructuredText). Git records each selected source's exact commit, so later upstream commits do not change a build until the gitlink is deliberately updated.

`content/awesome/candidates.json` lists qualifying repositories that do not yet have a hosted collection edition. The candidates have a reviewed repository license matching the pipeline's supported allowlist; their `licenseId` and dated star count are recorded in the registry and validated by the pipeline. Candidate entries in `content/awesome/source-reviews.yml` also record the reviewed README/license commit and blobs, README rights notices, embedded-asset counts, and remote asset hosts. These checks do not independently clear third-party material or prove a repository license covers every README asset. All candidates remain GitHub links only: the site does not copy or translate their README or embedded assets.

## Source review ledger

[`content/awesome/source-reviews.yml`](content/awesome/source-reviews.yml) is the canonical maintainer record of source review outcomes. Each YAML sequence entry includes `id` (stable kebab-case identifier), `source` (canonical GitHub repository URL), `title`, `imported` (a boolean), `notImportedReason`, and `importedAt`. Candidate entries also include the README rights review fields. Repository identities are compared case-insensitively.

`imported: true` means the matching source is admitted to `collections.json`. A checked-out submodule or a GitHub-only candidate is not an import. Imported records have `notImportedReason: null`; non-imported records require a reason and `importedAt: null`. For example:

```yaml
- id: pending-source
  source: https://github.com/example/pending-source
  title: Pending Source
  imported: false
  notImportedReason: "Pending confirmation of redistribution permission."
  importedAt: null
- id: excluded-source
  source: https://github.com/example/excluded-source
  title: Excluded Source
  imported: false
  notImportedReason: "Excluded by the documented eligibility threshold."
  importedAt: null
```

When an imported source's admission time is known, record it as a quoted UTC timestamp such as `"2026-10-03T19:00:00Z"`. Use explicit `importedAt: null` for unknown historical timing; null does not mean the source is unimported. The migrated records use null where repository history did not establish a reliable admission time. Do not substitute an audit date, submodule checkout time, or build time.

When admitting a source, update its hosted registration and review record together, then record the known admission time. Re-review does not refresh that time. When removing a source from the hosted registry, set `imported: false`, explain the removal, clear the current import time, and update any candidate registration as appropriate. The pipeline checks both registries against the ledger and never changes any of them automatically. Review status does not grant redistribution permission or bypass license, safety, or translation checks.

Run `npm run content:check` to validate review data and all existing source and translation gates, and `npm run content:prepare` to validate and prepare generated pages. `npm run content:export` also validates the ledger before writing a translation package.

Onboard a listed repository with `git submodule add https://github.com/<owner>/<repo>.git sources/<id>`, which checks out the remote's current default-branch HEAD and records that exact commit. Record its GitHub star count and canonical one-file README in the dated audit snapshot. Missing LICENSE files do not automatically disqualify a star-qualified candidate, but a license or explicit permission confirming redistribution is still required before copying the README into published content. The current verifier recognizes `CC0-1.0`, `MIT`, `Apache-2.0`, `Unlicense`, and `WTFPL`; do not infer permission from a missing or ambiguous license. Also verify source language and safety compatibility. Unverified permissions, rejected content, or missing reviewed translations keep that collection out of the published set.

Each collection registration requires `catalog` as one topic key or an array. `content/awesome/catalogs.json` defines stable topic keys and nonempty labels for `root` and all nine locales. Docs may also provide `tags`; effective tags preserve explicit tag order and append catalog keys, with duplicates removed. Every effective collection tag must exist in the taxonomy. Technology names may keep their usual spelling across locales; translate human topic labels.

Reviewed translation inputs live under `content/awesome/<id>/`. Generated collection pages, discovery indexes under `src/content/docs/**/awesome/`, and the ten exact locale homepage paths listed above are pipeline-owned; do not edit them directly. The manifest tracks articles, homepages, all-collection indexes, and used-topic indexes in one transaction, and preparation removes obsolete generated pages without replacing authored files. The navigation sidebar automatically lists each published collection in its current locale; the `/awesome/` routes remain available as compatible directory links. Git ignores only the generated homepage paths and `awesome/` output directories.

The ten former authored welcome pages were explicitly removed as part of the ownership migration. Generated pages and their ownership manifest must remain both ignored and untracked: ignore rules alone do not remove previously tracked files, and checking in generated pages without the manifest makes fresh-checkout preparation fail. Preparation does not adopt or overwrite an unowned homepage: if an existing file collides with a generated destination, remove or migrate that file deliberately before preparing content. Unrelated authored documents remain outside the pipeline's ownership.

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

## External-link warning

With JavaScript enabled, ordinary clicks, keyboard activations, modifier clicks, and middle clicks on non-allowlisted HTTP(S) links show a localized confirmation with the exact destination. Staying or pressing Escape cancels; continuing uses the displayed URL and preserves same-tab or isolated new-context intent. Named targets, `_top`, and `_parent` are normalized to an isolated new context; browsers decide whether that appears as a tab or window. If native modal dialogs are unavailable, a localized browser confirmation is used instead. With JavaScript disabled, original links and their native behavior remain unchanged.

The exact-hostname exceptions are configured in `src/external-link-policy.mjs` as `externalHostnameAllowlist`, which is intentionally empty by default. Add only a reviewed hostname string (without a scheme, path, or port); a match applies to that hostname on any HTTP(S) scheme and port, but never to its subdomains or similar suffixes. Do not add broad domains merely for convenience.

This prompt is an informed-choice step, not a safety check: it does not guard browser context-menu commands, copied URLs, programmatic navigation, embedded assets, or redirects after a destination is reached.

## Build and publication

Local builds may use `http://localhost:36265`. The publication workflow requires the repository variable `SITE_URL` to be a non-loopback HTTPS origin without credentials, path, query, or fragment; configure it to the intended production origin. The workflow validates this before installing dependencies and building.

The publication job only hands off its existing static payload after content preparation, checks, build, and regression tests succeed. The payload layout remains `.deploy/gh-pages/` with `dist/`, `esa.jsonc`, and `wrangler.jsonc`. A successful build proves a valid static snapshot was assembled; it does not prove that an external hosting service has published it or that the live site is reachable.

Relative repository images are pinned to the source revision. Other external assets and linked profiles remain remote upstream dependencies and may become unavailable; the build does not mirror them.

Analytics and site promotions remain disabled. Do not edit generated HTML, Pagefind, RSS, robots, or sitemap output in `dist/`.
