import mongoose from 'mongoose';

const pagoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  monto: {
    type: Number,
    required: true,
    min: 0,
  },
  tipo: {
    type: String,
    enum: ['efectivo', 'transferencia', 'mercado_pago'],
    required: true,
  },
  referencia: {
    type: String,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const Pago = mongoose.model('Pago', pagoSchema);
export default Pago;
