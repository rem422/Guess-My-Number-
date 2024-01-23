'use strict';
const resetBtn = document.querySelector('.again');
const num = document.querySelector('.number');
const guessInput = Number(document.querySelector('.guess').value);
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
num.textContent = secretNumber;

console.log(typeof guessInput);

checkBtn.addEventListener('click', () => {

    if (!guessInput) {
        message.textContent = '⛔ No Number!';
    } else if (guessInput == secretNumber) {
        message.textContent = '🥳Correct Number!';
    }
});




















