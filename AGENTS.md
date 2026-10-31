# awesome-site - Agent Configuration

## Root Configuration

Inherits all behavior from `/AGENTS.md` at the monorepo root. Local rules extend or override the root file for this repository.

## Project Context

`@hagicode/awesome-site` is a static Astro + Starlight site that hosts reviewed mirrors of community "awesome" collections in ten locales (English unprefixed plus nine locale editions). Built with `@hagicode/hagilight`, `hagilight-core` and `hagilight-starlight` (keep the three on the same exact version). All content comes from the `data/` git submodule (`awesome-site-data`).

## Working Directory

Run commands from `repos/awesome-site/`.

## Key Commands

```bash
git submodule update --init --recursive   # data/ and its nested sources/<id> must be initialized
pnpm install
pnpm run dev                               # http://localhost:36265 (strict port)
SITE_URL=http://localhost:36265 pnpm run check
SITE_URL=http://localhost:36265 pnpm run build
SITE_URL=http://localhost:36265 pnpm test  # run after a successful build
pnpm run content:check                     # validate registry, ledger, mirrors, translations
pnpm run content:prepare                   # validate, then replace generated pages
pnpm run content:export --collection <id> --output <dir>
```

Requires Node.js 24+ and Git with submodule support. `SITE_URL` (absolute HTTP(S) URL) is required for `check`, `build`, `test` and `preview`; only `dev` defaults it. `dev`, `check` and `build` run `content:prepare` via npm pre-hooks, while `preview` serves an existing build. Set `AWESOME_TEST_FAST=1` to skip the slow integration tests (the publish workflow does this).

## Key Paths

- `data/`: `awesome-site-data` submodule (registry, catalogs, candidates, review ledger, mirrors, translations, pinned sources); read-only from this repo
- `scripts/content-pipeline.mjs`: `content:*` pipeline; `scripts/source-reviews.mjs`, `scripts/data-root.mjs`: ledger and data-root helpers; `scripts/validate-production-origin.mjs`: publish-time `SITE_URL` check
- `src/plugins/awesome-content.mjs`: Starlight content plugin; `src/components/`: Astro components; `src/content.config.ts`: content collections
- `src/external-link-policy.mjs`, `src/outbound-tracking.mjs`, `src/analytics-locations.mjs`: external-link warning allowlists and GA click-event tagging
- `test/`: `node --test` suites (content pipeline, site foundation, publish workflow, analytics, external-link warning, source reviews, home welcome)
- `.github/workflows/`: `ci.yml` (check, build, test, preview smoke test) and `deploy-gh-pages.yml`; `.github/gh-pages/` holds `esa.jsonc` and `wrangler.jsonc` copied into the publication payload

## Agent Guidelines

- Generated pages under `src/content/docs/**/awesome/`, the ten locale homepages (`src/content/docs/index.md` and `<locale>/index.md`) and `.awesome-content-manifest.json` are pipeline-owned: never edit, track or commit them; they stay git-ignored.
- Do not edit `data/` from here. Change content in `awesome-site-data`, push it to `main`, then bump the pin with `git -C data fetch origin main && git -C data checkout <commit>` and `git add data`; rerun `content:check`, `check`, `build`, `test`.
- Do not edit generated output in `dist/` (HTML, Pagefind, RSS, robots, sitemap). Hagilight owns RSS and `robots.txt`; Astro's sitemap integration owns the sitemap.
- Keep `links.siteId` in `astro.config.mjs` set to `awesome-sites` (the id in hagilight's related-sites data); it keeps the site out of its own footer list and tags first-party footer links with `utm_source=awesome-sites`. `test/site-foundation.test.mjs` asserts both.
- External-link allowlist entries must be reviewed exact hostnames (`externalHostnameAllowlist`) or trusted domains (`externalDomainAllowlist`); do not add broad domains for convenience.
- New analytics link locations must be added to `src/analytics-locations.mjs` and the README table; do not call `gtag('event', ...)` directly or extend the Hagilight event vocabulary here.
- Running `astro` directly skips the content pre-hooks and fails on the missing `data/content/awesome/collections.json` import; use the package scripts.
- Translation glossary (all nine non-English locales): obvious technical words stay in English and are never translated: gateway, proxy, endpoint, profile, prompt, locale, manifest, harness, relay, circuit breaker, canary, smoke test, loopback, readback, sentinel, worktree, subagent, fallback, cooldown, opt-in, forward-port, whitelist, blacklist, launcher, composer, clipboard, bootstrap token, dashboard, compare-and-swap, guardrail, provenance, receipt, probe, fixtures, reducer, producer, agent, coding agent, Cloud Agent, self-hosted, headless mode, prompt compression, gate, plus product and platform names (Kubernetes, Helm, Docker Compose, Azure, Notion, Obsidian, Electron, Playwright, and the like). Ordinary words are translated as usual. With a CJK locale put a half-width space between the English word and the surrounding text. The same list is attached to `repos/omniroute-docs`, `repos/openspec-docs` and `repos/docs` as `translations/locales/<locale>/glossary/glossary.json` (`doNotTranslate`); keep the four in step. Collection content is edited in `awesome-site-data`, so apply this rule there when reviewing translations.

## Publication

The publish workflow runs on push to `main`: validates `vars.SITE_URL` (non-loopback HTTPS origin), builds, runs fast tests, assembles `.deploy/gh-pages/` (`dist/`, `esa.jsonc`, `wrangler.jsonc`) and force-pushes it as a single orphan commit to `gh-pages`. To roll back, revert the source commit on `main`; never reset `gh-pages`.

## References

- `README.md`
- `https://github.com/HagiCode-org/awesome-site-data#readme` (collection onboarding, source review, translation maintenance)

## Package management

- The repository uses pnpm, pinned in `package.json` `packageManager`. Run `corepack enable` once, then `pnpm install`. `pnpm-lock.yaml` is the only lockfile; do not commit `package-lock.json`.
- Settings live in `pnpm-workspace.yaml`. `allowBuilds` lists the dependencies whose install scripts may run (reviewed individually, `false` means reviewed and denied); review any new dependency that has an install script and add it there.
- A local registry mirror belongs in `~/.npmrc` only. Never commit a `registry=` line or a mirror URL; `pnpm run check:registry` (also run in CI) fails on any non-`registry.npmjs.org` `tarball` in the lockfile and on mirror hosts in tracked files.
- Undeclared imports fail under pnpm's strict layout: declare the package instead of hoisting it.
