import {defineCollection, z} from "astro:content";

import {glob, file} from "astro/loaders";

const dispensers = defineCollection({
  loader: file("src/data/dispensers/dispensers.json"),
  schema: ({ image }) => z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.number().gt(0),
    images: z.array(image()),
    availableColors: z.array(z.string()),
    type: z.enum(['Termoelektrični', "Kompresorski"]),
    mainSpecs: z.array(z.object({
      category: z.enum(["dimensions", "weight", "volume"]),
      value: z.string()
    })),
    otherSpecs: z.array(z.object({
      category:z.string(),
      value: z.string()
    })),
  })
});

export const collections = {dispensers};