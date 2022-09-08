const mongoose = require('mongoose')
const Schema = mongoose.Schema
const alumnoSchema = new Schema ({
    id: Integer,
    name: String,
    age:Number,
    moneyspent: String
}, {versionKey:false})
module.exports = mongoose.model('alumnos', alumnoSchema)