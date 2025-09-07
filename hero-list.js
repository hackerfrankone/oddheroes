console.log('hero-list.js loaded');
const heroData = [
  {
    category: 'Legends',
    id: 'legends',
    heroes: [
      { name: 'Fairy', icon: '🧚‍♀️', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Minotaur', icon: '🐂', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Medusa', icon: '🐍', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Phoenix', icon: '🔥', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Big-Foot', icon: '🦶', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Dinosaur', icon: '🥚', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Dragon', icon: '🐉', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Ghost', icon: '👻', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Centaur', icon: '🐎', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] }
    ]
  },
  {
    category: 'Humans',
    id: 'humans',
    heroes: [
      { name: 'Miner', icon: '⛏️', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Alchemist', icon: '⚗️', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Warrior', icon: '🛡️', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Wizard', icon: '🧙‍♂️', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Hunter', icon: '🏹', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Vampire', icon: '🧛', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Werewolf', icon: '🐺', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Fisherman', icon: '🎣', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Merfolk', icon: '🧜‍♂️', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] }
    ]
  },
  {
    category: 'Creatures',
    id: 'creatures',
    heroes: [
      { name: 'Chicken', icon: '🐔', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Shark', icon: '🦈', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Dog', icon: '🐶', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Falcon', icon: '🦅', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Frog', icon: '🐸', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Turtle', icon: '🐢', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Lobster', icon: '🦞', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Bear', icon: '🐻', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Tiger', icon: '🐅', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Raccoon', icon: '🦝', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Boar', icon: '🐗', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Lizard', icon: '🦎', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Mole', icon: '🐹', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Duck', icon: '🦢', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] }
    ]
  },
  {
    category: 'Uniques',
    id: 'uniques',
    heroes: [
      { name: 'Worm', icon: '🪱', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Mosquito Swarm', icon: '🦟', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Tick', icon: '🕷️', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Leech', icon: '🐛', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Helicopter', icon: '🚁', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Submarine', icon: '🚤', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Germ', icon: '🦠', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Plants', icon: '🌱', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'AI', icon: '🤖', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] },
      { name: 'Tank', icon: '🪖', abilities: [{ choice: 'ability1', label: 'place-holder', description: 'place-holder' }, { choice: 'ability2', label: 'place-holder', description: 'place-holder' }] }
    ]
  }
];
console.log('heroData:', heroData);
