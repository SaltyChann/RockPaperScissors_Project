// Just Defining variables to be changed later
let computerChoice = 'Computer is failing';
let playerChoice = 'Player is not working';

function computerSelection() {
    computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0) {
            computerChoice = 'Rock';
        }
        else if (computerChoice === 1) {
            computerChoice = 'Paper';
        }
        else {
            computerChoice = 'Scissors';
        }
}

function playerSelection() {
    playerChoice = prompt("What's youre move?");
}

function playRound() {
    computerSelection();
    playerSelection();
    console.log('Player has chosen ' + playerChoice);
    console.log('Computer has chosen ' + computerChoice);
}

playRound();