// Just Defining variables to be changed later
let computerChoice = 'Computer choice is broken';
let playerChoice = 'Player choice is broken';
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
/** ----------------------------------- */
function playerWin() {
    playerScore = playerScore + 1;
    console.log('You won the round!');
    currentRound = currentRound + 1;
}
function computerWin() {
    computerScore = computerScore + 1;
    console.log('You lost the round!')
    currentRound = currentRound + 1;
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
    playerChoice = prompt("What's youre move?").toLowerCase();
}

function playRound() {
    computerSelection();
    playerSelection();

    console.log('The current Round is: Round ' + currentRound);
    console.log('Player has chosen ' + playerChoice);
    console.log('Computer has chosen ' + computerChoice);

    if (playerChoice === computerChoice) {
        console.log("Y'all chose the same move! It's a tie!");
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
function playGame() {
       for (currentRound = 1; currentRound < 4;) {
        playRound(); 
        }

    if (playerScore > computerScore) {
        console.log('Sheesh you beat the computer!');
    }
    else if (playerScore == computerScore) {
        console.log('Yall tied wtf');
    }
    else {
        console.log('You lose! LOSER!')
    }
}
playGame();

// Must auto lowercase everything, or capitalize first letter
// Must make player input be correctly spelled