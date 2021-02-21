const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
let sum = 0;
let product = 1;

prompt('Enter an integer that is greater than zero.');
let enteredInt = readline.question();

prompt('Enter "s" to compute the sum, or "p" to compute the product.'); 
sumOrProd =  readline.question().toLowerCase();

if (sumOrProd === 's') {
  for (i = 1; i <= parseInt(enteredInt); i++) {
    sum += i
  }
  console.log(`The sum of numbers between 1 and ${enteredInt} is ${sum}.`)
}

if (sumOrProd === 'p') {
  for (i = 1; i <= parseInt(enteredInt); i++) {
    product *= i
  }
  console.log(`The product of numbers between 1 and ${enteredInt} is ${product}.`)
}