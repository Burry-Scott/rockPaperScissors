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

    switch (playerSelection) {                                      // For this game rock will be 1, paper will be 2,
        case 'ROCK':                                                // and scissors will be 3. 
            playerSelection = 1;
            break;
        case 'PAPER':
            playerSelection = 2;
            break;
        case 'SCISSORS':
            playerSelection = 3;
            break;
    }
    
    return playerSelection;
}

computerSelection();
playerSelection();
console.log(playerSelection);
console.log(computerSelection);
let resultOfRound = 0; 


function playRound() {
    let x = playerSelection;
    let y = computerSelection; 
    
    if (x == 1 && y == 1) {                                          //Incrementing the result positive for player
        return resultOfRound;                                         // and negative for the computer. 
    } else if (x == 1 && y == 2) {        
        resultOfRound = --resultOfRound;
    } else if (x == 1 && y == 3) {
        resultOfRound = ++resultOfRound;
        return resultOfRound;
    } else if (x == 2 && y == 1) {
        resultOfRound = ++resultOfRound;
        return resultOfRound;
    } else if (x == 2 && y == 2) {
        return resultOfRound;
    } else if (x == 2 && y == 3) {
        resultOfRound = --resultOfRound;
        return resultOfRound;
    } else if (x == 3 && y == 1) {
        resultOfRound = --resultOfRound;
        return resultOfRound;
    } else if (x == 3 && y == 2) {
        resultOfRound = ++resultOfRound;
        return resultOfRound;
    } else {
        return resultOfRound;
    }
}



playRound();
console.log(resultOfRound);
