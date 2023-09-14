const preloader = document.querySelector('#preloader');
const svgAnimation = document.querySelector('#svg-animation');
const headerTitles = document.querySelectorAll('.title-first');

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
            svgAnimation.classList.add('is-hidden');
        });
    }
}, 3200);
