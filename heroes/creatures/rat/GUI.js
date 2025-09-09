const RatData = {
  name: 'Rat',
  icon: '🐀',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Scavenger', label: 'Scavenger, Back Pack', description: 'Carries one item in back pack. Find holes to enter objects.' },
    { choice: 'Escape', label: 'Search & Rescue, Back Pack', description: 'Inside the back pack holds the rarest cheesy nugget and will heal any hero to full HP. 1 use per match.' }
  ],
  hp: 15,
  speed: 25,
  tileMove: 5,
  passive: {
    label: 'Smell',
    description: 'This hero can detect underground, airborn and germs 7 tiles away.
  },
  moveset: [
    {
      label: 'Move 1: Bite deals 10 HP.',
      description: 'A placeholder move for Rat in the battle arena.'
    },
    {
      label: 'Move 2: Angry Bite deals 20 HP 2 turn CD.',
      description: 'Another placeholder move for Rat in the battle arena.'
    }
  ]
};
window.RatData = RatData;
