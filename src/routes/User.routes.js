import { Router } from "express";
const router = Router();

import userController from "../controllers/User.controller.js";

router.post("/create", userController.create);

export default router;
