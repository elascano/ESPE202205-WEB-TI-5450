const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    name: {type: String},
    nrc: {type: Number},
    schedule: {type: String},
    period: {type: String},
    hours: {type: Number}
}, {
    versionKey: false
})

module.exports = Curso = mongoose.model('Curso', CourseSchema)