const rus = document.getElementById('rus')
const eng = document.getElementById('eng')
const ukr = document.getElementById('ukr')

const langSwitcher = document.querySelector('.js-nav__lang')
const languages = document.querySelectorAll('.js-nav__lang--country')

rus.addEventListener('click', () => {
    rus.dataset.country = "1"
    eng.dataset.country = "2"
    ukr.dataset.country = "3"
})

eng.addEventListener('click', () => {
    eng.dataset.country = "1"
    rus.dataset.country = "2"
    ukr.dataset.country = "3"
})

ukr.addEventListener('click', () => {
    if (rus.dataset.country = "1") {
        ukr.dataset.country = "2"
        eng.dataset.country = "3"

        setTimeout(() => {
            ukr.dataset.country = "1"
            rus.dataset.country = "2"
        }, 100)
    } else {
        ukr.dataset.country = "2"
        rus.dataset.country = "3"

        setTimeout(() => {
            ukr.dataset.country = "1"
            eng.dataset.country = "2"
        }, 100)
    }

    // ukr.dataset.country = "1"
    // rus.dataset.country = "2"
    // eng.dataset.country = "3"
})