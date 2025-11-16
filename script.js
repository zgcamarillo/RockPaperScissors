// Selecting elements 
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const gameResult = document.querySelector("#gameResult");
const choiceButtons = document.querySelectorAll(".choices");

const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

// Score variables
let playerScore = 0;
let computerScore = 0;

let player;
let computer;

// Button click logic
choiceButtons.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();

    playerChoiceDisplay.textContent = player;
    computerChoiceDisplay.textContent = computer;
    gameResult.textContent = checkWinner();
}));

// Random computer choice
function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1: computer = "ROCK"; break;
        case 2: computer = "PAPER"; break;
        case 3: computer = "SCISSORS"; break;
    }
}

// Winner checker
function checkWinner() {
    if (player === computer) {
        return "ITS A TIE";
    }

    if (computer === "ROCK") {
        if (player === "PAPER") {
            playerScore++;
            updateScore();
            return "YOU WIN!";
        } else {
            computerScore++;
            updateScore();
            return "BOO TOMATOES TOMATOES";
        }
    }

    if (computer === "PAPER") {
        if (player === "SCISSORS") {
            playerScore++;
            updateScore();
            return "YOU WIN!";
        } else {
            computerScore++;
            updateScore();
            return "BOO TOMATOES TOMATOES";
        }
    }

    if (computer === "SCISSORS") {
        if (player === "ROCK") {
            playerScore++;
            updateScore();
            return "YOU WIN!";
        } else {
            computerScore++;
            updateScore();
            return "BOO TOMATOES TOMATOES";
        }
    }
}

// Update scoreboard
function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
