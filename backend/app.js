const express = require("express");
const routes = require("./src/routes");
app = express();

// running the app
const port = 3000;
app.listen(port, () => {
  console.log("[+] App running on port :3000");
});
