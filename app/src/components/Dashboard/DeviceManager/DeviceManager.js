import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import API_URL from "../../../data/api";

export default function DeviceForm() {
  const [email] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return storedUser?.email || "";
  });
  const [deviceType, setDeviceType] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [status, setStatus] = useState("off");
  const [message, setMessage] = useState("");
  const [devices, setDevices] = useState([]);

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

  return (
    <div>
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
        <ul>
          {devices.map((device) => (
            <li key={device.id}>
              <span>
                {device.name} ({device.type}) - {device.status}
              </span>
              <button
                onClick={() =>
                  handleUpdate(
                    device.id,
                    device.status === "on" ? "off" : "on",
                    device.name
                  )
                }
              >
                Toggle Status
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No devices found.</p>
      )}
    </div>
  );
}
