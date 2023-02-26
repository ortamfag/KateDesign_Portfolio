const headerTitle = document.querySelector('.js-headerTitle')
const headerSubTitle = document.querySelector('.js-headerSubTitle')
const nav = document.querySelector('.js-nav');
const burger = document.querySelector('.js-burger')

setTimeout(() => {
    headerTitle.classList.add('view')
    headerSubTitle.classList.add('view')
    burger.classList.add('view')
    nav.classList.add('return')
}, 4600)


const headerSVG = document.querySelectorAll('.js-headerSVG')

for (let i = 0; i < headerSVG.length; i++) {
    headerSVG[i].classList.add(`headerSVG${i}`)
}