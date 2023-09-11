const availableChoices = ['rock', 'paper', 'scissors']; 
let playerScore = 0;
let compScore = 0;

function getCompChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let compChoice = availableChoices[randomNumber];
    return compChoice;
}

function playRound (computerChoice, playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let verdict = `${playerChoice} vs ${computerChoice} | `;

    if (
        playerChoice !== 'rock' && 
        playerChoice !== 'paper' && 
        playerChoice !== 'scissors'
    ) {
        verdict = 'Your choice is invalid!';
        return verdict;
    }
     
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
            verdict += 'You win! Paper beats Rock.';
            playerScore++;
        }
    }


    return verdict;
}

function game () {
    let playerChoice = prompt('Rock, Paper, Scissors:');
    let compChoice = getCompChoice();

    let verdict = playRound(compChoice, playerChoice);
    console.log(verdict);
    console.log(`Score: ${playerScore} Player | ${compScore} Computer`);
}

for (let i = 0; i < 5; i++) { game() }