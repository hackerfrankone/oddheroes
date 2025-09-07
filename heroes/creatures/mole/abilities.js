window.MoleAbilities = {
  name: 'Mole',
  abilities: {
    quantity: 2,
    ability1: {
      label: 'place-holder',
      damage: 6,
      execute: function(gameState, target) {
        //place-holder
        console.log('Mole uses ability1 on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Mole's ability1 dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability2: {
      label: 'place-holder',
      damage: 0,
      execute: function(gameState, self) {
        //place-holder
        console.log('Mole uses ability2');
        //place-holder
        return {
          success: true,
          message: `Mole's ability2 activated!`
        };
      }
    }
  }
};
window.abilityMap = window.abilityMap || {};
window.abilityMap['Mole'] = window.MoleAbilities;
