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

const navLinks = document.querySelectorAll('.js-nav__link');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        burger.classList.remove('nav__burger--isActive');
        navInfo.classList.remove('nav__info--isActive');
    });
});
