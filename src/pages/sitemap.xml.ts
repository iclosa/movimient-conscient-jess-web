import type { APIRoute } from 'astro';
import { loadActivities } from '../data/activities';
import { loadPosts } from '../lib/content';
import { freeVideos } from '../data/videos';
import { services } from '../data/services';
import { sectionPath, itemPath, type Lang, type Section } from '../i18n/routes';

export const prerender = false;

const LANGS: Lang[] = ['ca', 'es'];
const SECTIONS: Section[] = ['home', 'activities', 'services', 'events', 'schedule', 'videos', 'app', 'blog', 'about', 'contact'];
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Sitemap con hreflang. Lee la API en cada petición: solo lista lo que existe de verdad en el backend. */
export const GET: APIRoute = async ({ site }) => {
  const origin = (site?.origin ?? '').replace(/\/$/, '');
  const [activities, posts, videos] = await Promise.all([
    loadActivities().catch(() => []),
    loadPosts().catch(() => []),
    freeVideos().catch(() => []),
  ]);

  const groups: Record<Lang, string>[] = SECTIONS.map((s) => ({ ca: sectionPath('ca', s), es: sectionPath('es', s) }));
  for (const a of activities) groups.push({ ca: itemPath('ca', 'activities', a.slug.ca), es: itemPath('es', 'activities', a.slug.es) });
  for (const s of services) groups.push({ ca: itemPath('ca', 'services', s.slug.ca), es: itemPath('es', 'services', s.slug.es) });
  for (const p of posts) groups.push({ ca: itemPath('ca', 'blog', p.translations.ca.slug), es: itemPath('es', 'blog', p.translations.es.slug) });
  for (const v of videos) groups.push({ ca: itemPath('ca', 'videos', v.slug.ca), es: itemPath('es', 'videos', v.slug.es) });

  const urls = groups
    .flatMap((g) =>
      LANGS.map((l) => {
        const alt =
          LANGS.map((k) => `<xhtml:link rel="alternate" hreflang="${k}" href="${esc(origin + g[k])}"/>`).join('') +
          `<xhtml:link rel="alternate" hreflang="x-default" href="${esc(origin + g.ca)}"/>`;
        return `<url><loc>${esc(origin + g[l])}</loc>${alt}</url>`;
      }),
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, s-maxage=3600' } },
  );
};
