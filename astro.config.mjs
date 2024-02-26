// import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: 'https://supertray.app',
  devToolbar: {
    enabled: false,
  },
});
