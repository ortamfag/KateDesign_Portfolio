import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/index.js'

let lang = navigator.language || navigator.userLanguage;

window.addEventListener('DOMContentLoaded', () => {
    if ((lang === 'ru-RU') || (lang === 'kk') || (lang === 'ru')) {
        lang = 'rus'
    } else if (lang === 'uk') {
        lang = 'ua'
        changeToUA()
    } else {
        lang = 'eng'
        changeToENG()
    }
})

let translationEN = {
    "title": "I develop websites and applications for your business. I observe the structure, I don't overload interfaces with unnecessary decorative elements. By cooperating with me, you get a convenient and beautiful website / application design in the shortest possible time.",
}

let translationRU = {
    "title": "Разрабатываю сайты и приложения для Вашего бизнеса. Соблюдаю структуру, не перегружаю интерфейсы лишними декоративными элементами. Сотрудничая со мной, вы получаете удобный и красивый дизайн сайта/приложения за кратчайшие сроки.",
}

let translationUA = {
    "title": "Розробляю сайти і додатки для вашого бізнесу. Дотримуюся структуру, не перевантажую інтерфейси зайвими декоративними елементами. Співпрацюючи зі мною, ви отримуєте зручний і красивий дизайн сайту/програми за найкоротші терміни.",
}

const resources = {
    en: {
        translation: translationEN
    },

    ru: {
        translation: translationRU
    },

    ua: {
        translation: translationUA
    }
}

i18next.init({
    resources
});

const changeToENG = () => {
    lang = 'eng'

    document.getElementById('title').innerHTML = i18next.t(translationEN.title)
}

const changeToRU = () => {
    lang = 'rus'

    document.getElementById('title').innerHTML = i18next.t(translationRU.title)
}

const changeToUA = () => {
    lang = 'ua'

    document.getElementById('title').innerHTML = i18next.t(translationUA.title)
}

document.getElementById('ru').addEventListener('click', () => changeToRU())
document.getElementById('en').addEventListener('click', () => changeToENG())
document.getElementById('ua').addEventListener('click', () => changeToUA())