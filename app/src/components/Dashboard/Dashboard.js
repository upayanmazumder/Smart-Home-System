import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Dashboard.module.css";
import { FaTemperatureHigh, FaTint, FaLightbulb, FaLock, FaBatteryFull, FaCouch, FaTv, FaWind } from "react-icons/fa";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { BsThermometerHalf } from "react-icons/bs";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.smart-home-system.upayan.dev/dashboard")
      .then((res) => res.json())
      .then((data) => setData(data.devices))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) return <div className={styles.loader}>Loading...</div>;

  return (
    <div className={styles.dashboard}>
      {/* Thermostat Section */}
      <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
        <div className={styles.icon}><FaTemperatureHigh /></div>
        <div className={styles.content}>
          <h2>Thermostat</h2>
          <p><strong>Temperature:</strong> {data.thermostat.temperature}°C</p>
          <p><strong>Humidity:</strong> {data.thermostat.humidity}%</p>
          <p><strong>Mode:</strong> {data.thermostat.mode}</p>
        </div>
      </motion.div>

      {/* Lighting Section */}
      <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
        <div className={styles.icon}><FaLightbulb /></div>
        <div className={styles.content}>
          <h2>Lighting</h2>
          <p><strong>Living Room:</strong> {data.lighting.livingRoom ? "On" : "Off"}</p>
          <p><strong>Bedroom:</strong> {data.lighting.bedroom ? "On" : "Off"}</p>
          <p><strong>Kitchen:</strong> {data.lighting.kitchen ? "On" : "Off"}</p>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${data.lighting.brightness}%` }}></div>
          </div>
        </div>
      </motion.div>

      {/* Security Section */}
      <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
        <div className={styles.icon}><FaLock /></div>
        <div className={styles.content}>
          <h2>Security</h2>
          <p><strong>Doors Locked:</strong> {data.security.doorsLocked ? "Yes" : "No"}</p>
          <p><strong>Motion Detected:</strong> {data.security.motionDetected ? "Yes" : "No"}</p>
          <p><strong>Cameras Online:</strong> {data.security.camerasOnline ? "Yes" : "No"}</p>
          <p><strong>Alarm Active:</strong> {data.security.alarmActive ? "Yes" : "No"}</p>
        </div>
      </motion.div>

      {/* Energy Section */}
      <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
        <div className={styles.icon}><FaBatteryFull /></div>
        <div className={styles.content}>
          <h2>Energy</h2>
          <p><strong>Total Usage:</strong> {data.energy.totalUsage} kWh</p>
          <p><strong>Solar Generated:</strong> {data.energy.solarGenerated} kWh</p>
          <p><strong>Battery Level:</strong> {data.energy.batteryLevel}%</p>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${data.energy.batteryLevel}%` }}></div>
          </div>
        </div>
      </motion.div>

      {/* Smart Speakers Section */}
      {data.smartSpeakers.map((speaker, index) => (
        <motion.div key={index} className={styles.card} whileHover={{ scale: 1.05 }}>
          <div className={styles.icon}><FaCouch /></div>
          <div className={styles.content}>
            <h2>{speaker.name}</h2>
            <p><strong>Volume:</strong> {speaker.volume}% {speaker.playing ? <IoMdVolumeHigh /> : <IoMdVolumeOff />}</p>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${speaker.volume}%` }}></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Dashboard;