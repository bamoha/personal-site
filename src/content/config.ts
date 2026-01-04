import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

const speaking = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string().optional(),
    date: z.coerce.date(),
    eventUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional(),
    youtubeUrl: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    demoURL: z.string().url().optional(),
    repoURL: z.string().url().optional(),
  }),
});

export const collections = { blog, speaking, projects };

