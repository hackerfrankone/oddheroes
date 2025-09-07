window.FrogAbilities = {
  name: 'Frog',
  abilities: {
    ability1: {
      label: 'Tongue Lash',
      execute: function(gameState, target) {
        console.log('Frog uses Tongue Lash on', target);
        target.health = (target.health || 100) - 10;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Frog's Tongue Lash dealt 10 damage to ${target.name}!`
        };
      }
    },
    ability2: {
      label: 'Jump Boost',
      execute: function(gameState, self) {
        console.log('Frog uses Jump Boost');
        self.speed = (self.speed || 1) + 2;
        gameState.turnEffects.push({
          hero: self.name,
          effect: 'speedBoost',
          duration: 2,
          value: 2
        });
        console.log(`${self.name} speed increased to ${self.speed}`);
        return {
          success: true,
          message: `Frog's Jump Boost increased speed by 2!`
        };
      }
    }
  }
};
window.abilityMap = window.abilityMap || {};
window.abilityMap['Frog'] = window.FrogAbilities;
