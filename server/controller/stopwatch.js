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

  const id = req.params.id;

  Stopwatch.findOne({
    where: {
      id_stopwatch: req.params.id
    },
    attributes: ['status'],
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

  const id = req.params.id;

  Stopwatch.findOne({
    where: {
      id_stopwatch: req.params.id
    },
    attributes: ['nama'],
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

// Update
exports.updateStopwatchTimestamp = async (req, res) => {
  const id = req.params.id;

  Stopwatch.update(
    { timestamp: req.body.timestamp },
    { where: { id_stopwatch: id } }
  )
    .then(data => {
      if (data == 1) {
        res.send({
          message: "Timestamp Stopwatch was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Timestamp Stopwatch with id=${id}. Maybe Timestamp Stopwatch was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Timestamp Stopwatch with id=" + id
      });
    });
};
exports.updateStopwatchStatus = async (req, res) => {

};
exports.updateStopwatchName = async (req, res) => {

};


// Delete
exports.deleteStopwatchByID = async (req, res) => {

  const id = req.params.id;

  Stopwatch.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(rowDeleted){ 
  if(rowDeleted === 1){
     console.log('Deleted successfully');
   }
}, function(err){
    console.log(err); 
})
  
};
