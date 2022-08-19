import mongoose from "mongoose";

const Customer = new mongoose.Schema(
  {
    id: Number,
    name: String,
    age: Number,
    moneySpent: Number,
  },
  {
    collection: "Customer",
    versionKey: false,
  }
);

export default mongoose.model("Customer", Customer);
