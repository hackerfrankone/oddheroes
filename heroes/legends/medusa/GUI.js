const MedusaData = {
  name: 'Medusa',
  icon: '🐍',
  category: 'Legends',
  id: 'legends',
  abilities: [
    { choice: 'Bow & Arrow', label: 'Bow & Arrow', description: 'Carry 10 arrows. Each arrow deals 30 HP. tile range 7.' },
    { choice: 'Sword & Shield', label: 'Sword & Shield', description: 'Sword deals 25 HP. Shield has a 20% Chance to dodge melee & ranged attacks.' }
  ],
  hp: 85,
  speed: 45,
  tileMove: 5,
  passive: {
    label: 'Gaze & Daze',
    description: 'heroes that are 1 tile close to this hero are stunned for 2 turns. Same target cannot be Gaze & Daze untill 4 turns. Gaze & Daze can stun up to 2 heroes at the same time.'
  },
  moveset: [
    {
      label: 'Move 1: Rattler Strike deals 20 HP. Next turn, when this hero attacks the same target, it will deal triple HP. 2 tile range.',
      description: 'A placeholder move for Medusa in the battle arena.'
    },
    {
      label: 'Move 2: Slither quickly. Move additional 5 tiles and camofluage regardless of any structure.',
      description: 'Another placeholder move for Medusa in the battle arena.'
    }
  ]
};
window.MedusaData = MedusaData;
