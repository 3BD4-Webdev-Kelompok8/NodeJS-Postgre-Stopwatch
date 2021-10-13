const express = require("express");
const stopwatchController = require("../controller/stopwatch")

const router = express.Router();

router.post('/createStopwatch', stopwatchController.createStopwatch)
router.get('/getStopwatch/:id', stopwatchController.getStopwatch)
router.get('/getStopwatchTimestamp/:id', stopwatchController.getStopwatchTimestamp)
router.get('/getStopwatch/:id', stopwatchController.getStopwatchStatus)
router.get('/getStopwatchName/:id', stopwatchController.getStopwatchName);
router.put('/updateStopwatchTimestamp/:id', stopwatchController.updateStopwatchTimestamp)
router.delete('/deleteStopwatchByID/:id', stopwatchController.deleteStopwatchByID)

module.exports = router