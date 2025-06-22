import { Request, Response } from 'express';
import Producto from '../models/Producto';

export const crearProducto = async (req: Request, res: Response) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el producto', detalle: error });
  }
};

export const obtenerProductos = async (_req: Request, res: Response) => {
  const productos = await Producto.find();
  res.json(productos);
};

export const obtenerProducto = async (req: Request, res: Response) => {
  const producto = await Producto.findById(req.params.id);
  if (!producto) {
    res.status(404).json({ error: 'Producto no encontrado' });
    return;
  }
  res.json(producto);
};

export const actualizarProducto = async (req: Request, res: Response) => {
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!producto) {
    res.status(404).json({ error: 'Producto no encontrado' });
    return;
  }
  res.json(producto);
};

export const eliminarProducto = async (req: Request, res: Response) => {
  const producto = await Producto.findByIdAndDelete(req.params.id);
  if (!producto) {
    res.status(404).json({ error: 'Producto no encontrado' });
    return;
  }
  res.json({ mensaje: 'Producto eliminado' });
};
