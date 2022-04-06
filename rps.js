// Get a random choice from the computer

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    let choice = Math.floor(Math.random() * 3);
    let play = choices[choice];

    return play;
}

// Play a round with selection from both player and computer

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return ["You won! Rock beats scissors.", 1];
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return ["You tied! Rock and rock match.", 0];
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return ["You lost! Rock loses to paper.", -1];
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return ["You won! Paper beats rock.", 1];
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return ["You tied! Paper and paper match.", 0];
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ["You lost! Paper loses to scissors.", -1];
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return ["You won! Scissors beats paper.", 1];
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return ["You tied! Scissors and scissors match.", 0];
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ["You lost! Scissors loses to rock.", -1];
    } else {
        return "An error has occurred...";
    }
}

// Play a full game, best 3 out of 5

function game() {
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

game();