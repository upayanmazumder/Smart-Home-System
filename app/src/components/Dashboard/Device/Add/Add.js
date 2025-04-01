import { useState, useEffect } from "react";

import API_URL from "../../../../data/api";

export default function DeviceForm() {
  const [email, setEmail] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [status, setStatus] = useState("off");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.email) {
      setEmail(storedUser.email);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const device = { type: deviceType, name: deviceName, status };
    const response = await fetch(`${API_URL}/device`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, device }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add a Device</h2>
      {message && <p className="text-green-600 mb-2">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <select
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          required
          className="w-full p-2 border rounded"
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
          className="w-full p-2 border rounded"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="on">On</option>
          <option value="off">Off</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Add Device
        </button>
      </form>
    </div>
  );
}
