const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const portParameter = 8080
const EndPoints = require('./api/EndPoints')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/bancos",EndPoints)
//http://localhost:8080/bancos/uri

mongoose.connect(
    "mongodb+srv://dylan:dylan@cluster0.lsq28ap.mongodb.net/BancoPichincha?retryWrites=true&w=majority",
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log("Error connecting to database")
        app.listen(portParameter,() => {
            console.log(`The service is running on the port ${portParameter}`)
        })
    }
)