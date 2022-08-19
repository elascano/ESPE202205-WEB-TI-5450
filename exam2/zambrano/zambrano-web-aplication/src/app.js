import express from "express";
import { create } from "express-handlebars";
import path from "path";
import customerRoutes from "./routes/customer.routes"

//settings
const app = express();
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

//middelwares
app.use(express.urlencoded({ extended: false }));

//routes
app.use(customerRoutes)

export default app;
