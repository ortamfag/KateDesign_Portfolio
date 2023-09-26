const burger = document.querySelector('.js-burger');
const navInfo = document.querySelector('.js-nav__info');

burger.addEventListener('click', () => {
    burger.classList.toggle('nav__burger--isActive');
    navInfo.classList.toggle('nav__info--isActive');
});

burger.addEventListener('touch', () => {
    burger.classList.toggle('nav__burger--isActive');
    navInfo.classList.toggle('nav__info--isActive');
});
