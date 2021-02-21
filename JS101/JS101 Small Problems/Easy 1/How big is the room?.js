const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('What is the width of the room (in meters)?');
let widthAnswer = readline.question();

prompt('What is the length of the room (in meters?');
let lengthAnswer = readline.question();

let areaM = widthAnswer * lengthAnswer;
let areaFt = areaM * 10.76; 


console.log(`The area of the room is ${areaM.toFixed(2)} square meters (${areaFt.toFixed(2)} square feet).`);

