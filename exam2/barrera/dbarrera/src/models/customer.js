const mongoose = require("mongoose");

const cpuSchema = mongoose.Schema({
    id: { type: Number },
    name: { type: String},
    age: { type: Number},
    moneySpent: { type: Number}
},{collection: "Customer"});

module.exports = mongoose.model('Customer', cpuSchema);