import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import Router from './routers/router';
import { errorMiddleware } from './middlewares/error.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:3004", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", Router);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
