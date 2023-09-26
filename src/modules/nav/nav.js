// const languages = document.querySelectorAll('.js-nav__lang');

// languages.forEach((lang) => {
//     lang.addEventListener('click', (event) => {
//         const elem = event.currentTarget;
//         const langPosition = elem.dataset.position;

//         if (langPosition !== '1') {
//             for (let i = 0; i < languages.length; i += 1) {
//                 if (languages[i].dataset.position === '1') {
//                     languages[i].dataset.position = langPosition;
//                     elem.dataset.position = '1';
//                 }
//             }
//         }
//     });
// });

const nav = document.querySelector('.js-nav');

window.addEventListener('scroll', () => {
    // 80%
    if (window.scrollY > window.innerHeight) {
        nav.style.backgroundColor = '';
        nav.classList.add('nav--isActive');
    } else {
        if (nav.classList.contains('nav--isActive')) {
            nav.classList.remove('nav--isActive');
        }
        nav.style.backgroundColor = `rgba(31 32 37 / ${(window.scrollY / window.innerHeight) * 2})`;
    }
});
