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
