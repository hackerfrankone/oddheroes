const MoleData = {
  name: 'Mole',
  icon: '🐀',
  category: 'Creatures', 
  id: 'creatures',
  abilities: [
    { choice: 'Defensive Mole', label: 'Defensive Mole', description: 'Reduces all physical HP hits by 5.' },
    { choice: 'Razor Claw', label: 'Razor Claw', description: 'Only have 1 move but Mud Bite deals 20 HP and max HP is 30.' }
  ],
  hp: 10,
  speed: 10,
  tileMove: 3,
  passive: {
    label: 'Dig Pathing',
    description: 'This hero moves underground. The previous turn & two tiles are broken ground tiles, the 3rd tile is not. If this hero eats or kills the hero worm; new max HP will be 45 HP.'
  },
  moveset: [
    {
      label: 'Move 1: Mud Bite Deals 10 HP.',
      description: 'A placeholder move for Mole in the battle arena.'
    },
    {
      label: 'Move 2: Mud Claw Deals 5 HP and reduces target accuracy by 50% for 1 turn.',
      description: 'Another placeholder move for Mole in the battle arena.'
    }
  ]
};
window.MoleData = MoleData;
