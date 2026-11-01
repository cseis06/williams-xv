// ─────────────────────────────────────────────────────────────
//  TODOS los datos de la invitación se editan acá.
// ─────────────────────────────────────────────────────────────
const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

// Número de WhatsApp con código de país, sin + ni espacios (ej: '595981123456').
// Si queda vacío, los botones de "Confirmar asistencia" no se muestran.
const WHATSAPP = ''
const wa = (text: string) =>
  WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}` : ''

export const EVENT = {
  name: 'William Rodrigo Peña López',
  firstName: 'William Rodrigo',
  lastName: 'Peña López',
  short: 'William',

  // Música: ID del video de YouTube (lo que va después de ?v=)
  music: { youtubeId: 'zHSaj7KSZ5s', title: 'El privilegio de amar' },

  dedication: [
    'Si se puede,',
    'de niño a joven, con el corazón noble',
    'y la bendición de Dios y la virgencita.',
  ],
  invitation: 'Nos complace invitarte a que compartas con nosotros este día, súper especial.',

  ceremony: {
    date: 'Sábado, 7 de Noviembre',
    time: '19:00 hs',
    venue: 'Parroquia Niños Salvador del Mundo',
    mapsUrl: maps('Parroquia Niños Salvador del Mundo, Paraguay'),
    whatsappUrl: wa('¡Hola! Quiero confirmar mi asistencia a la misa de los XV de William.'),
  },

  party: {
    date: 'Domingo, 8 de Noviembre',
    time: 'Desde las 11:00 hs',
    venue: 'Quinta Pastor Ricardo · Luque',
    mapsUrl: maps('Quinta Pastor Ricardo, Luque, Paraguay'),
    whatsappUrl: wa('¡Hola! Quiero confirmar mi asistencia al festejo de los XV de William.'),
  },

  gifts: {
    text: 'Tu presencia es el mejor regalo. Si deseas obsequiar algo, puedes hacerlo con el alias, o con lo que uno desee.',
    alias: '1349317',
  },
}
