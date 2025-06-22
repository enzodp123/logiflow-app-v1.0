import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  cuit: { type: String, required: true, unique: true },
  direccion: { type: String, required: true },
  email: { type: String, required: false },
  telefono: { type: String, required: false },
}, {
  timestamps: true,
});

const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;
