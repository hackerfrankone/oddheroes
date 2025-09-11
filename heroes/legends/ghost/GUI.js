const GhostData = {
  name: 'Ghost',
  icon: '👻',
  category: 'Legends',
  id: 'legends',
  abilities: [
    { choice: 'Enahcned Ghostly', label: 'Enahcned Ghostly', description: 'Ghostly dodge chance increaesd by 10%. Lasts 2 turns. 4 turn CD.' },
    { choice: 'Terrifying Dreams', label: 'Terrifying', description: 'May activate this ability along with Nightmare. This deals 25 HP. 2 turn CD.' }
  ],
  hp: 85,
  speed: 20,
  tileMove: 3,
  passive: {
    label: 'Ghostly',
    description: 'This hero is immune poison, AOE, and HP that deal HP over time/turn. Other heroes cannot attach to this hero. This hero has 50% to doge everything. '
  },
  moveset: [
    {
      label: 'Move 1: NightMare deal 25 HP.',
      description: 'A placeholder move for Ghost in the battle arena.'
    },
    {
      label: 'Move 2: Fear causes your next turn to increase dodge chance by 20% 2 turn CD.',
      description: 'Another placeholder move for Ghost in the battle arena.'
    }
  ]
};
window.GhostData = GhostData;
