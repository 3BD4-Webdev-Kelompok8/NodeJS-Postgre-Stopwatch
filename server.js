const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

app.use(cors())
app.use(express.json())

//create
// app.post("/employees",async (req,res) =>{
// try {
//     console.log(req.body)
//     console.log("wafi")
// }catch(err){
//     console.error(err.message)

// }
// })

app.post("/employees", async (req, res) => {
    try {
      const { name,id_employee } = req.body;
      pool.query(
        "INSERT INTO employee VALUES($1,$2)",
        [name,id_employee]
      );
    } catch (err) {
      console.error(err.message);
    }
  });

  // app.post("/employees", async (req, res) => {
  //       const { name, id_employee } = request.body;
  //       pool.query('INSERT INTO employee (name, email) VALUES ($1, $2)', [name, id_employee])
  //       });
        
//get
app.get("/employees", async (req, res) => {
  try {
    const allemployees = await pool.query("SELECT * FROM employee");
    res.json(allemployees.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//update
app.put("/employees/:id_employee", async (req, res) => {
  try {
    const { id_employee } = req.params;
    const { name } = req.body;
    const updateTodo = await pool.query(
      "UPDATE employee SET name = $1 WHERE id_employee = $2",
      [name, id_employee]
    );

    res.json("employee was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete
app.delete("/employees/:id_employee", async (req, res) => {
  try {
    const { id_employee } = req.params;
    const deleteTodo = await pool.query("DELETE FROM employee WHERE id_employee = $1", [
      id_employee
    ]);
    res.json("Employee was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


app.listen(5000,() => {
    console.log("server started on port 5000")
})