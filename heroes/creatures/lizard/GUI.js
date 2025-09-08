const LizardData = {
  name: 'Lizard',
  icon: '🦎',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: '+1 HP', label: '+1 HP', description: 'Your HP is now 3.' },
    { choice: 'Enhanced Tongue Lash', label: 'Enhanced Tongue Lash', description: 'Tongue Lash deals 20 HP.' }
  ],
  hp: 2,
  speed: 35,
  tileMove: 4,
  passive: {
    label: 'Invisibilty',
    description: 'Invisibilty.'
  },
  moveset: [
    {
      label: 'Move 1: Tongue Lash deals 10 HP.',
      description: 'A placeholder move for Lizard in the battle arena.'
    },
    {
      label: 'Move 2: Hyper Speed costs 1 HP and you path to ANY tile on map.',
      description: 'Another placeholder move for Lizard in the battle arena.'
    }
  ]
};
window.LizardData = LizardData;
