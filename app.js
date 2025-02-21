let a = document.querySelector('.choice.paper');
let game = document.querySelector('.game')
let res = document.querySelector('.results')

a.addEventListener('click', () => {
    game.classList.toggle('hidden')
    res.classList.toggle('hidden')
})