const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const customerRoute = require("./routes/customer");

const app = express();
const port = process.env.PORT || 3014;

app.use(express.json());
app.use("/api", customerRoute);

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});


mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.log("Connected to MongoDB Atlas"))
   .catch((error) => console.error(error));
  

app.listen(port, () => console.log("Server is start", port));