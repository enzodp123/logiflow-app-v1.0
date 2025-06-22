import { Router } from 'express';
import { registrarUsuario } from '../controllers/usuarioController';

const router = Router();

router.post('/registro', registrarUsuario);

export default router;
