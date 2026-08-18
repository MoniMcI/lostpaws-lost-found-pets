import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pets = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pets",
  }),

  schema: z.object({
    name: z.string(),
    species: z.enum(["Dog", "Cat", "Other"]),
    breed: z.string(),
    photos: z.array(z.string()).min(1).max(3),
    date: z.coerce.date(),
    location: z.string(),
    contactName: z.string(),
    contactInfo: z.string(),
    distinguishingFeatures: z.string(),
    status: z.enum(["Lost", "Found", "Reunited"]),
  }),
});

export const collections = {
  pets,
};
