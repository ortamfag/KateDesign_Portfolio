const stages = document.querySelectorAll('.js-stage');
const stagesWays = document.querySelectorAll('.js-stages__way');
const stagesText = document.querySelectorAll('.js-stages__text');

const stageAnimation = (e) => {
    const stageData = e.currentTarget.dataset.stage;

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

stages.forEach((stage) => {
    stage.addEventListener('transitionstart', (e) => {
        stageAnimation(e);
    }, { once: true });
});
