import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.smart-home-system.upayan.dev/dashboard');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);
 
  const renderProgress = (percentage) => (
    <div className={styles.progressCircle} style={{ background: `conic-gradient(#4caf50 ${percentage}%, #ccc ${percentage}%)` }}>
      <span className={styles.progressText}>{percentage}%</span>
    </div>
  );

  return (
    <div className={styles.dashboard}>
      {data.map((entry, index) => (
        <motion.div
          key={index}
          className={styles.entry}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.timestamp}>
            {new Date(entry.timestamp).toLocaleString()}
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Thermostat</h2>
            <div className={styles.cardContent}>
              <p>Temperature: {entry.devices.thermostat.temperature}°C</p>
              <p>Humidity: {entry.devices.thermostat.humidity}%</p>
              <p>Mode: {entry.devices.thermostat.mode}</p>
              {renderProgress(entry.devices.thermostat.temperature)} 
            </div>
          </div>
          
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Lighting</h2>
            <div className={styles.cardContent}>
              <p>Living Room: {entry.devices.lighting.livingRoom ? 'On' : 'Off'}</p>
              <p>Bedroom: {entry.devices.lighting.bedroom ? 'On' : 'Off'}</p>
              <p>Kitchen: {entry.devices.lighting.kitchen ? 'On' : 'Off'}</p>
              <p>Brightness: {entry.devices.lighting.brightness}%</p>
              {renderProgress(entry.devices.lighting.brightness)} 
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Security</h2>
            <div className={styles.cardContent}>
              <p>Doors Locked: {entry.devices.security.doorsLocked ? 'Yes' : 'No'}</p>
              <p>Motion Detected: {entry.devices.security.motionDetected ? 'Yes' : 'No'}</p>
              <p>Cameras Online: {entry.devices.security.camerasOnline ? 'Yes' : 'No'}</p>
              <p>Alarm Active: {entry.devices.security.alarmActive ? 'Yes' : 'No'}</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Energy</h2>
            <div className={styles.cardContent}>
              <p>Total Usage: {entry.devices.energy.totalUsage} kWh</p>
              <p>Solar Generated: {entry.devices.energy.solarGenerated} kWh</p>
              <p>Battery Level: {entry.devices.energy.batteryLevel}%</p>
              {renderProgress(entry.devices.energy.batteryLevel)} 
            </div>
          </div>
          
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Appliances</h2>
            <div className={styles.cardContent}>
              <p>Washing Machine: {entry.devices.appliances.washingMachine.running ? 'Running' : 'Stopped'}</p>
              <p>Oven Temp: {entry.devices.appliances.oven.temperature}°C</p>
              <p>Oven Active: {entry.devices.appliances.oven.active ? 'Yes' : 'No'}</p>
              <p>Refrigerator Temp: {entry.devices.appliances.refrigerator.temperature}°C</p>
              <p>Refrigerator Door Open: {entry.devices.appliances.refrigerator.doorOpen ? 'Yes' : 'No'}</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Air Quality</h2>
            <div className={styles.cardContent}>
              <p>CO2 Level: {entry.devices.airQuality.CO2} ppm</p>
              <p>VOC Level: {entry.devices.airQuality.VOC} ppm</p>
              <p>PM2.5: {entry.devices.airQuality.PM2_5} µg/m³</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Dashboard;
