import tailwindTypoPlugin from '@tailwindcss/typography';
import { createPlugin } from 'windy-radix-palette';

const colors = createPlugin({
  opacitySupport: true,
});

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [colors.plugin, tailwindTypoPlugin],
};
