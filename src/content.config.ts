import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts are plain markdown files in src/content/blog/. To publish a new
// one, add a file. To keep one unpublished, set draft: true.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // h1 is the visible headline. title is the browser and search result title.
    h1: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
