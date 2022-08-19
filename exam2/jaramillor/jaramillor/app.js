const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const costumers = require('./routes/costumers')
app.use(costumers)

app.get('/', (req, res)=>{
    res.send('Running...')
})

app.listen(3000, ()=>{
    console.log('¡Server UP! en http://localhost:3000')
})