const express = require("express");
const { getUserData, saveUserData } = require("../utils/fileUtils");

const router = express.Router();

// Add a new device
router.post("/", (req, res) => {
  const { email, device } = req.body;

  if (
    !email ||
    !device ||
    !device.type ||
    !device.name ||
    device.status === undefined
  ) {
    return res
      .status(400)
      .json({ message: "Email, device type, name, and status are required" });
  }

  const user = getUserData(email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!user.devices) {
    user.devices = {};
  }

  const deviceType = device.type.toLowerCase();
  let nextId = 1;

  Object.keys(user.devices).forEach((key) => {
    if (key.startsWith(`${deviceType}-`)) {
      const existingId = parseInt(key.split("-")[1], 10);
      if (!isNaN(existingId) && existingId >= nextId) {
        nextId = existingId + 1;
      }
    }
  });

  const deviceId = `${deviceType}-${nextId}`;
  user.devices[deviceId] = {
    id: deviceId,
    name: device.name,
    status: device.status,
  };

  saveUserData(email, user);
  res
    .status(201)
    .json({ message: "Device added successfully", devices: user.devices });
});

// Fetch all devices
router.get("/", (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const user = getUserData(email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const devicesArray = Object.values(user.devices || {});

  res.json({ devices: devicesArray });
});

// Delete a device
router.delete("/", (req, res) => {
  const { email, deviceId } = req.body;

  if (!email || !deviceId) {
    return res
      .status(400)
      .json({ message: "Email and device ID are required" });
  }

  const user = getUserData(email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!user.devices || !user.devices[deviceId]) {
    return res.status(404).json({ message: "Device not found" });
  }

  delete user.devices[deviceId];
  saveUserData(email, user);

  res.json({ message: "Device deleted successfully", devices: user.devices });
});

// Update device details
router.put("/", (req, res) => {
  const { email, deviceId, device } = req.body;

  if (
    !email ||
    !deviceId ||
    !device ||
    !device.name ||
    device.status === undefined
  ) {
    return res.status(400).json({
      message: "Email, device ID, device name, and status are required",
    });
  }

  const user = getUserData(email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!user.devices || !user.devices[deviceId]) {
    return res.status(404).json({ message: "Device not found" });
  }

  // Update device details
  user.devices[deviceId].name = device.name;
  user.devices[deviceId].status = device.status;

  saveUserData(email, user);

  res.json({ message: "Device updated successfully", devices: user.devices });
});

module.exports = router;
