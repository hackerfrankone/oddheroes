const heroData = [
  {
    category: 'Legends',
    id: 'legends',
    heroes: [
      { name: 'Fairy', icon: '🧚‍♀️', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Minotaur', icon: '🐂', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { 
        name: 'Medusa', 
        icon: '🐍', 
        abilities: [
          { choice: 'bow', label: 'Bow & Arrows', description: 'Increased Range' }, 
          { choice: 'sword-shield', label: 'Sword & Shield', description: 'Increased Atk & Def' }
        ] 
      },
      { name: 'Phoenix', icon: '🔥', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Big-Foot', icon: '🦶', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Dinosaur', icon: '🥚', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Dragon', icon: '🐉', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Ghost', icon: '👻', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Merfolk', icon: '🧜‍♂️', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] }
    ]
  },
  {
    category: 'Humans',
    id: 'humans',
    heroes: [
      { name: 'Miner', icon: '⛏️', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Alchemist', icon: '⚗️', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { 
        name: 'Warrior', 
        icon: '🛡️', 
        abilities: [
          { choice: 'sword-shield', label: 'Sword & Shield', description: 'Increased Atk & Def' }, 
          { choice: 'long-sword', label: '2-Handed Long Sword', description: 'High Damage' }
        ] 
      },
      { name: 'Wizard', icon: '🧙‍♂️', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Hunter', icon: '🏹', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Vampire', icon: '🧛', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Werewolf', icon: '🐺', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Fisherman', icon: '🎣', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] }
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
      { 
        name: 'Lizard', 
        icon: '🦎', 
        abilities: [
          { choice: 'camouflage', label: 'Bite & Camouflage', description: '' }, 
          { choice: 'runner', label: 'Bite & Runner', description: 'Can run across water, lava, acid & heroes' }
        ] 
      },
      { name: 'Mole', icon: '🐹', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Duck', icon: '🦢', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] }
    ]
  },
  {
    category: 'Uniques',
    id: 'uniques',
    heroes: [
      { 
        name: 'Worm', 
        icon: '🪱', 
        abilities: [{ choice: 'scout-food', label: 'UnderGround Scout & Friendly Food Source', description: '+30 HP, Kills Hero' }]
      },
      { name: 'Mosquito Swarm', icon: '🦟', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Tick', icon: '🕷️', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Leech', icon: '🐛', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { 
        name: 'Helicopter', 
        icon: '🚁', 
        abilities: [
          { choice: 'offensive', label: 'Offensive', description: 'Machine Gun & Missles' }, 
          { choice: 'defensive', label: 'Defensive', description: 'Transport & Medic' }
        ] 
      },
      { name: 'Submarine', icon: '🚤', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Germ', icon: '🦠', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Plants', icon: '🌱', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'AI', icon: '🤖', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] },
      { name: 'Tank', icon: '🪖', abilities: [{ choice: 'ability1', label: 'Ability 1', description: 'place-holder' }, { choice: 'ability2', label: 'Ability 2', description: 'place-holder' }] }
    ]
  }
];
