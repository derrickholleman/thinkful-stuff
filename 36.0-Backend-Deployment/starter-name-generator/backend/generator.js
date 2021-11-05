const adjectives = ['Yellow', 'Agressive', 'Cheerful', 'Charmful', "Tiny"];
const nouns = ['Rock', 'Beaver', 'Door', "Lamp", "Ink"];

const generator = () => {
  return adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * adjectives.length)];
}

module.exports = generator
