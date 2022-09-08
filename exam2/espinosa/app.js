const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const alumnos = require('./routes/customer')
app.use(alumnos)

app.get('/', (req, res)=>{
    res.send('hola mundo')
})

app.listen(3000, ()=>{
    console.log('¡Running! en http://localhost:3000')
})