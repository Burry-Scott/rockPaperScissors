let computerSelection = function getComputerChoice() {         
    computerSelection = Math.floor(Math.random() * (3-0) + 1);
    return computerSelection;
}

let playerSelection = function getUserInput() {
    do {
        playerSelection = prompt("Please select Paper, Rock, or Scissors");
        playerSelection = playerSelection.toUpperCase();
    }   while(playerSelection != 'ROCK' &&
              playerSelection != 'PAPER' &&
              playerSelection != 'SCISSORS');

    return playerSelection;
}

playerSelection();
console.log(playerSelection);