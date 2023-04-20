const express = require("express");
const router = express.Router();
const detailController = require("../app/controllers/detailsController.js");

router.get("/api/details/:userId", detailController.show);
router.post("/api/details", detailController.create);

module.exports = router;
