let playerScore = 0;
let compScore = 0;

function getCompChoice() {
    const availableChoices = ['rock', 'paper', 'scissors']; 
    let randomNumber = Math.floor(Math.random() * 3);
    let compChoice = availableChoices[randomNumber];
    return compChoice;
}

export function playRound (playerChoice) {
    const computerChoice = getCompChoice();
    playerChoice = playerChoice.toLowerCase();
    let verdict = `${playerChoice} vs ${computerChoice} | `;
     
    if (playerChoice === computerChoice) {
        verdict = `${playerChoice} vs ${computerChoice} | It's a draw!`;
        return verdict;
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            verdict += 'You lose! Paper beats Rock.';
            compScore++;
        } else {
            verdict += 'You win! Rock beats Scissors.';
            playerScore++;
        } 
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            verdict += 'You lose! Scissors beats Paper.';
            compScore++;
        } else {
            verdict += 'You win! Paper beats Rock.';
            playerScore++;
        }
    } else {
        if (computerChoice === 'rock') {
            verdict += 'You lose! Rock beats Scissors.';
            compScore++;
        } else {
            verdict += 'You win! Scissors beats Paper.';
            playerScore++;
        }
    }

    return verdict;
}

export function getScore () {
    return { playerScore, compScore };
}