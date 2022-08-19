const mongoose = require("mongoose");
//Customer Schema model
const customerSchema = mongoose.Schema({
    id: { type: Number },
    name: { type: String},
    age: { type: Number},
    moneySpent: { type: Number}
},{collection: "Customer"});
//Export
module.exports = mongoose.model('Customer', customerSchema);