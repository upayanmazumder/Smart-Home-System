function animateCounter(id, target) {
    const element = document.getElementById(id);
    let count = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.textContent = count;
    }, 20);
}

animateCounter('usersCount', 2174);
animateCounter('devicesCount', 4879);
animateCounter('roomsCount', 1023);