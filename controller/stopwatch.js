const Stopwatch = require('../models/stopwatch')

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

  // Save stopwatch in the database
  Stopwatch.create(stopwatch)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stopwatch."
      });
    });
};

// Read
exports.getStopwatchTimestamp = async (req, res) => {

  const id = req.params.id;

  Stopwatch.findOne({
    where: {
      id_stopwatch: req.params.id
    },
    attributes: ['timestamp'],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stopwatch with id=" + id
      });
    });

};

exports.getStopwatchStatus = async (req, res) => {

};

exports.getStopwatch = async (req, res) => {

  const id = req.params.id;

  Stopwatch.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stopwatch with id=" + id
      });
    });

};

exports.getStopwatchName = async (req, res) => {

};

// Update
exports.updateStopwatchTimestamp = async (req, res) => {

};
exports.updateStopwatchStatus = async (req, res) => {

};
exports.updateStopwatchName = async (req, res) => {

};

// Delete
exports.deleteStopwatchByID = async (req, res) => {

};
