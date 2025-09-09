const FishermanData = {
  name: 'Fisherman',
  icon: '🎣',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'place-holder-1', label: 'place-holder', description: 'place-holder' },
    { choice: 'place-holder-2', label: 'place-holder', description: 'place-holder' }
  ],
  hp: 22,
  speed: 18,
  tileMove: 3,
  passive: {
    label: 'N/A',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Fisherman in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Fisherman in the battle arena.'
    }
  ]
};
window.FishermanData = FishermanData;
