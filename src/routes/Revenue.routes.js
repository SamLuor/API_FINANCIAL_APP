import { Router } from "express";
import { authMiddleware } from "../middlewares/middlewareAuth.js";
import revenueController from "../controllers/Revenue.controller.js";
const router = Router();

router.post("/create", authMiddleware, revenueController.create);
router.get("/", authMiddleware, revenueController.findAllByUserId);
router.delete("/:id", authMiddleware, revenueController.deleteRevenue);
router.patch("/:id", authMiddleware, revenueController.update);

export default router;
