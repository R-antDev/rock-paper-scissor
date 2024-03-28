
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "Win";
    } else {
        return "Lose";
    }
}

function game() {
    console.log("Welcome to Rock, Paper, Scissors!");
    let gameRound = parseInt(prompt("How many rounds do you want to play?"));
    for (let i = 1; i <= gameRound; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i}: You chose: ${playerSelection} vs. the computer: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();