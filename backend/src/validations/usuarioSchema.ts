import { z } from 'zod';

export const registroUsuarioSchema = z.object({
  nombre: z.string().trim().min(2, 'El nombre es obligatorio'),
  email: z.string().trim().email('Email no válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  empresaId: z.string().min(1, 'El ID de empresa es obligatorio'),
  rol: z.enum(['admin', 'vendedor', 'repartidor']).optional()
});
