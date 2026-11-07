import { apiGet } from './api';
import type { Lang } from '../i18n/routes';

export interface Promo {
  id: number; title: string; body: string | null; type: string; color: string | null;
  image_url: string | null; cta_label: string | null; cta_url: string | null; ends_at: string | null;
}
export interface EventItem {
  id: number; title: string; slug: string; type: 'taller' | 'retir' | 'esdeveniment';
  description: string | null; location: string | null; starts_at: string; ends_at: string | null;
  capacity: number | null; spots_left: number | null; price_cents: number; price_label: string | null;
  image_url: string | null;
}

export const loadPromotions = async (): Promise<Promo[]> => (await apiGet<Promo[]>('/promotions')) ?? [];
export const loadEvents = async (): Promise<EventItem[]> => (await apiGet<EventItem[]>('/events')) ?? [];

/** Solo enlaces http(s) o relativos; cualquier otra cosa (javascript:, data:) se descarta. */
export function safeUrl(u: string | null): string | null {
  if (!u) return null;
  return /^(https?:\/\/|\/)/i.test(u.trim()) ? u.trim() : null;
}

const locale = (l: Lang) => (l === 'ca' ? 'ca-ES' : 'es-ES');
export function fmtDate(iso: string, l: Lang): string {
  return new Intl.DateTimeFormat(locale(l), { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' }).format(new Date(iso));
}
export function fmtDay(iso: string, l: Lang): string {
  return new Intl.DateTimeFormat(locale(l), { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' }).format(new Date(iso));
}

export interface PostText { slug: string; title: string; excerpt: string | null; intro: string | null; body: string | null }
export interface BlogPost { id: number; published_at: string; updated_at: string; image_url: string | null; translations: Record<Lang, PostText> }

export const loadPosts = async (): Promise<BlogPost[]> => (await apiGet<BlogPost[]>('/posts')) ?? [];

export type Inline = string | { text: string; href: string };
export type Block = { type: 'h2'; text: string } | { type: 'p'; parts: Inline[] };

/** Texto plano del backend → bloques. Párrafos separados por línea en blanco, "## " = subtítulo, [texto](/ruta/) = enlace. */
export function parseBody(body: string | null): Block[] {
  if (!body) return [];
  return body.replace(/\r\n/g, '\n').split(/\n{2,}/).map((chunk) => chunk.trim()).filter(Boolean).map((chunk): Block => {
    if (chunk.startsWith('## ')) return { type: 'h2', text: chunk.slice(3).trim() };
    const parts: Inline[] = [];
    let last = 0;
    for (const m of chunk.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
      const href = safeUrl(m[2]);
      if (m.index! > last) parts.push(chunk.slice(last, m.index));
      parts.push(href ? { text: m[1], href } : m[0]);
      last = m.index! + m[0].length;
    }
    if (last < chunk.length) parts.push(chunk.slice(last));
    return { type: 'p', parts };
  });
}
