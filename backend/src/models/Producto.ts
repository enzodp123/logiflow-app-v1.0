import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  codigo: { type: String, required: true, unique: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  descripcion: { type: String },
}, {
  timestamps: true,
});

const Producto = mongoose.model('Producto', productoSchema);
export default Producto;
