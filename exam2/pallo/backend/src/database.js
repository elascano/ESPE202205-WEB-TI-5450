const mongoose = require("mongoose");

const URI = "mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority";

mongoose.connect(URI, {

useNewUrlParser: true,


});
const connection = mongoose.connection;

connection.once("open", () => {

    console.log("database is connected");
})