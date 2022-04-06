function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    let choice = Math.floor(Math.random() * 3);
    let play = choices[choice];

    return play;
}

console.log(computerPlay());