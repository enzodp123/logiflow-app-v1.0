import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import {
  crearPago,
  obtenerPagos,
  obtenerPago,
  eliminarPago
} from '../controllers/pagoController';
import verifyRole from '../middlewares/verifyRole';
import validateRequest from '../validations/validateRequest';
import { validarPago } from '../validations/pagoValidations';

const router = express.Router();

router.post('/', verifyRole('admin'), validarPago, validateRequest, asyncHandler(crearPago));
router.get('/', asyncHandler(obtenerPagos));
router.get('/:id', asyncHandler(obtenerPago));
router.delete('/:id', asyncHandler(eliminarPago));

export default router;