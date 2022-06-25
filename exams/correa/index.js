var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

// Middleware para poder entender los datos urlenconded
app.use(bodyParser.urlencoded({ extended: false }));

// Aplicación escuchando
app.listen(8001, function() {
    console.log('Escuchando en puerto 8001');
})


mongoose.connect('mongodb+srv://admin:admin@cluster0.ohmrl.mongodb.net/taller?retryWrites=true&w=majority',  { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Conectado a Mongo Atlas')
})

var tecladoSchema = mongoose.Schema({
    _id: Number, 
    nombre: String, 
    precio: Number
});


var Teclado =  mongoose.model('teclados', tecladoSchema)


// RUTAS Y METODOS //

app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a nuestro servidor API REST')
})

app.get('/api/teclados',(req, res) => {
    Teclado.find(function(err, respuesta){
        if(err){
            res.status(500).send('Error')
        } else {
            res.send(respuesta);
        }
    })
})

app.get('/api/teclados/:id',(req, res) => {
    Teclado.findById(req.params.id, (err, respuesta) => {
        if(err){
            res.status(500).send('Error')
        } else {
            res.send(respuesta);
        }
    })
})

// Agregar
app.post('/api/teclados',(req, res) => {
    var _teclado = new Teclado({
        _id: req.body.id,
        nombre: req.body.nombre,
        precio: req.body.edad
    })
    _teclado.save(function(err, respuesta){
        if(err){
            res.status(500).send('Error')
        } else {
            res.send('Teclado agregado exitosamente!')
        }
    })
})

// Eliminar
app.delete('/api/teclados/:id',(req, res) => {
    Teclado.remove({_id: req.params.id}, (err, respuesta) => {
     if(err){
         res.status(500).send('Error')
     } else {
         res.send('Teclado eliminado exitosamente!')
     }
    })
 })



 //Actualizar
 app.put('/api/teclados/:id',(req, res) => {
    Teclado.updateOne(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre }},
       
        (err, respuesta) => {
            if(err){
                res.status(500).send('Error')
            } else {
                res.send('Teclado editado exitosamente!')
            }
        }
    )
})