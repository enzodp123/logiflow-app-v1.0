import express from 'express';
import verifyRole from '../middlewares/verifyRole';
import asyncHandler from '../utils/asyncHandler';
import {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto
} from '../controllers/productoController';

const router = express.Router();

router.post('/', verifyRole('admin'), asyncHandler(crearProducto));
router.get('/', asyncHandler(obtenerProductos));
router.get('/:id', asyncHandler(obtenerProducto));
router.put('/:id', verifyRole('admin'), asyncHandler(actualizarProducto));
router.delete('/:id', verifyRole('admin'), asyncHandler(eliminarProducto));

export default router;
