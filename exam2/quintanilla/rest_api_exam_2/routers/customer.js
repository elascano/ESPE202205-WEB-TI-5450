import { Router } from "express";
import { getCustomers } from "../controller/customer.js";

const router = Router();

router.get("/", getCustomers);

export default router;
