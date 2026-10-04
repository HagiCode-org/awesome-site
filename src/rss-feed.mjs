import { getCollection } from "astro:content";
import { locales } from "@hagicode/hagilight-starlight/locales";

export default async function getFeed({ route, lang }) {
  const entries = await getCollection("docs");
  const localeKeys = Object.keys(locales).filter((key) => key !== "root");
  const prefix = route === "root" ? undefined : route;
  const items = entries
    .filter(({ id }) => {
      if (!prefix) return !localeKeys.some((locale) => id === locale || id.startsWith(`${locale}/`));
      return id === prefix || id.startsWith(`${prefix}/`);
    })
    .filter(({ data }) => !data.draft && data.rss !== false)
    .map(({ id, data }) => {
      const slug = id === "index" ? "" : id;
      return {
        title: data.title,
        description: data.description,
        link: new URL(`/${slug ? `${slug}/` : ""}`, process.env.SITE_URL).href,
      };
    })
    .sort((first, second) => first.link.localeCompare(second.link));

  return {
    title: "Awesome Site",
    description: `Awesome Site content in ${lang}.`,
    items,
  };
}
