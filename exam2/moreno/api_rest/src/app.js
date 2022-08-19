import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import customerRoutes from "./routers/customer.routes.js";

const app = express();

//Conection database
const DATABASE_URI =
  "mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority";

mongoose
  .connect(DATABASE_URI)
  .then(() => console.log("Database is conected"))
  .catch((error) => console.log(error));

//midelwares
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.json({
    name: "Exam API",
    author: "Moreno Elver",
    desciption: "Exam API",
    version: "1.0.0",
  });
});

app.use("/customers", customerRoutes);

export default app;
