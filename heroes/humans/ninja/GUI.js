const NinjaData = {
  name: 'Ninja',
  icon: '🥷',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'place-holder-1', label: 'place-holder', description: 'place-holder' },
    { choice: 'place-holder-2', label: 'place-holder', description: 'place-holder' }
  ],
  hp: 55,
  speed: 90,
  tileMove: 6,
  passive: {
    label: 'Shadow',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Ninja in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Ninja in the battle arena.'
    }
  ]
};
window.NinjaData = NinjaData;
