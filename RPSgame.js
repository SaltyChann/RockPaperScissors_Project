// Just Defining variables to be changed later
let computerChoice = 'Computer choice is broken';
let playerChoice = 'Player choice is broken';
let playerScore = 0;
let computerScore = 0;

function playerWin() {
    playerScore = playerScore + 1;
    console.log('You won the round!')
}

function computerWin() {
    computerScore = computerScore + 1;
    console.log('You lost the round!')
}

function computerSelection() {
    computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0) {
            computerChoice = 'rock';
        }
        else if (computerChoice === 1) {
            computerChoice = 'paper';
        }
        else {
            computerChoice = 'scissors';
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

    if (playerChoice === computerChoice) {
        console.log("Y'all chose the same move! It's a tie!")
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerWin();
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerWin();
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerWin();
    }
    else {
        computerWin();
    }
    console.log('The current score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
}