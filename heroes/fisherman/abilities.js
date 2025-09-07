window.FishermanAbilities = {
  name: 'Fisherman',
  abilities: {
    ability1: {
      label: 'place-holder',
      damage: 10,
      execute: function(gameState, target) {
        //place-holder
        console.log('Fisherman uses ability1 on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Fisherman's ability1 dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability2: {
      label: 'place-holder',
      damage: 0,
      execute: function(gameState, self) {
        //place-holder
        console.log('Fisherman uses ability2');
        //place-holder
        return {
          success: true,
          message: `Fisherman's ability2 activated!`
        };
      }
    }
  }
};
window.abilityMap = window.abilityMap || {};
window.abilityMap['Fisherman'] = window.FishermanAbilities;
