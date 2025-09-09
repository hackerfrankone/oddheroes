const NinjaData = {
  name: 'Ninja',
  icon: '🥷',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Katana', label: 'Katana', description: 'This sword deals 25 HP.' },
    { choice: 'Shurikens', label: 'Shuriken', description: 'You carry 5 Shurikens, Range is 5 tiles and deals 10 HP. You can choose to throw any amount at once. Dagger is your other weapon and deals 10 HP.' }
  ],
  hp: 55,
  speed: 90,
  tileMove: 4,
  passive: {
    label: 'Light Feet',
    description: 'This hero moves twice in one turn.'
  },
  moveset: [
    {
      label: 'Move 1: Climb any tall structure',
      description: 'A placeholder move for Ninja in the battle arena.'
    },
    {
      label: 'Move 2: Grappling hook causes this hero to path to tree instantly. Can still move twice. targeting enemy hero deals 15 HP, you do not path to them. Range 3 tiles.',
      description: 'Another placeholder move for Ninja in the battle arena.'
    }
  ]
};
window.NinjaData = NinjaData;
