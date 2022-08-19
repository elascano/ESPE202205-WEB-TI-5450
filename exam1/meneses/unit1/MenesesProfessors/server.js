const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const portParemeter = 4000
const App= require('./app/app')

var app = express ()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/Professors", App)

mongoose.connect(
    "mongodb+srv://Alex:raul20156@cluster0.bwfpw.mongodb.net/Professors?retryWrites=true&w=majority",
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log("Error al conectarse a la base de datos")
        app.listen(portParemeter, ()=>{
            console.log(`Server is rouning on port ${portParemeter}`)
        })
    }
)