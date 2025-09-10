const HunterData = {
  name: 'Hunter',
  icon: '🏹',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Bow Sniper', label: 'Bow & Arrows', description: 'This has 7 tile rage and deals 35 HP. 3 turn CD.' },
    { choice: 'Crossbow & Bolts', label: 'Crossbow & Bolts', description: 'Shoot 5 bolts in one turn to deal 50 HP. 3 tile range. 3 turn CD. Can spread the bolts however is appropiate.' }
  ],
  hp: 55,
  speed: 45,
  tileMove: 4,
  passive: {
    label: 'Quiver',
    description: 'Holds Arrows or Bolts .'
  },
  moveset: [
    {
      label: 'Move 1: Shoot Bow or CrossBow. Bow deals 20 HP with 4 tile range, CrossBow deals 30 HP with 3 tile range.',
      description: 'A placeholder move for Hunter in the battle arena.'
    },
    {
      label: 'Move 2: Bear Trap, place a bear trap. Bear Trap stuns heroes for 1 turn and deal 10 HP. Bears are stunned for 2 turns and take 20 HP. This hero can have 2 bear traps active on map.',
      description: 'Another placeholder move for Hunter in the battle arena.'
    }
  ]
};
window.HunterData = HunterData;
