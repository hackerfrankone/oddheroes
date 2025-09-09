const GermData = {
  name: 'Germ',
  icon: '🦠',
  category: 'Uniques',
  id: 'uniques',
  abilities: [
    { choice: 'Small Pox', label: 'Small Pox', description: 'Activate sickness on attached hero causing -10 HP per turn.' },
    { choice: 'symbiotic', label: 'symbiotic', description: 'Activate symbiotic on attached hero granting +15 HP permanently.' }
  ],
  hp: 1,
  speed: 1,
  tileMove: 1,
  passive: {
    label: '',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Germ in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Germ in the battle arena.'
    }
  ]
};
window.GermData = GermData;
