// Defining Variables to be used at a later time
let computerSelection = null;
let playerSelection = null;
let playerScore = 0;
let computerScore = 0;


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
    return computerSelection;
}

function playerWin() {
    playerScore = playerScore + 1;
    console.log(playerSelection + ' beats ' + computerSelection + ' you win the round!');
}

function playRound() {
    playerSelection = prompt('Make a choice: Rock, Paper, or Scissors');
    computerPlay();

    /* -- This one is currently not working in a tie scenario -- */ if (computerSelection === playerSelection) {
        console.log('You choose the same move! Play again!');
        //playRound();
    }
    else if (computerSelection === 'Rock' && playerSelection === 'paper') {
        playerWin();
    }
    else if (computerSelection === 'Paper' && playerSelection === 'scissors') {
        playerWin();
    }
    else if (computerSelection === 'Scissors' && playerSelection === 'rock') {
        playerWin();
    }
    else if (computerSelection === playerSelection) {
        console.log('You both chose the same, replay the round!');
        playRound();
    }
    else {
        computerScore = computerScore + 1;
        console.log('Sorry you chose wrong! Computer chose: ' + computerSelection);
    }
    console.log('Current Score is Player: ' + playerScore + ' ---- Computer: ' + computerScore)
}
function Game() {
    for (i=0; i<=5; i++) { // For loop instead of typing playRound 5 times
        playRound();
    }
    
    if (playerScore > computerScore) {
        console.log('You win the game!')
    }
    else {
        console.log('You lose the game!')
    }
}
Game();