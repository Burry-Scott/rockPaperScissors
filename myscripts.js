let computerChoice;
let playerScore = 0;
let compScore = 0; 
let resultOfGame = 0;
let playerChoice;

const buttonRock = document.createElement('button'); 
const buttonPaper = document.createElement('button'); 
const buttonScissors = document.createElement('button');
const buttonReset = document.createElement('button');  

buttonRock.textContent = "ROCK";
document.body.appendChild(buttonRock);
buttonRock.setAttribute('id', 'rock');
buttonRock.setAttribute('class', 'button');

buttonPaper.textContent = "PAPER";
document.body.appendChild(buttonPaper);
buttonPaper.setAttribute('id', 'paper');
buttonPaper.setAttribute('class', 'button');


buttonScissors.textContent = "SCISSORS";
document.body.appendChild(buttonScissors);
buttonScissors.setAttribute('id', 'scissors');
buttonScissors.setAttribute('class', 'button');

let div = document.createElement('div');
document.body.appendChild(div);

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
    divResult.className = 'erase';
    div.appendChild(divResult);

    if (x == 1 && y == 1) { 
        divResult.textContent = "You each chose rock.";                        
        return;                                                               
    } else if (x == 1 && y == 2) {        
        divResult.textContent = "You chose rock and they chose paper."; 
        compScore++;
        return compScore;
    } else if (x == 1 && y == 3) {
        divResult.textContent = "You chose rock and they chose scissors."; 
        playerScore++;
        return playerScore;
    } else if (x == 2 && y == 1) {
        divResult.textContent = "You chose paper and they chose rock."; 
        playerScore++;
        return playerScore;
    } else if (x == 2 && y == 2) {
        divResult.textContent = "You each chose paper."; 
        return;
    } else if (x == 2 && y == 3) {
        divResult.textContent = "You chose paper and they chose scissors."; 
        compScore++;
        return compScore;
    } else if (x == 3 && y == 1) {
        divResult.textContent = "You chose scissors and they chose rock."; 
        compScore++;
        return compScore;
    } else if (x == 3 && y == 2) {
        divResult.textContent = "You chose scissors and they chose paper."; 
        playerScore++;
        return playerScore;
    } else {
        divResult.textContent = "You each chose scissors."; 
        return;
    }
    
}

function createDivForScores() {
    let roundDiv = document.createElement('div');
    roundDiv.textContent = "The score is Computer " + compScore + " and Player " + playerScore;
    roundDiv.className = 'erase';
    div.appendChild(roundDiv)
}

function endRound() {
    if (resultOfGame === 5 && playerScore < compScore){
        alert('You lose the game!');
        document.querySelectorAll('.erase').forEach(e => e.remove());
        resultOfGame = 0;
        playerScore = 0;
        compScore = 0;
        return;
    } else if (resultOfGame === 5 && playerScore > compScore) {
        alert('You win the game!');
        document.querySelectorAll('.erase').forEach(e => e.remove());
        resultOfGame = 0;
        playerScore = 0;
        compScore = 0;
        return;
    } else if (resultOfGame === 5 && playerScore === compScore) {
        alert('The game is a tie!!');
        document.querySelectorAll('.erase').forEach(e => e.remove());
        resultOfGame = 0;
        playerScore = 0;
        compScore = 0;
        return;
    } else {
        return;
    }
}

document.addEventListener('click', (event) => {
    let choice = event.target;
    if (choice.id === 'rock' && resultOfGame !== 5) {
            playerChoice = 1;
            playRound();
            createDivForScores();
            resultOfGame++;
            return;
    } else if (choice.id === 'paper' && resultOfGame !== 5) {
            playerChoice = 2;
            playRound();
            createDivForScores();
            resultOfGame++;
            return;
    } else if (choice.id === 'scissors' && resultOfGame !== 5) {
            playerChoice = 3;
            playRound();
            createDivForScores();
            resultOfGame++;
            return;
    } else {
        endRound();
    }
})
