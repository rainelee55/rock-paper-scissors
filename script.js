function getComputerChoice() {
  const choice = ["rock", "scissors", "paper"];
  const random = Math.floor(Math.random() * 3);
  return choice[random];
}

let playerScore = 0;
let computerScore = 0;

let result_text = document.querySelector(".result");
let playerScore_text = document.querySelector(".player-score");
let computerScore_text = document.querySelector(".computer-score");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    console.log(playRound(playerSelection, computerSelection()));

    let result = playRound(playerSelection, computerSelection());
    result_text.textContent = result;

    if (result.includes("win")) {
      playerScore++;
    }
    else if (result.includes("lose")) {
      computerScore++;
    }

    playerScore_text.textContent = "Player: " + playerScore;
    computerScore_text.textContent = "Computer: " + computerScore;
  })
})


function computerSelection() {
  const computerChoice = getComputerChoice();
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return (
      "You win! " +
      playerSelection[0].toUpperCase() +
      playerSelection.slice(1) +
      " beats " +
      computerSelection +
      "."
    );
  } else {
    return (
      "You lose! " +
      computerSelection[0].toUpperCase() +
      computerSelection.slice(1) +
      " beats " +
      playerSelection +
      "."
    );
  }
}

function counter() {
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }
  console.log("Your wins: " + playerScore)
  console.log("Your losses: " + computerScore)
  console.log("Your ties: " + playerScore)



