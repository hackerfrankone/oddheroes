const BearData = {
  name: 'Bear',
  icon: '🐻',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Rage', label: 'Rage', description: 'Deal an additional 10 HP with Bite & Swipe. 2 turn CD. ' },
    { choice: 'Roar of Terror', label: 'Roar of Terror', description: 'All surrounding tiles x3 outward from this hearo cant move for 2 turns. 4 turn CD. ' },
    { choice: 'Hibernate', label: 'Hibernate', description: 'Sleep for 3 turns to recover 25 HP. 3 turn CD.' }
  ],
  hp: 40,
  speed: 40,
  tileMove: 4,
  passive: {
    label: 'Smell',
    description: 'Can see camoflauged heroes if within field of vision.'
  },
  moveset: [
    {
      label: 'Move 1: Bite & Swipe deals 20 HP',
      description: 'A placeholder move for Bear in the battle arena.'
    },
    {
      label: 'Move 2: n/a',
      description: 'Another placeholder move for Bear in the battle arena.'
    }
  ]
};
window.BearData = BearData;
