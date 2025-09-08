window.FrogAbilities = {
  name: 'Frog',
  abilities: {
    Duplication: {
      label: 'Duplication',
      damage: 0,
      description: 'Lay 3 frog eggs. 5 turn CD. Turn 4 will complete the evolution process. If eggs near water, tadpoles will emerge for scouts.',
      execute: function(gameState, self) {
        console.log('Frog uses Duplication');
        return {
          success: true,
          message: `Frog's Duplication created a clone!`
        };
      }
    },
    Evolution: {
      label: 'Evolution',
      damage: 0,
      description: 'Evolution into BullFrog with boosted stats. +20HP, +10dmg, +2 tile move, +2 regeneration.',
      execute: function(gameState, self) {
        console.log('Frog uses Evolution');
        return {
          success: true,
          message: `Frog's Evolution boosted its stats!`
        };
      }
    },
    Poison: {
      label: 'Poison Tongue',
      damage: 15,
      description: 'Tongue lash will cause target to be deadly poisoned. -5hp per turn.',
      execute: function(gameState, target) {
        console.log('Frog uses Poison Tongue on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Frog's Poison Tongue dealt ${this.damage} damage to ${target.name}!`
        };
      }
    }
  },
  moveset: [
    {
      label: 'Move 1: Placeholder',
      description: 'A placeholder move for Frog in the battle arena.',
      execute: function(gameState, target) {
        console.log('Frog uses Move 1: Placeholder on', target);
        return {
          success: true,
          message: `Frog's Move 1: Placeholder executed!`
        };
      }
    },
    {
      label: 'Move 2: Placeholder',
      description: 'Another placeholder move for Frog in the battle arena.',
      execute: function(gameState, target) {
        console.log('Frog uses Move 2: Placeholder on', target);
        return {
          success: true,
          message: `Frog's Move 2: Placeholder executed!`
        };
      }
    }
  ]
};
window.abilityMap = window.abilityMap || {};
window.abilityMap['Frog'] = window.FrogAbilities;
