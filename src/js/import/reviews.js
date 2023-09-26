import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper--pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper--next',
        prevEl: '.swiper--prev',
    },
});