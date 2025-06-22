import { body } from 'express-validator';

export const validarPago = [
  body('cliente').notEmpty().withMessage('El cliente es obligatorio'),
  body('monto').isFloat({ min: 0 }).withMessage('El monto debe ser un número positivo'),
  body('tipo').isIn(['efectivo', 'transferencia', 'mercado_pago']).withMessage('Tipo de pago inválido'),
  body('referencia').optional().isString()
  ];