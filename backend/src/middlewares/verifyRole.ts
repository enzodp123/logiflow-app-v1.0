import { RequestHandler } from 'express';

// Extiende la interfaz Request para incluir 'user'
declare global {
  namespace Express {
    interface Request {
      user?: { rol?: string };
    }
  }
}

// Tipamos correctamente la función para que TypeScript no dé error
const verifyRole = (requiredRole: string): RequestHandler => {
  return (req, res, next) => {
    const user = req.user as { rol?: string };

    if (!user || user.rol !== requiredRole) {
      res.status(403).json({ error: 'Acceso denegado: rol insuficiente' });
      return;
    }

    next();
  };
};

export default verifyRole;