// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: poner el dominio definitivo (variable SITE_URL o aquí). Es imprescindible para canonical, sitemap y SEO.
const site = process.env.SITE_URL || 'https://movimentconscient.example';

export default defineConfig({
  site,
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ca', locales: { ca: 'ca-ES', es: 'es-ES' } },
    }),
  ],
});
