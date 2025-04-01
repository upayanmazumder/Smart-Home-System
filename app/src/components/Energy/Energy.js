import { useEffect, useState } from "react";
import styles from "./Energy.module.css";
import API_URL from "../../data/api";

const Energy = () => {
  const [energyData, setEnergyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnergyData = async () => {
      try {
        const response = await fetch(`${API_URL}/dashboard/energy`);
        const data = await response.json();
        setEnergyData(data);
      } catch (error) {
        console.error("Error fetching energy data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnergyData();
    const interval = setInterval(fetchEnergyData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (!energyData)
    return <div className={styles.error}>Failed to load energy data.</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Energy Status</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong>Total Usage:</strong>{" "}
          <span className={styles.value}>{energyData.totalUsage} kWh</span>
        </li>
        <li className={styles.listItem}>
          <strong>Solar Generated:</strong>{" "}
          <span className={styles.value}>{energyData.solarGenerated} kWh</span>
        </li>
        <li className={styles.listItem}>
          <strong>Battery Level:</strong>{" "}
          <span className={styles.value}>{energyData.batteryLevel}%</span>
        </li>
        <li className={styles.listItem}>
          <strong>Efficiency Ratio:</strong>{" "}
          <span className={styles.value}>
            {energyData.efficiencyRatio || "N/A"}
          </span>
        </li>
        <li className={styles.listItem}>
          <strong>Estimated Savings:</strong>{" "}
          <span className={styles.value}>
            {energyData.estimatedSavings || "N/A"}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Energy;
