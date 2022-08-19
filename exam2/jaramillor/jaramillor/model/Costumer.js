const mongoose = require('mongoose')
const Schema = mongoose.Schema
const costumerSchema = new Schema ({
    id: Number,
    name: String,
    age:Number,
    moneySpent: Number

}, {versionKey:false})
module.exports = mongoose.model('costumer', costumerSchema)

