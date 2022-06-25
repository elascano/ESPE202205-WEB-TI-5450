import express from "express";
import { create } from "express-handlebars";
import routerShips from "./routes/ships.routes";
import path from "path";
import morgan from "morgan";


const app = express();

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs",
});
app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(routerShips);

export default app;