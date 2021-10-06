
const {Client} = require('pg')

const client = new Client({
    user: 'admin',
    host: 'localhost',
    database: 'stopwatch',
    password: 'admin',
    port: 8888,

})
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
module.exports = client