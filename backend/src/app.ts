import express from 'express';
import connectDB from './config/db';
import clienteRoutes from './routes/clienteRoutes';
import productoRoutes from './routes/productoRoutes';
import pedidoRoutes from './routes/pedidoRoutes';
import errorMiddleware from './middlewares/errorMiddleware';
import pagoRoutes from './routes/pagoRoutes';


// Inicializar la aplicación Express y conectar a la base de datos
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas de la API
app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/pagos', pagoRoutes);
// Middleware de manejo de errores siempre al final
app.use(errorMiddleware);


export default app;
