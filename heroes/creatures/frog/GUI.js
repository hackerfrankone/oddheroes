const FrogData = {
  name: 'Frog',
  icon: '🐸',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Duplication', label: 'Duplication', description: 'Lay 3 frog eggs. 5 turn CD. Turn 4 will complete the evolution process. If eggs near water, tadpoles will emerge for scouts.' },
    { choice: 'Evolution', label: 'Evolution', description: 'Evolution into BullFrog with boosted stats. +20HP, +10dmg, +2 tile move, +2 regeneration.' },
    { choice: 'Poison', label: 'Poison Tongue', description: 'Tongue lash will cause target to be deadly poisoned. -5hp per turn.' }
  ],
  hp: 20,
  speed: 20,
  tileMove: 2,
  passive: {
    label: 'Regenerate',
    description: '+2 HP in or near water.'
  }
};
window.FrogData = FrogData;
