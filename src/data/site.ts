// Datos del negocio. Los campos en null NO se muestran ni se publican en datos estructurados
// hasta que se rellenen: así no se publica información inventada.
export const site = {
  name: 'Moviment Conscient by Jess',
  locality: 'Vallirana',
  region: 'Barcelona',
  country: 'ES',
  streetAddress: null as string | null, // TODO: dirección exacta
  postalCode: null as string | null, // TODO
  email: null as string | null, // TODO
  phone: null as string | null, // TODO, formato +34...
  whatsapp: null as string | null, // TODO, solo dígitos con prefijo: 34600000000
  instagram: null as string | null, // TODO: URL completa
  mapUrl: null as string | null, // TODO: enlace de Google Maps
  appStoreUrl: null as string | null, // TODO: enlace a la ficha de App Store cuando exista
  playStoreUrl: null as string | null, // TODO: enlace a Google Play cuando exista
  nearby: ['Corbera de Llobregat', 'Cervelló', 'Begues', 'Sant Vicenç dels Horts', 'Pallejà', 'Molins de Rei'],
};
