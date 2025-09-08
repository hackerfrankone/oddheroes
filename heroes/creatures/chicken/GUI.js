const ChickenData = {
  name: 'Chicken',
  icon: '🐔',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Chicken', label: 'Chicken', description: 'Choose friendly hero to eat this incredible healthy tasty chicken to recover +40 HP. This hero dies. Must be within tiles.' },
    { choice: 'Flap', label: 'Flap', description: 'Flaps wings to create a gust, pushing enemies back 2 tiles.' },
    { choice: 'EggDrop', label: 'Egg Drop', description: 'Egg drop onto a tile, Any hero may eat egg to recover 10 HP. 1 turn CD.' }
  ],
  hp: 25,
  speed: 15,
  tileMove: 2,
  passive: {
    label: 'Search.',
    description: 'End of every turn, this hero will search under-ground for food if successful +5 HP'
  },
  moveset: [
    {
      label: 'Move 1: Peck deals 10 HP.',
      description: 'A placeholder move for Chicken in the battle arena.'
    },
    {
      label: 'Move 2: Roost onto any tall structure to recover 10 HP. Next Peck will deal +10 HP',
      description: 'Another placeholder move for Chicken in the battle arena.'
    }
  ]
};
window.ChickenData = ChickenData;
