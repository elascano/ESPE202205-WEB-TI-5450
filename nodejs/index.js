const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/customerRoutes');

const app = express();

app.use('/cellstore', routes)

require('dotenv').config();

const user = process.env.USER;
const password = process.env.PASSWORD;

//const url = `mongodb+srv://${user}:${password}@cluster0.9knxc.mongodb.net/?retryWrites=true&w=majority`;
const database = mongoose.connection
const url = `mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url);

database.on('error connecting to MongoDB', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('MongoDB Database Connected');
})

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})