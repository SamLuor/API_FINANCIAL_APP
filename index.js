import express from "express";
import connectDatabase from "./src/database/db.database.js";
import dotenv from "dotenv";

dotenv.config();

import userRoute from "./src/routes/User.routes.js";
import authRoute from "./src/routes/Auth.routes.js";

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
