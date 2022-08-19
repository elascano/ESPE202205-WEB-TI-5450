const express = require('express') 
const mongoose = require('mongoose') 
const bodyParser = require('body-parser') 
const portParameter = 8081 //Asignment the port 
const EndPoints = require('./api/EndPoints') //URIs

var app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//http://localhost:8081:names/uri
app.use("/nombres",EndPoints) //Creamos la url para el llamado de las uris

mongoose.connect( //Establecemos conexion
//pasword 1298
    "mongodb+srv://brandon:<1298>@cluster0.mpfyxdg.mongodb.net/?retryWrites=true&w=majority", //link mongoDB
    {useNewUrlParser: true},
    (err,res) => {
        err && console.log("Error conectado a la base de datos")
        app.listen(portParameter, () => {
            console.log(`Server is running at http://localhost:${portParameter}`)
        })
    }
)