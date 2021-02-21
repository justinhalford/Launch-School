const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('What is your name?');
let name = readline.question();

if (name.includes('!')) {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}