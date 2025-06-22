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
import { validarProducto } from '../validations/productoValidations';
import validateRequest from '../validations/validateRequest';


const router = express.Router();

router.post('/', verifyRole('admin'), validarProducto, validateRequest, asyncHandler(crearProducto));
router.get('/', asyncHandler(obtenerProductos));
router.get('/:id', asyncHandler(obtenerProducto));
router.put('/:id', verifyRole('admin'), validarProducto, validateRequest, verifyRole('admin'), asyncHandler(actualizarProducto));
router.delete('/:id', verifyRole('admin'), asyncHandler(eliminarProducto));

export default router;
