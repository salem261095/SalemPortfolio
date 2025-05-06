import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string().optional(),
  }),
});

const portfolio = defineCollection({
  loader: glob({ base: "./src/content/portfolio", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    technologies: z.array(z.string()),
    client: z.string(),
    completed: z.coerce.date(),
    category: z.string(),
    slug: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    slug: z.string().optional(),
  }),
});



export const collections = {
  blog,
  portfolio,
  services,
};