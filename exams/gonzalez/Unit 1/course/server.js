const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const portParameter = 8081
const EndPoints = require('./api/EndPoints')

var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//http://localhost:8081/course/uri
app.use("/Data", EndPoints)

mongoose.connect(
    "mongodb+srv://admin:<password>@cluster0.vq19r.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true},
    (err, ans) => {
        err && console.log("Error al conectarse a la base de datos")
        app.listen(portParameter, () => {
            console.log(`server is runnning on port ${portParameter}`)
        })
    }
)
