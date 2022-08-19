const port = 3003 //Fernando´s port 
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority', {useNewUrlParser:true});

const db = mongoose.connection;

db.on("error",(error)=> crossOriginIsolated.error(error));
db.once("open", () => console.log ("System connected to MongoDB Database"));

app.use(express.json());
const customerRoute = require("./routes/computerRoutes.js");
app.use("/computerstore", customerRoute);

app.listen(port, () => console.log("Server is running on port " + port))