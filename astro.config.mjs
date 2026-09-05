// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// Deployed to GitHub Pages as a project site: https://itxhamza.github.io/portfolio/
// If you move to a user page or custom domain, set `base` to '/' and update `site`.
// https://astro.build/config
export default defineConfig({
  site: 'https://itxhamza.github.io',
  base: '/portfolio',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
