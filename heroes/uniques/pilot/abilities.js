window.PilotAbilities = {
  name: 'Pilot',
  abilities: {
    ability1: {
      label: 'place-holder',
      damage: 15,
      execute: function(gameState, target) {
        //place-holder
        console.log('Pilot uses Helicopter ability on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Pilot's Helicopter ability dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability2: {
      label: 'place-holder',
      damage: 14,
      execute: function(gameState, target) {
        //place-holder
        console.log('Pilot uses Submarine ability on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Pilot's Submarine ability dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability3: {
      label: 'place-holder',
      damage: 16,
      execute: function(gameState, target) {
        //place-holder
        console.log('Pilot uses Tank ability on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Pilot's Tank ability dealt ${this.damage} damage to ${target.name}!`
        };
      }
    }
  }
};
window.abilityMap = window.abilityMap || {};
window.abilityMap['Pilot'] = window.PilotAbilities;
