import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import {
  crearPedido,
  obtenerPedidos,
  obtenerPedido,
  actualizarEstadoPedido,
  eliminarPedido
} from '../controllers/pedidoController';

const router = express.Router();

router.post('/', asyncHandler(crearPedido));
router.get('/', asyncHandler(obtenerPedidos));
router.get('/:id', asyncHandler(obtenerPedido));
router.put('/:id', asyncHandler(actualizarEstadoPedido));
router.delete('/:id', asyncHandler(eliminarPedido));

export default router;
