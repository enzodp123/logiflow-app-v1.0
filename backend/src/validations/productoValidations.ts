import { body } from 'express-validator';

export const validarProducto = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('codigo').notEmpty().withMessage('El código es obligatorio'),
  body('precio').isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo'),
  body('stock').isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo')
];