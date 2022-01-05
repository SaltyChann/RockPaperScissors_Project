// Defining Variables to be used at a later time
let computerSelection = null;
let playerSelection = null;
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

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
    playerPrompt = prompt('Make a choice: Rock, Paper, or Scissors');//Takes user input
    let promptNew = playerPrompt.toLowerCase();//changes input to all lowercase to be changed later
    playerSelection = promptNew.charAt(0).toUpperCase() + promptNew.slice(1);//changes the all lowercase and makes first letter uppercase
    return playerSelection;
}

function playerWin() {
    playerScore = playerScore + 1;
    console.log(playerSelection + ' beats ' + computerSelection + ', you win the round!');
}

function playRound() {
    currentRound = currentRound + 1;
    displayRound();
    computerChoice();
    playerChoice();

    if (playerSelection === computerSelection) {
        console.log('You chose the same answers! Round will restart!')
        currentRound = currentRound - 1;
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
function tiedGame() {
    console.log('The game is currently tied... Play one more round for an overtime win!')

    playRound();

    if (playerScore > computerScore) {
        console.log('You won during overtime! --- Final Score... Player: ' + playerScore + ' --- Computer: ' + computerScore);
    }
    else if (playerScore === computerScore) {
        tiedGame();
    }
    else {
        console.log('You lost during overtime... Game Over')
    }
}
function displayRound() {
    console.log('Round ' + currentRound);
}
function Game() {
    for (i=0; i<=3; i++) { // For loop instead of typing playRound 5 times
        playRound();
        console.log('Current Score is --- Player: ' + playerScore + ' ---- Computer: ' + computerScore)
    }
    
    if (playerScore > computerScore) {
        console.log('You win the game!')
    }
    else if (playerScore === computerScore) {
        tiedGame();
    }
    else {
        console.log('You lose the game!')
    }
}
Game();