import express from 'express';
import connectDB from './config/db';
import clienteRoutes from './routes/clienteRoutes';
import productoRoutes from './routes/productoRoutes';

const app = express();
app.use(express.json());
connectDB();
app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productoRoutes);
export default app;
