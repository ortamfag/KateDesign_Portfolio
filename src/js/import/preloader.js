const preloader = document.querySelector('#preloader');
const svgAnimation = document.querySelector('#svg-animation');

let isLoad = false;
window.addEventListener('load', () => {
    isLoad = true;
});


setTimeout(() => {
    svgAnimation.classList.add('preloader-hidden');

    if (isLoad) {
        preloader.classList.add('preloader-after-hidden');
        setTimeout(() => {
            preloader.classList.add('is-hidden');
            svgAnimation.classList.add('is-hidden');
        }, 200);
    } else {
        window.addEventListener('load', () => {
            preloader.classList.add('preloader-hidden');
            svgAnimation.classList.add('is-hidden');
        });
    }
}, 3200);
