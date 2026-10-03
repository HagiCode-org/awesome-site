import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { hagilightSchema } from "@hagicode/hagilight-starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader({
      generateId: ({ entry }) => entry.replace(/\.[^/.]+$/u, "").replace(/\/index$/u, ""),
    }),
    schema: docsSchema({
      extend: hagilightSchema.extend({
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
    }),
  }),
};
