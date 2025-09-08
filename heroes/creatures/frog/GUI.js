const FrogData = {
  name: 'Frog',
  icon: '🐸',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Duplication', label: 'Duplication', description: 'place-holder' },
    { choice: 'Evolution', label: 'Evolution', description: 'place-holder' },
    { choice: 'Poison', label: 'Poison', description: 'place-holder' }
  ],
  hp: 30,
  speed: 30,
  tileMove: 3,
  passive: {
    label: 'Jumplickity',
    description: 'Read above lol.'
  }
};
window.FrogData = FrogData;
