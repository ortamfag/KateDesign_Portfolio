const readProgress = document.querySelector('.js-read-progress');
const pageHeight = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    if (readProgress.style.transitionDelay === '') {
        readProgress.style.transitionDelay = '0ms';
    }
    readProgress.style.width = `${((window.scrollY + window.innerHeight) / pageHeight.clientHeight) * 100 + 0.8}%`;
});
