// Enable user input.
const readline = require('readline-sync');

//Greet user.
console.log('Hello, there!');

// Ask the user for the loan amount (US dollars).
console.log("=> What is the loan amount (US dollars)?");
let loanAmount = Number(readline.question());

// Check that loan amount is not zero or a negative valued number.
while ((loanAmount < 0) || Number.isNaN(loanAmount)) {
  console.log("Hmm... that doesn't look like a postive number.");
  loanAmount = Number(readline.question());
}

// Ask the user for the annual percentage rate (apr). Assume positive rate.
console.log("=> What is the annual percentage rate (%)?");
let annualPercentageRate = Number(readline.question());

// Check that loan amount is not a negative valued number.
while ((annualPercentageRate < 0) || (Number.isNaN(annualPercentageRate))) {
  console.log("Hmm... that doesn't look like a postive number or zero.");
  annualPercentageRate = Number(readline.question());
}

// Ask the user for the loan duration (months).
console.log("=> What is the duration of the loan (in integer valued years)?");
let loanDurationYears = Number(readline.question());

// Check that loan amount is not zero or a negative valued number.
while ((loanDurationYears < 0) || (Number.isInteger(loanDurationYears) === false) || (Number.isNaN(loanDurationYears))) {
  console.log("Hmm... that doesn't look like a postive integer.");
  loanDurationYears = Number(readline.question());
}

// Convert duration of loan from years to months.
let loanDurationMonths = loanDurationYears * 12;

// Convert annual percentage rate to monthly percentage rate.
let monthlyPercentageRate = annualPercentageRate / 12;

function calculateMonthlyPayment() {
  if (annualPercentageRate > 0) {
    let monthlyPayment = loanAmount * ((monthlyPercentageRate / 100) / (1 - Math.pow((1 + (monthlyPercentageRate / 100)), (-loanDurationMonths))));
    return monthlyPayment;
  } else if (annualPercentageRate === 0) {
    let monthlyPayment = loanAmount / loanDurationMonths;
    return monthlyPayment;
  } else {
    console.log("Hmm...your interest rate is faulty...");
    return 'Oops! Interest rate is not a number >= 0.';
  }
}

let monthlyPayment = calculateMonthlyPayment();

//Display to the user their monthly and total payments.
console.log(`Your monthly payment comes out to $${monthlyPayment.toFixed(2)} and your total payment is $${(monthlyPayment * loanDurationMonths).toFixed(2)}. Have a nice day!`);