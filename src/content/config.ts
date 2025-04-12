import { defineCollection, z } from "astro:content";

const serviceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    Subetitle: z.string(),
    date: z.string(),
    image: z.string(),
    context: z.string(),
  }),
});

export const collections = {
  services: serviceCollection,
};
