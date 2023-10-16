const stages = document.querySelectorAll('.js-stage');
const stagesWays = document.querySelectorAll('.js-stages__way');
const lastWayRect = document.querySelectorAll('.js-stages__rect');
const stagesText = document.querySelectorAll('.js-stages__text');

const stageAnimation = (thisStage) => {
    const stageData = thisStage.dataset.stage;

    for (let i = 0; i < stagesText.length; i += 1) {
        if (stagesText[i].dataset.stage === stageData) {
            stagesText[i].classList.add('stages__text--isActive');
            break;
        }
    }

    for (let i = 0; i < stagesWays.length; i += 1) {
        if (stagesWays[i].dataset.stage === stageData) {
            stagesWays[i].classList.add('stages__way--isActive');
            break;
        }
    }
};

const config = { attributes: true };

const callback = (mutationList) => {
    mutationList.forEach((mutation) => {
        if (mutation.type === 'attributes') {
            stageAnimation(mutation.target);
        }
    });
};

const observer = new MutationObserver(callback);

// first stage
stages[0].addEventListener('transitionstart', (e) => {
    const thisStage = e.currentTarget;
    stageAnimation(thisStage);
}, { once: true });

lastWayRect.forEach((rect, key) => {
    const nextStage = stages[key + 1];
    rect.addEventListener('transitionend', () => {
        if (nextStage) {
            if (nextStage.classList.contains('hidden-show')) {
                stageAnimation(nextStage);
            } else {
                observer.observe(nextStage, config);
            }
        }
    });
});
