let paper = document.querySelector(".choice.paper");
let rock = document.querySelector(".choice.rock");
let scissors = document.querySelector(".choice.scissors");
let gameContainer = document.querySelector(".game");
let game2Container = document.querySelector(".game-2");
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
let scoreText = document.querySelector(".score");
let rulesBtn = document.querySelector(".rules-btn");
let modeBtn = document.querySelector(".mode-btn");
let modalContainer = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
let responsiveCloseBtn = document.querySelector(".responsive-close");



let storedScore = localStorage.getItem("score");

InitialScoreLoad(storedScore);

paper.addEventListener("click", () => {
  AddUserChoice("paper");
  AddComputerChoice("paper");
  ToggleClasses();
});
rock.addEventListener("click", () => {
  AddUserChoice("rock");
  AddComputerChoice("rock");
  ToggleClasses();
});
scissors.addEventListener("click", () => {
  AddUserChoice("scissors");
  AddComputerChoice("scissors");
  ToggleClasses();
});

playAgainBtn.addEventListener("click", ToggleClasses);

rulesBtn.addEventListener("click", () => {
  modalContainer.classList.toggle("show-modal");
  modal.classList.toggle("move-modal");
});

modeBtn.addEventListener("click", () => {
  game2Container.classList.toggle('hide')
  gameContainer.classList.toggle('hide')
  console.log('mode');
  
})

closeBtn.addEventListener("click", () => {
  modalContainer.classList.toggle("show-modal");
  modal.classList.toggle("move-modal");
});

responsiveCloseBtn.addEventListener("click", () => {
  modalContainer.classList.toggle("show-modal");
  modal.classList.toggle("move-modal");
});

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

function ToggleClasses() {
  //AddComputerChoice(userChoice);
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
  userResult.innerHTML = `
          <section class="choice ${choice}">
            <img src="./images/icon-${choice}.svg" alt="" srcset="">
          </section>
          <div class="winner-circles-inner user-circle hidden">
          
          </div>
          <div class="winner-circles-midd user-circle hidden">
          
          </div>
          <div class="winner-circles-outer user-circle hidden">
          
          </div>`;
}

function AddComputerChoice(userChoice) {
  let randomChoice = Math.round(Math.random() * 2);

  let curentChoice = choices[randomChoice];

  computerChoiceWrapper.innerHTML = `<section class="choice ${curentChoice.name}">
              <img src="./images/icon-${curentChoice.name}.svg" alt="" srcset="">
            </section>
            <div class="winner-circles-inner pc-circle hidden">
          
          </div>
          <div class="winner-circles-midd pc-circle hidden">
          
          </div>
          <div class="winner-circles-outer pc-circle hidden">
          
          </div>`;

  CheckWhoIsWinner(userChoice, curentChoice);
}

function CheckWhoIsWinner(userChoice, computerChoice) {
  let winner = "";

  winner = userChoice == computerChoice.beats ? "YOU LOSE" : "YOU WIN";

  winner = userChoice == computerChoice.name ? "DRAW" : winner;

  console.log(winner);

  finalResultText.textContent = winner;

  HandleScore(winner);

  ApplyWinnerCircles(winner);
}

function HandleScore(winner) {
  let storedScore = localStorage.getItem("score");

  let score = storedScore == null ? 0 : Number(storedScore);

  let points = 0;

  if (winner == "YOU LOSE") {
    points = -1;
  } else if (winner == "YOU WIN") {
    points = 1;
  }

  score += points;

  console.log(score);

  localStorage.setItem("score", score.toString());

  setTimeout(() => {
    scoreText.textContent = score;
  }, 2000);
}

function InitialScoreLoad(score) {
  console.log("initial");

  let currentScore = score == null ? 0 : Number(score);
  scoreText.textContent = currentScore;
}

function ApplyWinnerCircles(score){

  if(score == "YOU WIN"){
    let userWinnerCircles = document.querySelectorAll('.user-circle');
    setTimeout(() => {
      for (const element of userWinnerCircles) {
        element.classList.toggle('hidden')
        
      }
    }, 3000)
    
  }
  else if(score == "YOU LOSE"){
    let pcWinnerCircles = document.querySelectorAll('.pc-circle')

    setTimeout(() => {
      for (const element of pcWinnerCircles) {
        element.classList.toggle('hidden')
        
      }
    },3000)
  }

}
