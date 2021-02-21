const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('What is the bill amount (dollars)?');
let bill = readline.question();

prompt('What is the tip percentage (%)?');
let tipRate = readline.question();

let tip = (tipRate / 100) * bill;
let total = parseFloat(bill) + parseFloat(tip);

console.log(`The tip is $${tip.toFixed(2)}.`);
console.log(`The total is $${total.toFixed(2)}.`)