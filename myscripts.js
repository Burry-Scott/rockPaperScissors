let computerChoice;
let playerScore = 0;
let compScore = 0; 
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

    divResult.className = 'erase';
    div.appendChild(divResult);

    if (x == 1 && y == 1) { 
        divResult.textContent = "You each chose rock.";            //Incrementing the result positive for player
        return;                                                               // and negative for the computer. 
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

const buttonRock = document.createElement('button'); 
const buttonPaper = document.createElement('button'); 
const buttonScissors = document.createElement('button');
const buttonReset = document.createElement('button');  

buttonRock.textContent = "ROCK";
document.body.appendChild(buttonRock);
buttonRock.setAttribute('id', 'rock')

buttonPaper.textContent = "PAPER";
document.body.appendChild(buttonPaper);
buttonPaper.setAttribute('id', 'paper')


buttonScissors.textContent = "SCISSORS";
document.body.appendChild(buttonScissors);
buttonScissors.setAttribute('id', 'scissors');

buttonReset.textContent = "RESET";
document.body.appendChild(buttonReset);
buttonReset .setAttribute('id', 'reset')


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
        case 'reset' :
            document.querySelectorAll('.erase').forEach(e => e.remove());
            resultOfGame = 0;
            playerScore = 0;
            compScore = 0;
            return;
    }

    resultOfGame++;
    let roundDiv = document.createElement('div');
    div.appendChild(roundDiv);
    roundDiv.textContent = "The score is Computer " + compScore + " and Player " + playerScore;
    roundDiv.className = 'erase';

    if (resultOfGame === 5) {
        let divGame = document.createElement('div');
        divGame.className = 'erase';
        div.appendChild(divGame);
        if (playerScore < compScore){
            divGame.textContent = 'You lose the game! Please select RESET'
        } else if (playerScore > compScore) {
            divGame.textContent = 'You win the game! Please select RESET'
        } else {
            divGame.textContent = 'The game is a tie!! Please select RESET'
        }
        return resultOfGame;
    }
    
})
