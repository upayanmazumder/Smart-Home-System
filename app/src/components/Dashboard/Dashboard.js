import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { FaTemperatureHigh, FaSun, FaCloudSun, FaWifi, FaBatteryFull, FaThermometerHalf } from "react-icons/fa";
import { AiOutlineBulb, AiOutlineSecurityScan } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";

const Dashboard = () => {
  const [data, setData] = useState(null);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.smart-home-system.upayan.dev/dashboard");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data every 5 seconds
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  if (!data) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const {
    devices = {},
    lighting = {},
    security = {},
    energy = {},
    smartSpeakers = [],
    appliances = {},
    airQuality = {},
  } = data;

  return (
    <div className={styles.dashboard}>
      <div className={styles.grid}>
        {/* Thermostat */}
        <div className={styles.card}>
          <h2><FaTemperatureHigh /> Thermostat</h2>
          <p>Temperature: {devices?.thermostat?.temperature ?? "N/A"}°C</p>
          <p>Humidity: {devices?.thermostat?.humidity ?? "N/A"}%</p>
          <p>Mode: {devices?.thermostat?.mode ?? "N/A"}</p>
        </div>

        {/* Lighting */}
        <div className={styles.card}>
          <h2><AiOutlineBulb /> Lighting</h2>
          <p>Living Room: {lighting?.livingRoom ? "On" : "Off"}</p>
          <p>Bedroom: {lighting?.bedroom ? "On" : "Off"}</p>
          <p>Kitchen: {lighting?.kitchen ? "On" : "Off"}</p>
          <p>Brightness: {lighting?.brightness ?? "N/A"}%</p>
        </div>

        {/* Security */}
        <div className={styles.card}>
          <h2><AiOutlineSecurityScan /> Security</h2>
          <p>Doors Locked: {security?.doorsLocked ? "Yes" : "No"}</p>
          <p>Motion Detected: {security?.motionDetected ? "Yes" : "No"}</p>
          <p>Cameras Online: {security?.camerasOnline ? "Yes" : "No"}</p>
          <p>Alarm Active: {security?.alarmActive ? "Yes" : "No"}</p>
        </div>

        {/* Energy */}
        <div className={styles.card}>
          <h2><FaSun /> Energy</h2>
          <p>Total Usage: {energy?.totalUsage ?? "N/A"} kWh</p>
          <p>Solar Generated: {energy?.solarGenerated ?? "N/A"} kWh</p>
          <p>Battery Level: {energy?.batteryLevel ?? "N/A"}%</p>
        </div>

        {/* Smart Speakers */}
        <div className={styles.card}>
          <h2><GiSmartphone /> Smart Speakers</h2>
          {smartSpeakers.length > 0 ? (
            smartSpeakers.map((speaker, index) => (
              <div key={index}>
                <p>{speaker?.name ?? "Unknown"}: Volume {speaker?.volume ?? "N/A"}</p>
                <p>Status: {speaker?.playing ? "Playing" : "Idle"}</p>
              </div>
            ))
          ) : (
            <p>No smart speakers connected</p>
          )}
        </div>

        {/* Appliances */}
        <div className={styles.card}>
          <h2><FaThermometerHalf /> Appliances</h2>
          <p>Washing Machine: {appliances?.washingMachine?.running ? "Running" : "Off"} (Cycle: {appliances?.washingMachine?.cycle ?? "N/A"})</p>
          <p>Oven: {appliances?.oven?.active ? "On" : "Off"} (Temp: {appliances?.oven?.temperature ?? "N/A"}°C)</p>
          <p>Refrigerator: {appliances?.refrigerator?.temperature ?? "N/A"}°C (Door {appliances?.refrigerator?.doorOpen ? "Open" : "Closed"})</p>
        </div>

        {/* Air Quality */}
        <div className={styles.card}>
          <h2><FaCloudSun /> Air Quality</h2>
          <p>CO2: {airQuality?.CO2 ?? "N/A"} ppm</p>
          <p>VOC: {airQuality?.VOC ?? "N/A"} ppm</p>
          <p>PM2.5: {airQuality?.PM2_5 ?? "N/A"} µg/m³</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
