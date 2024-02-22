import { createPlugin } from 'windy-radix-palette';

const colors = createPlugin();

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        orange: colors.alias('orange'),
        gray: colors.alias('sand'),
      },
    },
  },
  plugins: [colors],
};
