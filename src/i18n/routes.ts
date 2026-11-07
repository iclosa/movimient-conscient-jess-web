export type Lang = 'ca' | 'es';
export const defaultLang: Lang = 'ca';
export type Section = 'home' | 'activities' | 'services' | 'events' | 'schedule' | 'videos' | 'app' | 'blog' | 'about' | 'contact';

const seg: Record<Lang, Record<Exclude<Section, 'home'>, string>> = {
  ca: { activities: 'activitats', services: 'serveis', events: 'tallers-i-retirs', schedule: 'horari', videos: 'videos', app: 'app', blog: 'blog', about: 'jess', contact: 'contacte' },
  es: { activities: 'actividades', services: 'servicios', events: 'talleres-y-retiros', schedule: 'horario', videos: 'videos', app: 'app', blog: 'blog', about: 'jess', contact: 'contacto' },
};

export function sectionPath(lang: Lang, s: Section): string {
  const base = lang === 'ca' ? '/' : '/es/';
  return s === 'home' ? base : `${base}${seg[lang][s]}/`;
}
export function itemPath(lang: Lang, s: Exclude<Section, 'home'>, slug: string): string {
  return `${sectionPath(lang, s)}${slug}/`;
}
export function otherLang(l: Lang): Lang { return l === 'ca' ? 'es' : 'ca'; }
