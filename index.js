const availableChoices = ['rock', 'paper', 'scissors']; 

function getCompChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let compChoice = availableChoices[randomNumber];
    return compChoice;
}

function playRound (compChoice, playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let verdict = `${playerChoice} vs ${compChoice} | `;

    if (
        playerChoice !== 'rock' && 
        playerChoice !== 'paper' && 
        playerChoice !== 'scissors'
    ) {
        verdict = 'Your choice is invalid!';
        return verdict;
    }
     
    if (playerChoice === compChoice) {
        verdict = `${playerChoice} vs ${compChoice} | It's a draw!`;
        return verdict;
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            verdict += 'You lose! Paper beats Rock.';
        } else {
            verdict += 'You win! Rock beats Scissors.';
        } 
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            verdict += 'You lose! Scissors beats Paper.';
        } else {
            verdict += 'You win! Paper beats Rock.';
        }
    } else {
        if (computerChoice === 'rock') {
            verdict += 'You lose! Rock beats Scissors.';
        } else {
            verdict += 'You win! Paper beats Rock.';
        }
    }


    return verdict;
}
