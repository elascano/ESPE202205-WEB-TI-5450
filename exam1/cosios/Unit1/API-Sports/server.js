const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Sports = require('./api/sports');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/api/sports", Sports);

mongoose.connect(
    "mongodb+srv://db_admin:Espe2022.@cluster0.xbamo.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true },
    (err, res) => {
        err && console.log('Error al conectar a BD');
        app.listen(4000, () => {
            console.log('Conectado a Mongo Atlas');
        });
    }
);