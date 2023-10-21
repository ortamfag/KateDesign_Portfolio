const body = document.querySelector('body');
const popupsFolder = document.querySelectorAll('.js-sliderPopup');
const popupsSliderButtonsFolder = document.querySelectorAll('.js-popupSliderButton');

window.addEventListener('popstate', () => {
    console.log(`Перешли на адрес "${document.location}"`);
});
window.history.pushState({ name: '#' }, '', '#');

const popupOrder = {
    0: '#holdMyCode',
    1: '#Wine',
    2: '#FourCA',
    3: '#Calendar',
    4: '#Minimalism',
    5: '#Food',
    6: '#Nirvana',
    7: '#Turkey',
    8: '#Victorian',
};

popupsSliderButtonsFolder.forEach((button) => {
    button.addEventListener('click', (e) => {
        const currentPopupNumber = Number(e.currentTarget.dataset.popup);
        const currentPopup = popupOrder[currentPopupNumber];
        const { direction } = e.currentTarget.dataset;
        if (direction === 'left') {
            document.querySelector(`${popupOrder[currentPopupNumber - 1]}Popup`).classList.add('open');
            window.history.replaceState({ name: popupOrder[currentPopupNumber - 1] }, '', `${popupOrder[currentPopupNumber - 1]}`);
        } else if (direction === 'right') {
            document.querySelector(`${popupOrder[currentPopupNumber + 1]}Popup`).classList.add('open');
            window.history.replaceState({ name: popupOrder[currentPopupNumber + 1] }, '', `${popupOrder[currentPopupNumber + 1]}`);
        }
        document.querySelector(`${currentPopup}Popup`).classList.remove('open');
        document.querySelector(`${currentPopup}Content`).scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const makeModal = (modalSel) => {
    const modalEl = document.querySelector(`${modalSel}Popup`);
    const btnEl = document.querySelector(`${modalSel}__preview`);
    const closeEl = document.querySelector(`${modalSel}Cross`);
    const bg = document.querySelector(`${modalSel}Bg`);

    const escapeKeyDownChecker = (e) => {
        if (e.key === 'Escape') {
            modalEl.classList.remove('open');
            window.removeEventListener('keydown', escapeKeyDownChecker);
            // window.history.back();
        }
    };

    const mobileBackButtonChecker = () => {
        body.classList.remove('noscroll');
        modalEl.classList.remove('open');
        window.history.back();
        window.removeEventListener('hashchange', mobileBackButtonChecker);
    };

    btnEl.addEventListener('click', () => {
        window.history.replaceState({ name: '#portfolio' }, '', '#portfolio');
        window.history.pushState({ name: modalSel }, '', `${modalSel}`);
        modalEl.classList.add('open');
        window.addEventListener('keydown', escapeKeyDownChecker);
        window.addEventListener('hashchange', mobileBackButtonChecker);
        body.classList.add('noscroll');
    });

    closeEl.addEventListener('click', () => {
        body.classList.remove('noscroll');
        // window.history.back();
        modalEl.classList.remove('open');
        window.removeEventListener('keydown', escapeKeyDownChecker);
    });

    bg.addEventListener('click', () => {
        body.classList.remove('noscroll');
        // window.history.back();
        modalEl.classList.remove('open');
        window.removeEventListener('keydown', escapeKeyDownChecker);
    });
};

makeModal('#Certificate');
makeModal('#Warranty');
makeModal('#holdMyCode');
makeModal('#Wine');
makeModal('#FourCA');
makeModal('#Calendar');
makeModal('#Minimalism');
makeModal('#Food');
makeModal('#Nirvana');
makeModal('#Turkey');
makeModal('#Victorian');

const warrantyButton = document.querySelector('.js-popupWarranty-button');
warrantyButton.addEventListener('click', () => {
    document.querySelector('#WarrantyPopup').classList.remove('open');
});

const warrantyServices = document.querySelectorAll('.js-servicesWarranty');

warrantyServices.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('#WarrantyPopup').classList.add('open');
    });
});
