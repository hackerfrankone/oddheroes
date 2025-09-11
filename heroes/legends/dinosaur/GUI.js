const DinosaurData = {
  name: 'Dinosaur',
  icon: '🦖',
  category: 'Legends',
  id: 'legends',
  abilities: [
    { choice: 'Tyrannosaurus', label: 'Tyrannosaurus', description: 'Bite deals additional +10 HP.' },
    { choice: 'Velociraptor', label: 'Velociraptor', description: 'Reduced HP to 100. speed 99, tile move to 9.' },
    { choice: 'Spinosaurus', label: 'Spinosaurus', description: 'Reduced HP to 120. This hero is land & water. In water grants +4 and +20 to Bite.' },
    { choice: 'Triceratops', label: 'Triceratops', description: 'Increased health to 200 HP. Reduce speed 15, tile move 3.' },
    { choice: 'pterodactyl', label: 'pterodactyl', description: 'Reduced health to 85, speed 80, tile move to 10.' },
    { choice: 'Mosasaurus', label: 'Mosasaurus', description: 'Only water, Bite deals additional +10 HP. ' }
  ],
  hp: 150,
  speed: 45,
  tileMove: 5,
  passive: {
    label: 'Execute',
    description: 'Landing the killing blow on human or animal grants additional +10 HP, +10 to physical HP, +2 tile, +10 speed, heals 30 HP.' 
  },
  moveset: [
    {
      label: 'Move 1: Bite deals 40 HP.',
      description: 'A placeholder move for Dinosaur in the battle arena.'
    },
  ]
};
window.DinosaurData = DinosaurData;
