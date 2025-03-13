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
    console.log(`Signup request received: email=${email}, name=${name}`);

    if (!email || !password || !name) {
        console.log("Signup failed: Missing fields");
        return res.status(400).json({ message: "All fields are required" });
    }

    if (getUserData(email)) {
        console.log("Signup failed: User already exists");
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    saveUserData(email, { email, name, password: hashedPassword });
    console.log(`User registered successfully: email=${email}`);
    
    res.status(201).json({ message: "User registered successfully" });
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(`Login attempt: email=${email}`);

    const user = getUserData(email);
    if (!user) {
        console.log("Login failed: User not found");
        return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log("Login failed: Invalid credentials");
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email, name: user.name }, SECRET_KEY, { expiresIn: "1h" });
    console.log(`Login successful: email=${email}, token=${token}`);

    res.json({ message: "Login successful", token });
});

// Forgot Password
router.post("/forgot-password", (req, res) => {
    const { email } = req.body;
    console.log(`Forgot password request: email=${email}`);

    const user = getUserData(email);
    if (!user) {
        console.log("Forgot password failed: User not found");
        return res.status(400).json({ message: "User not found" });
    }

    const newPassword = Math.random().toString(36).slice(-8);
    user.password = bcrypt.hashSync(newPassword, 10);
    saveUserData(email, user);

    console.log(`Password reset successful: email=${email}, newPassword=${newPassword}`);
    res.json({ message: "Password reset successful", newPassword });
});

module.exports = router;
