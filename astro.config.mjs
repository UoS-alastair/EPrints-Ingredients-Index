import { defineConfig } from 'astro/config';

const base = process.env.GITHUB_ACTIONS === 'true'
  ? '/EPrints-Ingredients-Index'
  : '/';

export default defineConfig({
  site: 'https://uos-alastair.github.io',
  base,
});