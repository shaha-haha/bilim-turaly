import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const writing = defineCollection({loader: glob({pattern: '**/*.md',base: './src/content/essays'}),schema:z.object({title:z.string(),description:z.string(),date:z.coerce.date(),category:z.string(),tags:z.array(z.string()).default([]),draft:z.boolean().default(false)})});
const notes = defineCollection({loader: glob({pattern:'**/*.md',base:'./src/content/notes'}),schema:z.object({title:z.string(),description:z.string(),date:z.coerce.date(),tags:z.array(z.string()).default([]),draft:z.boolean().default(false)})});
const resources = defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/resources'}),schema:z.object({title:z.string(),description:z.string(),date:z.coerce.date(),grade:z.string(),language:z.string(),type:z.string(),file:z.string().optional(),draft:z.boolean().default(false)})});
export const collections={essays:writing,notes,resources};
