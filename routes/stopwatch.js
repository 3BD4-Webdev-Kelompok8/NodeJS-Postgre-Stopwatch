const express = require("express");
const stopwatchController = require("../controller/stopwatch")

const router = express.Router();

router.post('/createStopwatch', stopwatchController.createStopwatch)

module.exports = router