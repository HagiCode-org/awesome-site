import { defineMiddleware } from "astro:middleware";
import { access } from "node:fs/promises";
import path from "node:path";
import { locales } from "@hagicode/hagilight-starlight/locales";

const docsRoot = path.join(process.cwd(), "src/content/docs");
const localeKeys = new Set(Object.keys(locales).filter((locale) => locale !== "root"));

async function exists(file: string) {
  try {
    await access(file);
    return true;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return false;
    throw error;
  }
}

export const recoverFallbackRoute = defineMiddleware(async (context, next) => {
  const segments = decodeURIComponent(context.url.pathname).split("/").filter(Boolean);
  const locale = segments[0];
  if (!localeKeys.has(locale)) return next();
  const localizedSegments = segments.slice(1);
  const sourceSegments = [...localizedSegments];
  const relative = sourceSegments.join("/");
  const sourceFile = path.join(docsRoot, `${relative || "index"}.md`);
  const sourceIndex = path.join(docsRoot, relative, "index.md");
  const localizedFile = path.join(docsRoot, locale, `${relative || "index"}.md`);
  const localizedIndex = path.join(docsRoot, locale, relative, "index.md");
  if (
    !(await exists(localizedFile)) &&
    !(await exists(localizedIndex)) &&
    ((await exists(sourceFile)) || (await exists(sourceIndex)))
  ) {
    const destination = relative ? `/${relative}/` : "/";
    return context.redirect(destination, 302);
  }
  return next();
});
