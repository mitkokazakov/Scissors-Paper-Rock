let scissors = document.querySelector('.scissors');
let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');

let threeChoicesBg = document.querySelector('.three-choices-game-bg')

let computerChoice = document.querySelector('.computer-choice');

let myChoiceText = document.querySelector('.my-choice-text');
let computerChoiceText = document.querySelector('.computer-choice-text');

let gameResult = document.querySelector('.game-result');

let gameResultWrapper = document.querySelector('.game-result-wrapper');

scissors.addEventListener('click', () => {
    scissors.classList.add('selected')
    paper.classList.add('hidden');
    rock.classList.add('hidden');
    threeChoicesBg.classList.add('hidden');
    computerChoice.classList.add('selected');
    myChoiceText.classList.add('selected');
    computerChoiceText.classList.add('selected')
    gameResult.classList.add('selected')
    gameResultWrapper.classList.add('selected')
})

paper.addEventListener('click', () => {
    paper.classList.add('selected');
    scissors.classList.add('hidden')
    rock.classList.add('hidden');
    threeChoicesBg.classList.add('hidden');
    computerChoice.classList.add('selected');
    myChoiceText.classList.add('selected');
    computerChoiceText.classList.add('selected')
    gameResult.classList.add('selected')
    gameResultWrapper.classList.add('selected')

})

rock.addEventListener('click', () => {
    rock.classList.add('selected')
    scissors.classList.add('hidden')
    paper.classList.add('hidden');
    threeChoicesBg.classList.add('hidden');
    computerChoice.classList.add('selected');
    myChoiceText.classList.add('selected');
    computerChoiceText.classList.add('selected')
    gameResult.classList.add('selected')
    gameResultWrapper.classList.add('selected')
})