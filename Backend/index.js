const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("./db");

const jobroutes = require("./routes/jobroutes");
const userroutes = require("./routes/userRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// routes
app.use("/api/users", userroutes);
app.use("/api/jobs", jobroutes);
app.use("/api/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});