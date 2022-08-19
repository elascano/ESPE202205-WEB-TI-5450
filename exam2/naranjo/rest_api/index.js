import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import customerRoutes from "./routers/customer.routes.js";

const app = express();
const PORT = 3018;
app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});

mongoose
  .connect(
    "mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database is conected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(cors());

app.use("/customers", customerRoutes);
