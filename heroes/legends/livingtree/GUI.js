const LivingTreeData = {
  name: 'LivingTree',
  icon: '🌳',
  category: 'Uniques',
  id: 'uniques',
  abilities: [
    { choice: 'Tree Walker', label: 'Tree Walker', description: 'Able to move and provide camouflage looks like an in-game tree.' },
    { choice: 'Tree Elder', label: 'Tree Elder', description: 'Spawn a tumble weed with 1 HP, deals 1 HP and moves 5 tiles. 4 turn CD. Spawn a flytrap near LivingTree with 1 HP, deals 3 HP, cant move. 4 turn CD.' }
  ],
  hp: 90,
  speed: 0,
  tileMove: 1,
  passive: {
    label: 'Fruit Set',
    description: 'Every 5th turn this tree grows a random fruit. 60% Apple, 35% bananas and 5% Peach. Apple heals 20 HP, bannanas heal 30 HP and peaches heal 40 HP and granting a permanent +5 HP.'
  },
  moveset: [
    {
      label: 'Move 1: Vine Whip deals 5 HP.',
      description: 'A placeholder move for LivingTree in the battle arena.'
    },
    {
      label: 'Move 2: Grow Poison Ivy nearby in one tile that deals 5 HP if any hero steps onto tile.',
      description: 'Another placeholder move for LivingTree in the battle arena.'
    }
  ]
};
window.LivingTreeData = LivingTreeData;
