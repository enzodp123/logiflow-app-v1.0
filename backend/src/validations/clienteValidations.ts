import { body } from 'express-validator';

export const validarCliente = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('cuit').notEmpty().withMessage('El CUIT es obligatorio'),
  body('direccion').notEmpty().withMessage('La dirección es obligatoria'),
  body('email').optional().isEmail().withMessage('El email debe tener formato válido'),
  body('telefono').optional().isString()
];