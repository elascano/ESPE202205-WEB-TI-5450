const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    color: {
        required: true,
        type: String
    },
    direccion: {
        required: true,
        type: String
    },
    pisos: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)