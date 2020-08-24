// Ask the user for the first number.
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json')
const LANGUAGE = 'en';

prompt(messages('welcome', LANGUAGE));

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}
function prompt(message) {
  console.log(`=> ${message}`);
}

// Ask the user if they would like to perform another calculation.
function tryAgain() {
console.log('Would like to perform another calculation? (Y/N)');
return readline.question();
}

do {
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

// Ask the user for the second number.
console.log("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

// Ask the user for an operation to perform.
console.log('Please select an operation: 1)+ 2)- 3)* 4)/');
let operation = readline.question();

// Perform the operation on the two numbers.
let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

// Print the result to the terminal.
console.log(`The result is: ${output}`);

} while (tryAgain().toUpperCase() === ('Y'));


console.log('Goodbye!');