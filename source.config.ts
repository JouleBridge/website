import { defineConfig, defineDocs, defineCollections } from "fumadocs-mdx/config";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["Engineering", "Product", "Industry", "Company"]),
    date: z.string(),
    readTime: z.string(),
    author: z.string().default("JouleBridge Team"),
  }),
});

export default defineConfig({
  mdxOptions: {},
});
