const express = require("express");
const userController = require("../app/controllers/usersController.js");
const router = express.Router();

router.get("/api/users", userController.list);
router.get("/api/users/:code", userController.show);
router.post("/api/users", userController.create);

module.exports = router;
