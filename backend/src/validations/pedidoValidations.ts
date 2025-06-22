import { body } from 'express-validator';

export const validarPedido = [
  body('cliente').notEmpty().withMessage('El cliente es obligatorio'),
  body('items').isArray({ min: 1 }).withMessage('Debe haber al menos un producto'),
  body('items.*.producto').notEmpty().withMessage('Cada ítem debe tener un ID de producto'),
  body('items.*.cantidad').isInt({ min: 1 }).withMessage('Cada ítem debe tener cantidad positiva')
];
