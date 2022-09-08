const port = 3015 //Asignamos un puerto para que se levante el sevidormpn
const express = require('express') 
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection;

mongoose.connect("mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority", //pegamos el link de la base de datos
    {useNewUrlParser: true});

db.on("error", (error) => console.log("Error connected to DB"))
db.once("open", () => console.log("System connected to MongoBD Databse"))

app.use(express.json());

const photoRouter = require("./routes/customerRoutes");

app.use("/computerstore", photoRouter);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))
