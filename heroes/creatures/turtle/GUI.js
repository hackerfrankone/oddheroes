const TurtleData = {
  name: 'Turtle',
  icon: '🐢',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'place-holder-1', label: 'place-holder', description: 'place-holder' },
    { choice: 'place-holder-2', label: 'place-holder', description: 'place-holder' }
  ],
  hp: 30,
  speed: 10,
  tileMove: 2,
  passive: {
    label: 'N/A',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Turtle in the battle arena.'
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Turtle in the battle arena.'
    }
  ]
};
window.TurtleData = TurtleData;
