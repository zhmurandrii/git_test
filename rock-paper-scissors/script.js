const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const container = document.getElementById("container");

const paraScore = document.createElement("para");
paraScore.textContent = "0:0";
const paraRound = document.createElement("p");
container.appendChild(paraScore);
container.appendChild(paraRound);

btnRock.addEventListener("click", playRock);
btnPaper.addEventListener("click", playPaper);
btnScissors.addEventListener("click", playScissors);

let userChoice;
let winCountUser = 0;
let winCountComputer = 0;
let computerChoice;
let gamesCount = 0;
let winningVariant;
let userVariant;

function gameCheck() {
  if (gamesCount === 5) {
    gameStop();
    return true;
  } else {
    return false;
  } /*else {
    playRound();
  }*/
}

function startNewGame() {
  gamesCount = 0;
  winCountUser = 0;
  winCountComputer = 0;
  container.style.backgroundColor = "white";
  paraScore.textContent = "0:0";
  paraRound.textContent = "New game started!";
}

function gameStop() {
  if (winCountUser > winCountComputer) {
    paraRound.textContent = `You WON! Final score is ${winCountUser}:${winCountComputer}`;
    container.style.backgroundColor = "hsl(120, 60%, 54%)";
    //alert(`You WON! Final score is ${winCountUser}:${winCountComputer}`);
  } else if (winCountUser < winCountComputer) {
    paraRound.textContent = `You LOST! Final score is ${winCountUser}:${winCountComputer}`;
    container.style.backgroundColor = "hsl(0, 68%, 49%)";
    //alert(`You LOST! Final score is ${winCountUser}:${winCountComputer}`);
  } else {
    paraRound.textContent = `It's a TIE! Final score is ${winCountUser}:${winCountComputer}`;
    //alert(`It's a TIE! Final score is ${winCountUser}:${winCountComputer}`);
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

function playRound() {
  if (gamesCount >= 5) {
    startNewGame();
    return;
  }
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
      //console.log("It's a tie!");
      paraRound.textContent = "It's a tie!";
      console.log("------------------------");
      paraScore.textContent = `${winCountUser}:${winCountComputer}`;
      container.style.backgroundColor = "white";
      //alert(`It's a tie! Score is ${winCountUser}:${winCountComputer}`);
      gamesCount++;
      console.log(gamesCount);
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
        paraRound.textContent = `You won! ${winningVariant} beats ${computerChoice}!`;
        paraScore.textContent = `${winCountUser}:${winCountComputer}`;
        container.style.backgroundColor = "hsl(120, 27%, 56%)";
        /*alert(
          `You won! ${winningVariant} beats ${computerChoice}! Score is ${winCountUser}:${winCountComputer}`,
        );*/
        gamesCount++;
        console.log(gamesCount);
        gameCheck();
      } else {
        winCountComputer++;
        console.log("You lost!");
        console.log("------------------------");
        winningVariant = computerChoice.toUpperCase();
        paraRound.textContent = `You lost! ${userChoice} loses to ${winningVariant}`;
        paraScore.textContent = `${winCountUser}:${winCountComputer}`;
        container.style.backgroundColor = "hsl(0, 57%, 59%)";
        /*alert(
          `You lost! ${userChoice} loses to ${winningVariant} Score is ${winCountUser}:${winCountComputer}`,
        );*/
        gamesCount++;
        console.log(gamesCount);
        gameCheck();
      }
    }
  } else if (userChoice == null) {
    gameStop();
  } else {
    gameCheck();
  }
}

function playRock() {
  userChoice = "rock";
  playRound();
}
function playPaper() {
  userChoice = "paper";
  playRound();
}
function playScissors() {
  userChoice = "scissors";
  playRound();
}

function gameStart() {
  userVariant = prompt("Enter your choice: ");
  userChoice = userVariant.toLowerCase();
  playRound();
}

//gameStart();
