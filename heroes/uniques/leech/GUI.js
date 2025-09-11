const LeechData = {
  name: 'Leech',
  icon: '🩸',
  category: 'Uniques', 
  id: 'uniques',
  abilities: [
    { choice: 'Leeches', label: 'Leeches', description: 'This ability has a group of 3 Leeches. Each hit this hero takes will remove one leech. When the last leech dies. This hero dies. This also does an additional 5 HP if attached to enemy hero.' },
    { choice: 'Power Stick', label: 'Power Stick', description: 'When heroes search/check self they now have 40% chance to remove a single leech.' }
  ],
  hp: 15,
  speed: 10,
  tileMove: 1,
  passive: {
    label: 'Group of Leeches',
    description: 'This hero contains 3 leeches and attaches itself to other heroes if in melee range or when a enemy hero paths over it. Using its suckers, a anesthetic that heroes feel it attach, and then begin to suck blood. Every turn take 10 HP. Heores can take 1 turn to search/check self for ticks/leeches. Heroes that search have 60% removing it.'
  },
  moveset: [
    {
      label: 'Move 1: Get ready to auto attach to enemy heroes that paths 1 tile close to you or over you.',
      description: 'A placeholder move for Leech in the battle arena.'
    },
    {
      label: 'Move 2: Suck Blood deals 10 HP. Can use if attached to enemy hero.',
      description: 'Another placeholder move for Leech in the battle arena.'
    }
  ]
};
window.LeechData = LeechData;
