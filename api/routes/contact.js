const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const CONTACT_FILE = path.join(__dirname, "../data/contact.json");

if (!fs.existsSync(CONTACT_FILE)) {
    fs.writeFileSync(CONTACT_FILE, JSON.stringify([]));
}

router.post("/", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    fs.readFile(CONTACT_FILE, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading contact file:", err);
            return res.status(500).json({ error: "Internal server error" });
        }

        let contacts = [];
        try {
            contacts = JSON.parse(data);
        } catch (parseError) {
            console.error("Error parsing contact file:", parseError);
        }

        const newContact = { name, email, message, timestamp: new Date().toISOString() };
        contacts.push(newContact);

        fs.writeFile(CONTACT_FILE, JSON.stringify(contacts, null, 2), (writeErr) => {
            if (writeErr) {
                console.error("Error writing contact file:", writeErr);
                return res.status(500).json({ error: "Failed to save contact" });
            }
            res.json({ success: true, message: "Contact request submitted successfully" });
        });
    });
});

module.exports = router;
