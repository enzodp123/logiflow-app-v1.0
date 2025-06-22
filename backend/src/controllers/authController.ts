import { Request, Response } from 'express';
import { loginSchema } from '../validations/loginSchema';
import Usuario from '../models/Usuario';
import { generarToken } from '../utils/generarToken';
import asyncHandler from '../utils/asyncHandler';

export const login = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  // Validar con Zod
  const datos = loginSchema.parse(req.body);

  // Buscar usuario e incluir la contraseña
  const usuario = await Usuario.findOne({ email: datos.email }).select('+password');

  // Validar existencia y contraseña en una sola condición
  if (!usuario || !(await usuario.compararPassword(datos.password))) {
    res.status(401).json({ mensaje: 'Credenciales inválidas' });
    return;
  }

  // Generar token
  const token = generarToken({
    id: usuario._id,
    empresaId: usuario.empresaId,
    rol: usuario.rol
  });

  // Respuesta
  res.status(200).json({
    mensaje: 'Login exitoso',
    token,
    usuario: {
      id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      empresaId: usuario.empresaId
    }
  });
});
