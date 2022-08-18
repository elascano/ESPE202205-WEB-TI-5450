require("dotenv").config();
const port = 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/oop?retryWrites=true&w=majority`, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB Database "));
//db.once("open", () => console.log("Connected to MongoDB Database ", db.db));

app.use(express.json());

const customersRouter = require("./routes/customersRoutes");
app.use("/phonestore", customersRouter);

app.listen(port, () => console.log("Server Started on port" + port));