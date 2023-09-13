// scroll

const options = {
    threshold: 0.3,
};

const onEntry = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('hidden-show');
        }
    });
};

const observer = new IntersectionObserver(onEntry, options);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el, options));
