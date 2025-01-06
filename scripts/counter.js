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

const counters = {
    usersCount: 2174,
    devicesCount: 4879,
    roomsCount: 1023
};

for (const [id, target] of Object.entries(counters)) {
    animateCounter(id, target);
}