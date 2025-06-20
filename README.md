# 🚛 LogiFlow

**LogiFlow** es una plataforma SaaS para digitalizar y optimizar la gestión de distribuidoras. Desde un panel moderno, empresas pueden administrar usuarios, productos, pedidos, clientes y mucho más — todo adaptado para un entorno multiempresa.

---

## ✨ Características

- 🔐 Registro y login con autenticación JWT
- 🧑‍💼 Sistema multiusuario con roles (`admin`, `vendedor`, `repartidor`)
- 🏢 Multiempresa: cada empresa gestiona su propio entorno aislado
- ⚙️ Backend robusto con Express, TypeScript y MongoDB
- ✅ Validaciones seguras con Zod
- 🔒 Protección de rutas con middleware personalizado
- 📦 API modular y escalable lista para crecer

---

## 🧠 Tecnologías utilizadas

| Tecnología        | Función                          |
|-------------------|----------------------------------|
| **TypeScript**     | Tipado seguro en todo el backend |
| **Express.js**     | Framework web Node.js            |
| **MongoDB Atlas**  | Base de datos escalable en la nube |
| **Mongoose**       | ODM para modelado de datos       |
| **Zod**            | Validaciones de entrada modernas |
| **JWT**            | Autenticación segura             |
| **bcryptjs**       | Hash de contraseñas              |

---

## ⚙️ Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/logiflow-backend.git
cd logiflow-backend

# 2. Instalar dependencias
npm install

# 3. Crear un archivo .env
cp .env.example .env

# 4. Iniciar servidor de desarrollo
npm run dev
```

---

## 🔐 Variables de entorno

Asegurate de crear un archivo `.env` con las siguientes variables:

```env
PORT=5000
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=claveSuperSecreta123
```

---

## 📂 Estructura del proyecto

```
src/
├── config/          # Configuración de la BD
├── controllers/     # Lógica de cada módulo
├── middleware/      # Middleware como protegerRuta
├── models/          # Modelos de MongoDB (Usuario, etc.)
├── routes/          # Endpoints API REST
├── utils/           # Funciones auxiliares (JWT, asyncHandler)
├── validations/     # Validaciones con Zod
├── app.ts           # App Express principal
└── server.ts        # Inicio del servidor
```

---

## ✅ Estado actual del desarrollo

| Módulo               | Estado  |
|----------------------|---------|
| Registro             | ✅      |
| Login con JWT        | ✅      |
| Protección de rutas  | ✅      |
| Modelo de Usuario    | ✅      |
| APIs de productos    | 🚧      |
| APIs de clientes     | 🚧      |
| APIs de pedidos      | 🚧      |

---

## 📬 Contacto

- Gmail: [logiflow.soporte@gmail.com](mailto:logiflow.soporte@gmail.com)
- WhatsApp: [+54 9 11 5316-0505](https://wa.me/5491153160505)

---

## 📄 Licencia

Este proyecto está licenciado bajo [MIT](LICENSE).

---

> ¡Contribuciones, issues y feedback son bienvenidos!