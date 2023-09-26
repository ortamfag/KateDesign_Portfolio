const makeModal = (modalSel) => {
    const modalEl = document.querySelector(`${modalSel}Popup`);
    const btnEl = document.querySelector(`${modalSel}__preview`);
    const closeEl = document.querySelector(`${modalSel}Cross`);
    const bg = document.querySelector(`${modalSel}Bg`);

    btnEl.addEventListener('click', () => modalEl.classList.add('open'));
    closeEl.addEventListener('click', () => modalEl.classList.remove('open'));
    bg.addEventListener('click', () => modalEl.classList.remove('open'));
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
