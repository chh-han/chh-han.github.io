import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://changheonhan.com',
  output: 'static',
  outDir: './dist',
  redirects: {
    '/bio.html': '/bio',
    '/creation.html': '/creation',
    '/research.html': '/research',
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.endsWith('/bio.html') &&
        !page.endsWith('/creation.html') &&
        !page.endsWith('/research.html'),
    }),
  ],
});
