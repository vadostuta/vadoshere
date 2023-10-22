import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  adapter: nodejs({
    mode: 'middleware' // or 'standalone'
  }),
  output: 'hybrid',
  adapter: netlify()
});