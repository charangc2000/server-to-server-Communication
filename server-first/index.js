const express = require("express");
const cors = require("cors");
const configureDb = require("./config/database.js");
const routes = require("./config/routes.js");
port = 3099;
const app = express();

app.use(express.json());
app.use(cors());
configureDb();
app.use(routes);

app.listen(port, () => {
  console.log("server running on port", port);
});
