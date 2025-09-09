const RaccoonData = {
  name: 'Raccoon',
  icon: '🦝',
  category: 'Creatures',
  id: 'creatures',
  abilities: [
    { choice: 'Night Vision', label: 'Night Vision', description: 'Can see entire map and heroes that are not invisible.' },
    { choice: 'Pockets', label: 'pockets', description: 'Can carry two items at once.' }
  ],
  hp: 25,
  speed: 20,
  tileMove: 3,
  passive: {
    label: 'Picket Pocket a humans item and gain access to its benefits. Usable item will have your hero icon or a X which are NOT usable. This hero can also open chests.',
    description: ''
  },
  moveset: [
    {
      label: 'Move 1: Bite & Claw deals 10 HP.',
      description: 'A placeholder move for Raccoon in the battle arena.'
    },
    {
      label: 'Move 2: Climb tall structure that is 8 tiles away and recover 5 HP every turn. You cannot be physically touched but range can target you but 40% to dodge ranged attacks.',
      description: 'Another placeholder move for Raccoon in the battle arena.'
    }
  ]
};
window.RaccoonData = RaccoonData;
