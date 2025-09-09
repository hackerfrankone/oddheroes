const HunterData = {
  name: 'Hunter',
  icon: '🏹',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Bow & Arrows', label: 'Bow & Arrows', description: 'This has 5 tile rage and deals 20 HP.' },
    { choice: 'Crossbow & Bolts', label: 'Crossbow & Bolts', description: 'Shoot 5 bolts in one turn to deal 50 HP. Reloading bolts: 4 turn CD.' }
  ],
  hp: 55,
  speed: 45,
  tileMove: 4,
  passive: {
    label: 'Quiver',
    description: 'Quiver holds 5 arrows or 15 bolts.'
  },
  moveset: [
    {
      label: 'Move 1: Shoot Bow or CrossBow HP depends on ability picked.',
      description: 'A placeholder move for Hunter in the battle arena.'
    },
    {
      label: 'Move 2: Craft home made Arrows or Bolts. Craft 5 arrows at once or 15 bolts at once. These are half HP from original arrows and bolts. Cannot use this move untill current quiver is empty.',
      description: 'Another placeholder move for Hunter in the battle arena.'
    }
  ]
};
window.HunterData = HunterData;
