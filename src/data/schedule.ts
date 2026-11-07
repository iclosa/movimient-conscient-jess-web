// DATOS DE EJEMPLO: se sustituirán por la API del backend Laravel.
// day: 0 = lunes ... 6 = domingo
export interface ClassSlot { day: number; time: string; activity: string; spots: number }

export const schedule: ClassSlot[] = [
  { day: 0, time: '09:30', activity: 'hatha', spots: 6 },
  { day: 0, time: '19:00', activity: 'vinyasa', spots: 3 },
  { day: 1, time: '18:30', activity: 'funcional', spots: 5 },
  { day: 1, time: '20:00', activity: 'nidra', spots: 0 },
  { day: 2, time: '09:30', activity: 'hatha', spots: 4 },
  { day: 2, time: '19:00', activity: 'hit', spots: 2 },
  { day: 3, time: '18:30', activity: 'vinyasa', spots: 6 },
  { day: 4, time: '09:30', activity: 'funcional', spots: 5 },
  { day: 5, time: '10:30', activity: 'familiar', spots: 8 },
  { day: 5, time: '12:00', activity: 'acroyoga', spots: 4 },
];
