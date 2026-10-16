# Awesome Site

A static, multilingual collection site built with Astro, Starlight, and Hagilight. Collection content, the source review ledger, and pinned upstream sources live in the [`awesome-site-data`](https://github.com/HagiCode-org/awesome-site-data) repository, mounted at `data/`. The site does not ingest OpenSpec content or depend on the `openspec-docs` repository.

## Requirements

- Node.js 24 or later
- npm 9.6.5 or later
- Git with submodule support

## Install and run

Clone with the pinned `data/` submodule and its nested source submodules, or initialize them after cloning:

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

`dev`, `check`, and `build` prepare collection pages from `data/` before using them. `preview` serves an existing build without regenerating content. Run `npm test` after a successful build.

## Data submodule

`data/` is the [`awesome-site-data`](https://github.com/HagiCode-org/awesome-site-data) submodule. Its `content/awesome/` tree holds the collection registry, catalogs, candidates, source review ledger, and reviewed translations; its nested `sources/<id>` submodules hold the pinned upstream READMEs. The pipeline reads only from `data/`. The pinned commits fix the content and source revisions a build uses, so upstream commits do not change a build until the pin moves. Collection onboarding, ledger rules, and translation work are documented in the data repository README.

The published text of each collection is its mirror, `content/awesome/<id>/mirror/README.md`, bound by `content/awesome/<id>/mirror.json`. The ledger records the pinned upstream revision and README digest, the mirror digest, and each reviewed edit (its id, category, reason, reviewer, review date, exact anchor, and replacement). An unedited collection's mirror is byte-identical to its upstream README. The site builds English and translated editions from the mirror, and translations bind to the mirror's digest. It reads the pinned upstream README only to verify the mirror and for the provenance and license links; relative links still resolve against the pinned upstream revision.

- Clone with `git clone --recurse-submodules`. For an existing checkout, run `git submodule update --init --recursive`, which also initializes the nested source submodules.
- A missing or uninitialized `data/` fails `content:check` and `content:prepare`, and the `dev`, `check`, and `build` hooks that run them, with `data submodule is missing or not initialized: run git submodule update --init --recursive to populate data/`. A collection whose source is not initialized fails with its collection id and the same command, run inside `data/`.
- The npm hooks run the pipeline first, so they show those diagnostics. Running `astro` directly skips them and fails with a module-not-found error for `data/content/awesome/collections.json`, because `astro.config.mjs` imports that file statically.
- Older checkouts may still have local `content/awesome/` and `sources/` directories. They are no longer tracked and are not ignored, so they appear as untracked files. Remove them once nothing in them is needed; the authoritative copies are in `data/`.
- Mirror failures stop `content:check`, `content:prepare`, and the hooks that run them before any generated page changes. Each names the collection id. A missing `mirror/README.md` or `mirror.json` is reported as missing. A stale mirror, meaning the pinned revision or upstream digest moved without a refresh, or a mirror changed outside its ledger, fails with `run "node scripts/mirror.mjs sync --collection <id>" inside data/` as the fix. The pipeline never falls back to the raw upstream README, so a broken mirror cannot publish unreviewed text.

To change data and bump the pin:

1. In `awesome-site-data`, refresh the mirror of every collection whose upstream or ledger changed with `node scripts/mirror.mjs sync --collection <id>`, confirm with `node scripts/mirror.mjs check`, commit the change to `main`, and push it.
2. In this repository, run `git -C data fetch origin main && git -C data checkout <commit>`, then `git submodule update --init --recursive`.
3. Run `SITE_URL=http://localhost:36265 npm run content:check`, `npm run check`, `npm run build`, and `npm test`.
4. Stage the `data` gitlink with `git add data` and commit the new pin in `awesome-site`.

## Locales and homepages

The English homepage at `/` and the nine locale homepages at `/zh-CN/`, `/zh-Hant/`, `/fr-FR/`, `/de-DE/`, `/es-ES/`, `/ja-JP/`, `/ko-KR/`, `/pt-BR/`, and `/ru-RU/` are generated from the validated collection registry, reviewed translations, topic catalogs, and GitHub-only candidates. Each root retains the same collection directory as its `/awesome/` compatibility route; its title, descriptions, topic labels, counts, and hosted-versus-GitHub-only sections are localized. The homepage-only `HomeWelcome.astro` component adds welcome content, exploration links, live registry counts, and featured topics above that directory. Maintain its ten language editions in `src/home-copy.mjs`, not the generated Markdown. Its responsive artwork and short entrance animations use CSS only and respect reduced-motion preferences.

The site publishes English at unprefixed routes and nine locale editions at `/zh-CN/`, `/zh-Hant/`, `/fr-FR/`, `/de-DE/`, `/es-ES/`, `/ja-JP/`, `/ko-KR/`, `/pt-BR/`, and `/ru-RU/`. Hagilight owns `/rss.xml`, its English alias `/rss.en.xml`, the locale RSS feeds, and `robots.txt`; Astro's sitemap integration owns the sitemap. Feeds and search contain actual locale editions, not English fallback copies. Requests for untranslated optional authored pages recover to their English source. GitHub-only candidates are listed as links to GitHub; the site does not copy or translate their README or embedded assets.

## Generated pages

Generated collection pages, discovery indexes under `src/content/docs/**/awesome/`, and the ten exact locale homepage paths listed in [Locales and homepages](#locales-and-homepages) are pipeline-owned; do not edit them directly. The manifest tracks articles, homepages, all-collection indexes, and used-topic indexes in one transaction, and preparation removes obsolete generated pages without replacing authored files. The navigation sidebar automatically lists each published collection in its current locale; the `/awesome/` routes remain available as compatible directory links. Git ignores only the generated homepage paths and `awesome/` output directories.

Generated pages and their ownership manifest must remain both ignored and untracked: ignore rules alone do not remove previously tracked files, and checking in generated pages without the manifest makes fresh-checkout preparation fail. Preparation does not adopt or overwrite an unowned homepage: if an existing file collides with a generated destination, remove or migrate that file deliberately before preparing content. Unrelated authored documents remain outside the pipeline's ownership.
## Content commands

`content:check`, `content:prepare`, and `content:export` read `data/` and never write into it:

```sh
npm run content:check
npm run content:prepare
npm run content:export -- --collection <id> --output <dir>
```

`content:check` validates the registry, catalogs, candidates, source review ledger, pinned source revisions, mirror ledgers and mirrors, and translations, plus every source and translation gate. `content:prepare` runs the same validation, then replaces generated pages. `content:export` validates the ledger, then writes a translation work package to `--output` without overwriting existing files. The package's `README.md` is the mirror to translate, and its `source.json` records the mirror `sourceDigest` alongside the `upstreamDigest`, `upstreamRevision`, and `edited` flag. The output may not be inside `data/`.

Missing, stale, unreviewed, unsafe, or structurally incomplete content fails with a collection/locale diagnostic before generated pages are replaced. Fix the reported inputs in `data/` and rerun preparation; authored files and the previous generated set remain intact on validation or staging failure.

Collection onboarding, source review, and translation maintenance are documented in the [`awesome-site-data` README](https://github.com/HagiCode-org/awesome-site-data#readme).

## External-link warning

With JavaScript enabled, ordinary clicks, keyboard activations, modifier clicks, and middle clicks on non-allowlisted HTTP(S) links show a localized confirmation with the exact destination. Staying or pressing Escape cancels; continuing uses the displayed URL and preserves same-tab or isolated new-context intent. Named targets, `_top`, and `_parent` are normalized to an isolated new context; browsers decide whether that appears as a tab or window. If native modal dialogs are unavailable, a localized browser confirmation is used instead. With JavaScript disabled, original links and their native behavior remain unchanged.

The exact-hostname exceptions are configured in `src/external-link-policy.mjs` as `externalHostnameAllowlist`, which is intentionally empty by default. Add only a reviewed hostname string (without a scheme, path, or port); a match applies to that hostname on any HTTP(S) scheme and port, but never to its subdomains or similar suffixes. Do not add broad domains merely for convenience.

Trusted domains are configured as `externalDomainAllowlist` in the same file and currently contain `hagicode.com`. An entry matches the domain itself and every subdomain (`docs.hagicode.com`, `a.b.hagicode.com`) on any HTTP(S) scheme and port, but not lookalikes such as `nothagicode.com` or `hagicode.com.example`. Links to these hosts open without the warning; links carrying credentials are still rejected as invalid.

This prompt is an informed-choice step, not a safety check: it does not guard browser context-menu commands, copied URLs, programmatic navigation, embedded assets, or redirects after a destination is reached.

## Analytics events

Production builds load Google Analytics through `@hagicode/hagilight-starlight` (the default measurement ID, never on the 404 page, silent when `gtag` is blocked or absent). Clicks are reported by Hagilight's single `click` listener as `link_click` events with `event_category`, `event_label`, `link_location`, and `link_url`; the site only decides which links carry the `data-ga-*` tags. Events need Hagilight `0.6.1` or later, and `@hagicode/hagilight`, `@hagicode/hagilight-starlight`, and `@hagicode/hagilight-core` must be bumped together because the first two pin the third exactly.

| `link_location` | Section | `event_label` |
| --- | --- | --- |
| `home_hero` | The two home hero calls to action | `exploreCollections`, `startBrowsing` |
| `topic_rail` | Topic rail in the collection browser | topic id, or `allTopics` |
| `collection_group` | Topic group heading in the collection browser | topic id |
| `collection_list` | Collection entry in the collection browser | collection id |
| `topic_nav` | Topic navigation on a collection page | topic id |
| `outbound_candidate_list` | GitHub-only candidate list | destination hostname |
| `outbound_collection_content` | External link in imported collection content | destination hostname |
| `outbound_warning_continue` | **Continue** link in the external-link warning | destination hostname |
| `outbound_other` | Any other external link Hagilight does not tag | destination hostname |

All events use the category `navigation`. Labels are stable ids or hostnames, never translated text, so every locale reports the same label. Hagilight's own header, footer, showcase, and promotion links keep their Hagilight tags and are reported once. Only clicks are reported; section views, search activity, and the Starlight sidebar are not.

An outbound link is any link to a different origin over HTTP or HTTPS, including links added after the page loads. The hostname and domain allowlists of the external-link warning do not exempt a link from reporting. The ~53,000 content links are not tagged in the build: `src/outbound-tracking.mjs` tags the clicked anchor just before Hagilight's listener reads it, using `classifyExternalLink()` so URL parsing and the credential and malformed-URL rules stay in one place. The tagger only writes `data-ga-*` attributes and never changes navigation, `href`, `target`, `rel`, focus, or the warning.

A confirmed departure produces two events: one for the original click, and one with `link_location = outbound_warning_continue` when the reader selects **Continue**. Filter on that location to count readers who actually left; **Stay** leaves only the first event. Parameters are limited to category, label, location, and destination: no link text, search queries, or visitor identifiers.

To tag a new link, spread the shared builder onto it and add any new location to `src/analytics-locations.mjs` and the table above:

```astro
---
import { gaEventAttributes } from "@hagicode/hagilight-core/analytics-events";
import { TOPIC_NAV } from "../analytics-locations.mjs";
---
<a href={href} {...gaEventAttributes({ category: "navigation", label: id, location: TOPIC_NAV })}>
```

A new category or action must first be added to Hagilight's `hagilight-ga-click-events` capability; this site does not extend the vocabulary or call `gtag('event', ...)` itself.

Limitations: the middle mouse button (`auxclick`) is not reported, matching Hagilight; when native dialogs are unavailable the browser `confirm()` fallback records only the original click, not a Continue click; the measurement ID is shared with other HagiCode sites, so separate them with `page_location`; ad blockers drop events, so counts are directional. The custom dimensions `event_category`, `event_label`, `link_location`, and `link_url` must be registered in the GA property before the new values appear in standard reports.

## Build and publication

Local builds may use `http://localhost:36265`. The publication workflow requires the repository variable `SITE_URL` to be a non-loopback HTTPS origin without credentials, path, query, or fragment; configure it to the intended production origin. The workflow validates this before installing dependencies and building.

The publication job only hands off its existing static payload after content preparation, checks, build, and regression tests succeed. The payload layout remains `.deploy/gh-pages/` with `dist/`, `esa.jsonc`, and `wrangler.jsonc`. A successful build proves a valid static snapshot was assembled; it does not prove that an external hosting service has published it or that the live site is reachable.

Each publication overwrites `gh-pages` with a single, latest commit (`force_orphan: true`), so the branch holds only the newest snapshot and is not a rollback source. To roll back a bad release, revert the offending source commit on `main` so the publication workflow runs again; do not revert or reset `gh-pages` history. Treat `gh-pages` as write-only for CI, because local clones will see non-fast-forward updates.

Relative repository images are pinned to the source revision. Other external assets and linked profiles remain remote upstream dependencies and may become unavailable; the build does not mirror them.

Analytics, 51LA, and site promotions use the Hagilight defaults on production builds (see Analytics events). Do not edit generated HTML, Pagefind, RSS, robots, or sitemap output in `dist/`.
