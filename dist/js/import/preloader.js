const preloader = document.querySelector('#preloader');
const svgAnimation = document.querySelector('#svg-animation');
const headerTitles = document.querySelectorAll('.title-first');
const navAnimation = document.querySelector('.js-nav')
const readProgressStart = document.querySelector('.js-read-progress');
const documentHeight = document.querySelector('.scroll');

let isLoad = false;
window.addEventListener('load', () => {
    isLoad = true;
});


setTimeout(() => {
    svgAnimation.classList.add('preloader-hidden');

    if (isLoad) {
        preloader.classList.add('preloader-after-hidden');
        headerTitles.forEach((title) => {
            if (title.tagName === "BUTTON") {
                title.classList.add('animation-button--isActive')
            } else {
                title.classList.add('title-animation--isIntersecting')
            }
        })
        navAnimation.classList.add('nav--isAnimate');
        readProgressStart.style.width=`${(window.innerHeight / documentHeight.clientHeight) * 100 + 0.8}%`
        console.log(`${(window.innerHeight / documentHeight.clientHeight) * 100 + 0.8}%`)
        setTimeout(() => {
            preloader.classList.add('is-hidden');
            svgAnimation.classList.add('is-hidden');
        }, 200);
    } else {
        window.addEventListener('load', () => {
            preloader.classList.add('preloader-hidden');
            headerTitles.forEach((title) => {
                if (title.tagName === "BUTTON") {
                    title.classList.add('animation-button--isActive')
                } else {
                    title.classList.add('title-animation--isIntersecting')
                }
            })
            navAnimation.classList.add('nav--isAnimate');
            readProgressStart.style.width=`${(window.innerHeight / documentHeight.clientHeight) * 100 + 0.8}%`
            svgAnimation.classList.add('is-hidden');
        });
    }
}, 3200);
