// Defining Variables to be used at a later time
let computerSelection = null;
let playerSelection = null;
let playerScore = 0;
let computerScore = 0;


function computerChoice() {
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
    return computerSelection;
}

function playerChoice() {
    playerPrompt = prompt('Make a choice: Rock, Paper, or Scissors');
    let promptNew = playerPrompt.toLowerCase();
    playerSelection = promptNew.charAt(0).toUpperCase() + promptNew.slice(1);
    return playerSelection;
}

function playerWin() {
    playerScore = playerScore + 1;
    console.log(playerSelection + ' beats ' + computerSelection + ' you win the round!');
}

function playRound() {

    computerChoice();
    playerChoice();

    if (playerSelection === computerSelection) {
        console.log('You chose the same answers! Restart this play!')
        playRound();
    }
    else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        playerWin();
    }
    else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        playerWin();
    }
    else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        playerWin();
    }
    else {
        computerScore = computerScore + 1;
        console.log('You lost the round... ' + computerSelection + ' beats ' + playerSelection);
    }
}
function Game() {
    for (i=0; i<=5; i++) { // For loop instead of typing playRound 5 times
        playRound();
        console.log('Current Score is Player: ' + playerScore + ' ---- Computer: ' + computerScore)
    }
    
    if (playerScore > computerScore) {
        console.log('You win the game!')
    }
    else {
        console.log('You lose the game!')
    }
}
Game();