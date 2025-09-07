window.FrogAbilities = {
  name: 'Frog',
  abilities: {
    ability1: {
      label: 'Tongue Lash',
      damage: 10,
      execute: function(gameState, target) {
        //place-holder
        console.log('Frog uses Tongue Lash on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Frog's Tongue Lash dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability2: {
      label: 'Jump Boost',
      damage: 0,
      execute: function(gameState, self) {
        //place-holder
        console.log('Frog uses Jump Boost');
        //place-holder
        return {
          success: true,
          message: `Frog's Jump Boost activated!`
        };
      }
    }
  }
};
window.abilityMap = window.abilityMap || {};
window.abilityMap['Frog'] = window.FrogAbilities;
