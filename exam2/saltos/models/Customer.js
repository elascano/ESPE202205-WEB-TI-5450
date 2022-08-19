const mongoose = require("mongoose");

//Get all customers
const CustomerSchema = new mongoose.Schema(
    {
        id: {type: Number},
        name: {type: String},
        age: {type: Number},
        moneySpent: {type: Number}
    },
    {collection: "Customer"},
    {versionKey: false}
);

module.exports = mongoose.model("Customer", CustomerSchema);

