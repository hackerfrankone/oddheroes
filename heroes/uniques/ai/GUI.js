const AIData = {
  name: 'AI',
  icon: '🤖',
  category: 'Uniques',
  id: 'uniques',
  abilities: [
    { choice: 'Unethical Hacking', label: 'Unethical Hacking', description: 'Hack into any device that contains wires, chips, hardwawre,software. Gain control of that target for 2 turns. This hero cannot move for 2 turns. No tile range. 1 time use per match.' },
    { choice: 'Probabilities', label: 'Process data calculations', description: 'Identify enemy heros stats, items and ability within field of vision. Ends this heros turn.' }
  ],
  hp: 11,
  speed: 20,
  tileMove: 2,
  passive: {
    label: 'Central Processing Unit.',
    description: 'Calculates Data...'
  },
  moveset: [
    {
      label: 'Move 1: Robotic Punch deals 10 HP.',
      description: 'A placeholder move for AI in the battle arena.'
    },
    {
      label: 'Move 2: Robotic Kick Deals 10 HP.',
      description: 'Another placeholder move for AI in the battle arena.'
    }
  ]
};
window.AIData = AIData;
