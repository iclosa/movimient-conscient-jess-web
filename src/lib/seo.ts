import { site } from '../data/site';
import type { Lang } from '../i18n/routes';

const abs = (origin: string, path: string) => new URL(path, origin).href;

export function businessLd(origin: string, lang: Lang) {
  const address: Record<string, string> = {
    '@type': 'PostalAddress',
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country,
  };
  if (site.streetAddress) address.streetAddress = site.streetAddress;
  if (site.postalCode) address.postalCode = site.postalCode;
  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': abs(origin, '/#negocio'),
    name: site.name,
    url: abs(origin, lang === 'ca' ? '/' : '/es/'),
    description:
      lang === 'ca'
        ? 'Centre de ioga i moviment conscient a Vallirana: classes en grups reduïts, classes personals, educació postural i meditació guiada.'
        : 'Centro de yoga y movimiento consciente en Vallirana: clases en grupos reducidos, clases personales, educación postural y meditación guiada.',
    address,
    areaServed: [site.locality, ...site.nearby].map((n) => ({ '@type': 'City', name: n })),
    knowsLanguage: ['ca', 'es'],
  };
  if (site.email) ld.email = site.email;
  if (site.phone) ld.telephone = site.phone;
  if (site.instagram) ld.sameAs = [site.instagram];
  return ld;
}

export function websiteLd(origin: string, lang: Lang) {
  return { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: abs(origin, '/'), inLanguage: lang === 'ca' ? 'ca-ES' : 'es-ES' };
}

export function breadcrumbLd(origin: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(origin, it.path) })),
  };
}

export function faqLd(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function articleLd(origin: string, o: { title: string; description: string; path: string; date: string; lang: Lang }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: o.title,
    description: o.description,
    datePublished: o.date,
    dateModified: o.date,
    inLanguage: o.lang === 'ca' ? 'ca-ES' : 'es-ES',
    mainEntityOfPage: abs(origin, o.path),
    author: { '@type': 'Person', name: 'Jèssica Gallardo' },
    publisher: { '@type': 'Organization', name: site.name },
  };
}

export function serviceLd(origin: string, o: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: o.name,
    description: o.description,
    url: abs(origin, o.path),
    provider: { '@id': abs(origin, '/#negocio') },
    areaServed: { '@type': 'City', name: site.locality },
  };
}

export function videoLd(origin: string, o: { name: string; description: string; thumbnail: string; uploadDate: string; minutes: number; seconds: number; embedUrl: string; lang: Lang }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: o.name,
    description: o.description,
    thumbnailUrl: abs(origin, o.thumbnail),
    uploadDate: o.uploadDate,
    duration: `PT${o.minutes}M${o.seconds}S`,
    embedUrl: o.embedUrl,
    isAccessibleForFree: true,
    inLanguage: o.lang === 'ca' ? 'ca-ES' : 'es-ES',
  };
}
