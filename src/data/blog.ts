import type { Lang } from '../i18n/routes';

interface Text {
  title: string;
  desc: string;
  intro: string;
  sections: { h2: string; p: string[]; links?: { activity?: string; service?: string }[] }[];
}
export interface Post { id: string; date: string; slug: Record<Lang, string>; t: Record<Lang, Text> }

export const posts: Post[] = [
  {
    id: 'primera-classe',
    date: '2026-11-07',
    slug: { ca: 'primera-classe-ioga-que-cal-saber', es: 'primera-clase-yoga-que-saber' },
    t: {
      ca: {
        title: 'Primera classe d’ioga: què cal saber abans de començar',
        desc: 'Guia per a la teva primera classe d’ioga: què portar, com et pots sentir i com triar el tipus de classe quan comences.',
        intro: 'Començar una activitat nova pot generar dubtes: sabré fer-ho?, em quedaré enrere?, què he de portar? Aquí tens una guia breu perquè arribis a la teva primera classe d’ioga amb tranquil·litat.',
        sections: [
          { h2: 'Cal tenir flexibilitat o experiència?', p: ['No. La flexibilitat no és un requisit sinó un resultat de la pràctica. Les postures tenen variants i es poden adaptar amb suports (blocs, corretges, mantes) perquè cada cos trobi la seva versió.'] },
          { h2: 'Què portar i com arribar', p: ['Roba còmoda que et deixi moure’t, una mica d’aigua i ganes de provar. Arriba uns minuts abans per instal·lar-te i comentar amb la professora si tens alguna lesió, molèstia o situació especial. Pregunta pel material (esterilla, blocs) quan reserves.'] },
          { h2: 'Quin tipus de classe triar si comences', p: ['Una bona porta d’entrada és el Hatha Ioga, més pausat i detallat. Si busques calma i descans, el Ioga Nidra és una opció molt amable. I si prefereixes una atenció totalment personalitzada, pots començar amb una classe personal.'], links: [{ activity: 'hatha' }, { activity: 'nidra' }, { service: 'personals' }] },
          { h2: 'Què és normal sentir', p: ['És normal notar que els músculs treballen, que et costa mantenir alguna postura o que la ment es distreu. No és una competició: el ioga és escoltar el teu cos i respectar els seus límits. Si sents dolor, para i avisa la professora.'] },
        ],
      },
      es: {
        title: 'Primera clase de yoga: qué saber antes de empezar',
        desc: 'Guía para tu primera clase de yoga: qué llevar, cómo te puedes sentir y cómo elegir el tipo de clase cuando empiezas.',
        intro: 'Empezar una actividad nueva puede generar dudas: ¿sabré hacerlo?, ¿me quedaré atrás?, ¿qué tengo que llevar? Aquí tienes una guía breve para que llegues a tu primera clase de yoga con tranquilidad.',
        sections: [
          { h2: '¿Hace falta flexibilidad o experiencia?', p: ['No. La flexibilidad no es un requisito sino un resultado de la práctica. Las posturas tienen variantes y se pueden adaptar con apoyos (bloques, correas, mantas) para que cada cuerpo encuentre su versión.'] },
          { h2: 'Qué llevar y cómo llegar', p: ['Ropa cómoda que te deje moverte, un poco de agua y ganas de probar. Llega unos minutos antes para instalarte y comentar con la profesora si tienes alguna lesión, molestia o situación especial. Pregunta por el material (esterilla, bloques) cuando reserves.'] },
          { h2: 'Qué tipo de clase elegir si empiezas', p: ['Una buena puerta de entrada es el Hatha Yoga, más pausado y detallado. Si buscas calma y descanso, el Yoga Nidra es una opción muy amable. Y si prefieres una atención totalmente personalizada, puedes empezar con una clase personal.'], links: [{ activity: 'hatha' }, { activity: 'nidra' }, { service: 'personals' }] },
          { h2: 'Qué es normal sentir', p: ['Es normal notar que los músculos trabajan, que te cuesta mantener alguna postura o que la mente se distrae. No es una competición: el yoga es escuchar tu cuerpo y respetar sus límites. Si sientes dolor, para y avisa a la profesora.'] },
        ],
      },
    },
  },
  {
    id: 'tipus-ioga',
    date: '2026-11-07',
    slug: { ca: 'hatha-vinyasa-o-nidra-quin-ioga-et-va-millor', es: 'hatha-vinyasa-o-nidra-que-yoga-te-va-mejor' },
    t: {
      ca: {
        title: 'Hatha, Vinyasa o Nidra: quin tipus d’ioga et va millor?',
        desc: 'Diferències entre Hatha, Vinyasa, Ioga Nidra i Ioga HIT, i com triar el tipus de ioga segons el que busques.',
        intro: 'Si mires l’horari d’un centre de ioga és fàcil quedar-se parat/da davant tants noms. Aquestes són les diferències bàsiques entre els estils més habituals i alguns consells per triar.',
        sections: [
          { h2: 'Hatha Ioga: pausa i detall', p: ['Postures mantingudes amb atenció a l’alineació i la respiració. És ideal per començar i per entendre bé com et mous.'], links: [{ activity: 'hatha' }] },
          { h2: 'Vinyasa Ioga: moviment i ritme', p: ['Les postures s’enllacen en seqüències fluides al ritme de la respiració. És més dinàmic i escalfa el cos, i va bé si t’agrada moure’t.'], links: [{ activity: 'vinyasa' }] },
          { h2: 'Ioga Nidra: descans profund', p: ['Una relaxació guiada estirat/da, sense esforç físic. Perfecta quan necessites parar i desconnectar.'], links: [{ activity: 'nidra' }] },
          { h2: 'Ioga HIT: força i intensitat', p: ['Per a qui busca una sessió més exigent, amb intervals de treball sobre la base del ioga.'], links: [{ activity: 'hit' }] },
          { h2: 'Com triar', p: ['Si vols calma, tria Nidra o Hatha. Si busques energia i moviment, Vinyasa. Si necessites repte físic, Ioga HIT. I si no ho tens clar, prova una classe i observa com et sents després: aquesta és la millor guia.'] },
        ],
      },
      es: {
        title: 'Hatha, Vinyasa o Nidra: ¿qué tipo de yoga te va mejor?',
        desc: 'Diferencias entre Hatha, Vinyasa, Yoga Nidra y Yoga HIT, y cómo elegir el tipo de yoga según lo que buscas.',
        intro: 'Si miras el horario de un centro de yoga es fácil quedarse parado/a ante tantos nombres. Estas son las diferencias básicas entre los estilos más habituales y algunos consejos para elegir.',
        sections: [
          { h2: 'Hatha Yoga: pausa y detalle', p: ['Posturas mantenidas con atención a la alineación y la respiración. Es ideal para empezar y para entender bien cómo te mueves.'], links: [{ activity: 'hatha' }] },
          { h2: 'Vinyasa Yoga: movimiento y ritmo', p: ['Las posturas se enlazan en secuencias fluidas al ritmo de la respiración. Es más dinámico y calienta el cuerpo, y va bien si te gusta moverte.'], links: [{ activity: 'vinyasa' }] },
          { h2: 'Yoga Nidra: descanso profundo', p: ['Una relajación guiada tumbado/a, sin esfuerzo físico. Perfecta cuando necesitas parar y desconectar.'], links: [{ activity: 'nidra' }] },
          { h2: 'Yoga HIT: fuerza e intensidad', p: ['Para quien busca una sesión más exigente, con intervalos de trabajo sobre la base del yoga.'], links: [{ activity: 'hit' }] },
          { h2: 'Cómo elegir', p: ['Si quieres calma, elige Nidra o Hatha. Si buscas energía y movimiento, Vinyasa. Si necesitas reto físico, Yoga HIT. Y si no lo tienes claro, prueba una clase y observa cómo te sientes después: esa es la mejor guía.'] },
        ],
      },
    },
  },
  {
    id: 'postura-dia-a-dia',
    date: '2026-11-07',
    slug: { ca: 'habits-posturals-per-al-dia-a-dia', es: 'habitos-posturales-para-el-dia-a-dia' },
    t: {
      ca: {
        title: '5 hàbits posturals senzills per al dia a dia',
        desc: 'Cinc hàbits senzills per cuidar la postura i moure’t millor: pauses, respiració, mobilitat i consciència corporal.',
        intro: 'Una bona postura no és estar rígid/a, sinó poder canviar de posició i moure’s amb comoditat. Aquests cinc hàbits són fàcils d’incorporar al dia a dia.',
        sections: [
          { h2: '1. Fes pauses de moviment', p: ['Si passes moltes hores assegut/da, aixeca’t i mou-te uns minuts de tant en tant. El millor moviment és el següent: canviar de postura sovint.'] },
          { h2: '2. Respira amb calma', p: ['Una respiració més lenta i profunda ajuda a deixar anar tensió a coll i espatlles. Prova de fer-ne unes quantes abans de començar una tasca.'] },
          { h2: '3. Mobilitza columna, malucs i espatlles', p: ['Uns minuts de moviments suaus per escalfar les articulacions poden marcar la diferència, sobretot al matí o després d’un temps assegut/da.'] },
          { h2: '4. Reforça el nucli', p: ['La musculatura que envolta la columna ajuda a sostenir la postura. L’exercici funcional i el ioga són bons aliats per treballar-la.'], links: [{ activity: 'funcional' }, { activity: 'hatha' }] },
          { h2: '5. Observa’t', p: ['Pren consciència de com seus, com camines i com aixeques pes. Petits ajustos repetits al llarg del dia fan una gran diferència.', 'Si tens dolor persistent o una lesió, consulta amb un professional sanitari. L’educació postural és un complement, no un tractament.'], links: [{ service: 'postural' }] },
        ],
      },
      es: {
        title: '5 hábitos posturales sencillos para el día a día',
        desc: 'Cinco hábitos sencillos para cuidar la postura y moverte mejor: pausas, respiración, movilidad y consciencia corporal.',
        intro: 'Una buena postura no es estar rígido/a, sino poder cambiar de posición y moverse con comodidad. Estos cinco hábitos son fáciles de incorporar al día a día.',
        sections: [
          { h2: '1. Haz pausas de movimiento', p: ['Si pasas muchas horas sentado/a, levántate y muévete unos minutos de vez en cuando. El mejor movimiento es el siguiente: cambiar de postura a menudo.'] },
          { h2: '2. Respira con calma', p: ['Una respiración más lenta y profunda ayuda a soltar tensión en cuello y hombros. Prueba a hacer unas cuantas antes de empezar una tarea.'] },
          { h2: '3. Moviliza columna, caderas y hombros', p: ['Unos minutos de movimientos suaves para calentar las articulaciones pueden marcar la diferencia, sobre todo por la mañana o después de un rato sentado/a.'] },
          { h2: '4. Refuerza el núcleo', p: ['La musculatura que rodea la columna ayuda a sostener la postura. El ejercicio funcional y el yoga son buenos aliados para trabajarla.'], links: [{ activity: 'funcional' }, { activity: 'hatha' }] },
          { h2: '5. Obsérvate', p: ['Toma consciencia de cómo te sientas, cómo caminas y cómo levantas peso. Pequeños ajustes repetidos a lo largo del día marcan una gran diferencia.', 'Si tienes dolor persistente o una lesión, consulta con un profesional sanitario. La educación postural es un complemento, no un tratamiento.'], links: [{ service: 'postural' }] },
        ],
      },
    },
  },
];
