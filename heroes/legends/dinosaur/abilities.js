window.DinosaurAbilities = {
  name: 'Dinosaur',
  abilities: {
    ability1: {
      label: 'place-holder',
      damage: 20,
      execute: function(gameState, target) {
        //place-holder
        console.log('Dinosaur uses ability1 on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Dinosaur's ability1 dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability2: {
      label: 'place-holder',
      damage: 18,
      execute: function(gameState, target) {
        //place-holder
        console.log('Dinosaur uses ability2 on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Dinosaur's ability2 dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability3: {
      label: 'place-holder',
      damage: 15,
      execute: function(gameState, target) {
        //place-holder
        console.log('Dinosaur uses ability3 on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Dinosaur's ability3 dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability4: {
      label: 'place-holder',
      damage: 12,
      execute: function(gameState, target) {
        //place-holder
        console.log('Dinosaur uses ability4 on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Dinosaur's ability4 dealt ${this.damage} damage to ${target.name}!`
        };
      }
    },
    ability5: {
      label: 'place-holder',
      damage: 10,
      execute: function(gameState, target) {
        //place-holder
        console.log('Dinosaur uses ability5 on', target);
        target.health = (target.health || 100) - this.damage;
        console.log(`${target.name} health reduced to ${target.health}`);
        return {
          success: true,
          message: `Dinosaur's ability5 dealt ${this.damage} damage to ${target.name}!`
        };
      }
    }
  }
};
window.abilityMap = window.abilityMap || {};
window.abilityMap['Dinosaur'] = window.DinosaurAbilities;
