window.FrogAbilities = {
  name: 'Frog',
  abilities: {
    Duplication: {
      label: 'Duplication',
      damage: 0,
      execute: function(gameState, self) {
        // Placeholder: Create a duplicate of the Frog in the game state
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
      execute: function(gameState, self) {
        // Placeholder: Enhance Frog's stats or abilities
        console.log('Frog uses Evolution');
        return {
          success: true,
          message: `Frog's Evolution boosted its stats!`
        };
      }
    },
    Poison: {
      label: 'Poison',
      damage: 15,
      execute: function(gameState, target) {
        // Placeholder: Apply poison damage to target
        console.log('Frog uses Poison on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Frog's Poison dealt ${this.damage} damage to ${target.name}!`
        };
      }
    }
  }
};
window.abilityMap = window.abilityMap || {};
window.abilityMap['Frog'] = window.FrogAbilities;
