//Modules
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

//Database Connection
const db = require('./config/database');

db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

//Routes
const stopwatchRoutes = require('./routes/stopwatch');
//const historyRoutes =  require('./routes/history');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

//Use routes
app.use('/stopwatch', stopwatchRoutes);
//app.use('/history', historyRoutes);

const PORT = process.env.PORT || 5001;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));
