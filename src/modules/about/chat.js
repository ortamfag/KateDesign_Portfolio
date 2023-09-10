// client vars
const clientTypingBlock = document.querySelector('.js-clientChatPoints');
const clientTypingPoints = document.querySelectorAll('.js-clientChatPoints div');
const clientMessage = document.querySelector('.js-clientMessage');

// freelancer vars
const freelancerTypingBlock = document.querySelector('.js-freelancerChatPoints');
const freelancerTypingPoints = document.querySelectorAll('.js-freelancerChatPoints div');
const freelancerMessage = document.querySelector('.js-freelancerMessage');
const freelancerAvatar = document.querySelector('.js-freelancer-avatar');
const freelancerName = document.querySelector('.js-freelancer-name');

const typingPointsRotation = (typingBlock, typingPoints, message, typingTime) => {
    typingBlock.classList.add('chat__typing-isVisible');
    let pointNumber = 0;

    const pointRotation = () => {
        typingPoints.forEach((point) => {
            point.classList.remove('chat__typing-isActivePoint');
        });
        typingPoints[pointNumber].classList.add('chat__typing-isActivePoint');

        if (pointNumber === 2) {
            pointNumber = 0;
        } else {
            pointNumber += 1;
        }
    };

    pointRotation();

    const typingInterval = setInterval(() => {
        pointRotation();
    }, 300);

    setTimeout(() => {
        clearInterval(typingInterval);
        typingBlock.classList.add('chat__typing-isTyped');
        message.classList.add('chat__text-isTyped');

        setTimeout(() => {
            // eslint-disable-next-line max-len
            typingPointsRotation(freelancerTypingBlock, freelancerTypingPoints, freelancerMessage, 2500);
            freelancerAvatar.classList.add('freelancer-startTyping');
            freelancerName.classList.add('freelancer-startTyping');
        }, 500);
    }, typingTime);
};

typingPointsRotation(clientTypingBlock, clientTypingPoints, clientMessage, 1500);
