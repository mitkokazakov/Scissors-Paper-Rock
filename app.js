let scissors = document.querySelector('.scissors');
let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');

scissors.addEventListener('click', () => {
    scissors.classList.add('selected')
})

paper.addEventListener('click', () => {
    paper.classList.add('selected')
})

rock.addEventListener('click', () => {
    rock.classList.add('selected')
})