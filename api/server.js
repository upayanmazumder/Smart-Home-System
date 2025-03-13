const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use("/auth", authRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
