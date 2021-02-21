const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'];
let userWins = 0;
let computerWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

// eslint-disable-next-line complexity
function chooseWinner(choice, computerChoice) {
  if ((choice === 'r' && computerChoice === 'sc') ||
      (choice === 'r' && computerChoice === 'l') ||
      (choice === 'p' && computerChoice === 'r') ||
      (choice === 'p' && computerChoice === 'sp') ||
      (choice === 'l' && computerChoice === 'sp') ||
      (choice === 'l' && computerChoice === 'p') ||
      (choice === 'sc' && computerChoice === 'p') ||
      (choice === 'sc' && computerChoice === 'l') ||
      (choice === 'sp' && computerChoice === 'sc') ||
      (choice === 'sp' && computerChoice === 'r')
  ) {
    return 'win';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'loss';
  }
}

function incrementWins(choice, computerChoice) {
  if (chooseWinner(choice, computerChoice) === 'win') {
    userWins++;
  } else if (chooseWinner(choice, computerChoice) === 'loss') {
    computerWins++;
  } else {
    // eslint-disable-next-line no-useless-return
    return;
  }
}

function announceResult(choice, computerChoice) {
  incrementWins(choice, computerChoice);
  if (chooseWinner(choice, computerChoice) === 'win') {
    prompt(`You won this round! You have ${userWins} win(s). Your opponent has ${computerWins} win(s).`);
  } else if (chooseWinner(choice, computerChoice) === 'loss') {
    prompt(`You lost this round! You have ${userWins} win(s). Your opponent has ${computerWins} win(s).`);
  } else {
    prompt(`You tied this round! You have ${userWins} win(s). Your opponent has ${computerWins} win(s).`);
  }
}

// eslint-disable-next-line consistent-return
function winCounter(userWins, computerWins) {
  if (userWins === 5) {
    prompt(`You are the first to five wins. The end!`);
  } else if (computerWins === 5) {
    prompt(`Your opponnent is the first to five wins. The end!`);
  } else {
    // eslint-disable-next-line no-useless-return
    return;
  }
}

let status = 1;

// eslint-disable-next-line no-unmodified-loop-condition
while (status) {
  prompt(`Let's play rock, paper, scissors, spock, lizard! Enter your choice: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice. Try again (r, p, sc, sp, l)");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  chooseWinner(choice, computerChoice);
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  announceResult(choice, computerChoice);
  winCounter(userWins, computerWins);

  if (userWins >= 5 || computerWins >= 5) {
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    if (answer[0] !== 'y') {
      status = false;
    }
    if (answer[0] === 'y') {
      userWins = 0;
      computerWins = 0;
    }
  }
}