const MoleData = {
  name: 'Mole',
  icon: '🐀',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Placeholder1', label: 'Placeholder 1', description: 'Placeholder ability for Mole.' },
    { choice: 'Placeholder2', label: 'Placeholder 2', description: 'Another placeholder ability for Mole.' }
  ],
  hp: 25,
  speed: 15,
  tileMove: 3,
  passive: {
    label: 'N/A',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Mole in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Mole in the battle arena.'
    }
  ]
};
window.MoleData = MoleData;
