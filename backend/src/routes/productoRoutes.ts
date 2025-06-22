import express from 'express';
import {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto
} from '../controllers/productoController';

const router = express.Router();

router.post('/', crearProducto);
router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);
router.put('/:id', actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;
// This code defines the routes for product management in an Express application.

