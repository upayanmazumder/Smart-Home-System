const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Server Running..."));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
