//Server

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const soccerteamRoutes = require("./routes/soccerteam");


const app = express()
const port = process.env.PORT || 3000;
app.listen(port, () =>console.log('Server listening on port', port));

//middlewares
app.use(express.json());
app.use('/api', soccerteamRoutes);

//routes 
app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

//Conecction MongoDB Atlas
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));


