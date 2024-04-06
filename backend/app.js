// dependencies
const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const store = require("./src/store");
const routes = require("./src/routes");

app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api", routes);

// running the app
const port = 3000;
app.listen(port, () => {
  console.log("[+] App running on port :3000");
});
