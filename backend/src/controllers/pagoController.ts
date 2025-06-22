import { Request, Response, NextFunction } from 'express';
import Pago from '../models/Pago';

export const crearPago = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pago = new Pago(req.body);
    await pago.save();
    res.status(201).json(pago);
  } catch (error) {
    next(error);
  }
};

export const obtenerPagos = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const pagos = await Pago.find().populate('cliente');
    res.json(pagos);
  } catch (error) {
    next(error);
  }
};

export const obtenerPago = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pago = await Pago.findById(req.params.id).populate('cliente');
    if (!pago) {
      return res.status(404).json({ error: 'Pago no encontrado' });
    }
    res.json(pago);
  } catch (error) {
    next(error);
  }
};

export const eliminarPago = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pago = await Pago.findByIdAndDelete(req.params.id);
    if (!pago) {
      return res.status(404).json({ error: 'Pago no encontrado' });
    }
    res.json({ mensaje: 'Pago eliminado' });
  } catch (error) {
    next(error);
  }
};