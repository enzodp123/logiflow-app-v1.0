import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto
} from '../controllers/productoController';

const router = express.Router();

router.post('/', asyncHandler(crearProducto));
router.get('/', asyncHandler(obtenerProductos));
router.get('/:id', asyncHandler(obtenerProducto));
router.put('/:id', asyncHandler(actualizarProducto));
router.delete('/:id', asyncHandler(eliminarProducto));

export default router;
