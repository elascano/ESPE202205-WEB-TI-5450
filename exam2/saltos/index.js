const port = 3000
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//conection to DB
mongoose.connect(`mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority`, {useNewUrlParser: true});

//Exception to mongoose DB
const db = mongoose.connection;

db.on("error", (error) => crossOriginIsolated.error(error));
db.once("open", () => console.log("System connected to MongoDB Database"));

app.use(express.json());

const CustomerRouter = require("./routes/CustomerRoutes");
app.use("/computerstore", CustomerRouter);
//port
app.listen(port, () => console.log ("My Computer Server store is running on port ==> " + port));









//code references for: content and class tutorials 
//Edison Lascano.
//class: Web Development 2022