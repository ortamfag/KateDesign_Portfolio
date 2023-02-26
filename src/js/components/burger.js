const burger = document.querySelector('.js-burger')
const nav = document.querySelector('.js-nav')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-menu__active');
    nav.classList.toggle('nav--active')
})