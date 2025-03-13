const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/auth", authRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
