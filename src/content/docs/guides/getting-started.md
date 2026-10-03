---
title: Getting started
description: Install Awesome Site and learn how to author a page.
---

# Getting started

Awesome Site is a static documentation foundation. Its pages are authored in
this repository; it does not fetch or translate content from another project.

## Set up the project

Use Node.js 22.12 or later and npm 9.6.5 or later. From the project directory,
install the locked dependencies:

```sh
npm ci
```

Set `SITE_URL` for each site-generating command. For local development and
builds, use:

```sh
SITE_URL=http://localhost:36265 npm run dev
SITE_URL=http://localhost:36265 npm run check
SITE_URL=http://localhost:36265 npm run build
SITE_URL=http://localhost:36265 npm test
SITE_URL=http://localhost:36265 npm run preview
```

The test suite inspects the generated site, so run it after a successful build.
Use the actual absolute HTTP(S) origin when building for another environment;
the project does not assume a production domain.

## Add a page

Create a Markdown file under `src/content/docs/` with a non-empty `title` in
its frontmatter:

```md
---
title: My page
description: A short summary of this page.
---

# My page

Write your content here.
```

For example, `src/content/docs/guides/example.md` becomes
`/guides/example/`. The Starlight docs schema validates page frontmatter during
checking and building.
