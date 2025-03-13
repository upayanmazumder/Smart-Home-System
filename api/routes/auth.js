// filepath: [auth.js](http://_vscodecontentref_/1)
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserData, saveUserData } = require("../utils/fileUtils");
require('dotenv').config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

// Signup
router.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) return res.status(400).json({ message: "All fields are required" });

    if (getUserData(email)) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    saveUserData(email, { email, name, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" });
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = getUserData(email);

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: user.email, name: user.name }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
});

// Forgot Password
router.post("/forgot-password", (req, res) => {
    const { email } = req.body;
    const user = getUserData(email);

    if (!user) return res.status(400).json({ message: "User not found" });

    const newPassword = Math.random().toString(36).slice(-8);
    user.password = bcrypt.hashSync(newPassword, 10);
    saveUserData(email, user);

    res.json({ message: "Password reset successful", newPassword });
});

module.exports = router;