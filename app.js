let scissors = document.querySelector('.scissors');
let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');

let threeChoicesBg = document.querySelector('.three-choices-game-bg')

let computerChoice = document.querySelector('.computer-choice');

scissors.addEventListener('click', () => {
    scissors.classList.add('selected')
    paper.classList.add('hidden');
    rock.classList.add('hidden');
    threeChoicesBg.classList.add('hidden');
    computerChoice.classList.add('selected');
})

paper.addEventListener('click', () => {
    paper.classList.add('selected')
})

rock.addEventListener('click', () => {
    rock.classList.add('selected')
})