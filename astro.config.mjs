import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import hagilight from "@hagicode/hagilight-starlight";
import { locales as hagilightLocales } from "@hagicode/hagilight-starlight/locales";
import { hagilight as hagilightDiscovery } from "@hagicode/hagilight/integration";
import { unified } from "@astrojs/markdown-remark";
import rehypeRaw from "rehype-raw";
import { awesomeContent } from "./src/plugins/awesome-content.mjs";

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
  profileReadme: {
    "zh-CN": "GitHub 个人资料 README",
    "zh-Hant": "GitHub 個人檔案 README",
    "fr-FR": "README de profil GitHub",
    "de-DE": "GitHub-Profil-README",
    "es-ES": "README de perfil de GitHub",
    "ja-JP": "GitHub プロフィール README",
    "ko-KR": "GitHub 프로필 README",
    "pt-BR": "README de perfil do GitHub",
    "ru-RU": "README профиля GitHub",
  },
};

export default defineConfig({
  site: siteOrigin,
  base: "/",
  server: { port: 36265, strictPort: true },
  preview: { port: 36265, strictPort: true },
  markdown: {
    processor: unified({ rehypePlugins: [rehypeRaw, awesomeContent] }),
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
            label: "GitHub Profile README",
            translations: sidebarLabels.profileReadme,
            link: "/awesome/awesome-github-profile-readme/",
          }],
        },
      ],
      customCss: ["./src/styles/site.css"],
      plugins: [
        hagilight({
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
          promoto: { enabled: false },
        }),
      ],
    }),
    sitemap(),
    hagilightDiscovery(),
  ],
});
