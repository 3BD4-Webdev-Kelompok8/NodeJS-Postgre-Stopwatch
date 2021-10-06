
const {Client} = require('pg')

const client = new Client({
    user: "postgres",
    password: "Wafi12345",
    host: "localhost",
    port: 5432,
    database: "postgres"

})
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
module.exports = client