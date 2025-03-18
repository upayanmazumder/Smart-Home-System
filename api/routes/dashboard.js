const express = require("express");
const router = express.Router();

const generateSmartHomeData = () => {
    return {
        devices: {
            thermostat: {
                temperature: parseFloat((18 + Math.random() * 10).toFixed(1)), // 18-28°C
                humidity: parseFloat((35 + Math.random() * 25).toFixed(1)), // 35-60%
                mode: ["cooling", "heating", "off"][Math.floor(Math.random() * 3)]
            },
            lighting: {
                livingRoom: Math.random() > 0.3,
                bedroom: Math.random() > 0.4,
                kitchen: Math.random() > 0.2,
                brightness: parseInt((20 + Math.random() * 80).toFixed(0)) // 20-100%
            },
            security: {
                doorsLocked: Math.random() > 0.2,
                motionDetected: Math.random() > 0.9,
                camerasOnline: Math.random() > 0.05,
                alarmActive: Math.random() > 0.95
            },
            energy: {
                totalUsage: parseFloat((500 + Math.random() * 500).toFixed(2)), // 500-1000W
                solarGenerated: parseFloat((100 + Math.random() * 200).toFixed(2)), // 100-300W
                batteryLevel: parseInt((20 + Math.random() * 80).toFixed(0)) // 20-100%
            },
            smartSpeakers: [
                { name: "Living Room Speaker", volume: parseInt((10 + Math.random() * 90).toFixed(0)), playing: Math.random() > 0.5 },
                { name: "Bedroom Speaker", volume: parseInt((10 + Math.random() * 90).toFixed(0)), playing: Math.random() > 0.5 }
            ],
            appliances: {
                washingMachine: { running: Math.random() > 0.5, cycle: ["wash", "rinse", "spin", "off"][Math.floor(Math.random() * 4)] },
                oven: { temperature: parseInt((100 + Math.random() * 150).toFixed(0)), active: Math.random() > 0.3 },
                refrigerator: { temperature: parseFloat((2 + Math.random() * 6).toFixed(1)), doorOpen: Math.random() > 0.1 }
            },
            airQuality: {
                CO2: parseFloat((300 + Math.random() * 150).toFixed(1)),
                VOC: parseFloat((0.1 + Math.random() * 0.4).toFixed(2)),
                PM2_5: parseFloat((5 + Math.random() * 20).toFixed(1)) // Fine particulate matter
            }
        }
    };
};

router.get("/", (req, res) => {
    const data = generateSmartHomeData(); // Generate a single feed of random data
    res.json(data);
});

module.exports = router;
