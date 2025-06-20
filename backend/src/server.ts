// src/server.ts
import app from './app';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

dotenv.config();

// Importar la aplicación Express
// Importar la configuración de la base de datos

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅Servidor corriendo en el puerto ${PORT}`);
});
