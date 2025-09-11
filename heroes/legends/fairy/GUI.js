const FairyData = {
  name: 'Fairy',
  icon: '🧚',
  category: 'Legends',
  id: 'legends',
  abilities: [
    { choice: 'Heal', label: 'Heal', description: 'Heal friendly hero max health. If you target self, this heals 60 HP instead. 3 turn CD.' },
    { choice: 'Steal', label: 'Steal', description: 'Steal enemy heros item. 5 tile range. 5 turn CD.' }
  ],
  hp: 120,
  speed: 100,
  tileMove: 6,
  passive: {
    label: 'Disable',
    description: 'When an ability or move is used to attack this hero. Enemy hero ability or move is disabled for 5 turns.'
  },
  moveset: [
    {
      label: 'Move 1: Flash Needle deals 25 HP.',
      description: 'A placeholder move for Fairy in the battle arena.'
    },
    {
      label: 'Move 2: Grants immunity to self for 2 turns, 8 turn CD.',
      description: 'Another placeholder move for Fairy in the battle arena.'
    }
  ]
};
window.FairyData = FairyData;
