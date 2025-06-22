// ✅ Orden correcto para cargar variables y luego importar lógica de la app
// server.ts (con orden revisado y correcto)
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// 1. Primero cargar dotenv antes que cualquier otra cosa
const envPath = path.resolve(__dirname, '../.env');
console.log('🧪 Cargando .env desde:', envPath);

if (fs.existsSync(envPath)) {
  const result = dotenv.config({ path: envPath });
  if (result.error) {
    console.error('❌ dotenv falló:', result.error);
    process.exit(1);
  } else {
    console.log('✅ Variables de entorno cargadas');
  }
} else {
  console.error('❌ Archivo .env no encontrado');
  process.exit(1);
}

// 2. Ahora sí importar la app (que usa process.env)
import app from './app';

// 3. Iniciar el servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
