function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
}


// function setPlayerChoice(playerChoice) {
//     if (playerChoice.toUpperCase() === 'ROCK') {
//         playerChoice = 'Rock';
//     }
    
//     else if (playerChoice.toUpperCase() === 'PAPER') {
//         playerChoice = 'Paper';
//     }

//     else if (playerChoice.toUpperCase() === 'SCISSORS') {
//         playerChoice = 'Scissors';
//     }

//     else return 1;

//     return playerChoice;

// }

let playerScore = 0;
let computerScore = 0;

const score = document.querySelector('.score');
score.setAttribute('style', 'white-space: pre;');
score.textContent = 'Player score: ' + playerScore + '\r\nComputer score: ' + computerScore;

function round(player, computer) {

    const w = 'dub';
    const l = 'l';
    const draw = 'draw';

    if (player === 'Rock' && computer == 'Scissors') {
        playerScore++;
        return w;
    }

    else if (player === 'Scissors' && computer == 'Paper') {
        playerScore++;
        return w;
    }

    else if (player === 'Paper' && computer == 'Rock') {
        playerScore++;
        return w;
    }

    if (computer === 'Rock' && player == 'Scissors') {
        computerScore++;
        return l;
    }

    else if (computer === 'Scissors' && player == 'Paper') {
        computerScore++;
        return l;
    }

    else if (computer === 'Paper' && player == 'Rock') {
        computerScore++;
        return l;
    }

    else return draw;

}


function game() {

    const choices = ['Rock', 'Paper', 'Scissors'];
    let playerChoice;
    let computerChoice;


    let btn1 = document.querySelector('#btn1');
    let btn2 = document.querySelector('#btn2');
    let btn3 = document.querySelector('#btn3');

    btn1.addEventListener('click', () => {
        playerChoice = 'Rock';
        computerChoice = getComputerChoice(choices);

        console.log(round(playerChoice, computerChoice));
        score.textContent = 'Player score: ' + playerScore + '\r\nComputer score: ' + computerScore;

    });

    btn2.addEventListener('click', () => {
        playerChoice = 'Paper';
        computerChoice = getComputerChoice(choices);

    });

    btn3.addEventListener('click', () => {
        playerChoice = 'Scissors';
        computerChoice = getComputerChoice(choices);

    });



}


game();