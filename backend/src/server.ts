import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './util/db';
import path from "node:path";
import authRouter from './routes/auth.routes';
import taskRouter from './routes/task.routes';

dotenv.config({ path: path.resolve(__dirname, "../config/.env") });
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/login', authRouter);


app.use('/api/tasks', taskRouter);


app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
