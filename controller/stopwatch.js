const Tutorial = require('../models/stopwatch')

// Create
exports.createStopwatch = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Stopwatch
  const stopwatch = {
    nama: req.body.nama,
  };

  // Save Tutorial in the database
  Tutorial.create(stopwatch)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Read
exports.getStopwatchTimestamp = async (req, res) =>{

};
exports.getStopwatchStatus = async (req, res) =>{

};
exports.getStopwatchID = async (req, res) =>{

};
exports.getStopwatchName = async (req, res) =>{

};

// Update
exports.updateStopwatchTimestamp = async (req, res) =>{

};
exports.updateStopwatchStatus = async (req, res) =>{

};
exports.updateStopwatchName = async (req, res) =>{

};

// Delete
exports.deleteStopwatchByID = async (req, res) =>{

};
