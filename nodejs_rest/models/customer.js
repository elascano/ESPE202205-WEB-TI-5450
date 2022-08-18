const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema(
  {
    id: { type: Number },
    fullName: { type: String },
    email: { type: String },
    type: { type: String },
    discount: { type: Number },
    totalSale: { type: Number },
  },
  { collection: "Customer" }
);

module.exports = mongoose.model("Customer", customersSchema);