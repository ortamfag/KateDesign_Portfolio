// scroll

// const options = {
//     threshold: 0.3,
// };

const options = {};

if (window.screen.width >= 768) {
    options.threshold = 0.4;
} else {
    options.threshold = 0.1;
}

const onEntry = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('title-parent')) {
                const { children } = entry.target;
                for (let i = 0; i < children.length; i += 1) {
                    children[i].classList.add('title-animation--isIntersecting');
                }
            }
            entry.target.classList.add('hidden-show');
        }
    });
};

const observer = new IntersectionObserver(onEntry, options);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el, options));
