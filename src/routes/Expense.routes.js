import { Router } from "express";
import { authMiddleware } from "../middlewares/middlewareAuth.js";
import expenseController from "../controllers/Expense.controller.js";

const router = Router();

router.post("/create", authMiddleware, expenseController.create);
router.get("/", authMiddleware, expenseController.findAllById);
router.patch("/:id", authMiddleware, expenseController.update);
router.delete("/:id", authMiddleware, expenseController.deleteById);

export default router;
