const FrogData = {
  name: 'Frog',
  icon: '🐸',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Duplication', label: 'Duplication', description: 'Lay 3 frog eggs. 5 turn CD. Turn 4 will complete the evolution process. If eggs near water, tadpoles will emerge for scouts.' },
    { choice: 'Evolution', label: 'Evolution', description: 'Evolution into a giant Goliath BullFrog. Stats are tripled.' },
    { choice: 'Poison', label: 'Poison Tongue', description: 'Tongue lash no longer does dmg but will cause target to be deadly poisoned. -10 hp per turn.' }
  ],
  hp: 20,
  speed: 10,
  tileMove: 1,
  passive: {
    label: 'Regenerate',
    description: '+2 HP in or near water'
  },
  moveset: [
    {
      label: 'Move 1: Tongue Lash deals 10 HP',
      description: 'A placeholder move for Frog in the battle arena'
    },
    {
      label: 'Move 2: Jump 3 tiles & do 5 HP to all surrounding enemies inlucding under-ground',
      description: 'Another placeholder move for Frog in the battle arena'
    }
  ]
};
window.FrogData = FrogData;
