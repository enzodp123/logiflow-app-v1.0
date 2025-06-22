import { Request, Response, NextFunction } from 'express';
import Pedido from '../models/Pedido';
import Producto from '../models/Producto';

export const crearPedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cliente, productos } = req.body;

    let total = 0;
    for (const item of productos) {
      const producto = await Producto.findById(item.producto);
      if (!producto) {
        return res.status(404).json({ error: `Producto no encontrado: ${item.producto}` });
      }
      total += producto.precio * item.cantidad;
    }

    const pedido = new Pedido({ cliente, productos, total });
    await pedido.save();
    res.status(201).json(pedido);
  } catch (error) {
    next(error);
  }
};

export const obtenerPedidos = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const pedidos = await Pedido.find()
      .populate('cliente')
      .populate('productos.producto');
    res.json(pedidos);
  } catch (error) {
    next(error);
  }
};

export const obtenerPedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pedido = await Pedido.findById(req.params.id)
      .populate('cliente')
      .populate('productos.producto');
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.json(pedido);
  } catch (error) {
    next(error);
  }
};

export const actualizarEstadoPedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pedido = await Pedido.findByIdAndUpdate(
      req.params.id,
      { estado: req.body.estado },
      { new: true }
    );
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.json(pedido);
  } catch (error) {
    next(error);
  }
};

export const eliminarPedido = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pedido = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.json({ mensaje: 'Pedido eliminado' });
  } catch (error) {
    next(error);
  }
};
