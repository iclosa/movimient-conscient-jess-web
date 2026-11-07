import type { Lang } from '../i18n/routes';
import { apiRequire } from '../lib/api';

// LAS ACTIVIDADES SE DEFINEN EN EL BACKEND (panel > Activitats): textos en catalán y castellano,
// precio de la clase suelta y color. Esta web solo las lee de la API pública.

export interface Text {
  name: string;
  short: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  benefits: string[];
  forWho: string;
  expect: string;
  level: string;
  faq: { q: string; a: string }[];
}
export interface Activity {
  id: string;
  slug: Record<Lang, string>;
  color: string; // #RRGGBB definido en el backend
  textColor: string; // color de texto legible sobre `color`
  priceLabel: string | null; // "14,00 €" o null si no hay precio
  related: string[];
  t: Record<Lang, Text>;
}

interface ApiText {
  name: string;
  tagline: string | null;
  description: string | null;
  level: string | null;
  h1: string;
  meta_title: string;
  meta_description: string | null;
  for_who: string | null;
  expect: string | null;
  benefits: string[];
  faq: { q: string; a: string }[];
}
interface ApiActivity {
  id: number;
  slug: Record<Lang, string>;
  color: string;
  color_text: string;
  price_label: string | null;
  related: number[];
  translations: Record<Lang, ApiText>;
}

const toText = (t: ApiText): Text => ({
  name: t.name,
  short: t.tagline ?? '',
  metaTitle: t.meta_title,
  metaDesc: t.meta_description ?? '',
  h1: t.h1,
  intro: t.description ?? '',
  benefits: t.benefits,
  forWho: t.for_who ?? '',
  expect: t.expect ?? '',
  level: t.level ?? '',
  faq: t.faq,
});

const fetchActivities = async (): Promise<Activity[]> => {
  const list = await apiRequire<ApiActivity[]>('/activities');
  if (list.length === 0) throw new Error('El backend no tiene ninguna actividad visible: actívalas en el panel (Activitats).');
  return list.map((a) => ({
    id: String(a.id),
    slug: a.slug,
    color: a.color,
    textColor: a.color_text,
    priceLabel: a.price_label,
    related: a.related.map(String),
    t: { ca: toText(a.translations.ca), es: toText(a.translations.es) },
  }));
};

let cached: Promise<Activity[]> | undefined;

/** Actividades visibles del backend. En el build se piden una sola vez; en `astro dev`, en cada petición. */
export const loadActivities = (): Promise<Activity[]> =>
  import.meta.env.PROD ? (cached ??= fetchActivities()) : fetchActivities();

// Referencias antiguas (artículos del blog, vídeos escritos a mano) por id corto → slug catalán del backend.
const legacyRefs: Record<string, string> = {
  nidra: 'ioga-nidra',
  hatha: 'hatha-ioga',
  vinyasa: 'vinyasa-ioga',
  hit: 'ioga-hit',
  acroyoga: 'acroioga',
  familiar: 'ioga-familiar',
  funcional: 'exercici-funcional',
};

/** Busca una actividad por id del backend, por slug (ca/es) o por referencia antigua. */
export const findActivity = (list: Activity[], ref?: string | null): Activity | undefined => {
  if (!ref) return undefined;
  const slug = legacyRefs[ref] ?? ref;
  return list.find((a) => a.id === ref || a.slug.ca === slug || a.slug.es === slug);
};

/** Estilo en línea con el color de la actividad (se usa junto a la clase `act`). */
export const actStyle = (a: { color: string; textColor: string }): string => `--c:${a.color};--on-act:${a.textColor}`;
