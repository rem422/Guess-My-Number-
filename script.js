'use strict';
const resetBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

checkBtn.addEventListener('click', () => {
  const guessInput = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guessInput) {
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guessInput === secretNumber) {
    displayMessage('🥳Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When the guess is wrong
  } else if (guessInput !== secretNumber) {
    if (score > 1) {
      displayMessage(guessInput > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.body.style.background = '#FF0000';
    }
  }
});

// Reset the game
resetBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});