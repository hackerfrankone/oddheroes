window.MedusaAbilities = {
  name: 'Medusa',
  abilities: {
    ability1: {
      label: 'place-holder',
      damage: 12,
      execute: function(gameState, target) {
        //place-holder
        console.log('Medusa uses ability1 on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Medusa's ability1 dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability2: {
      label: 'place-holder',
      damage: 0,
      execute: function(gameState, self) {
        //place-holder
        console.log('Medusa uses ability2');
        //place-holder
        return {
          success: true,
          message: `Medusa's ability2 activated!`
        };
      }
    }
  }
};
window.abilityMap = window.abilityMap || {};
window.abilityMap['Medusa'] = window.MedusaAbilities;
