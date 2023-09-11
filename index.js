const availableChoices = ['rock', 'paper', 'scissors']; 

function getCompChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let compChoice = availableChoices[randomNumber];
    return compChoice;
}
