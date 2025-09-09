const AlchemistData = {
  name: 'Alchemist',
  icon: '🧪',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Herbalist & Pockets', label: 'Herbalist', description: 'Increases chance to find herbs by 10%. Can carry an additional potion.' },
    { choice: 'Very Rare Potion', label: 'Very Rare Potion', description: 'This potion takes 2 rare herbs. Grants immunity from everything for 1 turn. Can give friendly hero this very rare potion but instatnly consumes it unless hero has pockets.' }
  ],
  hp: 55,
  speed: 25,
  tileMove: 5,
  passive: {
    label: 'Wild Crafting.',
    description: 'End of every turn, 90% chance to find a common herb. 30% chance to find an uncommon herb. 10% chance to find a rare herb. 10% chance to find nothing. Rare herbs make rare potions. Can carry up to 2 herbs only. '
  },
  moveset: [
    {
      label: 'Move 1: Craft common, uncommon, rare or very rare potions. Common potion is a range bomb potion that deals AOE 10 HP including underground. Uncommon potion heal 20 HP. Rare potion increases friendly hero new max HP by 10 HP and move tile by 1 and increases attack by 5 HP.',
      description: 'A placeholder move for Alchemist in the battle arena.'
    },
    {
      label: 'Move 2: Select and use potion.',
      description: 'Another placeholder move for Alchemist in the battle arena.'
    }
  ]
};
window.AlchemistData = AlchemistData;
