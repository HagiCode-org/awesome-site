import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import collections from "./content/awesome/collections.json" with { type: "json" };
import catalogs from "./content/awesome/catalogs.json" with { type: "json" };
import hagilight from "@hagicode/hagilight-starlight";
import { locales as hagilightLocales } from "@hagicode/hagilight-starlight/locales";
import { hagilight as hagilightDiscovery } from "@hagicode/hagilight/integration";
import { unified } from "@astrojs/markdown-remark";
import rehypeRaw from "rehype-raw";
import { normalizeCatalogTags } from "./src/catalog-tags.mjs";
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
const topicLabels = {
  root: "Browse by topic",
  "zh-CN": "按主题浏览",
  "zh-Hant": "依主題瀏覽",
  "fr-FR": "Parcourir par sujet",
  "de-DE": "Nach Thema durchsuchen",
  "es-ES": "Explorar por tema",
  "ja-JP": "トピックから探す",
  "ko-KR": "주제별로 둘러보기",
  "pt-BR": "Navegar por tópico",
  "ru-RU": "Обзор по темам",
};
const usedTopics = [...new Set(collections.flatMap((collection) =>
  normalizeCatalogTags(collection).tags))].sort();
const topicItems = usedTopics.map((topic) => ({
  label: catalogs[topic].labels.root,
  translations: catalogs[topic].labels,
  link: `/awesome/tags/${topic}/`,
}));
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
        {
          label: topicLabels.root,
          translations: topicLabels,
          items: topicItems,
        },
      ],
      components: {
        PageTitle: "./src/components/PageTitle.astro",
        PageFrame: "./src/components/PageFrame.astro",
      },
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
          promoto: { enabled: true },
        }),
      ],
    }),
    sitemap(),
    hagilightDiscovery(),
  ],
});