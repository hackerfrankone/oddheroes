const BigFootData = {
  name: 'BigFoot',
  icon: '🦶🏽',
  category: 'Legends',
  id: 'legends',
  abilities: [
    { choice: 'Enraged', label: 'Enraged', description: 'Permanantly grants +10 HP, +1 tile move, 20 speed, rip deals additional 10 HP, Boulder deals additional 5 HP.' },
    { choice: 'Apex Roar', label: 'Devestating Roar', description: 'AOE 5 tiles outward from this hero, all enemy heroes takes 25 HP, stunned for 1 turn. 2nd turn each hero has reduced accuracy by 20%. 5 turn CD.' }
  ],
  hp: 90,
  speed: 60,
  tileMove: 7,
  passive: {
    label: 'Survivor',
    description: 'This hero instantly paths to nearest structure that gives camofluage upon taking any HP.'
  },
  moveset: [
    {
      label: 'Move 1: Rip deals 25 HP. ',
      description: 'A placeholder move for BigFoot in the battle arena.'
    },
    {
      label: 'Move 2: Boulder Throw deals 20 HP. 4 tiles range 1 turn CD.',
      description: 'Another placeholder move for BigFoot in the battle arena.'
    }
  ]
};
window.BigFootData = BigFootData;
