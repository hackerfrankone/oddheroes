const MosquitoSwarmData = {
  name: 'Mosquito Swarm',
  icon: '🦟',
  category: 'Uniques', 
  id: 'uniques',
  abilities: [
    { choice: 'Female', label: 'Female', description: 'Suck and transmit a deadly disease called West Nile Virus and deals -10 HP every turn. Cannot be cured. 5 turn CD. ' },
    { choice: 'Male', label: 'Male', description: 'This ability has a swarm of 10 mosquitos. Each hit this hero takes will remove a mosquito. When the last mosquito dies. This hero dies. 50% Chance to kill ONE mosquito.' }
  ],
  hp: 1,
  speed: 15,
  tileMove: 2,
  passive: {
    label: 'Blood Bag',
    description: 'Using proboscis collects 1 bag of blood. use blood bag to increase move tile +8.'
  },
  moveset: [
    {
      label: 'Move 1: proboscis deals 5 HP.',
      description: 'A placeholder move for Mosquito Swarm in the battle arena.'
    },
    {
      label: 'Move 2: If last turn you lost a mosquito or used proboscis, next turn this hero can use proboscis and fly away moving up to 7 tiles.',
      description: 'Another placeholder move for Mosquito Swarm in the battle arena.'
    }
  ]
};
window.MosquitoSwarmData = MosquitoSwarmData;
