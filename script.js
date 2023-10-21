function getComputerChoice() {
  const choice = ["rock", "scissors", "paper"];
  const random = Math.floor(Math.random() * 3);
  return choice[random];
}

function playerSelection() {
  let isValid = false;
  let playerChoice;

  while (!isValid) {
  playerChoice = prompt("Choose rock, paper or scissors");
  if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    isValid = true;
    return playerChoice;
  }
  else {
    alert("Please input either rock, paper, or scissors.")
  }
}
}

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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let draw = 0;
  for (let index = 0; index < 5; index++) {
    const playerChoice = playerSelection();
    const computerChoice = computerSelection();
    const result = playRound(playerChoice, computerChoice);
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    } else {
      draw++;
    }
  }
  console.log("Your wins: " + playerScore)
  console.log("Your losses: " + computerScore)
  console.log("Your ties: " + playerScore)
}

game();
