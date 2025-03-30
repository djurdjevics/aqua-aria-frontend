import {defineCollection, z} from "astro:content";

import {glob, file} from "astro/loaders";

const dispensers = defineCollection({
  loader: file("src/data/dispensers/dispensers.json"),
  schema: ({ image }) => z.object({
    slug: z.string(),
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

const waters = defineCollection({
  loader: file("src/data/waters/waters.json"),
  schema: ({ image }) => z.object({
    id:z.number(),
    name: z.string(),
    image: image(),
    volume: z.string(),
    pricePerBalloon: z.number(),
    description: z.string(),
    composition: z.array(z.object({
      substance: z.string(),
      amount: z.string()
    }))
  })
})

export const collections = {dispensers, waters};