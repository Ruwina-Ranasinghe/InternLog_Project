import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './util/db';
import path from "node:path";
import { routes } from "./routes";

dotenv.config({ path: path.resolve(__dirname, "../config/.env") });
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
