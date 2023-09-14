const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');

function getPlayerChoice (event) {
    const dataChoiceAttribute = event.target.getAttribute('data-choice');
    if (!dataChoiceAttribute) return;

    const verdict = playRound(dataChoiceAttribute);
    setVerdict(verdit);
}

function updateScore () {

}

function setVerdict (verdict) {

}
 
gameContainer.addEventListener('click', getPlayerChoice);
