const RatData = {
  name: 'Rat',
  icon: '🐀',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'place-holder-1', label: 'place-holder', description: 'place-holder' },
    { choice: 'place-holder-2', label: 'place-holder', description: 'place-holder' }
  ],
  hp: 20,
  speed: 25,
  tileMove: 3,
  passive: {
    label: 'N/A',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Rat in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Rat in the battle arena.'
    }
  ]
};
window.RatData = RatData;
