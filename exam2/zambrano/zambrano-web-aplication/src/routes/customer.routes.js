import { Router } from "express";
import * as customerController from "../controllers/costumer.controller"

const router = Router();

router.get("/", customerController.getCustomer);


export default router;