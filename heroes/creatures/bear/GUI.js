const BearData = {
  name: 'Bear',
  icon: '🐻',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'n/a', label: 'Claw Swipe', description: 'n/a.' },
    { choice: 'n/a', label: 'Roar', description: 'n/a.' },
    { choice: 'n/a', label: 'Hibernate', description: 'n/a.' }
  ],
  hp: 40,
  speed: 15,
  tileMove: 2,
  passive: {
    label: 'N/A',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Bite & Claw deals 20 HP',
      description: 'A placeholder move for Bear in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Bear in the battle arena.'
    }
  ]
};
window.BearData = BearData;
