const DragonData = {
  name: 'Dragon',
  icon: '🐉',
  category: 'Legends',
  id: 'legends',
  abilities: [
    { choice: 'Fly', label: 'Fly', description: 'Fly above the sky. Cannot take physical HP. Recover 40 HP. 2 turn CD.' },
    { choice: 'Enhance Fiery Aura', label: 'Enhance Fiery Aura', description: 'Expands the area of the fiery aura to 2 tiles from hero.' }
  ],
  hp: 100,
  speed: 75,
  tileMove: 8,
  passive: {
    label: 'Fiery Aura',
    description: 'This hero contains a fiery aura. Nearby tiles within this hero takes 10 HP'
  },
  moveset: [
    {
      label: 'Move 1: Fire Breath deals 40 HP, 4 tile range. 2 turn CD.',
      description: 'A placeholder move for Dragon in the battle arena.'
    },
    {
      label: 'Move 2: Charge & Claw deals 20 HP. Melee range.',
      description: 'Another placeholder move for Dragon in the battle arena.'
    }
  ]
};
window.DragonData = DragonData;
