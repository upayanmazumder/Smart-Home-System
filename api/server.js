const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const greetRoutes = require("./routes/greet");
const uptimeRoutes = require("./routes/uptime");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "This is the Smart Home System API" });
});

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/greet", greetRoutes);
app.use("/uptime", uptimeRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
