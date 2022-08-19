const mongoose = require("mongoose");
const port = 3000
const express = require("express");
const app = express();


mongoose.connect(`mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority`, {useNewUrlParser: true});

const db = mongoose.connection;


db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Succesfully connected to the MongoDB Atlas"));

//
app.use(express.json());

const customerRouter = require("./routes/customer")

app.use("/computerstore", customerRouter);

app.listen(port, () => console.log ("Server is running on port" + port));