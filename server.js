const express = require('express');
const app = express();

const port = 3000;

app.get('/', (request,response)=>{
    response.send('hello')
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`)
})


/*const {Client} = require('pg')const client = new Client({
    user: "postgres",
    password: "Parparpar06",
    host: "husseinmac",
    port: 8888,
    database: "stopwatch"
})

client.connect()
.then(() => console.log("Connected successfuly"))
.then(() => client.query("select * from employees where name = $1", ["Edmond"]))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end()) */