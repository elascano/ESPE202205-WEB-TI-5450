const port = 3004
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//mongoose
mongoose
.connect("mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority")
.then(() => console.log ("System connected to MongoDB Database"))
.catch((error) => console.error(error));




const customerRoutes = require("./routes/customerRoutes");


app.use(express.json());
app.use('/computer', customerRoutes);

//Listen test
app.listen(port, () => console.log("Server is running on port " + port));