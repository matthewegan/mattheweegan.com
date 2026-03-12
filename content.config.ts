import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        sections: z
          .array(z.object({ id: z.string(), label: z.string() }))
          .optional(),
      }),
    }),
  },
});
