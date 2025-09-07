console.log('hero-list.js loaded');
const heroData = [
  {
    category: 'Legends',
    id: 'legends',
    heroes: [
      { name: 'Fairy', icon: '🧚‍♀️', abilities: [{ choice: 'powder-flight', label: 'Powder & Flight', description: 'Magical dust and flying ability' }, { choice: 'immunity-flight', label: 'Immunity & Flight', description: 'Immune to status effects and flies' }] },
      { name: 'Minotaur', icon: '🐂', abilities: [{ choice: 'sword-shield', label: 'Sword & Shield', description: 'Increased attack and defense' }, { choice: 'bow-arrows', label: 'Bow & Arrows', description: 'Ranged attack with high accuracy' }] },
      { name: 'Medusa', icon: '🐍', abilities: [{ choice: 'bow', label: 'Bow & Arrows', description: 'Increased range and petrifying shot' }, { choice: 'sword-shield', label: 'Sword & Shield', description: 'Increased attack and defense' }] },
      { name: 'Phoenix', icon: '🔥', abilities: [{ choice: 'fireball-flight', label: 'Fireball & Flight', description: 'Launches fireballs and flies' }, { choice: 'rebirth-flight', label: 'Rebirth & Flight', description: 'Revives once per battle and flies' }] },
      { name: 'Big-Foot', icon: '🦶', abilities: [{ choice: 'offensive', label: 'Offensive', description: 'High damage melee attacks' }, { choice: 'defensive', label: 'Defensive', description: 'Increased health and armor' }] },
      { name: 'Dinosaur', icon: '🥚', abilities: [{ choice: 't-rex', label: 'T-Rex', description: 'Powerful bite attack' }, { choice: 'raptor', label: 'Raptor', description: 'Fast and agile strikes' }, { choice: 'triceratops', label: 'Triceratops', description: 'High defense and charge attack' }, { choice: 'pterodactyl', label: 'Pterodactyl', description: 'Flying and dive attacks' }, { choice: 'spinosaurus', label: 'Spinosaurus', description: 'Aquatic and land attacks' }, { choice: 'dilophosaurus', label: 'Dilophosaurus', description: 'Venomous spit attack' }] },
      { name: 'Dragon', icon: '🐉', abilities: [{ choice: 'blue-dragon', label: 'Blue Dragon', description: 'Ice breath and flight' }, { choice: 'red-dragon', label: 'Red Dragon', description: 'Fire breath and flight' }, { choice: 'purple-dragon', label: 'Purple Dragon', description: 'Poison breath and flight' }, { choice: 'silver-dragon', label: 'Silver Dragon', description: 'Lightning breath and flight' }] },
      { name: 'Ghost', icon: '👻', abilities: [{ choice: 'invisibility-fear', label: 'Invisibility & Fear', description: 'Becomes invisible and causes fear' }] }
    ]
  },
  {
    category: 'Humans',
    id: 'humans',
    heroes: [
      { name: 'Miner', icon: '⛏️', abilities: [{ choice: 'dig', label: 'Dig', description: 'Creates traps and tunnels' }, { choice: 'dynamite', label: 'Dynamite', description: 'Explosive ranged attack' }] },
      { name: 'Alchemist', icon: '⚗️', abilities: [{ choice: 'hp-potions', label: 'HP Potions', description: 'Heals allies over time' }, { choice: 'stamina-potions', label: 'Stamina Potions', description: 'Boosts ally speed and attack rate' }] },
      { name: 'Warrior', icon: '🛡️', abilities: [{ choice: 'sword-shield', label: 'Sword & Shield', description: 'Increased attack and defense' }, { choice: 'long-sword', label: '2-Handed Long Sword', description: 'High damage melee attack' }] },
      { name: 'Wizard', icon: '🧙‍♂️', abilities: [{ choice: 'fire-ice', label: 'Fire & Ice', description: 'Casts fire and ice spells' }, { choice: 'illusions-tp', label: 'Illusions & TP', description: 'Creates illusions and teleports' }] },
      { name: 'Hunter', icon: '🏹', abilities: [{ choice: 'pet-panther', label: 'Pet Panther', description: 'Summons a panther ally' }, { choice: 'crossbow', label: 'Crossbow', description: 'High damage ranged attack' }] },
      { name: 'Vampire', icon: '🧛', abilities: [{ choice: 'heal-attack', label: 'Heal Attack', description: 'Drains health from enemies' }, { choice: 'bat-form', label: 'Bat Form', description: 'Transforms to fly and dodge' }] },
      { name: 'Werewolf', icon: '🐺', abilities: [{ choice: 'bite-howl', label: 'Bite & Howl', description: 'Damaging bite and ally buff howl' }, { choice: 'claw-rush', label: 'Claw Rush', description: 'Fast multi-hit claw attack' }] },
      { name: 'Fisherman', icon: '🎣', abilities: [{ choice: 'kayak-pole', label: 'Kayak & Pole', description: 'Navigates water and melee attack' }, { choice: 'net-cast', label: 'Net Cast', description: 'Immobilizes enemies with net' }] },
      { name: 'Merfolk', icon: '🧜‍♂️', abilities: [{ choice: 'regenerate-storm', label: 'Regenerate & Storm', description: 'Heals over time and summons storms' }, { choice: 'wavecrash-trickster', label: 'Wave Crash & Trickster', description: 'Powerful water attack and deception' }] }
    ]
  },
  {
    category: 'Creatures',
    id: 'creatures',
    heroes: [
      { name: 'Chicken', icon: '🐔', abilities: [{ choice: 'peck-dash', label: 'Peck & Dash', description: 'Quick peck and evade' }, { choice: 'egg-bomb', label: 'Egg Bomb', description: 'Explosive egg attack' }] },
      { name: 'Shark', icon: '🦈', abilities: [{ choice: 'bite-swim', label: 'Bite & Swim', description: 'Strong bite and fast swim' }, { choice: 'frenzy', label: 'Frenzy', description: 'Rapid multi-hit attack' }] },
      { name: 'Dog', icon: '🐶', abilities: [{ choice: 'bark-bite', label: 'Bark & Bite', description: 'Stuns with bark and bites' }, { choice: 'track', label: 'Track', description: 'Detects hidden enemies' }] },
      { name: 'Falcon', icon: '🦅', abilities: [{ choice: 'dive-strike', label: 'Dive Strike', description: 'High damage dive attack' }, { choice: 'scout', label: 'Scout', description: 'Reveals enemy positions' }] },
      { name: 'Frog', icon: '🐸', abilities: [{ choice: 'tongue-lash', label: 'Tongue Lash', description: 'Pulls enemies with tongue' }, { choice: 'poison-hop', label: 'Poison Hop', description: 'Leaves toxic trail' }] },
      { name: 'Turtle', icon: '🐢', abilities: [{ choice: 'shell-defense', label: 'Shell Defense', description: 'High defense in shell' }, { choice: 'snap', label: 'Snap', description: 'Powerful bite attack' }] },
      { name: 'Lobster', icon: '🦞', abilities: [{ choice: 'claw-crush', label: 'Claw Crush', description: 'High damage claw attack' }, { choice: 'armor', label: 'Armor', description: 'Increased defense' }] },
      { name: 'Bear', icon: '🐻', abilities: [{ choice: 'maul', label: 'Maul', description: 'Heavy melee attack' }, { choice: 'roar', label: 'Roar', description: 'Intimidates enemies' }] },
      { name: 'Tiger', icon: '🐅', abilities: [{ choice: 'pounce', label: 'Pounce', description: 'Fast leap attack' }, { choice: 'stealth', label: 'Stealth', description: 'Becomes harder to detect' }] },
      { name: 'Raccoon', icon: '🦝', abilities: [{ choice: 'scavenge', label: 'Scavenge', description: 'Finds extra resources' }, { choice: 'scratch', label: 'Scratch', description: 'Quick multi-hit attack' }] },
      { name: 'Boar', icon: '🐗', abilities: [{ choice: 'charge', label: 'Charge', description: 'Rushing attack with knockback' }, { choice: 'tusk', label: 'Tusk', description: 'Piercing melee attack' }] },
      { name: 'Lizard', icon: '🦎', abilities: [{ choice: 'camouflage', label: 'Bite & Camouflage', description: 'Bites and blends into surroundings' }, { choice: 'runner', label: 'Bite & Runner', description: 'Runs across water, lava, acid, and heroes' }] },
      { name: 'Mole', icon: '🐹', abilities: [{ choice: 'dig', label: 'Dig', description: 'Creates tunnels for ambush' }, { choice: 'claw', label: 'Claw', description: 'Sharp claw attack' }] },
      { name: 'Duck', icon: '🦢', abilities: [{ choice: 'quack-dive', label: 'Quack & Dive', description: 'Distracts and dives underwater' }, { choice: 'feather-shield', label: 'Feather Shield', description: 'Temporary damage reduction' }] }
    ]
  },
  {
    category: 'Uniques',
    id: 'uniques',
    heroes: [
      { name: 'Worm', icon: '🪱', abilities: [{ choice: 'scout-food', label: 'Underground Scout & Friendly Food Source', description: '+30 HP, kills hero on consumption' }] },
      { name: 'Mosquito Swarm', icon: '🦟', abilities: [{ choice: 'swarm-drain', label: 'Swarm Drain', description: 'Drains health from multiple enemies' }, { choice: 'buzz', label: 'Buzz', description: 'Distracts and slows enemies' }] },
      { name: 'Tick', icon: '🕷️', abilities: [{ choice: 'latch', label: 'Latch', description: 'Attaches to enemy for continuous damage' }, { choice: 'toxin', label: 'Toxin', description: 'Poisons enemy over time' }] },
      { name: 'Leech', icon: '🐛', abilities: [{ choice: 'blood-drain', label: 'Blood Drain', description: 'Heals while damaging enemy' }, { choice: 'slip', label: 'Slip', description: 'High dodge chance' }] },
      { name: 'Helicopter', icon: '🚁', abilities: [{ choice: 'offensive', label: 'Offensive', description: 'Machine gun and missiles' }, { choice: 'defensive', label: 'Defensive', description: 'Transport and medic support' }] },
      { name: 'Submarine', icon: '🚤', abilities: [{ choice: 'torpedo', label: 'Torpedo', description: 'Long-range explosive attack' }, { choice: 'dive', label: 'Dive', description: 'Submerges to avoid attacks' }] },
      { name: 'Germ', icon: '🦠', abilities: [{ choice: 'infect', label: 'Infect', description: 'Spreads debuffs to enemies' }, { choice: 'multiply', label: 'Multiply', description: 'Creates temporary clones' }] },
      { name: 'Plants', icon: '🌱', abilities: [{ choice: 'entangle', label: 'Entangle', description: 'Roots enemies in place' }, { choice: 'spore', label: 'Spore', description: 'Releases damaging spores' }] },
      { name: 'AI', icon: '🤖', abilities: [{ choice: 'hack', label: 'Hack', description: 'Disrupts enemy abilities' }, { choice: 'analyze', label: 'Analyze', description: 'Boosts ally accuracy' }] },
      { name: 'Tank', icon: '🪖', abilities: [{ choice: 'cannon', label: 'Cannon', description: 'High damage area attack' }, { choice: 'armor', label: 'Armor', description: 'Greatly increased defense' }] }
    ]
  }
];
console.log('heroData:', heroData);
