const NightCrawlerData = {
  name: 'NightCrawler',
  icon: '🪱',
  category: 'Uniques',
  id: 'uniques',
  abilities: [
    { choice: 'Enhanced Consume', label: 'Enhanced Consume', description: 'Consuming dead heroes grant an additional +10 HP' },
    { choice: 'Enhanced Burrowing', label: 'Enhanced Burrowing', description: 'Increase tile +3' }
  ],
  hp: 1,
  speed: 1,
  tileMove: 1,
  passive: {
    label: 'Burrow, Consume.',
    description: 'Dig underground leaving no broken tiles or trace. NightCrawler consumes any dead hero on ground and gaining +10 HP permanently. If friendly hero eats this hero it gains new max HP depending on NightCrawler HP.'
  },
  moveset: [
    {
      label: 'Move 1: Burrow any direction.',
      description: 'A placeholder move for NightCrawler in the battle arena.'
    },
    {
      label: 'Move 2: Unburrow to grant vision and granting food.',
      description: 'Another placeholder move for NightCrawler in the battle arena.'
    }
  ]
};
window.NightCrawlerData = NightCrawlerData;
