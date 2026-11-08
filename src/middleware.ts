import { defineMiddleware } from 'astro:middleware';

// Las páginas se renderizan en el servidor con datos de la API. Vercel guarda cada página 60 s (s-maxage) y, pasado ese
// tiempo, sigue sirviendo la anterior mientras pide una nueva en segundo plano (stale-while-revalidate): los cambios del
// panel salen en ~1 minuto y el visitante nunca espera a que el backend (Render gratuito) se despierte.
// Para pedir los datos en TODAS las visitas pon 'no-store'.
const HTML_CACHE = 'public, s-maxage=60, stale-while-revalidate=600';

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (res.status !== 200 || !res.headers.get('content-type')?.includes('text/html') || res.headers.has('cache-control')) return res;
  const headers = new Headers(res.headers);
  headers.set('Cache-Control', HTML_CACHE);
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
});
