import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import {
  crearPago,
  obtenerPagos,
  obtenerPago,
  eliminarPago
} from '../controllers/pagoController';

const router = express.Router();

router.post('/', asyncHandler(crearPago));
router.get('/', asyncHandler(obtenerPagos));
router.get('/:id', asyncHandler(obtenerPago));
router.delete('/:id', asyncHandler(eliminarPago));

export default router;