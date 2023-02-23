import i18next from './vendor/i18next.min'

let lang = navigator.language || navigator.userLanguage;

let translationEn= {
    "translate1": "Главн=sdfая",
}

let translationRu = {
    "translate1": "Главная",
}

const resources = {
    en: {
        translation: translationEn 
    },

    ru: {
        translation: translationRu
    }
}

i18next.init({
    resources
});

function changeToEng() {
    lang = 'eng'

    document.getElementById('translate1').innerHTML = i18next.t(translationEn.translate1)
}

function changeToRu() {
    lang = 'rus'
    
    document.getElementById('translate1').innerHTML = i18next.t(translationRu.translate1)
}

document.getElementById('rus').addEventListener('click', () => changeToRu())
document.getElementById('eng').addEventListener('click', () => changeToEng())

// window.addEventListener('DOMContentLoaded', () => {
//     if ((lang === 'ru-RU') || (lang === 'kk') || (lang === 'uk') || (lang === 'ru')) {
//         lang = 'rus'
//     } else {
//         lang = 'eng'
//         changeToEng()
//     }
// })