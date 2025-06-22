import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import {
  crearPedido,
  obtenerPedidos,
  obtenerPedido,
  actualizarEstadoPedido,
  eliminarPedido
} from '../controllers/pedidoController';
import verifyRole from '../middlewares/verifyRole';
import validateRequest from '../validations/validateRequest';
import { validarPedido } from '../validations/pedidoValidations';

const router = express.Router();

router.post('/', verifyRole('admin'), validarPedido, validateRequest, asyncHandler(crearPedido));
router.get('/', asyncHandler(obtenerPedidos));
router.get('/:id', asyncHandler(obtenerPedido));
router.put('/:id', verifyRole('admin'), validarPedido, validateRequest, asyncHandler(actualizarEstadoPedido));
router.delete('/:id', asyncHandler(eliminarPedido));

export default router;
