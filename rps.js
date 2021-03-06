let playerScore = 0;
let compScore = 0;

// Get a random choice from the computer

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    let choice = Math.floor(Math.random() * 3);
    let play = choices[choice];

    return play;
}

// Play a round with selection from both player and computer

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        resultPara.textContent = `${playerSelection} matches ${computerSelection}, it's a tie.`;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        resultPara.textContent = `${computerSelection} beats ${playerSelection}, you lose...`;
        compScore += 1;
    } else {
        resultPara.textContent = `${playerSelection} beats ${computerSelection}, you win!`;
        playerScore += 1;
    }
}

function scoreCheck(player, CPU) {
    let btns = [[rockBtn, clicked1], [paperBtn, clicked2], [scissorsBtn, clicked3]];

    if (CPU == 5) {
        scores.textContent = 'The computer has reached 5 points, you lose.';
        for (let i = 0; i < btns.length; i++) {
            btns[i][0].removeEventListener('click', btns[i][1]);
        }
    } else if (player == 5) {
        scores.textContent = 'You have reached 5 points, you win!';
        for (let i = 0; i < btns.length; i++) {
            btns[i][0].removeEventListener('click', btns[i][1]);
        }
    } else {
        return;
    }
}

// Play a full game, best 3 out of 5

/* function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?", "");
        let computerSelection = computerPlay();

        let outcome = playRound(playerSelection, computerSelection);

        score += outcome[1];
        console.log(outcome[0]);
    }

    if (score > 0) {
        console.log(`Your score was ${score}, you win!`);
    } else if (score < 0) {
        console.log(`Your score was ${score}, you lost...`);
    } else {
        // Just in case
        console.log(`Your score was ${score}, you tied.`);
    }
}

game(); */

// Set variables for buttons and paragraphs

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const resultBox = document.querySelector('#results');
const resultPara = document.querySelector('#resultmessage');
const scores = document.querySelector('#scores');

// Add event listeners to play each game with respective choice

rockBtn.addEventListener('click', clicked1 = function () {
    playRound('rock');
    if ((playerScore == 5) || (compScore == 5)) {
        scoreCheck(playerScore, compScore);
    } else {
        scores.textContent = `${playerScore} | ${compScore}`;
    }
});

paperBtn.addEventListener('click', clicked2 = function () {
    playRound('paper');
    if ((playerScore == 5) || (compScore == 5)) {
        scoreCheck(playerScore, compScore);
    } else {
        scores.textContent = `${playerScore} | ${compScore}`;
    }
});

scissorsBtn.addEventListener('click', clicked3 = function () {
    playRound('scissors');
    if ((playerScore == 5) || (compScore == 5)) {
        scoreCheck(playerScore, compScore);
    } else {
        scores.textContent = `${playerScore} | ${compScore}`;
    }
});