const tabsHeaders = document.querySelectorAll('.tabs__item');
const tabsContentBlocks = document.querySelectorAll('.tabs__info');
let currentNumber = '0';

tabsHeaders.forEach((header) => {
    header.addEventListener('click', (event) => {
        const headerNumber = event.currentTarget.dataset.header;

        if (currentNumber !== headerNumber) {
            tabsContentBlocks.forEach((block) => {
                block.classList.remove('tabs__info-isVisible');
            });

            tabsHeaders.forEach((title) => {
                title.classList.remove('tabs__item-isActive');
            });

            for (let i = 0; i < tabsContentBlocks.length; i += 1) {
                if (tabsContentBlocks[i].dataset.tab === headerNumber) {
                    currentNumber = tabsContentBlocks[i].dataset.tab;
                    tabsContentBlocks[i].classList.add('tabs__info-isVisible');
                    tabsHeaders[i].classList.add('tabs__item-isActive');
                }
            }
        }
    });
});

// accordion
const accordionItems = document.querySelectorAll('.js-tabs__accordion');
const accordionText = document.querySelectorAll('.js-tabs__description');
const accordionPlus = document.querySelectorAll('.js-tabs__plus');

accordionItems.forEach((item, key) => {
    item.addEventListener('click', () => {
        accordionText[key].classList.toggle('tabs__description-isVisible');
        accordionPlus[key].classList.toggle('tabs__plus-isActive');
    });
});

// mobile tabs scrollX
const tabsSlider = document.querySelector('.js-tabs__slider');
window.addEventListener('load', () => {
    const tabsSliderHeader = document.querySelectorAll('.js-tabs__scroll');
    tabsSliderHeader.forEach((item) => {
        item.addEventListener('transitionstart', (e) => {
            if (e.currentTarget.classList.contains('swiper-pagination-bullet-active')) {
                switch (e.currentTarget.dataset.header) {
                case '2': {
                    const previousHeaderWidth = tabsSliderHeader[0].clientWidth + 10 + 8;
                    tabsSlider.scroll({
                        left: previousHeaderWidth,
                        behavior: 'smooth',
                    });
                    break;
                }

                case '3': {
                    const firstHeaderWidth = tabsSliderHeader[0].offsetWidth + 10 + 8;
                    const previousHeaderWidth = tabsSliderHeader[1].offsetWidth + 10 + 8;
                    tabsSlider.scroll({
                        left: previousHeaderWidth + firstHeaderWidth,
                        behavior: 'smooth',
                    });
                    break;
                }

                default:
                    tabsSlider.scroll({
                        left: 0,
                        behavior: 'smooth',
                    });
                    break;
                }
            }
        });
    });
}, { once: true });
