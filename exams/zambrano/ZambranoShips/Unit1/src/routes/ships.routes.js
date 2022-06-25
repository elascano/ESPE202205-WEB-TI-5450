import { Router } from "express";
import * as shipsController from '../controller/shipsController';

const router = Router();

//routes ships
router.get('/', shipsController.getAllShips);
router.post('/ships/add', shipsController.postShips);

export default router;