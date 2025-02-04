document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const container = document.querySelector('.product-container');
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    
    products.forEach((product, index) => {
        const dot = document.createElement('div');
        dot.className = 'scroll-dot';
        dot.addEventListener('click', () => {
            product.scrollIntoView({ behavior: 'smooth' });
        });
        scrollIndicator.appendChild(dot);
    });
    
    document.body.appendChild(scrollIndicator);

    const observerOptions = {
        root: container,
        rootMargin: '0px',
        threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                updateScrollIndicator(Array.from(products).indexOf(entry.target));
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    products.forEach((product) => {
        observer.observe(product);
    });

    function updateScrollIndicator(activeIndex) {
        const dots = scrollIndicator.querySelectorAll('.scroll-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }
});
