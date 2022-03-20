const startGame = document.getElementById('start_game_btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let wins = 0;
let losses = 0;
let ties = 0;

function start() {
  const playerChoice = prompt('ROCK, PAPER or SCISSORS').toUpperCase();
  if (
    playerChoice !== 'ROCK' &&
    playerChoice !== 'PAPER' &&
    playerChoice !== 'SCISSORS'
  ) {
    alert('invalid choice, ROCK will be chosen for you');
    return ROCK;
  }
  console.log(playerChoice);
  return playerChoice;
}

function computerChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function determineWinner(cChoice, pChoice) {
  if (cChoice === pChoice) {
    ties++;
    return 'draw';
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    wins++;
    return 'player wins';
  } else {
    losses++;
    return 'computer wins';
  }
}

startGame.addEventListener('click', function () {
  const playerSelection = start();
  const computerSelection = computerChoice();
  const winner = determineWinner(computerSelection, playerSelection);
  alert(winner);
});
