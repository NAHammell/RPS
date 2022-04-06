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

}

const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

console.log(computerSelection);