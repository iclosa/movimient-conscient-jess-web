// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// TODO: poner el dominio definitivo (variable SITE_URL o aquí). Es imprescindible para canonical, sitemap y SEO.
const site = process.env.SITE_URL || 'https://movimentconscient.example';

export default defineConfig({
  site,
  // Web viva: las páginas que dependen de la API se renderizan en el servidor en cada petición.
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  // El sitemap se genera dinámicamente en src/pages/sitemap.xml.ts (incluye actividades, blog y vídeos de la API).
});
