// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://d11n.studio',
  integrations: [tailwind()],
  server: {
    port: 4321,
    host: true
  }
});