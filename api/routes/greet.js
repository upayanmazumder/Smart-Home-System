const express = require("express");
const router = express.Router();

const people = ["Alice", "Bob", "Charlie", "David", "Eva"];

// Function to get greeting based on time of day in IST
function getGreeting() {
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is GMT+5:30
    const istTime = new Date(now.getTime() + istOffset);
    const hour = istTime.getUTCHours(); // Get hours in IST

    if (hour < 12) {
        return "Good Morning";
    } else if (hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

// Greet route
router.get("/", (req, res) => {
    const greeting = getGreeting();
    const randomPerson = people[Math.floor(Math.random() * people.length)];
    res.json({ message: `${greeting}, ${randomPerson}!` });
});

// Randomly greet one or multiple people every 30 seconds
setInterval(() => {
    const numberOfPeopleToGreet = Math.floor(Math.random() * people.length) + 1; // 1 to n people
    const peopleToGreet = [];

    for (let i = 0; i < numberOfPeopleToGreet; i++) {
        peopleToGreet.push(people[Math.floor(Math.random() * people.length)]);
    }

    const greeting = getGreeting();
    console.log(`${greeting}, ${peopleToGreet.join(", ")}!`);
}, 30000);

module.exports = router;
