import { Schema, model } from "mongoose";

const CustomersSchema = Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    moneySpent:{
      type: Number,
    }
  },
  {
    versionKey: false,
  }
);

export default model("Customer", CustomersSchema, "Customer");
