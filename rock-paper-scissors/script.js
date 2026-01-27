let userChoice;
let winCountUser = 0;
let winCountComputer = 0;
let computerChoice = getComputerChoice();

function gameStop() {
  if (winCountUser > winCountComputer) {
    alert(`You WON! Final score is ${winCountUser}:${winCountComputer}`);
  } else if (winCountUser < winCountComputer) {
    alert(`You LOST! Final score is ${winCountUser}:${winCountComputer}`);
  } else {
    alert(`It's a TIE! Final score is ${winCountUser}:${winCountComputer}`);
  }
}

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  if (randomChoice === 1) {
    return "rock";
  } else if (randomChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
function gameStart() {
  userChoice = prompt("Enter your choice: ");
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    console.log(`User's choice is ${userChoice}`);
    getComputerChoice();
    console.log(`Computer choice is: ${computerChoice}`);

    if (userChoice === computerChoice) {
      console.log("It's a tie!");
      alert(`Score is ${winCountUser}:${winCountComputer}`);
      gameStart();
    } else {
      if (
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock")
      ) {
        winCountUser++;
        console.log(`You won!`);
        alert(`You won! Score is ${winCountUser}:${winCountComputer}`);
        gameStart();
      } else {
        winCountComputer++;
        console.log("You lost!");
        alert(`You lost! Score is ${winCountUser}:${winCountComputer}`);
        gameStart();
      }
    }
  } else if (userChoice == null) {
    gameStop();
  } else {
    gameStart();
  }
}

gameStart();
