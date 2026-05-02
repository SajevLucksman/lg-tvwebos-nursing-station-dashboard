export const FLOORS = [
  { name: 'Floor 1 — General Ward', rooms: ['101','102','103','104','105','106','107','108'] },
  { name: 'Floor 2 — ICU', rooms: ['201','202','203','204','205','206'] },
  { name: 'Floor 3 — Pediatrics', rooms: ['301','302','303','304','305','306','307'] },
  { name: 'Floor 4 — Maternity', rooms: ['401','402','403','404','405'] },
];

export const ALL_ROOMS = FLOORS.flatMap(f => f.rooms);

export const INITIAL_CALLS = {
  '203': Date.now() - 3 * 60000,
  '105': Date.now() - 1 * 60000,
  '302': Date.now() - 7 * 60000,
};
