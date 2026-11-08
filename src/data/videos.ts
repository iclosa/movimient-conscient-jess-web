import type { Lang } from '../i18n/routes';
import { apiGet } from '../lib/api';
import { findActivity, type Activity } from './activities';

// VÍDEOS DE LA WEB: aquí solo se publican los GRATUITOS.
// Los de pago viven en la app. Aunque se añadan aquí con free: false, la web nunca los muestra
// ni genera su página (se filtran en el build).
//
// Cómo añadir uno (ejemplo con Vimeo):
//   {
//     id: 'mobilitat-esquena',
//     activity: 'hatha-ioga',                  // slug de la actividad (la que está en el backend)
//     slug: { ca: 'mobilitat-esquena-12-minuts', es: 'movilidad-espalda-12-minutos' },
//     minutes: 12, seconds: 30,
//     free: true,
//     embedUrl: 'https://player.vimeo.com/video/XXXXXXXX',   // Bunny Stream: https://iframe.mediadelivery.net/embed/<lib>/<id>
//     thumbnail: '/videos/mobilitat-esquena.jpg',             // en /public; necesaria para datos estructurados de vídeo
//     uploadDate: '2026-11-07',
//     t: {
//       ca: { title: 'Mobilitat d’esquena en 12 minuts', desc: '...' },
//       es: { title: 'Movilidad de espalda en 12 minutos', desc: '...' },
//     },
//   },
export interface Video {
  id: string;
  activity: string;
  slug: Record<Lang, string>;
  minutes: number;
  seconds?: number;
  free: boolean;
  embedUrl: string;
  thumbnail?: string;
  uploadDate: string;
  t: Record<Lang, { title: string; desc: string }>;
}

export const videos: Video[] = [];

interface ApiVideo {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  duration_minutes: number | null;
  published_at: string | null;
  thumbnail_url: string | null;
  is_paid: boolean;
  activity: { slug: string; name: string } | null;
  playback?: { provider: string; ref: string };
}

/** Acepta el id suelto o cualquier enlace copiado del navegador (vimeo.com/123, vimeo.com/123/abc, youtu.be/xxx, youtube.com/watch?v=xxx). */
const embedFor = (provider: string, ref: string): string => {
  const r = ref.trim();
  const vimeo = r.match(/vimeo\.com\/(?:video\/|channels\/[^/]+\/|groups\/[^/]+\/videos\/)?(\d+)(?:\/([a-f0-9]+))?(?:\?[^#]*?\bh=([a-f0-9]+))?/i);
  if (vimeo) {
    const h = vimeo[2] ?? vimeo[3];
    return `https://player.vimeo.com/video/${vimeo[1]}${h ? `?h=${h}` : ''}`;
  }
  const yt = r.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  if (/^https?:\/\//.test(r)) return r;
  if (provider === 'vimeo') {
    const m = r.match(/^(\d+)(?:[/?](?:h=)?([a-f0-9]+))?$/i);
    return `https://player.vimeo.com/video/${m ? m[1] + (m[2] ? `?h=${m[2]}` : '') : r}`;
  }
  if (provider === 'bunny') return `https://iframe.mediadelivery.net/embed/${r}`;
  if (provider === 'youtube') return `https://www.youtube-nocookie.com/embed/${r}`;
  return r;
};

/** Vídeos gratuitos publicados en el backend. El backend nunca envía los de pago a la web. */
const loadFromApi = (): Promise<Video[]> =>
  (async () => {
    const list = await apiGet<ApiVideo[]>('/videos');
    return (list ?? [])
      .filter((v) => !v.is_paid && v.playback)
      .map((v) => ({
        id: `api-${v.id}`,
        activity: v.activity?.slug ?? '',
        slug: { ca: v.slug, es: v.slug },
        minutes: v.duration_minutes ?? 0,
        free: true,
        embedUrl: embedFor(v.playback!.provider, v.playback!.ref),
        thumbnail: v.thumbnail_url ?? undefined,
        uploadDate: (v.published_at ?? new Date().toISOString()).slice(0, 10),
        t: { ca: { title: v.title, desc: v.description ?? '' }, es: { title: v.title, desc: v.description ?? '' } },
      }));
  })();

/** Gratuitos escritos a mano en este archivo + gratuitos del backend. */
export const freeVideos = async (): Promise<Video[]> => [...videos.filter((v) => v.free), ...(await loadFromApi())];

/** Actividad para pintar el vídeo (con el color del backend); si no está asociada a ninguna, una genérica. */
export const videoActivity = (v: Video, acts: Activity[]): Activity =>
  findActivity(acts, v.activity) ?? {
    id: '',
    slug: { ca: '', es: '' },
    color: '#6A3593',
    textColor: '#FFFFFF',
    priceLabel: null,
    related: [],
    t: {
      ca: { name: 'General' } as Activity['t']['ca'],
      es: { name: 'General' } as Activity['t']['es'],
    },
  };

export const fmtDuration = (v: Video) => `${v.minutes}:${String(v.seconds ?? 0).padStart(2, "0")}`;
