import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Tech Articles Collection
 * Programming, Architecture, AI, and more
 */
const techCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/tech" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    categories: z.array(z.string()).default(["general"]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(), // in minutes
    author: z.string().default("Ioodu"),
  }),
});

/**
 * Gear Reviews Collection
 * EDC, Gadgets, Books, Movies, Music
 */
const gearCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/gear" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    categories: z.array(z.string()).default(["edc"]),
    cover: z.string().optional(),
    rating: z.number().min(1).max(5),
    purchaseLink: z.string().optional(),
    price: z.string().optional(),
    brand: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Essays Collection
 * Personal thoughts, reflections, and essays
 */
const essaysCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    categories: z.array(z.string()).default(["thoughts"]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    author: z.string().default("Ioodu"),
    mood: z.string().optional(), // e.g., "reflective", "energetic"
  }),
});

/**
 * Life Collection
 * Daily life, hobbies, photography, travel
 */
const lifeCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/life" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    categories: z.array(z.string()).default(["daily"]),
    cover: z.string().optional(),
    photos: z.array(z.string()).optional(),
    location: z.string().optional(),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    author: z.string().default("Ioodu"),
  }),
});

export const collections = {
  tech: techCollection,
  gear: gearCollection,
  essays: essaysCollection,
  life: lifeCollection,
};
