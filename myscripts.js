let computerChoice;
let resultOfRound; 
let resultOfGame;
let playerChoice; 

function getComputerChoice() { 
    computerChoice = 0;        
    computerChoice = Math.floor(Math.random() * (3-0) + 1);      
    return computerChoice;
}

function playRound() {
    resultOfRound = 0;
    getComputerChoice();
    let x = playerChoice;
    let y = computerChoice; 
    
    if (x == 1 && y == 1) { 
        console.log("You each chose rock, its a tie");            //Incrementing the result positive for player
        return resultOfRound;                                     // and negative for the computer. 
    } else if (x == 1 && y == 2) {        
        resultOfRound = --resultOfRound;
        console.log("You chose rock and they chose paper, you lose"); 
        return resultOfRound;
    } else if (x == 1 && y == 3) {
        resultOfRound = ++resultOfRound;
        console.log("You chose rock and they chose scissors, you win"); 
        return resultOfRound;
    } else if (x == 2 && y == 1) {
        resultOfRound = ++resultOfRound;
        console.log("You chose paper and they chose rock, you win"); 
        return resultOfRound;
    } else if (x == 2 && y == 2) {
        console.log("You each chose paper, its a tie"); 
        return resultOfRound;
    } else if (x == 2 && y == 3) {
        resultOfRound = --resultOfRound;
        console.log("You chose paper and they chose scissors, you lose"); 
        return resultOfRound;
    } else if (x == 3 && y == 1) {
        resultOfRound = --resultOfRound;
        console.log("You chose scissors and they chose rock, you lose"); 
        return resultOfRound;
    } else if (x == 3 && y == 2) {
        resultOfRound = ++resultOfRound;
        console.log("You chose scissors and they chose paper, you win"); 
        return resultOfRound;
    } else {
        console.log("You each chose scissors, its a tie"); 
        return resultOfRound;
    }
}

const buttonRock = document.createElement('button'); 
const buttonPaper = document.createElement('button'); 
const buttonScissors = document.createElement('button'); 

buttonRock.textContent = "ROCK";
document.body.appendChild(buttonRock);
buttonRock.setAttribute('id', 'rock')

buttonPaper.textContent = "PAPER";
document.body.appendChild(buttonPaper);
buttonPaper.setAttribute('id', 'paper')


buttonScissors.textContent = "SCISSORS";
document.body.appendChild(buttonScissors);
buttonScissors.setAttribute('id', 'scissors')

document.addEventListener('click', (event) => {
    let choice = event.target;

    switch(choice.id) {
        case 'rock' :
            playerChoice = 1;
            playRound();
            break;
        case 'paper' :
            playerChoice = 2;
            playRound();
            break;
        case 'scissors' :
            playerChoice = 3;
            playRound();
            break;
        
    }
})