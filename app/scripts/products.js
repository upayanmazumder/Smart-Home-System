document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const container = document.querySelector('.product-container');

    const observerOptions = {
        root: container,
        rootMargin: '0px',
        threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    products.forEach((product) => {
        observer.observe(product);
    });
});
