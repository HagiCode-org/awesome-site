import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { hagilightSchema } from "@hagicode/hagilight-starlight/schema";
import { normalizeCatalogTags } from "./catalog-tags.mjs";

export const collections = {
  docs: defineCollection({
    loader: docsLoader({
      generateId: ({ entry }) => entry.replace(/\.[^/.]+$/u, "").replace(/\/index$/u, ""),
    }),
    schema: (context) => docsSchema({
      extend: hagilightSchema.extend({
      catalog: z.union([z.string(), z.array(z.string())]).optional(),
      tags: z.array(z.string()).optional(),
      awesomeIndex: z.discriminatedUnion("kind", [
        z.object({ kind: z.literal("collections") }),
        z.object({ kind: z.literal("tag"), topic: z.string() }),
      ]).optional(),
      awesomeSource: z.object({
        id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
        repositoryUrl: z.string().refine((value) => {
          const url = new URL(value);
          return url.protocol === "https:" && url.hostname === "github.com";
        }),
        revision: z.string().regex(/^[a-f0-9]{40}$/u),
        readmePath: z.string().min(1).refine((value) => !value.includes("..") && !value.includes("\\")),
        licensePath: z.string().min(1).refine((value) => !value.includes("..") && !value.includes("\\")),
        licenseId: z.string().min(1),
        readmeUrl: z.string().refine((value) => value.startsWith("https://")),
        licenseUrl: z.string().refine((value) => value.startsWith("https://")),
        sourceFragments: z.array(z.object({
          sourceId: z.string(),
          targetId: z.string(),
        })),
      }).optional(),
      }),
    })(context).transform((data, transformContext) => {
      try {
        return { ...data, ...normalizeCatalogTags(data) };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        const field = message.includes(": catalog") ? "catalog" : "tags";
        transformContext.addIssue({ code: "custom", path: [field], message });
        return z.NEVER;
      }
    }),
  }),
};
