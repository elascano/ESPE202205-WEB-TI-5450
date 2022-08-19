const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BancosSchema = new Schema(
{
    Name: {type: String},
    YearsOfservice: {type: Number},
    Address: {type: String},
    Phone: {type: String},

})

module.exports = Bancos = mongoose.model('Bancos', BancosSchema)