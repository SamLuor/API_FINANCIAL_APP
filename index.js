import express from "express";
import connectDatabase from "./src/database/db.database.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import authRoute from "./src/routes/Auth.routes.js";
import userRoute from "./src/routes/User.routes.js";
import expenseRoute from "./src/routes/Expense.routes.js";
import revenueRoute from "./src/routes/Revenue.routes.js";

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/expense", expenseRoute);
app.use("/revenue", revenueRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
