const LizardData = {
  name: 'Lizard',
  icon: '🦎',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Extra HP', label: 'Extra HP', description: 'Your HP is now 3 and able to use move 2 twice now.' },
    { choice: 'Enhanced Tongue Lash', label: 'Enhanced Tongue Lash', description: 'Tongue Lash deals 20 HP now.' }
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
      label: 'Move 1: Tongue Lash 10 HP.',
      description: 'A placeholder move for Lizard in the battle arena.'
    },
    {
      label: 'Move 2: Run any amount of tiles and take 1 HP',
      description: 'Another placeholder move for Lizard in the battle arena.'
    }
  ]
};
window.LizardData = LizardData;
