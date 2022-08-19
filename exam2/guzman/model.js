const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        id: {
            required: true,
            type: Number
        },
        name: {
            required: true,
            type: String
        },
        age: {
            required: true,
            type: Number
        },
        moneySpent: {
            required: true,
            type: Number
        },
    },
    {
        collection: "Customer",
        versionKey: false
    }
)

module.exports = mongoose.model('Customer', customerSchema)