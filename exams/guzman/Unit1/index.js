
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = "mongodb+srv://admin:<admin>@cluster0.z6oszhk.mongodb.net/test";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./services');

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

