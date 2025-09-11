const PilotData = {
  name: 'Pilot',
  icon: '🪖',
  category: 'Uniques',
  id: 'uniques',
  abilities: [
    { choice: 'Light Tank', label: 'Light Tank', description: 'Carry two .50 Calibar penetration ammunition, this has unlimited map rage. Able to shoot into fog of war. each .50 bullet deals 20 HP.' },
    { choice: 'Helicopter', label: 'Helicopter', description: 'Carry 2 missle that deals 30 HP, 2x2. 6 tile range.' },
    { choice: 'Submarine', label: 'Submarine', description: 'Cary 1 atomic bomb that has unlimited map range. Deals 30 HP, AOE 4x4, including underground. takes 1 turn to reach destination.' }
  ],
  hp: 45,
  speed: 45,
  tileMove: 4,
  passive: {
    label: 'Pilot Officer.',
    description: 'Control 1 of 3 military equipment.'
  },
  moveset: [
    {
      label: 'Move 1: Machine Gun deals 10 HP.',
      description: 'A placeholder move for Pilot in the battle arena.'
    },
    {
      label: 'Move 2: Missles deals 20 HP. 2 turn CD.',
      description: 'Another placeholder move for Pilot in the battle arena.'
    }
  ]
};
window.PilotData = PilotData;
