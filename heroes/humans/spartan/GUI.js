const SpartanData = {
  name: 'Spartan',
  icon: '🛡️',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Offensive', label: 'Offensive', description: 'Throw Spartan spear to stun target enemy for 1 turn and deal 20 HP. 5 tile range. 2 turn CD. 80% accuracy.' },
    { choice: 'Defensive', label: 'Defensive', description: 'Enhanced shield passive by + 20%.' }
  ],
  hp: 55,
  speed: 55,
  tileMove: 4,
  passive: {
    label: 'Shield',
    description: 'Spartan shield has a 20% to block all melee or ranged attacks.'
  },
  moveset: [
    {
      label: 'Move 1: Short Sword Slash deals 20 HP.',
      description: 'A placeholder move for Spartan in the battle arena.'
    },
    {
      label: 'Move 2: Shield Bash deals 10 HP and target hero cant move for 1 turn. 3 turn CD.',
      description: 'Another placeholder move for Spartan in the battle arena.'
    }
  ]
};
window.SpartanData = SpartanData;
