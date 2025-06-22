import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1,
      },
    }
  ],
  total: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    enum: ['pendiente', 'procesado', 'entregado', 'cancelado'],
    default: 'pendiente',
  },
  fechaPedido: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const Pedido = mongoose.model('Pedido', pedidoSchema);
export default Pedido;