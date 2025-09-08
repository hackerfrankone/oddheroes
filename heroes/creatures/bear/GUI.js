const BearData = {
  name: 'Bear',
  icon: '🐻',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'ClawSwipe', label: 'Claw Swipe', description: 'Swipes with powerful claws, dealing damage to a single target.' },
    { choice: 'Roar', label: 'Roar', description: 'Intimidates enemies, reducing their attack strength temporarily.' },
    { choice: 'Hibernate', label: 'Hibernate', description: 'Enters a defensive state, recovering HP over time.' }
  ],
  hp: 40,
  speed: 15,
  tileMove: 2,
  passive: {
    label: 'N/A',
    description: ''
  }
};
window.BearData = BearData;
