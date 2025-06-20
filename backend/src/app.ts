import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.use('/api/usuarios', usuarioRoutes);

export default app;

