const History = require('../models/history')
// Create
exports.createHistory = async (nama, timestamp) =>{
    // Validate request
  if (!nama && !timestamp) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Stopwatch History
  const history = {
    nama: nama,
    timestamp : timestamp
  };

  // Save stopwatch history in the database
  History.create(history)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stopwatch History."
      });
    });
};

// Read
exports.getHistory = async (req, res) =>{

};

// Delete
exports.deleteHistoryByID = async (req, res) =>{

};
exports.deleteAllHistory = async (req, res) =>{

};