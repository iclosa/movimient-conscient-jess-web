import type { Lang } from '../i18n/routes';

interface Text {
  name: string;
  short: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  sections: { h2: string; p?: string; list?: string[] }[];
  faq: { q: string; a: string }[];
}
export interface Service { id: string; slug: Record<Lang, string>; t: Record<Lang, Text> }

export const services: Service[] = [
  {
    id: 'personals',
    slug: { ca: 'classes-personals-ioga', es: 'clases-personales-yoga' },
    t: {
      ca: {
        name: 'Classes personals',
        short: 'Sessions individuals dissenyades segons els teus objectius i el teu ritme.',
        metaTitle: 'Classes personals de ioga a Vallirana',
        metaDesc: 'Classes personals de ioga i moviment a Vallirana: sessions individuals adaptades als teus objectius, el teu ritme i les teves necessitats.',
        h1: 'Classes personals de ioga a Vallirana',
        intro: 'Una classe personal és una sessió pensada només per a tu. La Jess dissenya la pràctica segons el teu cos, el teu nivell i el que vols treballar, i t’acompanya durant tota l’estona amb atenció completa.',
        sections: [
          { h2: 'Per a qui són les classes personals', list: ['Si comences i vols aprendre les bases amb calma i sense comparacions.', 'Si tens una necessitat concreta: mobilitat, força, relaxació o postura.', 'Si el teu horari no encaixa amb les classes de grup.', 'Si vols preparar-te per anar després a una classe de grup amb més seguretat.'] },
          { h2: 'Com funciona', p: 'Comencem parlant del que busques i de com estàs. A partir d’aquí, la sessió combina moviment, respiració i relaxació, i s’ajusta en directe segons com et sentis. Pots reservar una sessió puntual o fer un seguiment regular.' },
          { h2: 'Què pots treballar', list: ['Aprendre i polir la tècnica de les postures.', 'Guanyar mobilitat i força de manera progressiva.', 'Aprendre eines de respiració i relaxació per al dia a dia.', 'Crear una rutina de pràctica per fer a casa.'] },
        ],
        faq: [
          { q: 'Quant dura una classe personal?', a: 'Escriu-nos i et diem durada, disponibilitat i condicions. Les sessions s’adapten a les teves necessitats.' },
          { q: 'Puc compartir la classe amb una altra persona?', a: 'Sí, es poden fer sessions en parella o en petit grup. Pregunta’ns les opcions.' },
        ],
      },
      es: {
        name: 'Clases personales',
        short: 'Sesiones individuales diseñadas según tus objetivos y tu ritmo.',
        metaTitle: 'Clases personales de yoga en Vallirana',
        metaDesc: 'Clases personales de yoga y movimiento en Vallirana: sesiones individuales adaptadas a tus objetivos, tu ritmo y tus necesidades.',
        h1: 'Clases personales de yoga en Vallirana',
        intro: 'Una clase personal es una sesión pensada solo para ti. Jess diseña la práctica según tu cuerpo, tu nivel y lo que quieres trabajar, y te acompaña durante todo el rato con atención completa.',
        sections: [
          { h2: 'Para quién son las clases personales', list: ['Si empiezas y quieres aprender las bases con calma y sin comparaciones.', 'Si tienes una necesidad concreta: movilidad, fuerza, relajación o postura.', 'Si tu horario no encaja con las clases de grupo.', 'Si quieres prepararte para ir después a una clase de grupo con más seguridad.'] },
          { h2: 'Cómo funciona', p: 'Empezamos hablando de lo que buscas y de cómo estás. A partir de ahí, la sesión combina movimiento, respiración y relajación, y se ajusta en directo según cómo te sientas. Puedes reservar una sesión puntual o hacer un seguimiento regular.' },
          { h2: 'Qué puedes trabajar', list: ['Aprender y pulir la técnica de las posturas.', 'Ganar movilidad y fuerza de forma progresiva.', 'Aprender herramientas de respiración y relajación para el día a día.', 'Crear una rutina de práctica para hacer en casa.'] },
        ],
        faq: [
          { q: '¿Cuánto dura una clase personal?', a: 'Escríbenos y te decimos duración, disponibilidad y condiciones. Las sesiones se adaptan a tus necesidades.' },
          { q: '¿Puedo compartir la clase con otra persona?', a: 'Sí, se pueden hacer sesiones en pareja o en pequeño grupo. Pregúntanos las opciones.' },
        ],
      },
    },
  },
  {
    id: 'postural',
    slug: { ca: 'educacio-postural', es: 'educacion-postural' },
    t: {
      ca: {
        name: 'Educació postural',
        short: 'Aprèn a moure’t millor i a cuidar l’esquena en el dia a dia.',
        metaTitle: 'Educació postural a Vallirana: cuida l’esquena',
        metaDesc: 'Educació postural a Vallirana: aprèn a moure’t amb consciència, millorar la teva postura i cuidar l’esquena en el dia a dia.',
        h1: 'Educació postural a Vallirana',
        intro: 'L’educació postural consisteix a prendre consciència de com et poses, com et mous i com respires, per ajustar els hàbits que més es repeteixen al llarg del dia: seure, caminar, aixecar pes, dormir o treballar davant d’una pantalla.',
        sections: [
          { h2: 'Què treballem', list: ['Consciència corporal: notar com estàs col·locat/da i com et mous.', 'Mobilitat de columna, malucs i espatlles.', 'Força del nucli (core) i de la musculatura que sosté la postura.', 'Respiració i relaxació per alliberar tensió acumulada.'] },
          { h2: 'Per a qui és', p: 'Per a persones que passen moltes hores assegudes, que noten tensió al coll, l’esquena o les espatlles, o que volen aprendre a moure’s amb més criteri. També és útil si fas esport i vols moure’t millor.' },
          { h2: 'Com ho fem', p: 'Combinem exercicis de mobilitat, estiraments conscients, treball de força suau i pautes senzilles per aplicar a casa o a la feina. Tot es pot fer en grup reduït o en sessió personal.' },
        ],
        faq: [
          { q: 'L’educació postural substitueix el fisioterapeuta?', a: 'No. És un complement de moviment i hàbits. Si tens dolor, una lesió o un diagnòstic, consulta primer amb el teu metge o fisioterapeuta.' },
          { q: 'Quant de temps cal per notar canvis?', a: 'Depèn de cada persona. La constància i l’aplicació dels hàbits al dia a dia són clau, i la Jess t’acompanyarà en el procés.' },
        ],
      },
      es: {
        name: 'Educación postural',
        short: 'Aprende a moverte mejor y a cuidar tu espalda en el día a día.',
        metaTitle: 'Educación postural en Vallirana: cuida tu espalda',
        metaDesc: 'Educación postural en Vallirana: aprende a moverte con consciencia, mejorar tu postura y cuidar tu espalda en el día a día.',
        h1: 'Educación postural en Vallirana',
        intro: 'La educación postural consiste en tomar consciencia de cómo te colocas, cómo te mueves y cómo respiras, para ajustar los hábitos que más se repiten a lo largo del día: sentarte, caminar, levantar peso, dormir o trabajar delante de una pantalla.',
        sections: [
          { h2: 'Qué trabajamos', list: ['Consciencia corporal: notar cómo estás colocado/a y cómo te mueves.', 'Movilidad de columna, caderas y hombros.', 'Fuerza del núcleo (core) y de la musculatura que sostiene la postura.', 'Respiración y relajación para liberar tensión acumulada.'] },
          { h2: 'Para quién es', p: 'Para personas que pasan muchas horas sentadas, que notan tensión en el cuello, la espalda o los hombros, o que quieren aprender a moverse con más criterio. También es útil si haces deporte y quieres moverte mejor.' },
          { h2: 'Cómo lo hacemos', p: 'Combinamos ejercicios de movilidad, estiramientos conscientes, trabajo de fuerza suave y pautas sencillas para aplicar en casa o en el trabajo. Todo se puede hacer en grupo reducido o en sesión personal.' },
        ],
        faq: [
          { q: '¿La educación postural sustituye al fisioterapeuta?', a: 'No. Es un complemento de movimiento y hábitos. Si tienes dolor, una lesión o un diagnóstico, consulta primero con tu médico o fisioterapeuta.' },
          { q: '¿Cuánto tiempo hace falta para notar cambios?', a: 'Depende de cada persona. La constancia y la aplicación de los hábitos en el día a día son clave, y Jess te acompañará en el proceso.' },
        ],
      },
    },
  },
  {
    id: 'meditacio',
    slug: { ca: 'meditacio-guiada', es: 'meditacion-guiada' },
    t: {
      ca: {
        name: 'Meditació guiada',
        short: 'Sessions per aprendre a calmar la ment i a estar present.',
        metaTitle: 'Meditació guiada a Vallirana',
        metaDesc: 'Meditació guiada a Vallirana: sessions per aprendre a calmar la ment, enfocar l’atenció i gestionar l’estrès amb eines senzilles.',
        h1: 'Meditació guiada a Vallirana',
        intro: 'La meditació guiada és una pràctica en què una professora et condueix, pas a pas, a portar l’atenció a la respiració, al cos o a una imatge, per aprendre a observar els pensaments sense quedar-t’hi enganxat/da. No cal “posar la ment en blanc”.',
        sections: [
          { h2: 'Què trobaràs a la sessió', list: ['Una introducció per situar-te i arribar amb calma.', 'Pràctiques de respiració i d’atenció plena.', 'Moments de silenci acompanyat.', 'Un tancament suau per tornar al dia a dia.'] },
          { h2: 'Per a qui és', p: 'Per a qui vol aprendre a meditar des de zero, per a qui ja ho prova pel seu compte però li costa mantenir-ho, o per a qui vol incorporar una estona de calma a la setmana.' },
          { h2: 'Meditació i moviment', p: 'Moltes persones troben més fàcil meditar després de moure el cos. Per això pots combinar la meditació amb les classes d’ioga, o provar el Ioga Nidra, una forma de relaxació guiada que es fa estirat/da.' },
        ],
        faq: [
          { q: 'Cal seure en posició de lotus?', a: 'No. Pots seure en una cadira o un coixí, o estirar-te, segons el que et resulti còmode. La postura és un suport, no un objectiu.' },
          { q: 'Què passa si em distrec?', a: 'És completament normal: forma part de la pràctica. Notar que et distreus i tornar a l’atenció és, precisament, l’entrenament.' },
        ],
      },
      es: {
        name: 'Meditación guiada',
        short: 'Sesiones para aprender a calmar la mente y a estar presente.',
        metaTitle: 'Meditación guiada en Vallirana',
        metaDesc: 'Meditación guiada en Vallirana: sesiones para aprender a calmar la mente, enfocar la atención y gestionar el estrés con herramientas sencillas.',
        h1: 'Meditación guiada en Vallirana',
        intro: 'La meditación guiada es una práctica en la que una profesora te conduce, paso a paso, a llevar la atención a la respiración, al cuerpo o a una imagen, para aprender a observar los pensamientos sin quedarte enganchado/a. No hace falta “poner la mente en blanco”.',
        sections: [
          { h2: 'Qué encontrarás en la sesión', list: ['Una introducción para situarte y llegar con calma.', 'Prácticas de respiración y de atención plena.', 'Momentos de silencio acompañado.', 'Un cierre suave para volver al día a día.'] },
          { h2: 'Para quién es', p: 'Para quien quiere aprender a meditar desde cero, para quien ya lo prueba por su cuenta pero le cuesta mantenerlo, o para quien quiere incorporar un rato de calma a la semana.' },
          { h2: 'Meditación y movimiento', p: 'Muchas personas encuentran más fácil meditar después de mover el cuerpo. Por eso puedes combinar la meditación con las clases de yoga, o probar el Yoga Nidra, una forma de relajación guiada que se hace tumbado/a.' },
        ],
        faq: [
          { q: '¿Hay que sentarse en posición de loto?', a: 'No. Puedes sentarte en una silla o un cojín, o tumbarte, según lo que te resulte cómodo. La postura es un apoyo, no un objetivo.' },
          { q: '¿Qué pasa si me distraigo?', a: 'Es completamente normal: forma parte de la práctica. Notar que te distraes y volver a la atención es, precisamente, el entrenamiento.' },
        ],
      },
    },
  },
];
