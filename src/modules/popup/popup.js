const body = document.querySelector('body');

const makeModal = (modalSel) => {
    const modalEl = document.querySelector(`${modalSel}Popup`);
    const btnEl = document.querySelector(`${modalSel}__preview`);
    const closeEl = document.querySelector(`${modalSel}Cross`);
    const bg = document.querySelector(`${modalSel}Bg`);

    const escapeKeyDownChecker = (e) => {
        if (e.key === 'Escape') {
            modalEl.classList.remove('open');
            window.removeEventListener('keydown', escapeKeyDownChecker);
        }
    };

    const mobileBackButtonChecker = () => {
        body.classList.remove('noscroll');
        modalEl.classList.remove('open');
        window.history.back();
        window.removeEventListener('hashchange', mobileBackButtonChecker);
    };

    btnEl.addEventListener('click', () => {
        window.history.pushState({ name: modalSel }, null, `${modalSel}`);
        modalEl.classList.add('open');
        window.addEventListener('keydown', escapeKeyDownChecker);
        window.addEventListener('hashchange', mobileBackButtonChecker);
        body.classList.add('noscroll');
    });

    closeEl.addEventListener('click', () => {
        body.classList.remove('noscroll');
        window.history.back();
        modalEl.classList.remove('open');
        window.removeEventListener('keydown', escapeKeyDownChecker);
    });

    bg.addEventListener('click', () => {
        body.classList.remove('noscroll');
        window.history.back();
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
