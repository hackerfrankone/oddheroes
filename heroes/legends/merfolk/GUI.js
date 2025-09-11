const MerfolkData = {
  name: 'Merfolk',
  icon: '🧜',
  category: 'Legends',
  id: 'legends',
  abilities: [
    { choice: 'Enhanced Vitality', label: 'Vitality', description: '+25 HP.' },
    { choice: 'Enhanced Tsunami', label: 'place-holder', description: 'Tsunami deals 5 more HP +2 tile range with a new tile structure that is 3x7.' }
  ],
  hp: 100,
  speed: 55,
  tileMove: 10,
  passive: {
    label: 'Vitality',
    description: '+25 HP and passively regenerates 5 HP end of every turn'
  },
  moveset: [
    {
      label: 'Move 1: Tsunami deals 25 HP. From this hero in a straight line 5 tiles out. 2x5 1 turn CD.',
      description: 'A placeholder move for Merfolk in the battle arena.'
    },
    {
      label: 'Move 2: Trident Swipe deals 30 HP. melee range.',
      description: 'Another placeholder move for Merfolk in the battle arena.'
    }
  ]
};
window.MerfolkData = MerfolkData;
