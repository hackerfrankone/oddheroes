const HunterData = {
  name: 'Hunter',
  icon: '🏹',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Bow Sniper', label: 'Bow & Arrows', description: 'This has 7 tile rage and deals 35 HP. 3 turn CD.' },
    { choice: 'Crossbow & Bolts', label: 'Crossbow & Bolts', description: 'Shoot 5 bolts in one turn to deal 50 HP. 3 tile range. 3 turn CD. uses 5 bolts. Can spread the bolts however is appropiate.' }
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
      label: 'Move 1: Shoot Bow or CrossBow. Bow deals 20 HP with 4 tile range, uses 1 arrow. CrossBow deals 30 HP with 3 tile range, uses one Bolt.',
      description: 'A placeholder move for Hunter in the battle arena.'
    },
    {
      label: 'Move 2: Craft Arrows or Bolts fill up Quiver.',
      description: 'Another placeholder move for Hunter in the battle arena.'
    }
  ]
};
window.HunterData = HunterData;
