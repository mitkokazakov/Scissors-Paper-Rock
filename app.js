let paper = document.querySelector(".choice.paper");
let rock = document.querySelector(".choice.rock");
let scissors = document.querySelector(".choice.scissors");
let gameContainer = document.querySelector(".game");
let resultsContainer = document.querySelector(".results");
let computerResult = document.querySelector(".result.computer-result .choice");
let darkCircle = document.querySelector(".dark-circle");

let computerChoiceWrapper = document.querySelector(".computer-choice-wrapper");

let userResult = document.querySelector(".result.user-result");
let userResultText = document.querySelector(".text.user-text");

let computerContainerToMove = document.querySelector(".result.computer-result");
let computerText = document.querySelector(".text.computer-text");

let finalResult = document.querySelector(".final-result");
let finalResultText = document.querySelector(".final-result-text");

let playAgainBtn = document.querySelector(".play-again");

paper.addEventListener("click", () => {
  AddUserChoice("paper");
  ToggleClasses("paper");
});
rock.addEventListener("click", () => {
  AddUserChoice("rock");
  ToggleClasses("rock");
});
scissors.addEventListener("click", () => {
  AddUserChoice("scissors");
  ToggleClasses("scissors");
});

playAgainBtn.addEventListener("click", ToggleClasses);

let choices = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];

function ToggleClasses(userChoice) {
  AddComputerChoice(userChoice);
  gameContainer.classList.toggle("hidden");
  resultsContainer.classList.toggle("hidden");
  computerChoiceWrapper.classList.toggle("shown");
  userResult.classList.toggle("left");
  userResultText.classList.toggle("left-text");
  computerContainerToMove.classList.toggle("right");
  computerText.classList.toggle("right-text");
  finalResult.classList.toggle("show-final");
}

function AddUserChoice(choice) {
  userResult.innerHTML = `<section class="choice ${choice}">
            <img src="./images/icon-${choice}.svg" alt="" srcset="">
          </section>`;
}

function AddComputerChoice(userChoice) {
  let randomChoice = Math.round(Math.random() * 2);

  let curentChoice = choices[randomChoice];

  computerChoiceWrapper.innerHTML = `<section class="choice ${curentChoice.name}">
              <img src="./images/icon-${curentChoice.name}.svg" alt="" srcset="">
            </section>`;

  CheckWhoIsWinner(userChoice, curentChoice);
}

function CheckWhoIsWinner(userChoice, computerChoice) {

  let winner = "";

  winner = userChoice == computerChoice.beats ? "YOU LOSE" : "YOU WIN";

  winner = userChoice == computerChoice.name ? "DRAW" : winner;

  console.log(winner);
  

  finalResultText.textContent = winner;
}
