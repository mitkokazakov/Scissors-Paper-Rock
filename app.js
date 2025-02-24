let a = document.querySelector('.choice.paper');
let gameContainer = document.querySelector('.game')
let resultsContainer = document.querySelector('.results')
let computerResult = document.querySelector('.result.computer-result .choice');
let darkCircle = document.querySelector('.dark-circle')

let computerChoiceWrapper = document.querySelector('.computer-choice-wrapper')

let userResult = document.querySelector('.result.user-result');
let userResultText = document.querySelector('.text.user-text');

let computerContainerToMove = document.querySelector('.result.computer-result');
let computerText = document.querySelector('.text.computer-text');

let finalResult = document.querySelector('.final-result');

a.addEventListener('click', () => {
    gameContainer.classList.toggle('hidden')
    resultsContainer.classList.toggle('hidden')
    computerChoiceWrapper.classList.toggle('shown');
    // darkCircle.classList.toggle('hidden')


    userResult.classList.toggle('left');
    userResultText.classList.toggle('left-text');

    computerContainerToMove.classList.toggle('right');
    computerText.classList.toggle('right-text');

    finalResult.classList.toggle('show-final');

})