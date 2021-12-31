// Defining Variables to be used at a later time
let computerSelection = null;
let playerSelection = null;

function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3 + 1); // Makes computer selection choose randomly 1-3
    // Makes changes the computers choice to readable moves (Rock, Paper, Scissors)
    if (computerSelection === 1) {
        computerSelection = 'Rock';
    }
    else if (computerSelection === 2) {
        computerSelection = 'Paper';
    }
    else {
        computerSelection = 'Scissors';
    }
}
function playRound() {
    
}