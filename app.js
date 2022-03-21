const startGame = document.getElementById('start_game_btn');
const gameStats = document.getElementById('game_stats');

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
  let message = `You chose ${playerSelection} and the computer chose ${computerSelection}, therefore `;
  if (winner === 'draw') {
    message = message + "it's a draw!";
  } else if (winner === 'layer wins') {
    message = message + 'You Win!';
  } else {
    message = message + 'Computer Wins!';
  }
  gameStats.innerHTML = `<h2> ${message}</h2> <h2>Stats:\n 
  Wins: ${wins} 
  Losses: ${losses} 
  Ties: ${ties} </h2>`;
  //   alert(message);
});
