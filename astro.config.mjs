// import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import solid from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), sitemap()],
  site: 'https://supertray.app',
  devToolbar: {
    enabled: false,
  },
});
