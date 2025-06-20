import jwt from 'jsonwebtoken';

export const generarToken = (payload: object): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET no definido en .env');
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};
