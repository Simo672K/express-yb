// dependencies
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.MONGODB_URL);

const store = require("./src/store");
const routes = require("./src/routes");

app = express();

// middlewares
app.use(express.json());
app.use("/api", routes);
console.log();

// running the app
const port = 3000;
app.listen(port, () => {
  console.log("[+] App running on port :3000");
});
