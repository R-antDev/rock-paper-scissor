function capitalizeFirstLetter(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    let botChoiceDiv = document.getElementById("bot-choice-div");
    botChoiceDiv.innerText = capitalizeFirstLetter(choices[computerChoice]);
    return choices[computerChoice];
}

function getPlayerChoice(id) {
    let playerChoice = id
    let playerChoiceDiv = document.getElementById("player-choice-div");
    playerChoiceDiv.innerText = capitalizeFirstLetter(playerChoice);

    playerChoice = playerChoice.toLowerCase();
    game(playerChoice);
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Game Draw";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win";
    } else {
        return "You Lose";
    }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = document.getElementById("result-text");
    result.innerText = playRound(playerSelection, computerSelection);
}
