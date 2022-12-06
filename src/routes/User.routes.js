import { Router } from "express";
const router = Router();

import userController from "../controllers/User.controller.js";
import { authMiddleware } from "../middlewares/middlewareAuth.js";

router.post("/create", userController.create);
router.delete("/:id", authMiddleware, userController.deleteUser);

export default router;
