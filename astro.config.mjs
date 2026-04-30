import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.joscarcare.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
