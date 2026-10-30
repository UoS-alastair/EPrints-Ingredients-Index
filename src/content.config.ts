import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ingredients = defineCollection({
  loader: glob({
    pattern: '**/*.yml',
    base: './src/content/ingredients-listings',
  }),
  schema: z.object({
    name: z.string(),
    creator: z.string().optional().default(''),
    repo_url: z.string().url(),
    description: z.string().optional().default(''),
    latest_eprints_version_tested: z.string().optional().default(''),
  }),
});

export const collections = { ingredients };
