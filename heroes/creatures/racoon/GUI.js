const RaccoonData = {
  name: 'Raccoon',
  icon: '🦝',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Placeholder1', label: 'Placeholder 1', description: 'Placeholder ability for Raccoon.' },
    { choice: 'Placeholder2', label: 'Placeholder 2', description: 'Another placeholder ability for Raccoon.' }
  ],
  hp: 25,
  speed: 20,
  tileMove: 3,
  passive: {
    label: 'N/A',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Raccoon in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Raccoon in the battle arena.'
    }
  ]
};
window.RaccoonData = RaccoonData;
