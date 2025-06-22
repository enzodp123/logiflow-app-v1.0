import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import {
  crearCliente,
  obtenerClientes,
  obtenerCliente,
  actualizarCliente,
  eliminarCliente
} from '../controllers/clienteController';
import verifyRole from '../middlewares/verifyRole';
import validateRequest from '../validations/validateRequest';
import { validarCliente } from '../validations/clienteValidations';

const router = express.Router();

router.post('/', verifyRole('admin'), validarCliente, validateRequest, asyncHandler(crearCliente));
router.get('/', asyncHandler(obtenerClientes));
router.get('/:id', asyncHandler(obtenerCliente));
router.put('/:id', verifyRole('admin'), validarCliente, validateRequest, asyncHandler(actualizarCliente));
router.delete('/:id', asyncHandler(eliminarCliente));

export default router;

