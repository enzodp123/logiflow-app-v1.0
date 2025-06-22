import express from 'express';
import connectDB from './config/db';
import clienteRoutes from './routes/clienteRoutes';

const app = express();
app.use(express.json());
connectDB();
app.use('/api/clientes', clienteRoutes);
export default app;
