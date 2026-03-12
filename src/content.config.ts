import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * 技术文章集合
 * 用于编程、架构、AI等技术类内容
 */
const techCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/tech" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
  }),
});

/**
 * 装备文章集合
 * 用于数码、EDC、书影音等生活装备类内容
 */
const gearCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/gear" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    rating: z.number().min(1).max(5),
    purchaseLink: z.string().optional(),
  }),
});

export const collections = {
  tech: techCollection,
  gear: gearCollection,
};
