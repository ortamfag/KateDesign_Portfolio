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

    btnEl.addEventListener('click', () => {
        modalEl.classList.add('open');
        window.addEventListener('keydown', escapeKeyDownChecker);
    });

    closeEl.addEventListener('click', () => {
        modalEl.classList.remove('open');
        window.removeEventListener('keydown', escapeKeyDownChecker);
    });

    bg.addEventListener('click', () => {
        modalEl.classList.remove('open');
        window.removeEventListener('keydown', escapeKeyDownChecker);
    });
};

makeModal('#holdMyCode');
makeModal('#Wine');
makeModal('#FourCA');
makeModal('#Calendar');
makeModal('#Minimalism');
makeModal('#Food');
makeModal('#Nirvana');
makeModal('#Turkey');
makeModal('#Victorian');
