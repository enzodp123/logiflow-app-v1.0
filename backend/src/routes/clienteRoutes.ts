import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import {
  crearCliente,
  obtenerClientes,
  obtenerCliente,
  actualizarCliente,
  eliminarCliente
} from '../controllers/clienteController';

const router = express.Router();

router.post('/', asyncHandler(crearCliente));
router.get('/', asyncHandler(obtenerClientes));
router.get('/:id', asyncHandler(obtenerCliente));
router.put('/:id', asyncHandler(actualizarCliente));
router.delete('/:id', asyncHandler(eliminarCliente));

export default router;

