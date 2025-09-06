console.log('abilities.js loaded');

const abilityEffects = {
  // Legends
  'powder-flight': {
    execute: (player) => {
      console.log(`${player.name} uses Powder & Flight: Applies a debuff to enemies and enables flight.`);
      // Example: player.debuffEnemies({ effect: 'stun', duration: 2 });
      // Example: player.enableFlight(true);
      return { success: true, message: 'Powder & Flight activated' };
    }
  },
  'immunity-flight': {
    execute: (player) => {
      console.log(`${player.name} uses Immunity & Flight: Gains immunity to status effects and enables flight.`);
      // Example: player.addImmunity(['poison', 'stun']);
      // Example: player.enableFlight(true);
      return { success: true, message: 'Immunity & Flight activated' };
    }
  },
  'sword-shield': {
    execute: (player) => {
      console.log(`${player.name} uses Sword & Shield: Increases attack by 10 and defense by 15.`);
      // Example: player.stats.attack += 10; player.stats.defense += 15;
      return { success: true, message: 'Sword & Shield activated' };
    }
  },
  'bow-arrows': {
    execute: (player) => {
      console.log(`${player.name} uses Bow & Arrows: Increases range by 5.`);
      // Example: player.stats.range += 5;
      return { success: true, message: 'Bow & Arrows activated' };
    }
  },
  'bow': {
    execute: (player) => {
      console.log(`${player.name} uses Bow & Arrows: Increases range by 5.`);
      // Example: player.stats.range += 5;
      return { success: true, message: 'Bow & Arrows activated' };
    }
  },
  'fireball-flight': {
    execute: (player) => {
      console.log(`${player.name} uses Fire-ball & Flight: Deals 20 fire damage and enables flight.`);
      // Example: player.dealDamage({ type: 'fire', amount: 20 }); player.enableFlight(true);
      return { success: true, message: 'Fire-ball & Flight activated' };
    }
  },
  'rebirth-flight': {
    execute: (player) => {
      console.log(`${player.name} uses Re-birth & Flight: Revives with 50% HP and enables flight.`);
      // Example: player.revive({ hpPercent: 50 }); player.enableFlight(true);
      return { success: true, message: 'Re-birth & Flight activated' };
    }
  },
  'offensive': {
    execute: (player) => {
      console.log(`${player.name} uses Offensive: Increases attack by 20.`);
      // Example: player.stats.attack += 20;
      return { success: true, message: 'Offensive activated' };
    }
  },
  'defensive': {
    execute: (player) => {
      console.log(`${player.name} uses Defensive: Increases defense by 25.`);
      // Example: player.stats.defense += 25;
      return { success: true, message: 'Defensive activated' };
    }
  },
  't-rex': {
    execute: (player) => {
      console.log(`${player.name} uses T-Rex: Deals 30 melee damage.`);
      // Example: player.dealDamage({ type: 'melee', amount: 30 });
      return { success: true, message: 'T-Rex activated' };
    }
  },
  'raptor': {
    execute: (player) => {
      console.log(`${player.name} uses Raptor: Increases speed by 10.`);
      // Example: player.stats.speed += 10;
      return { success: true, message: 'Raptor activated' };
    }
  },
  'triceratops': {
    execute: (player) => {
      console.log(`${player.name} uses Triceratops: Increases defense by 20.`);
      // Example: player.stats.defense += 20;
      return { success: true, message: 'Triceratops activated' };
    }
  },
  'teradatoyol': {
    execute: (player) => {
      console.log(`${player.name} uses Teradatoyol: Enables flight and deals 15 damage.`);
      // Example: player.enableFlight(true); player.dealDamage({ type: 'aerial', amount: 15 });
      return { success: true, message: 'Teradatoyol activated' };
    }
  },
  'spinosaures': {
    execute: (player) => {
      console.log(`${player.name} uses Spinosaures: Deals 25 water damage.`);
      // Example: player.dealDamage({ type: 'water', amount: 25 });
      return { success: true, message: 'Spinosaures activated' };
    }
  },
  'dilophosauras': {
    execute: (player) => {
      console.log(`${player.name} uses Dilophosauras: Applies poison debuff.`);
      // Example: player.debuffEnemies({ effect: 'poison', duration: 3 });
      return { success: true, message: 'Dilophosauras activated' };
    }
  },
  'blue-dragon': {
    execute: (player) => {
      console.log(`${player.name} uses Blue Dragon: Deals 25 ice damage.`);
      // Example: player.dealDamage({ type: 'ice', amount: 25 });
      return { success: true, message: 'Blue Dragon activated' };
    }
  },
  'red-dragon': {
    execute: (player) => {
      console.log(`${player.name} uses Red Dragon: Deals 25 fire damage.`);
      // Example: player.dealDamage({ type: 'fire', amount: 25 });
      return { success: true, message: 'Red Dragon activated' };
    }
  },
  'purple-dragon': {
    execute: (player) => {
      console.log(`${player.name} uses Purple Dragon: Applies confusion debuff.`);
      // Example: player.debuffEnemies({ effect: 'confusion', duration: 2 });
      return { success: true, message: 'Purple Dragon activated' };
    }
  },
  'silver-dragon': {
    execute: (player) => {
      console.log(`${player.name} uses Silver Dragon: Increases defense by 20 and enables flight.`);
      // Example: player.stats.defense += 20; player.enableFlight(true);
      return { success: true, message: 'Silver Dragon activated' };
    }
  },
  'invisibility-fear': {
    execute: (player) => {
      console.log(`${player.name} uses Invisibility & Fear: Becomes invisible and applies fear debuff.`);
      // Example: player.setInvisible(true); player.debuffEnemies({ effect: 'fear', duration: 2 });
      return { success: true, message: 'Invisibility & Fear activated' };
    }
  },
  'regenerate-storm': {
    execute: (player) => {
      console.log(`${player.name} uses Regenerate & Storm: Heals 20 HP and deals 15 storm damage.`);
      // Example: player.heal(20); player.dealDamage({ type: 'storm', amount: 15 });
      return { success: true, message: 'Regenerate & Storm activated' };
    }
  },
  'wavecrash-trickster': {
    execute: (player) => {
      console.log(`${player.name} uses Wave Crash & Trickster: Deals 20 water damage and evades next attack.`);
      // Example: player.dealDamage({ type: 'water', amount: 20 }); player.setEvasion(true);
      return { success: true, message: 'Wave Crash & Trickster activated' };
    }
  },
  // Humans
  'dig': {
    execute: (player) => {
      console.log(`${player.name} uses Dig: Creates a tunnel for escape or ambush.`);
      // Example: player.createTunnel({ range: 10 });
      return { success: true, message: 'Dig activated' };
    }
  },
  'placeholder': {
    execute: (player) => {
      console.log(`${player.name} uses Placeholder: No effect defined.`);
      return { success: true, message: 'Placeholder activated' };
    }
  },
  'hp-potions': {
    execute: (player) => {
      console.log(`${player.name} uses HP Potions: Heals 30 HP.`);
      // Example: player.heal(30);
      return { success: true, message: 'HP Potions activated' };
    }
  },
  'stamina-potions': {
    execute: (player) => {
      console.log(`${player.name} uses Stamina Potions: Restores 20 stamina.`);
      // Example: player.restoreStamina(20);
      return { success: true, message: 'Stamina Potions activated' };
    }
  },
  'fire-ice': {
    execute: (player) => {
      console.log(`${player.name} uses Fire & Ice: Deals 15 fire and 15 ice damage.`);
      // Example: player.dealDamage({ type: 'fire', amount: 15 }); player.dealDamage({ type: 'ice', amount: 15 });
      return { success: true, message: 'Fire & Ice activated' };
    }
  },
  'illusions-tp': {
    execute: (player) => {
      console.log(`${player.name} uses Illusions & TP: Creates illusion and teleports 10 units.`);
      // Example: player.createIllusion(); player.teleport(10);
      return { success: true, message: 'Illusions & TP activated' };
    }
  },
  'pet-panther': {
    execute: (player) => {
      console.log(`${player.name} uses Pet Panther: Summons a panther with 20 attack.`);
      // Example: player.summonPet({ type: 'panther', attack: 20 });
      return { success: true, message: 'Pet Panther activated' };
    }
  },
  'crossbow': {
    execute: (player) => {
      console.log(`${player.name} uses Crossbow: Deals 25 ranged damage.`);
      // Example: player.dealDamage({ type: 'ranged', amount: 25 });
      return { success: true, message: 'Crossbow activated' };
    }
  },
  'heal-attack': {
    execute: (player) => {
      console.log(`${player.name} uses Heal Attack: Deals 15 damage and heals 10 HP.`);
      // Example: player.dealDamage({ type: 'melee', amount: 15 }); player.heal(10);
      return { success: true, message: 'Heal Attack activated' };
    }
  },
  'bite-howl': {
    execute: (player) => {
      console.log(`${player.name} uses Bite & Howl: Deals 20 melee damage and applies fear debuff.`);
      // Example: player.dealDamage({ type: 'melee', amount: 20 }); player.debuffEnemies({ effect: 'fear', duration: 2 });
      return { success: true, message: 'Bite & Howl activated' };
    }
  },
  'kayak-pole': {
    execute: (player) => {
      console.log(`${player.name} uses Kayak & Pole: Moves across water and deals 10 damage.`);
      // Example: player.move({ terrain: 'water' }); player.dealDamage({ type: 'melee', amount: 10 });
      return { success: true, message: 'Kayak & Pole activated' };
    }
  },
  'pole-placeholder': {
    execute: (player) => {
      console.log(`${player.name} uses Pole & Placeholder: No effect defined.`);
      return { success: true, message: 'Pole & Placeholder activated' };
    }
  },
  // Creatures
  'camouflage': {
    execute: (player) => {
      console.log(`${player.name} uses Bite & Camouflage: Becomes invisible and deals 15 melee damage.`);
      // Example: player.setInvisible(true); player.dealDamage({ type: 'melee', amount: 15 });
      return { success: true, message: 'Bite & Camouflage activated' };
    }
  },
  'runner': {
    execute: (player) => {
      console.log(`${player.name} uses Bite & Runner: Moves across water/lava/acid and deals 15 melee damage.`);
      // Example: player.move({ terrains: ['water', 'lava', 'acid'] }); player.dealDamage({ type: 'melee', amount: 15 });
      return { success: true, message: 'Bite & Runner activated' };
    }
  },
  'ability1': {
    execute: (player) => {
      console.log(`${player.name} uses Ability 1: No effect defined.`);
      return { success: true, message: 'Ability 1 activated' };
    }
  },
  'ability2': {
    execute: (player) => {
      console.log(`${player.name} uses Ability 2: No effect defined.`);
      return { success: true, message: 'Ability 2 activated' };
    }
  },
  // Uniques
  'scout-food': {
    execute: (player) => {
      console.log(`${player.name} uses UnderGround Scout & Friendly Food Source: Scouts underground and provides +30 HP to allies, kills hero if consumed.`);
      // Example: player.scout({ terrain: 'underground' }); player.buffAllies({ hp: 30 }); player.selfDestruct();
      return { success: true, message: 'UnderGround Scout & Friendly Food Source activated' };
    }
  }
};

console.log('abilityEffects:', Object.keys(abilityEffects));
