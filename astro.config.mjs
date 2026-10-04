import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import hagilight from "@hagicode/hagilight-starlight";
import { locales as hagilightLocales } from "@hagicode/hagilight-starlight/locales";
import { hagilight as hagilightDiscovery } from "@hagicode/hagilight/integration";
import { unified } from "@astrojs/markdown-remark";
import rehypeRaw from "rehype-raw";
import { awesomeContent, awesomeSourceImages } from "./src/plugins/awesome-content.mjs";

const rawSiteUrl = process.env.SITE_URL
  ?? (process.argv[2] === "dev" ? "http://localhost:36265" : undefined);

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
const siteDescription = "A practical foundation for site-owned content.";
const sidebarLabels = {
  home: {
    "zh-CN": "首页",
    "zh-Hant": "首頁",
    "fr-FR": "Accueil",
    "de-DE": "Startseite",
    "es-ES": "Inicio",
    "ja-JP": "ホーム",
    "ko-KR": "홈",
    "pt-BR": "Início",
    "ru-RU": "Главная",
  },
  collections: {
    "zh-CN": "精选合集",
    "zh-Hant": "精選合集",
    "fr-FR": "Collections",
    "de-DE": "Sammlungen",
    "es-ES": "Colecciones",
    "ja-JP": "コレクション",
    "ko-KR": "컬렉션",
    "pt-BR": "Coleções",
    "ru-RU": "Подборки",
  },
  allCollections: {
    "zh-CN": "合集与仓库",
    "zh-Hant": "精選集與儲存庫",
    "fr-FR": "Collections et dépôts",
    "de-DE": "Sammlungen und Repositories",
    "es-ES": "Colecciones y repositorios",
    "ja-JP": "コレクションとリポジトリ",
    "ko-KR": "컬렉션 및 저장소",
    "pt-BR": "Coleções e repositórios",
    "ru-RU": "Подборки и репозитории",
  },
};

export default defineConfig({
  site: siteOrigin,
  base: "/",
  server: { port: 36265, strictPort: true },
  preview: { port: 36265, strictPort: true },
  markdown: {
    processor: unified({ remarkPlugins: [awesomeSourceImages], rehypePlugins: [rehypeRaw, awesomeContent] }),
  },
  integrations: [
    starlight({
      title: "Awesome Site",
      description: siteDescription,
      defaultLocale: "root",
      locales: hagilightLocales,
      sidebar: [
        { label: "Home", translations: sidebarLabels.home, link: "/" },
        {
          label: "Awesome collections",
          translations: sidebarLabels.collections,
          items: [{
            label: "Collections and repositories",
            translations: sidebarLabels.allCollections,
            link: "/awesome/",
          }, {
            autogenerate: { directory: "awesome" },
          }],
        },
      ],
      components: { PageTitle: "./src/components/PageTitle.astro" },
      customCss: ["./src/styles/site.css"],
      plugins: [
        hagilight({
          contentComponents: { pageTitle: false },
          rss: { getFeed: "./src/rss-feed.mjs" },
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
          promoto: { enabled: true },
        }),
      ],
    }),
    sitemap(),
    hagilightDiscovery(),
  ],
});