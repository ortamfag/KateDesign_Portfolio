const reasonHeaders = document.querySelectorAll('.js-reasons__header');
const reasonsItem = document.querySelectorAll('.js-reasons__item');
const reasonsGrid = document.querySelector('.js-reasons__grid');
let activeHeader;
const reasonsHeight = reasonsItem[6].offsetHeight;

reasonsGrid.style.height = `${reasonsHeight}px`;

reasonHeaders.forEach((header) => {
    if (header.classList.contains('reasons__header--isActive')) {
        activeHeader = header;
    }

    header.addEventListener('click', (e) => {
        const queue = e.currentTarget.dataset.reason;
        activeHeader.classList.remove('reasons__header--isActive');
        e.currentTarget.classList.add('reasons__header--isActive');
        activeHeader = e.currentTarget;

        reasonsItem.forEach((item) => {
            if (queue > item.dataset.reason) {
                item.classList.add('reasons__item--isLeft');
            } else if (queue < item.dataset.reason) {
                if (item.classList.contains('reasons__item--isLeft')) {
                    item.classList.remove('reasons__item--isLeft');
                }
            }

            item.classList.remove('reasons__item--isActive');

            if (item.dataset.reason === queue) {
                item.classList.add('reasons__item--isActive');
            }
        });
    });
});
