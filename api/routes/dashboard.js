const express = require("express");
const router = express.Router();

let lastSmartHomeData = {
    devices: {
        thermostat: {
            temperature: 21,
            humidity: 50,
            mode: "off"
        },
        lighting: {
            livingRoom: true,
            bedroom: true,
            kitchen: true,
            brightness: 50
        },
        security: {
            doorsLocked: true,
            motionDetected: false,
            camerasOnline: true,
            alarmActive: false
        },
        energy: {
            totalUsage: 600,
            solarGenerated: 150,
            batteryLevel: 60
        },
        smartSpeakers: [
            { name: "Living Room Speaker", volume: 50, playing: false },
            { name: "Bedroom Speaker", volume: 50, playing: false }
        ],
        appliances: {
            washingMachine: { running: false, cycle: "off" },
            oven: { temperature: 150, active: false },
            refrigerator: { temperature: 5, doorOpen: false }
        },
        airQuality: {
            CO2: 350,
            VOC: 0.2,
            PM2_5: 10
        }
    }
};

const generateSmartHomeData = () => {
    const randomizeValue = (currentValue, range) => {
        const step = (Math.random() - 0.5) * range;
        return parseFloat((currentValue + step).toFixed(1));
    };

    return {
        devices: {
            thermostat: {
                temperature: randomizeValue(lastSmartHomeData.devices.thermostat.temperature, 0.5),
                humidity: randomizeValue(lastSmartHomeData.devices.thermostat.humidity, 1),
                mode: ["cooling", "heating", "off"][
                    Math.floor(Math.random() * 3)
                ]
            },
            lighting: {
                livingRoom: Math.random() > 0.3,
                bedroom: Math.random() > 0.4,
                kitchen: Math.random() > 0.2,
                brightness: parseInt(
                    (lastSmartHomeData.devices.lighting.brightness + (Math.random() - 0.5) * 10).toFixed(0)
                )
            },
            security: {
                doorsLocked: Math.random() > 0.2,
                motionDetected: Math.random() > 0.9,
                camerasOnline: Math.random() > 0.05,
                alarmActive: Math.random() > 0.95
            },
            energy: {
                totalUsage: randomizeValue(lastSmartHomeData.devices.energy.totalUsage, 2),
                solarGenerated: randomizeValue(lastSmartHomeData.devices.energy.solarGenerated, 2),
                batteryLevel: randomizeValue(lastSmartHomeData.devices.energy.batteryLevel, 1)
            },
            smartSpeakers: lastSmartHomeData.devices.smartSpeakers.map(speaker => ({
                ...speaker,
                volume: parseInt(
                    (speaker.volume + (Math.random() - 0.5) * 5).toFixed(0)
                ),
                playing: Math.random() > 0.5
            })),
            appliances: {
                washingMachine: {
                    running: Math.random() > 0.5,
                    cycle: ["wash", "rinse", "spin", "off"][
                        Math.floor(Math.random() * 4)
                    ]
                },
                oven: {
                    temperature: randomizeValue(lastSmartHomeData.devices.appliances.oven.temperature, 5),
                    active: Math.random() > 0.3
                },
                refrigerator: {
                    temperature: randomizeValue(lastSmartHomeData.devices.appliances.refrigerator.temperature, 0.2),
                    doorOpen: Math.random() > 0.1
                }
            },
            airQuality: {
                CO2: randomizeValue(lastSmartHomeData.devices.airQuality.CO2, 5),
                VOC: randomizeValue(lastSmartHomeData.devices.airQuality.VOC, 0.05),
                PM2_5: randomizeValue(lastSmartHomeData.devices.airQuality.PM2_5, 0.5)
            }
        }
    };
};

router.get("/", (req, res) => {
    const data = generateSmartHomeData();
    lastSmartHomeData = data;
    res.json(data);
});

module.exports = router;
