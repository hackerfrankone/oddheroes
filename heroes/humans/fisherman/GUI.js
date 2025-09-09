const FishermanData = {
  name: 'Fisherman',
  icon: '🎣',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Kayak', label: 'Kayak', description: 'Requires no maintenance or gas. Moves 3 tiles on water. 80% chance to catch common fish. 50% to catch uncommon fish. 30% chance to catch a rare fish. Can carry 1 fish only.' },
    { choice: 'Engine Boat', label: 'Fishing Boat', description: 'first turn & 2nd turns are gas and maintenance free, after that, every turn has 20% to need gas, 30% to need maintenance. Engine boat moves 8 tiles on water. Can carry an additional hero. 60% chance to catch common fish. 30% to catch uncommon fish. 10% chance to catch a rare fish.' }
  ],
  hp: 55,
  speed: 45,
  tileMove: 4,
  passive: {
    label: 'End of every turn you fish. ',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Fillet fish and store for later for or eat.',
      description: 'A placeholder move for Fisherman in the battle arena.'
    },
    {
      label: 'Move 2: Attack with your fishing pole and deal 15 HP.',
      description: 'Another placeholder move for Fisherman in the battle arena.'
    }
  ]
};
window.FishermanData = FishermanData;
