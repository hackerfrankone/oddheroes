const FrogData = {
  name: 'Frog',
  icon: '🐸',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Duplication', label: 'Duplication', description: 'Lay 3 frog eggs. 5 turn CD. Turn 4 will complete the evolution process. If eggs near water, tadpoles will emerge for scouts.' },
    { choice: 'Evolution', label: 'Evolution', description: 'Evolution into a giant BullFrog. Stats are tripled.' },
    { choice: 'Poison', label: 'Poison Tongue', description: 'Tongue lash no longer does dmg but will cause target to be deadly poisoned. -10hp per turn.' }
  ],
  hp: 20,
  speed: 10,
  tileMove: 1,
  passive: {
    label: 'Regenerate',
    description: '+2 HP in or near water.'
  }
};
window.FrogData = FrogData;
