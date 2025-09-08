const LizardData = {
  name: 'Lizard',
  icon: '🦎',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Placeholder1', label: 'Placeholder 1', description: 'Placeholder ability for Lizard.' },
    { choice: 'Placeholder2', label: 'Placeholder 2', description: 'Another placeholder ability for Lizard.' }
  ],
  hp: 20,
  speed: 25,
  tileMove: 4,
  passive: {
    label: 'N/A',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Lizard in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Lizard in the battle arena.'
    }
  ]
};
window.LizardData = LizardData;
