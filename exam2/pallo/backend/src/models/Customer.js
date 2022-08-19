const {Schema, model} = require("mongoose");

const customerSchema = new Schema({
id: Number,
name: String,
age: Number,
moneySpent: Number
});

module.exports = model("Customer", customerSchema);



