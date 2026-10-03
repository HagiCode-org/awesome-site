import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import hagilight from "@hagicode/hagilight-starlight";
import { hagilight as hagilightDiscovery } from "@hagicode/hagilight/integration";

const rawSiteUrl = process.env.SITE_URL;

if (!rawSiteUrl) {
  throw new Error(
    "SITE_URL is required. Set it to an absolute HTTP(S) URL, such as http://localhost:36265.",
  );
}

let siteUrl;
try {
  siteUrl = new URL(rawSiteUrl);
} catch {
  throw new Error(
    `Invalid SITE_URL "${rawSiteUrl}". Set it to an absolute HTTP(S) URL, such as http://localhost:36265.`,
  );
}

if (siteUrl.protocol !== "http:" && siteUrl.protocol !== "https:") {
  throw new Error(
    `Invalid SITE_URL "${rawSiteUrl}". Set it to an absolute HTTP(S) URL, such as http://localhost:36265.`,
  );
}

const siteOrigin = siteUrl.origin;
const siteRoot = new URL("/", siteUrl).href;
const siteDescription = "A practical foundation for site-owned content.";

export default defineConfig({
  site: siteOrigin,
  base: "/",
  server: { port: 36265, strictPort: true },
  preview: { port: 36265, strictPort: true },
  integrations: [
    starlight({
      title: "Awesome Site",
      description: siteDescription,
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en-US",
        },
      },
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Guides",
          items: [{ label: "Getting started", link: "/guides/getting-started/" }],
        },
      ],
      customCss: ["./src/styles/site.css"],
      plugins: [
        hagilight({
          header: { enabled: false },
          links: {
            siteId: "awesome-site",
            siteUrl: siteRoot,
            relatedSites: [],
            removeLinks: {
              quick: [
                "downloadClient",
                "microsoftStore",
                "dockerCompose",
                "productDocs",
                "blogPosts",
                "about",
              ],
              community: ["github", "discord", "issueFeedback", "contactEmail", "qqGroup"],
            },
          },
          seo: {
            title: "Awesome Site",
            description: siteDescription,
          },
          aiDisclosures: {
            isAITranslation: false,
            isAIAuthor: false,
            sourceLocale: "root",
          },
          analytics: {
            googleAnalytics: { enabled: false },
            fiftyOneLa: { enabled: false },
          },
          hagicodePromotion: { enabled: false },
          promoto: { enabled: false },
        }),
      ],
    }),
    sitemap(),
    hagilightDiscovery(),
  ],
});
