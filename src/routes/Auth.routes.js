import { Router } from "express";
import AuthController from "../controllers/Auth.controller.js";
const router = Router();

router.post("/login", AuthController.login);

export default router;
