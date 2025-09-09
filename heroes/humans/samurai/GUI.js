const SamuraiData = {
  name: 'Samurai',
  icon: '⚔️',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Honor', label: 'Offensive', description: 'Honor has increased attack + 5 HP.' },
    { choice: 'Bushido', label: 'Bushido', description: 'Replace Double Strike with Bushido. Bushido deals 75 HP but a 6 turn CD.' }
  ],
  hp: 55,
  speed: 55,
  tileMove: 4,
  passive: {
    label: 'Honor',
    description: 'If this hero lands the killing blow of a enemy hero using Honor. He permanently gains +10 HP, +10 to Honor, Double Strike or Triple Strike.'
  },
  moveset: [
    {
      label: 'Move 1: Honor deals 5 HP.',
      description: 'A placeholder move for Samurai in the battle arena.'
    },
    {
      label: 'Move 2: Double Strike deals 50 HP. 4 turn CD.',
      description: 'Another placeholder move for Samurai in the battle arena.'
    }
  ]
};
window.SamuraiData = SamuraiData;
