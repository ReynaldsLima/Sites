// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: trocar pelo domínio real antes do deploy (usado no sitemap, canonical e og:url)
const SITE_URL = 'https://leadpulse.example.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
