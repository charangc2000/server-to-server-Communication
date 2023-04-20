const express = require("express");
const cors = require("cors");
const configureDb = require("./config/database.js");
const router = require("./config/routes.js");
port = 3088;

const app = express();
app.use(express.json());
app.use(cors());
configureDb();
app.use(router);

app.listen(port, () => {
  console.log("server running on port", port);
});
