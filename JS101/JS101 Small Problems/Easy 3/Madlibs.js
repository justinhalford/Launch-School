const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter a noun:');
let noun = readline.question();

prompt('Enter a verb:');
let verb = readline.question();

prompt('Enter a adverb:');
let adverb = readline.question();

prompt('Enter a adjective:');
let adjective = readline.question();

//console output
console.log(`It is well known that ${noun} is the greatest deficiency amongst today's programming community.`);
console.log(`One needs ${adjective} character to stay on course. They must work ${adverb} to achieve proficiency.`);
console.log(`You must ${verb} and then you will excel!`)
