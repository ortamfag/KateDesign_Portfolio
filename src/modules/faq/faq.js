const FAQItems = document.querySelectorAll('.js-faq__item');
const FAQText = document.querySelectorAll('.js-faq__text');
const FAQPlus = document.querySelectorAll('.js-faq__plus');

FAQItems.forEach((item, key) => {
    item.addEventListener('click', () => {
        FAQText[key].classList.toggle('faq__text-isActive');
        FAQPlus[key].classList.toggle('faq__plus-isActive');
    });
});
