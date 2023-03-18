function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
}


function setPlayerChoice(playerChoice) {
    if (playerChoice.toUpperCase() === 'ROCK') {
        playerChoice = 'Rock';
    }
    
    else if (playerChoice.toUpperCase() === 'PAPER') {
        playerChoice = 'Paper';
    }

    else if (playerChoice.toUpperCase() === 'SCISSORS') {
        playerChoice = 'Scissors';
    }

    else return 1;

    return playerChoice;

}

function round(player, computer) {

    if (player === 'Rock' && computer == 'Scissors') {
        return 0;
    }

    else if (player === 'Scissors' && computer == 'Paper') {
        return 0;
    }

    else if (player === 'Paper' && computer == 'Rock') {
        return 0;
    }

    if (computer === 'Rock' && player == 'Scissors') {
        return 1;
    }

    else if (computer === 'Scissors' && player == 'Paper') {
        return 1;
    }

    else if (computer === 'Paper' && player == 'Rock') {
        return 1;
    }

    else return 2;

}

function game() {

    let choices = ['Rock', 'Paper', 'Scissors'];

    const playerContainer = document.querySelector('.player');
    const compContainer = document.querySelector('.computer');
    const result = document.querySelector('.result');

    const pChoice = document.createElement('h1');
    const cChoice = document.createElement('h1');
    

    let playerChoice;

    while (true) {

        playerChoice = prompt('What do you choose?');

        if (setPlayerChoice(playerChoice) === 1) {
            console.log('Please enter a valid option.');
        }

        else {
            playerChoice = setPlayerChoice(playerChoice);
            pChoice.textContent = playerChoice;
            break;
        }
        

    }

    playerContainer.appendChild(pChoice);

    let computerChoice = getComputerChoice(choices);
    cChoice.textContent = computerChoice;
    compContainer.appendChild(cChoice);

    if (round(playerChoice, computerChoice) === 0) {
        result.textContent = 'dub';
    }

    else if (round(playerChoice, computerChoice) === 1) {
        result.textContent = 'l';
    }

    else if (round(playerChoice, computerChoice) === 2) {
        result.textContent = 'draw';
    }

}


game();