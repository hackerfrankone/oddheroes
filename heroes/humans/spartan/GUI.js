const SpartanData = {
  name: 'Spartan',
  icon: '🛡️',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'place-holder-1', label: 'place-holder', description: 'place-holder' },
    { choice: 'place-holder-2', label: 'place-holder', description: 'place-holder' }
  ],
  hp: 30,
  speed: 15,
  tileMove: 2,
  passive: {
    label: 'Spartan Shield',
    description: 'Blocks ALL ranged attacks. 20% to block melee attacks.'
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Spartan in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Spartan in the battle arena.'
    }
  ]
};
window.SpartanData = SpartanData;
