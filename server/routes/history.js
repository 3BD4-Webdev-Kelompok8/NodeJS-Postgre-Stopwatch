const express = require("express");
const historyController = require("../controller/history")

const router = express.Router();

//Create


//Read
router.get('/getHistory/:id', historyController.getHistory)
router.get('/getAllHistory/', historyController.getAllHistory)
//Update

//Delete
router.delete('/deleteHistoryByID/:id', historyController.deleteHistoryByID)
router.delete('/deleteAllHistory/', historyController.deleteAllHistory)
module.exports = router