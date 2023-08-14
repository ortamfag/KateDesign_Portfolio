const preloader = document.querySelector('#preloader');

window.addEventListener('load', () => {
    preloader.classList.add('preloader-hidden');
    setTimeout(() => {
        preloader.classList.add('is-hidden');
    }, 200);
});
