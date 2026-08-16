import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://loosandsonshvac.com',
  integrations: [
    solid(),
    sitemap(),
  ],
});
