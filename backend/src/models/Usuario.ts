import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUsuario extends Document {
  nombre: string;
  email: string;
  password: string;
  empresaId: string;
  rol: 'admin' | 'vendedor' | 'repartidor';
  creadoEn: Date;
  compararPassword: (password: string) => Promise<boolean>;
}

const UsuarioSchema = new Schema<IUsuario>(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Email no válido'
      ]
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
      minlength: 6,
      select: false // No se devuelve en consultas por defecto
    },
    empresaId: {
      type: String,
      required: [true, 'El ID de empresa es obligatorio']
    },
    rol: {
      type: String,
      enum: ['admin', 'vendedor', 'repartidor'],
      default: 'vendedor'
    },
    creadoEn: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false,
    toJSON: {
      transform(_, ret) {
        delete ret.password; // Oculta la contraseña en JSON manualmente también
        return ret;
      }
    }
  }
);

// 🔒 Encriptar la contraseña antes de guardar
UsuarioSchema.pre<IUsuario>('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Método para comparar contraseñas
UsuarioSchema.methods.compararPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export default model<IUsuario>('Usuario', UsuarioSchema);
