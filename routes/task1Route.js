const express = require("express");
const task1Controller = require("../controllers/task1Controller.js");

const router = express.Router();

router.get("/", task1Controller.show);

module.exports = router;