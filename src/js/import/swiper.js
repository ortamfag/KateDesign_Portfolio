import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper--pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper--next',
        prevEl: '.swiper--prev',
    },
});

const reasonsMenu = ['01', '02', '03', '04', '05', '06', '07']

const reasons = new Swiper('.reasons__slider', {
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.reasons__header-isMobile',
        clickable: true,
        renderBullet: function(index, className) {
            return '<h4 class="reasons__header ' + className + '">' + (reasonsMenu[index]) + '</h4>';
        }
    },
})

const tabsMenu = ['общее', 'образование', 'опыт работы', 'инструменты']

const tabs = new Swiper('.tabsMenu', {
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.tabs__header-isMobile',
        clickable: true,
        renderBullet: function(index, className) {
            return '<h3 class="' + className + ' tabs__scroll js-tabs__scroll" data-header="' + index + '">' + (tabsMenu[index]) + '</h3>';
        }
    },
})