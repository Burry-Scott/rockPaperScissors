let computerChoice;
let resultOfRound; 
let resultOfGame;
let playerChoice; 

function getComputerChoice() { 
    computeChoice = 0;        
    computerChoice = Math.floor(Math.random() * (3-0) + 1);      
    return computerChoice;
}

function getPlayerChoice() {
    do {
        playerChoice = prompt("Please select Paper, Rock, or Scissors");
        playerChoice = playerChoice.toUpperCase();
    }   while(playerChoice != 'ROCK' &&
              playerChoice != 'PAPER' &&
              playerChoice != 'SCISSORS');
    
    switch (playerChoice) {                                         // For this game rock will be 1, paper will be 2,
        case 'ROCK':                                                // and scissors will be 3. 
            playerChoice = 1;
            break;
        case 'PAPER':
            playerChoice = 2;
            break;
        case 'SCISSORS':
            playerChoice = 3;
            break;
    }
    return playerChoice;
}


function playRound() {
    resultOfRound = 0;
    getComputerChoice();
    getPlayerChoice();
    let x = playerChoice;
    let y = computerChoice; 
    
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

function playgame() {
    resultOfGame = 0
    for ( let i = 0; i < 5; i++) {                                     //Runs 5 rounds for each game
        playRound();
        if (resultOfRound == 1) {
            resultOfGame++;
            console.log("You won that one.");
        } else if (resultOfRound == -1) {
            resultOfGame--;
            console.log("You lost that one.");
        } else {
            resultOfGame = resultOfGame;
            console.log("That one was a tie.");
        }
    }

    if (resultOfGame > 0) {
        console.log("You WIN!");
    } else if (resultOfGame < 0) {
        console.log("You LOSE!");
    } else {
        console.log("Its a tie!!");
    }
}


playgame();