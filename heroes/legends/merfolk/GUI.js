const MerfolkData = {
  name: 'Merfolk',
  icon: '🧜',
  category: 'Legends',
  id: 'legends',
  abilities: [
    { choice: 'place-holder-1', label: 'place-holder', description: 'place-holder' },
    { choice: 'place-holder-2', label: 'place-holder', description: 'place-holder' }
  ],
  hp: 100,
  speed: 55,
  tileMove: 10,
  passive: {
    label: 'Deep Dweller',
    description: '+25 HP and passively regenerates 5 HP end of every turn'
  },
  moveset: [
    {
      label: 'Move 1: Tsunami deals 25 HP. From this hero in a straight line 5 tiles out.',
      description: 'A placeholder move for Merfolk in the battle arena.'
    },
    {
      label: 'Move 2: Trcickster uses last move from enemy hero that is within 5 tiles of this hero. Target new Targets',
      description: 'Another placeholder move for Merfolk in the battle arena.'
    }
  ]
};
window.MerfolkData = MerfolkData;
