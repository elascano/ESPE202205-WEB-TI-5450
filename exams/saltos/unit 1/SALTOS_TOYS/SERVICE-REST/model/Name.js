const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NameSchema = new Schema({
    name: {type: String},
    age: {type: Number},
    subTotal: {type: Number}
})

module.exports = Name = mongoose.model('Name', NameSchema)