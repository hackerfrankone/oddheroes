const WizardData = {
  name: 'Wizard',
  icon: '🧙',
  category: 'Humans',
  id: 'humans',
  abilities: [
    { choice: 'Ultimate spell', label: 'Ultimate', description: 'Deal 35 HP in a 4x4 AOE area, including underground. Cannot be blocked. ALL inflicted heroes cannot heal for 4 turns. Uses 10 mana.' },
    { choice: 'Illusions', label: 'place-holder', description: 'Create 2 Illusions of this hero. They cant cast spells. You can Switch positions with any illusions on map. Uses 10 mana. Can only have up to 2 illusions on map.' }
  ],
  hp: 25,
  speed: 30,
  tileMove: 3,
  passive: {
    label: '10 Mana',
    description: 'Spells cost mana. Each turn, you passively regenerate 2 mana. Begin the game with 2 mana. '
  },
  moveset: [
    {
      label: 'Move 1: Fire Ball deals 25 HP. 5 tile rage. Uses 4 mana.',
      description: 'A placeholder move for Wizard in the battle arena.'
    },
    {
      label: 'Move 2: Recover 20 HP. Uses 6 mana. Can cast on any friendly hero within 2 tiles.',
      description: 'Another placeholder move for Wizard in the battle arena.'
    }
  ]
};
window.WizardData = WizardData;
