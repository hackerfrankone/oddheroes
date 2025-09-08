const HoneyBadgerData = {
  name: 'HoneyBadger',
  icon: '🦡',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Fearless', label: 'Fearless', description: 'Reduce all physical HP by 2.' },
    { choice: 'Death & Fearless', label: 'Fearless Through Death', description: 'If this hero dies to a physical HP, this hero returns 10 HP.' }
  ],
  hp: 50,
  speed: 20,
  tileMove: 3,
  passive: {
    label: 'Fight Back',
    description: 'If this hero is physically attacked, this hero will return 10 HP in return.'
  },
  moveset: [
    {
      label: 'Move 1: Bite & Claw deals 10 HP.',
      description: 'A placeholder move for HoneyBadger in the battle arena.'
    },
    {
      label: 'Move 2: Bravery causes this hero to return 30 HP in return to any physical HP taken. This move can simultanously picked while picking move 1. 4 turn CD.',
      description: 'Another placeholder move for HoneyBadger in the battle arena.'
    }
  ]
};
window.HoneyBadgerData = HoneyBadgerData;
