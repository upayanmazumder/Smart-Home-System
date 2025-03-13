const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data", "users");

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Read user data
const getUserData = (email) => {
    const filePath = path.join(DATA_DIR, `${email}.json`);
    return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf8")) : null;
};

// Write user data
const saveUserData = (email, data) => {
    const filePath = path.join(DATA_DIR, `${email}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

module.exports = { getUserData, saveUserData };
