const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({

  Id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  moneySpent: {
    type: Number,
    required: true
  
  }
});

module.exports = mongoose.model('Customer', customerSchema);