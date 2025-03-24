const express = require("express");
const router = express.Router();

const startTime = Date.now();

const formatUptime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= 24 * 3600;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

router.get("/", (req, res) => {
    const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
    res.json({ uptime: formatUptime(uptimeSeconds) });
});

module.exports = router;
