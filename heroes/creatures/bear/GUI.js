const BearData = {
  name: 'Bear',
  icon: '🐻',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Rage', label: 'Rage', description: 'n/a.' },
    { choice: 'Roar of Terror', label: 'Roar of Terror', description: 'All surrounding tilesx3 from hero cant move for 2 turns. ' },
    { choice: 'Hibernate', label: 'Hibernate', description: 'Sleep for 3 turns to recover 25 HP' }
  ],
  hp: 40,
  speed: 15,
  tileMove: 2,
  passive: {
    label: 'Smell',
    description: 'Can see camoflauged heroes if within field of view/fog of war'
  },
  moveset: [
    {
      label: 'Move 1: Bite & Swipe deals 20 HP',
      description: 'A placeholder move for Bear in the battle arena.'
    },
    {
      label: 'Move 2: n/a',
      description: 'Another placeholder move for Bear in the battle arena.'
    }
  ]
};
window.BearData = BearData;
