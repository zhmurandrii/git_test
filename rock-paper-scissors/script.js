let userChoice;
let winCountUser = 0;
let winCountComputer = 0;
let computerChoice;
let gamesCount = 0;
let winningVariant;
let userVariant;

function gameCheck() {
  if (gamesCount >= 5) {
    gameStop();
  } else {
    gameStart();
  }
}

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
  userVariant = prompt("Enter your choice: ");
  userChoice = userVariant.toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    console.log(`User's choice is ${userChoice}`);
    getComputerChoice();
    let computerChoice = getComputerChoice();
    console.log(`Computer choice is: ${computerChoice}`);

    if (userChoice === computerChoice) {
      console.log("It's a tie!");
      console.log("------------------------");
      alert(`It's a tie! Score is ${winCountUser}:${winCountComputer}`);
      gamesCount++;
      gameCheck();
    } else {
      if (
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock")
      ) {
        winCountUser++;
        console.log(`You won!`);
        console.log("------------------------");
        winningVariant = userChoice.toUpperCase();
        alert(
          `You won! ${winningVariant} beats ${computerChoice}! Score is ${winCountUser}:${winCountComputer}`,
        );
        gamesCount++;
        gameCheck();
      } else {
        winCountComputer++;
        console.log("You lost!");
        console.log("------------------------");
        winningVariant = computerChoice.toUpperCase();
        alert(
          `You lost! ${userChoice} loses to ${winningVariant} Score is ${winCountUser}:${winCountComputer}`,
        );
        gamesCount++;
        gameCheck();
      }
    }
  } else if (userChoice == null) {
    gameStop();
  } else {
    gameCheck();
  }
}

gameStart();
