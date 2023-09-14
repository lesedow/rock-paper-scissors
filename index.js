import { playRound, getScore } from './gameLogic.js';

const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const verdictElement = document.getElementById('verdict');

function getPlayerChoice (event) {
    const dataChoiceAttribute = event.target.getAttribute('data-choice');
    if (!dataChoiceAttribute) return;

    const verdict = playRound(dataChoiceAttribute);
    setVerdict(verdict);
}

function updateScore () {
    const score = getScore();
    scoreElement.textContent = `Player - ${score.playerScore}| Computer - ${score.compScore}`;
}

function setVerdict (verdict) {
    verdictElement.textContent = verdict;
    updateScore();
}
 
gameContainer.addEventListener('click', getPlayerChoice);
