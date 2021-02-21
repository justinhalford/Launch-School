function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`Teddy is ${getRandomIntInclusive(20, 120)} years old!`);