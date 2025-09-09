const MinerData = {
  name: 'Miner',
  icon: '⛏️',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Digger', label: 'Digger', description: 'This hero creates a tunnel underground but moves 1 tile per turn.' },
    { choice: 'Enhanced shatter', label: 'Enhanced shatter', description: 'Shatter also shatters target heros weapon. Their weapon will recover after 2 turns.' }
  ],
  hp: 55,
  speed: 35,
  tileMove: 4,
  passive: {
    label: 'Dig',
    description: 'Underground heroes will take half of their HP if miner uses pick axe on correct underground tile. Shatters underground heros passive. Shattered passives will recover in 2 turns.'
  },
  moveset: [
    {
      label: 'Move 1: Pick Axe deals 15 HP.',
      description: 'A placeholder move for Miner in the battle arena.'
    },
    {
      label: 'Move 2: Shatter deals 25 HP and shatters target heros item. 4 turn CD.',
      description: 'Another placeholder move for Miner in the battle arena.'
    }
  ]
};
window.MinerData = MinerData;
