const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter the first number:');
let n1 = Number(readline.question());

prompt('Enter the second number:');
let n2 = Number(readline.question());

console.log(prompt(`${n1} + ${n2} = ${n1 + n2}`));
console.log(prompt(`${n1} - ${n2} = ${n1 - n2}`));
console.log(prompt(`${n1} * ${n2} = ${n1 * n2}`));
console.log(prompt(`${n1} / ${n2} = ${n1 / n2}`));
console.log(prompt(`${n1} % ${n2} = ${n1 % n2}`));
console.log(prompt(`${n1} ** ${n2} = ${n1 ** n2}`));