const { Double, Decimal128 } = require('bson');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },

    fullName: {
        required: true,
        type: String
    },

    email: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },

    discount: {
        required: true,
        type: Number
    },

    totalSale: {
        required: true,
        type: Decimal128
    }

})

module.exports = mongoose.model('Customer', customerSchema)