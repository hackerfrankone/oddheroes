console.log('index.js loaded');
const heroData = [
  {
    category: 'Legends',
    id: 'legends',
    heroes: [
      { name: 'Fairy', icon: '🧚‍♀️', abilities: [{ choice: 'powder-flight', label: 'Powder & Flight', description: '' }, { choice: 'immunity-flight', label: 'Immunity & Flight', description: '' }] },
      { name: 'Minotaur', icon: '🐂', abilities: [{ choice: 'sword-shield', label: 'Sword & Shield', description: '' }, { choice: 'bow-arrows', label: 'Bow & Arrows', description: '' }] },
      { name: 'Medusa', icon: '🐍', abilities: [{ choice: 'bow', label: 'Bow & Arrows', description: 'Increased Range' }, { choice: 'sword-shield', label: 'Sword & Shield', description: 'Increased Atk & Def' }] },
      { name: 'Phoenix', icon: '🔥', abilities: [{ choice: 'fireball-flight', label: 'Fire-ball & Flight', description: '' }, { choice: 'rebirth-flight', label: 'Re-birth & Flight', description: '' }] },
      { name: 'Big-Foot', icon: '🦶', abilities: [{ choice: 'offensive', label: 'Offensive', description: '' }, { choice: 'defensive', label: 'Defensive', description: '' }] },
      { name: 'Dinosaur', icon: '🥚', abilities: [{ choice: 't-rex', label: 'T-Rex', description: '' }, { choice: 'raptor', label: 'Raptor', description: '' }, { choice: 'triceratops', label: 'Triceratops', description: '' }, { choice: 'teradatoyol', label: 'Teradatoyol', description: '' }, { choice: 'spinosaures', label: 'Spinosaures', description: '' }, { choice: 'dilophosauras', label: 'Dilophosauras', description: '' }] },
      { name: 'Dragon', icon: '🐉', abilities: [{ choice: 'blue-dragon', label: 'Blue Dragon', description: '' }, { choice: 'red-dragon', label: 'Red Dragon', description: '' }, { choice: 'purple-dragon', label: 'Purple Dragon', description: '' }, { choice: 'silver-dragon', label: 'Silver Dragon', description: '' }] },
      { name: 'Ghost', icon: '👻', abilities: [{ choice: 'invisibility-fear', label: 'Invisibility & Fear', description: '' }] },
      { name: 'Merfolk', icon: '🧜‍♂️', abilities: [{ choice: 'regenerate-storm', label: 'Regenerate & Storm', description: '' }, { choice: 'wavecrash-trickster', label: 'Wave Crash & Trickster', description: '' }] }
    ]
  },
  {
    category: 'Humans',
    id: 'humans',
    heroes: [
      { name: 'Miner', icon: '⛏️', abilities: [{ choice: 'dig', label: 'Dig', description: '' }, { choice: 'placeholder', label: 'place-holder', description: '' }] },
      { name: 'Alchemist', icon: '⚗️', abilities: [{ choice: 'hp-potions', label: 'HP Potions', description: '' }, { choice: 'stamina-potions', label: 'Stamina Potions', description: '' }] },
      { name: 'Warrior', icon: '🛡️', abilities: [{ choice: 'sword-shield', label: 'Sword & Shield', description: 'Increased Atk & Def' }, { choice: 'long-sword', label: '2-Handed Long Sword', description: 'High Damage' }] },
      { name: 'Wizard', icon: '🧙‍♂️', abilities: [{ choice: 'fire-ice', label: 'Fire & Ice', description: '' }, { choice: 'illusions-tp', label: 'Illusions & TP', description: '' }] },
      { name: 'Hunter', icon: '🏹', abilities: [{ choice: 'pet-panther', label: 'Pet Panther', description: '' }, { choice: 'crossbow', label: 'Crossbow', description: '' }] },
      { name: 'Vampire', icon: '🧛', abilities: [{ choice: 'heal-attack', label: 'Heal Attack', description: '' }, { choice: 'placeholder', label: 'place-holder', description: '' }] },
      { name: 'Werewolf', icon: '🐺', abilities: [{ choice: 'bite-howl', label: 'Bite & Howl', description: '' }, { choice: 'placeholder', label: 'place-holder', description: '' }] },
      { name: 'Fisherman', icon: '🎣', abilities: [{ choice: 'kayak-pole', label: 'Kayak & Pole', description: '' }, { choice: 'pole-placeholder', label: 'Pole & place-holder', description: '' }] }
    ]
  },
  {
    category: 'Creatures',
    id: 'creatures',
    heroes: [
      { name: 'Chicken', icon: '🐔', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Shark', icon: '🦈', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Dog', icon: '🐶', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Falcon', icon: '🦅', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Frog', icon: '🐸', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Turtle', icon: '🐢', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Lobster', icon: '🦞', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Bear', icon: '🐻', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Tiger', icon: '🐅', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Raccoon', icon: '🦝', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Boar', icon: '🐗', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Lizard', icon: '🦎', abilities: [{ choice: 'camouflage', label: 'Bite & Camouflage', description: '' }, { choice: 'runner', label: 'Bite & Runner', description: 'Can run across water, lava, acid & heroes' }] },
      { name: 'Mole', icon: '🐹', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Duck', icon: '🦢', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] }
    ]
  },
  {
    category: 'Uniques',
    id: 'uniques',
    heroes: [
      { name: 'Worm', icon: '🪱', abilities: [{ choice: 'scout-food', label: 'UnderGround Scout & Friendly Food Source', description: '+30 HP, Kills Hero' }] },
      { name: 'Mosquito Swarm', icon: '🦟', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Tick', icon: '🕷️', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Leech', icon: '🐛', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Helicopter', icon: '🚁', abilities: [{ choice: 'offensive', label: 'Offensive', description: 'Machine Gun & Missles' }, { choice: 'defensive', label: 'Defensive', description: 'Transport & Medic' }] },
      { name: 'Submarine', icon: '🚤', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Germ', icon: '🦠', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Plants', icon: '🌱', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'AI', icon: '🤖', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Tank', icon: '🪖', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] }
    ]
  }
];
console.log('heroData:', heroData);
