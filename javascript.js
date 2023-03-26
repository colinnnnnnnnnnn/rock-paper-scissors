function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
}


let playerScore = 0;
let computerScore = 0;

const score = document.querySelector('.score');
score.setAttribute('style', 'white-space: pre;');
score.textContent = 'Player score: ' + playerScore + '\r\nComputer score: ' + computerScore;

const result = document.querySelector('.result');
result.setAttribute('style', 'font-size: 20px;');

const playerText = document.querySelector('.player');
const computerText = document.querySelector('.computer');

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

function over() {
    if (playerScore == 5) {
        console.log('bravo');
        result.textContent = 'Bravo';
        return 1;
    }

    if (computerScore == 5) {
        console.log('loh');
        result.textContent = 'Loh';
        return 2;
    }

    else {
        return 0;
    }
}


const choices = ['Rock', 'Paper', 'Scissors'];
let playerChoice;
let computerChoice;


let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');


btn1.addEventListener('click', () => {

    if (over() == 0) {
        playerChoice = 'Rock';
        computerChoice = getComputerChoice(choices);

        playerText.textContent = 'Your Choice: ' + playerChoice;
        computerText.textContent = 'Computer Choice: ' + computerChoice;

        console.log(round(playerChoice, computerChoice));
        score.textContent = 'Player score: ' + playerScore + '\r\nComputer score: ' + computerScore;

        over();
    }
    


});

btn2.addEventListener('click', () => {

    if (over() == 0) {
        playerChoice = 'Paper';
        computerChoice = getComputerChoice(choices);

        playerText.textContent = 'Your Choice: ' + playerChoice;
        computerText.textContent = 'Computer Choice: ' + computerChoice;

        console.log(round(playerChoice, computerChoice));
        score.textContent = 'Player score: ' + playerScore + '\r\nComputer score: ' + computerScore;

        over();
    }


});

btn3.addEventListener('click', () => {

    if (over() == 0) {
        playerChoice = 'Scissors';
        computerChoice = getComputerChoice(choices);
        
        playerText.textContent = 'Your Choice: ' + playerChoice;
        computerText.textContent = 'Computer Choice: ' + computerChoice;

        console.log(round(playerChoice, computerChoice));
        score.textContent = 'Player score: ' + playerScore + '\r\nComputer score: ' + computerScore;
    
        over();
    }
});


