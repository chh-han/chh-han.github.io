import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://changheonhan.com',
  output: 'static',
  outDir: './dist',
  integrations: [
    react(),
    mdx(),
    sitemap(),
  ],
});
