# Moviment Conscient by Jess · Web pública (Astro)

Web en Astro con renderizado en servidor (SSR, desplegada en Vercel): las páginas que dependen de la API se generan en cada petición; enfocada a SEO local (Vallirana / Baix Llobregat). Catalán por defecto (`/`) y castellano (`/es/`), con slugs traducidos y hreflang.

## Arrancar

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # compila para Vercel (.vercel/output); los datos de la API se leen en cada petición, no al compilar

Dominio: `SITE_URL=https://tudominio.cat npm run build` (o editar `astro.config.mjs`). Sin dominio real, canonical y sitemap salen con un dominio de ejemplo.

## Contenido (todo en `src/data` y `src/i18n`)

- `site.ts`: datos del negocio (dirección, teléfono, email, WhatsApp, Instagram, mapa). Los vacíos no se publican.
- `activities.ts`: 7 actividades, cada una con su página, FAQ y textos CA/ES.
- `services.ts`: classes personals, educació postural, meditació guiada.
- `blog.ts`: artículos (añadir uno = añadir un objeto).
- Horario: no hay datos locales. `Schedule.astro` lo pide en el navegador a la API del backend (`/sessions`). Las reservas se hacen en la app: la web solo muestra horario y plazas.
- `videos.ts`: vídeos. La web solo publica los `free: true`; los de pago no se muestran ni se generan.
- `ui.ts`: textos de portada, listados y páginas generales.

## Diseño

Sigue la guía de estilos "Moviment Conscient by Jess" (sistema de diseño en Claude). `src/styles/tokens.css` es una copia de sus tokens (claro y oscuro): si cambia la guía, volver a copiarlos. No se redibuja el logo: la marca se compone en texto hasta tener el archivo oficial.

## SEO incluido

Title/description únicos, canonical, hreflang + x-default, Open Graph, JSON-LD (negocio local, WebSite, BreadcrumbList, FAQPage, Service, Article), sitemap dinámico (`/sitemap.xml`), robots.txt, fuentes autoalojadas, HTML estático sin JS salvo el selector de días.

## Pendiente antes de publicar

- Dominio real, dirección, teléfono/email, Instagram y enlace de Google Maps (`site.ts`).
- Revisar con Jess los textos (sobre todo Yoga HIT, Acroyoga, niveles y edades de yoga familiar) y añadir su biografía/formación.
- Logo oficial, fotos reales (con `alt`) e imagen Open Graph.
- Reservas reales (botón "Reservar") conectadas al backend.
- Alta en Google Business Profile y Search Console (enviar `sitemap.xml`).
- Reseñas reales de alumnos cuando existan (no se han inventado).

## Limpieza manual

Se pueden borrar `.codesandbox/`, `src/pages/_obsolet-activitats.astro` y `src/pages/es/_obsolet-actividades.astro` (restos que no se enrutan).
