const formButtons = document.querySelectorAll('.js-choose__button');
const formService = document.querySelector('#formService');

const formCurrency = document.querySelectorAll('.js-currency');

const budgetRange = document.querySelector('#inputRange');
const youChoose = document.querySelector('.js-choose__result span');
let chosenCurrency = 'rub';

// choose of service
formButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        formButtons.forEach((item) => {
            item.classList.remove('choose__button--isActive');
        });
        e.currentTarget.classList.toggle('choose__button--isActive');
        formService.value = `${e.currentTarget.dataset.service}`;
    });
});

// choose of currency
formCurrency.forEach((item) => {
    item.addEventListener('click', (e) => {
        formCurrency.forEach((currency) => {
            currency.classList.remove('choose__currency--isActive');
        });
        chosenCurrency = e.currentTarget.dataset.currency;
        e.currentTarget.classList.add('choose__currency--isActive');

        switch (chosenCurrency) {
        case 'ipa':
            budgetRange.max = '24000';
            budgetRange.step = '4000';
            break;
        case 'usd':
            budgetRange.max = '636';
            budgetRange.step = '106';
            break;
        default:
            budgetRange.max = '60000';
            budgetRange.step = '10000';
            break;
        }

        const range = document.querySelectorAll('.js-choose__limit');
        range.forEach((checkpoint) => {
            const row = checkpoint;
            switch (chosenCurrency) {
            case 'ipa':
                row.innerHTML = (24000 - ((checkpoint.dataset.range - 1) * 4000)).toFixed(0);
                break;
            case 'usd':
                row.innerHTML = (636 - ((checkpoint.dataset.range - 1) * 106)).toFixed(0);
                break;
            default:
                row.innerHTML = (60000 - ((checkpoint.dataset.range - 1) * 10000)).toFixed(0);
                break;
            }
        });
    });
});

budgetRange.addEventListener('input', () => {
    let currency = '';
    switch (chosenCurrency) {
    case 'ipa':
        currency = '₴';
        break;
    case 'usd':
        currency = '$';
        break;
    default:
        currency = '₽';
        break;
    }

    youChoose.innerHTML = `${budgetRange.value} ${currency}`;
});
