---
public: true
multilingual: false
style: product
---

# README requirements

## Product focus

- Introduce the Awesome Site at https://awesome.hagicode.com as a place that gathers community-curated "awesome" collections in one place, so readers pick a topic, read in their language, and follow each entry back to its source.
- Describe what visitors get: hosted collections with their own pages and a topic browser on the home page, ten reading languages with translated editions, search and RSS feeds, reviewed mirrors of pinned upstream READMEs with provenance and license links, GitHub links for collections that are not hosted, and a confirmation step before leaving for untrusted sites.
- Address readers who look for good open-source lists first; mention the HagiCode ecosystem only through the existing product and installation links.
- Lead with the value for readers (less searching, more discovering) before any other detail.

## Required content

- Keep the opening value statement, a short highlights list, the website link and badge, and the HagiCode product and installation links, as the current README does.
- Explain how a visitor uses the site: open the site, choose a topic or collection, switch the reading language, and follow the link to the original source.
- Keep collection and language counts consistent with `data/` and the locale configuration.

## Exclusions

- Exclude analytics identifiers, tokens, secret values, internal hosts, machine-specific paths and private links.
- Do not describe features the site does not show.
- Keep repository maintenance instructions out of the README: repository layout, internal architecture, data submodule handling, generated-page ownership, content pipeline commands, CI, build internals, analytics events and contribution workflow.
