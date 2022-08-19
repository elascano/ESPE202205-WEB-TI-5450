import express from "express";
import mongoose from "mongoose";
import customerRoutes from "./routers/customer.js";

const app = express();
const PORT = 3020;
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});

mongoose
  .connect(
    "mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database is conected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use("/exam/customers", customerRoutes);
