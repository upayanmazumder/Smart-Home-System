import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import API_URL from "../../../data/api";
import styles from "./DeviceManager.module.css";
import { FaToggleOff, FaToggleOn, FaRecycle } from "react-icons/fa";

export default function DeviceManager() {
  const [email] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return storedUser?.email || "";
  });
  const [deviceType, setDeviceType] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [status, setStatus] = useState("off");
  const [message, setMessage] = useState("");
  const [devices, setDevices] = useState([]);
  const [roomDevices, setRoomDevices] = useState({});
  const [droppedDevices, setDroppedDevices] = useState(new Set());

  const fetchDevices = useCallback(async () => {
    if (!email) return;
    try {
      const response = await axios.get(`${API_URL}/device`, {
        params: { email },
      });
      setDevices(
        Array.isArray(response.data.devices) ? response.data.devices : []
      );
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  }, [email]);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const device = { type: deviceType, name: deviceName, status };
    try {
      const response = await axios.post(`${API_URL}/device`, {
        email,
        device,
      });

      setMessage(response.data.message);
      fetchDevices();
    } catch (error) {
      console.error("Error adding device:", error);
    }
  };

  const handleUpdate = async (deviceId, newStatus, deviceName) => {
    try {
      const response = await axios.put(`${API_URL}/device`, {
        email,
        deviceId,
        device: {
          name: deviceName,
          status: newStatus,
        },
      });

      setMessage(response.data.message);
      fetchDevices();
    } catch (error) {
      console.error("Error updating device:", error);
      setMessage("Failed to update device.");
    }
  };

  const handleDelete = async (deviceId) => {
    try {
      const response = await axios.delete(`${API_URL}/device`, {
        data: { email, deviceId },
      });

      setMessage(response.data.message);
      fetchDevices();
    } catch (error) {
      console.error("Error deleting device:", error);
      setMessage("Failed to delete device.");
    }
  };

  const handleDragStart = (e, deviceId, spotId) => {
    e.dataTransfer.setData("deviceId", deviceId);
    e.dataTransfer.setData("spotId", spotId);
  };

  const handleDrop = (e, targetSpotId) => {
    const draggedDeviceId = e.dataTransfer.getData("deviceId");
    const draggedSpotId = e.dataTransfer.getData("spotId");
    const device = devices.find((device) => device.id === draggedDeviceId);

    if (!device || targetSpotId === draggedSpotId) return;

    setRoomDevices((prevState) => {
      const newState = { ...prevState };

      if (draggedSpotId) {
        delete newState[draggedSpotId];
      }

      newState[targetSpotId] = device;
      return newState;
    });

    setDroppedDevices((prevState) => {
      const newSet = new Set(prevState);
      newSet.add(draggedDeviceId);
      return newSet;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2>Add</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <select
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          required
        >
          <option value="">Select Device Type</option>
          <option value="light">Light</option>
          <option value="tv">TV</option>
          <option value="fan">Fan</option>
          <option value="thermostat">Thermostat</option>
        </select>
        <input
          type="text"
          placeholder="Device Name"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="on">On</option>
          <option value="off">Off</option>
        </select>
        <button type="submit">Add Device</button>
      </form>

      <h2>Devices</h2>
      {devices.length > 0 ? (
        <ul className={styles.deviceList}>
          {devices.map((device) => (
            <li
              key={device.id}
              className={styles.deviceItem}
              draggable={!droppedDevices.has(device.id)}
              onDragStart={(e) => handleDragStart(e, device.id, null)}
              onDragOver={handleDragOver}
            >
              <span>{device.name}</span>
              <button
                onClick={() =>
                  handleUpdate(
                    device.id,
                    device.status === "on" ? "off" : "on",
                    device.name
                  )
                }
              >
                {device.status === "on" ? <FaToggleOn /> : <FaToggleOff />}
              </button>
              <button onClick={() => handleDelete(device.id)}>
                <FaRecycle />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No devices found.</p>
      )}

      <h2>Room</h2>
      <div className={styles.room} onDragOver={handleDragOver}>
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div key={rowIndex} className={styles.roomRow}>
            {Array.from({ length: 5 }).map((_, colIndex) => {
              const spotId = `spot-${rowIndex}-${colIndex}`;
              const deviceInSpot = roomDevices[spotId];
              return (
                <div
                  key={spotId}
                  className={styles.roomSpot}
                  onDrop={(e) => handleDrop(e, spotId)}
                  onDragOver={handleDragOver}
                  draggable={!!deviceInSpot}
                  onDragStart={
                    deviceInSpot
                      ? (e) => handleDragStart(e, deviceInSpot.id, spotId)
                      : null
                  }
                >
                  {deviceInSpot && <span>{deviceInSpot.name}</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
