const MerfolkData = {
  name: 'Merfolk',
  icon: '🧜',
  category: 'Legends',
  id: 'legends',
  abilities: [
    { choice: 'place-holder-1', label: 'place-holder', description: 'place-holder' },
    { choice: 'place-holder-2', label: 'place-holder', description: 'place-holder' }
  ],
  hp: 100,
  speed: 55,
  tileMove: 10,
  passive: {
    label: '+25 HP and passively regenerates 5 HP end of every turn.',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Merfolk in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Merfolk in the battle arena.'
    }
  ]
};
window.MerfolkData = MerfolkData;
