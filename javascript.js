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

function round(player, computer) {

    const w = 'dub';
    const l = 'l';
    const draw = 'draw';

    if (player === 'Rock' && computer == 'Scissors') {
        return w;
    }

    else if (player === 'Scissors' && computer == 'Paper') {
        return w;
    }

    else if (player === 'Paper' && computer == 'Rock') {
        return w;
    }

    if (computer === 'Rock' && player == 'Scissors') {
        return l;
    }

    else if (computer === 'Scissors' && player == 'Paper') {
        return l;
    }

    else if (computer === 'Paper' && player == 'Rock') {
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

        console.log(playerChoice);
        console.log(computerChoice);
        console.log(round(playerChoice, computerChoice));
    });

    btn2.addEventListener('click', () => {
        playerChoice = 'Paper';
        computerChoice = getComputerChoice(choices);

        console.log(playerChoice);
        console.log(computerChoice);
        console.log(round(playerChoice, computerChoice));
    });

    btn3.addEventListener('click', () => {
        playerChoice = 'Scissors';
        computerChoice = getComputerChoice(choices);

        console.log(playerChoice);
        console.log(computerChoice);
        console.log(round(playerChoice, computerChoice));
    });


}


game();