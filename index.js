
import express from 'express';
import connectDatabase from './src/database/db.database.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();
app.use(express.json());
app.use('/', controllerName);

app.listen(port, () => console.log());

