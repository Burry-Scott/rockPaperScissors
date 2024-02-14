let computerChoice;
let resultOfRound = 0; 
let resultOfGame = 0;
let playerChoice; 

function getComputerChoice() { 
    computerChoice = 0;        
    computerChoice = Math.floor(Math.random() * (3-0) + 1);      
    return computerChoice;
}

function playRound() {
    getComputerChoice();
    let x = playerChoice;
    let y = computerChoice; 
    let divResult = document.createElement('div');
    div.appendChild(divResult);

    if (x == 1 && y == 1) { 
        divResult.textContent = "You each chose rock, its a tie";            //Incrementing the result positive for player
        return resultOfRound;                                     // and negative for the computer. 
    } else if (x == 1 && y == 2) {        
        divResult.textContent = "You chose rock and they chose paper, you lose"; 
        resultOfRound--;
        return resultOfRound;
    } else if (x == 1 && y == 3) {
        divResult.textContent = "You chose rock and they chose scissors, you win"; 
        resultOfRound++;
        return resultOfRound;
    } else if (x == 2 && y == 1) {
        divResult.textContent = "You chose paper and they chose rock, you win"; 
        resultOfRound++;
        return resultOfRound;
    } else if (x == 2 && y == 2) {
        divResult.textContent = "You each chose paper, its a tie"; 
        return resultOfRound;
    } else if (x == 2 && y == 3) {
        divResult.textContent = "You chose paper and they chose scissors, you lose"; 
        resultOfRound--;
        return resultOfRound;
    } else if (x == 3 && y == 1) {
        divResult.textContent = "You chose scissors and they chose rock, you lose"; 
        resultOfRound--;
        return resultOfRound;
    } else if (x == 3 && y == 2) {
        divResult.textContent = "You chose scissors and they chose paper, you win"; 
        resultOfRound++;
        return resultOfRound;
    } else {
        divResult.textContent = "You each chose scissors, its a tie"; 
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
buttonScissors.setAttribute('id', 'scissors');

let div = document.createElement('div');
document.body.appendChild(div);

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
    console.log(resultOfRound);
    resultOfGame++;
    if (resultOfGame === 5) {
        let divGame = document.createElement('div');
        div.appendChild(divGame);
        if (resultOfRound < 0){
            divGame.textContent = 'You lose!'
        } else if (resultOfRound > 0) {
            divGame.textContent = 'You Win!'
        } else {
            divGame.textContent = 'Its a tie!'
        }
        resultOfGame = 0;
        return resultOfGame;
    }
    
})
