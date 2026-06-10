import { defineCollection, z } from 'astro:content';

const releases = defineCollection({
  type: 'content',
  schema: z.object({
    product: z.enum(['v3', 'v4']),
    version: z.string(),
    date: z.string(),
    whatsNew: z.array(z.string()).default([]),
  }),
});

export const collections = { releases };