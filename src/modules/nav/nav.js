const languages = document.querySelectorAll('.js-nav__lang');

languages.forEach((lang) => {
    lang.addEventListener('click', (event) => {
        const elem = event.currentTarget;
        const langPosition = elem.dataset.position;

        if (langPosition !== '1') {
            for (let i = 0; i < languages.length; i += 1) {
                if (languages[i].dataset.position === '1') {
                    languages[i].dataset.position = langPosition;
                    elem.dataset.position = '1';
                }
            }
        }
    });
});

const nav = document.querySelector('.js-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 4) {
        nav.classList.add('nav__active');
    } else {
        nav.classList.remove('nav__active');
    }
});
