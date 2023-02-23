const rus = document.getElementById('rus')
const eng = document.getElementById('eng')
const ukr = document.getElementById('ukr')

const langSwitcher = document.querySelector('.js-nav__lang')
const languages = document.querySelectorAll('.js-nav__lang--country')

rus.addEventListener('click', () => {
    switch (`${rus.dataset.country}, ${eng.dataset.country}`) {
        case "1, 2":
            eng.dataset.country = "1"
            rus.dataset.country = "2"
            ukr.dataset.country = "3"
            break

        case "1, 3":
            eng.dataset.country = "3"
            rus.dataset.country = "2"
            ukr.dataset.country = "1"
            break

        case "3, 2":
            eng.dataset.country = "3"
            rus.dataset.country = "2"
            ukr.dataset.country = "1"
            break

        case "3, 1":
            eng.dataset.country = "1"
            rus.dataset.country = "2"
            ukr.dataset.country = "3"
            break
    }
})

eng.addEventListener('click', () => {
    switch (`${eng.dataset.country}, ${rus.dataset.country}`) {
        case "1, 2":
            eng.dataset.country = "2"
            rus.dataset.country = "1"
            ukr.dataset.country = "3"
            break

        case "1, 3":
            eng.dataset.country = "2"
            rus.dataset.country = "3"
            ukr.dataset.country = "1"
            break

        case "3, 2":
            eng.dataset.country = "2"
            rus.dataset.country = "3"
            ukr.dataset.country = "1"
            break

        case "3, 1":
            eng.dataset.country = "2"
            rus.dataset.country = "1"
            ukr.dataset.country = "3"
            break
    }
})

ukr.addEventListener('click', () => {
    switch (`${ukr.dataset.country}, ${eng.dataset.country}`) {
        case "1, 2":
            eng.dataset.country = "1"
            rus.dataset.country = "3"
            ukr.dataset.country = "2"
            break

        case "1, 3":
            eng.dataset.country = "3"
            rus.dataset.country = "1"
            ukr.dataset.country = "2"
            break

        case "3, 2":
            eng.dataset.country = "3"
            rus.dataset.country = "1"
            ukr.dataset.country = "2"
            break

        case "3, 1":
            eng.dataset.country = "1"
            rus.dataset.country = "3"
            ukr.dataset.country = "2"
            break
    }
})