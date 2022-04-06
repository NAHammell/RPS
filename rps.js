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
        return "You won! Rock beats scissors.";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "You tied! Rock and rock match.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lost! Rock loses to paper.";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You won! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "You tied! Paper and paper match.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lost! Paper loses to scissors.";
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You won! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "You tied! Scissors and scissors match.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lost! Scissors loses to rock.";
    } else {
        return "An error has occurred...";
    }
}

// Play a full game, best 3 out of 5

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?", "");
        let computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();