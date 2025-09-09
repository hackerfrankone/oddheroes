const RatData = {
  name: 'Rat',
  icon: '🐀',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Scavenger', label: 'Scavenger', description: 'Use items on ground or find ways to enter chests or houses or any holes.' },
    { choice: 'Escape', label: 'Escape', description: 'If this hero takes physical HP, this hero will gain +5 move tile on hero turn.' }
  ],
  hp: 15,
  speed: 25,
  tileMove: 3,
  passive: {
    label: 'Detection',
    description: 'This hero can detect anything underground. This hero will auto-eat enemy hero worm and gain new max heatlh 40 HP.'
  },
  moveset: [
    {
      label: 'Move 1: Bite deals 10 HP.',
      description: 'A placeholder move for Rat in the battle arena.'
    },
    {
      label: 'Move 2: Angry Bite deals 20 HP 2 turn CD.',
      description: 'Another placeholder move for Rat in the battle arena.'
    }
  ]
};
window.RatData = RatData;
