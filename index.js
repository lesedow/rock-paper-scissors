const availabeChoices = ['rock', 'paper', 'scissors']; 

function getCompChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let compChoice = availabeChoices[randomNumber];
    return compChoice;
}
