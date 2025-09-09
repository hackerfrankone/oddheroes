const HunterData = {
  name: 'Hunter',
  icon: '🏹',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'place-holder-1', label: 'place-holder', description: 'place-holder' },
    { choice: 'place-holder-2', label: 'place-holder', description: 'place-holder' }
  ],
  hp: 24,
  speed: 20,
  tileMove: 3,
  passive: {
    label: 'N/A',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Hunter in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Hunter in the battle arena.'
    }
  ]
};
window.HunterData = HunterData;
