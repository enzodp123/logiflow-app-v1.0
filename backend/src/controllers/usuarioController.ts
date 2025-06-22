// usuarioController.ts
import { Request, Response} from 'express';
import Usuario from '../models/Usuario';
import { registroUsuarioSchema } from '../validations/usuarioSchema';
import asyncHandler from '../utils/asyncHandler';

export const registrarUsuario = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  // Validación con Zod
  const datos = registroUsuarioSchema.parse(req.body);

  // Verificamos si ya existe un usuario con ese email
  const existeUsuario = await Usuario.findOne({ email: datos.email });
  if (existeUsuario) {
    res.status(400).json({ mensaje: 'Ese email ya está en uso.' });
    return;
  }

  // Crear nuevo usuario
  const nuevoUsuario = new Usuario(datos);
  await nuevoUsuario.save();

  res.status(201).json({
    mensaje: 'Usuario registrado correctamente.',
    usuario: {
      _id: nuevoUsuario._id,
      nombre: nuevoUsuario.nombre,
      email: nuevoUsuario.email,
      rol: nuevoUsuario.rol,
    }
  });
});