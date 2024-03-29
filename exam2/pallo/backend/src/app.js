const express = require("express");
const cors = require("cors");
const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/customers",require("./routes/customers"));

module.exports = app;
