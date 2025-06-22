import { Request, Response } from 'express';
import Cliente from '../models/Cliente';

export const crearCliente = async (req: Request, res: Response) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el cliente', detalle: error });
  }
};

export const obtenerClientes = async (_req: Request, res: Response) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

export const obtenerCliente = async (req: Request, res: Response) => {
  const cliente = await Cliente.findById(req.params.id);
  if (!cliente) {
    res.status(404).json({ error: 'Cliente no encontrado' });
    return;
  }
  res.json(cliente);
};

export const actualizarCliente = async (req: Request, res: Response) => {
  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!cliente) {
    res.status(404).json({ error: 'Cliente no encontrado' });
    return;
  }
  res.json(cliente);
};

export const eliminarCliente = async (req: Request, res: Response) => {
  const cliente = await Cliente.findByIdAndDelete(req.params.id);
  if (!cliente) {
    res.status(404).json({ error: 'Cliente no encontrado' });
    return;
  }
  res.json({ mensaje: 'Cliente eliminado' });
};
