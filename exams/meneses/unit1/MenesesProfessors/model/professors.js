const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProfessorSchema = Schema({
    name: {type: String},
    lastName: {type: String},
    phone: {type: Number},
    subject: {type: String}
})

module.exports = Professor = mongoose.model('Professor', ProfessorSchema)