# DevfSeek — FrontEnd Avanzado con React

## 📚 Descripción del proyecto

**DevfSeek** es una aplicación web inspirada en ChatGPT y DeepSeek, desarrollada con React y Vite.

Este proyecto forma parte del **Módulo 7 del curso de FrontEnd Avanzado de DEVF** y tiene como objetivo desarrollar progresivamente una aplicación de chat con inteligencia artificial, utilizando Ollama y el modelo DeepSeek R1 ejecutado localmente.

A lo largo de las entregas se implementan diferentes tecnologías y conceptos, como manejo de formularios, diseño de interfaces, consumo de APIs, gestión del estado global e integración de un servidor backend con Express.

---

## 🚀 Tecnologías utilizadas

- **React:** Desarrollo de componentes e interfaces de usuario.
- **Vite:** Entorno de desarrollo y compilación del proyecto.
- **Tailwind CSS:** Diseño y estilos responsivos.
- **React Hook Form:** Manejo y validación de formularios.
- **Ollama:** Ejecución local de modelos de inteligencia artificial.
- **DeepSeek R1 (1.5B):** Modelo de inteligencia artificial para generar respuestas.
- **Context API:** Administración del estado global de la aplicación.
- **useContext:** Acceso al estado compartido entre componentes.
- **useReducer:** Gestión de conversaciones y mensajes.
- **Node.js:** Entorno de ejecución de JavaScript para el backend.
- **Express:** Framework para crear el servidor y los endpoints HTTP.
- **NPM:** Administración de paquetes y dependencias.
- **Git y GitHub:** Control de versiones y colaboración.

---

## ✅ Primera entrega — Parte 1: Configuración inicial

### Objetivo

Configurar el entorno de desarrollo utilizando React y Vite, integrar Tailwind CSS para los estilos y React Hook Form para la validación de formularios.

### Funcionalidades implementadas

- Configuración inicial de React con Vite.
- Integración de Tailwind CSS.
- Instalación y configuración de React Hook Form.
- Creación de un formulario con validaciones.
- Interfaz oscura inspirada en aplicaciones de inteligencia artificial.
- Visualización de mensajes enviados por el usuario.
- Organización del proyecto mediante componentes reutilizables.

**Rama de entrega:** `parte-1`

---

## ✅ Segunda entrega — Parte 2: Integración de inteligencia artificial

### Objetivo

Integrar la funcionalidad de inteligencia artificial mediante Ollama y el modelo DeepSeek R1 de 1.5B, permitiendo que los usuarios realicen consultas desde la aplicación React.

### Funcionalidades implementadas

- Instalación y configuración de Ollama.
- Descarga del modelo DeepSeek R1 de 1.5B.
- Comunicación con la API local de Ollama.
- Envío de preguntas al modelo de inteligencia artificial.
- Visualización de respuestas generadas por DeepSeek.
- Implementación del Custom Hook `useOllama`.
- Creación del componente `History` para gestionar conversaciones.
- Creación y eliminación de conversaciones.
- Indicadores de carga durante la generación de respuestas.
- Manejo básico de errores de comunicación con la API.

**Rama de entrega:** `parte-2`

---

## ✅ Tercera entrega — Parte 3: Uso de useContext

### Objetivo

Implementar Context API para compartir el estado global de la aplicación y evitar el uso innecesario de propiedades entre múltiples componentes (*prop drilling*).

### Implementación

- Creación de `ChatContext` utilizando `createContext`.
- Implementación de `ChatProvider` para compartir el estado global.
- Creación del Custom Hook `useChat` utilizando `useContext`.
- Integración de `useReducer` para administrar conversaciones y mensajes.
- Acceso al estado compartido desde los componentes `App` y `History`.
- Centralización de las acciones para crear, seleccionar y eliminar conversaciones.

### Beneficios

- Evita el prop drilling.
- Centraliza la gestión del estado.
- Facilita la comunicación entre componentes.
- Mejora la organización del código.
- Permite mantener y ampliar la aplicación de manera más sencilla.

**Rama de entrega:** `parte-3`

---

## ✅ Cuarta entrega — Parte 4: Integración de Express

### Objetivo

Implementar un servidor backend utilizando Node.js y Express para comprender el funcionamiento de las rutas HTTP y establecer las bases de la comunicación entre frontend y backend.

### Funcionalidades implementadas

- Creación de una carpeta independiente para el backend.
- Inicialización de un proyecto Node.js con NPM.
- Instalación y configuración de Express.
- Implementación de un servidor HTTP en el puerto `3001`.
- Creación de una ruta principal que responde "Hola Mundo".
- Implementación de un endpoint que devuelve información en formato JSON.
- Configuración de un proxy en Vite para facilitar la comunicación con Express durante el desarrollo local.

### Endpoints disponibles

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Devuelve el mensaje "Hola Mundo". |
| GET | `/api/saludo` | Devuelve una respuesta en formato JSON. |

### Respuesta del endpoint `/`

```text
Hola Mundo
```

### Respuesta del endpoint `/api/saludo`

```json
{
  "mensaje": "Hola desde Express",
  "estado": "OK"
}
```

### Resultado

El proyecto incorpora un servidor Express básico que permite realizar peticiones HTTP y sienta las bases para integrar nuevas funcionalidades backend con la aplicación React.

**Rama de entrega:** `parte-4`

---

## ⚙️ Instalación del proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/IMClick-Project/Devf-Master.git
```

### 2. Entrar al repositorio

```bash
cd Devf-Master
```

### 3. Seleccionar la rama de la cuarta entrega

```bash
git switch parte-4
```

### 4. Entrar al proyecto

```bash
cd Modulo7
```

### 5. Instalar dependencias del frontend

```bash
npm install
```

### 6. Instalar dependencias del backend

```bash
cd backend
npm install
```

---

## 🧠 Configuración de Ollama y DeepSeek R1

Para utilizar las funciones de inteligencia artificial es necesario instalar Ollama y descargar el modelo DeepSeek R1.

### 1. Instalar Ollama

Descargar desde el sitio oficial:

https://ollama.com/download

### 2. Descargar el modelo DeepSeek R1

Se utiliza la versión de 1.5B, con un tamaño aproximado de 1.1 GB.

```bash
ollama pull deepseek-r1:1.5b
```

### 3. Comprobar el modelo instalado

```bash
ollama list
```

### 4. Probar el modelo

```bash
ollama run deepseek-r1:1.5b
```

El modelo permitirá generar respuestas a las consultas realizadas por el usuario.

**Nota:** Ollama debe estar ejecutándose localmente para que la aplicación React pueda comunicarse con la inteligencia artificial.

---

## ▶️ Ejecutar la aplicación completa

Para ejecutar el proyecto se necesitan dos terminales: una para el backend y otra para el frontend.

### Terminal 1 — Backend Express

Desde la carpeta `Modulo7/backend`, ejecutar:

```bash
npm run dev
```

El servidor estará disponible en:

http://localhost:3001/

Rutas de prueba:

- `http://localhost:3001/` — Devuelve "Hola Mundo".
- `http://localhost:3001/api/saludo` — Devuelve un mensaje en formato JSON.

### Terminal 2 — Frontend React

Desde la carpeta `Modulo7`, ejecutar:

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite, normalmente:

http://localhost:5173/

### Inteligencia artificial

Para realizar consultas a DeepSeek R1, Ollama debe estar funcionando en la computadora.

La aplicación se comunica con su API local mediante el proxy de Vite.

---

## 📁 Estructura del proyecto

```text
Devf-Master/
└── Modulo7/
    ├── backend/
    │   ├── server.js
    │   ├── package.json
    │   └── package-lock.json
    │
    ├── public/
    │
    ├── src/
    │   ├── api/
    │   │   └── ollama.js
    │   │
    │   ├── components/
    │   │   ├── History.jsx
    │   │   └── PromptForm.jsx
    │   │
    │   ├── context/
    │   │   ├── ChatContext.js
    │   │   └── ChatContext.jsx
    │   │
    │   ├── hooks/
    │   │   ├── useChat.js
    │   │   └── useOllama.js
    │   │
    │   ├── reducers/
    │   │   └── chatReducer.js
    │   │
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    └── README.md
```

---

## 🔄 Flujo de funcionamiento

La aplicación utiliza diferentes tecnologías que trabajan en conjunto.

### Frontend

React permite construir la interfaz de usuario, gestionar formularios y visualizar las conversaciones.

### Estado global

Context API, `useContext` y `useReducer` permiten compartir y actualizar los datos de las conversaciones entre los componentes.

### Inteligencia artificial

El Custom Hook `useOllama` permite enviar solicitudes a Ollama, que utiliza el modelo DeepSeek R1 para generar respuestas.

### Backend

Express proporciona un servidor HTTP independiente con endpoints básicos y permite establecer las bases para integrar nuevas funcionalidades del lado del servidor.

---

## 📝 Consideraciones

- Es necesario contar con Node.js y NPM instalados.
- La aplicación utiliza el modelo `deepseek-r1:1.5b`.
- Ollama debe estar instalado y ejecutándose localmente.
- Las conversaciones se mantienen temporalmente en memoria y desaparecen al recargar la página.
- La aplicación todavía no cuenta con autenticación de usuarios.
- No existe almacenamiento permanente de conversaciones.
- El servidor Express y el frontend React se ejecutan en puertos diferentes.
- La configuración del proxy de Vite está pensada para desarrollo local.
- Actualmente, React se comunica con Ollama directamente mediante el proxy de Vite; Express funciona como un backend básico independiente.

---

## 📌 Estado del proyecto

- ✅ **Parte 1:** Configuración inicial con React, Vite, Tailwind CSS y React Hook Form.
- ✅ **Parte 2:** Integración de inteligencia artificial mediante Ollama y DeepSeek R1.
- ✅ **Parte 3:** Implementación de Context API, useContext y useReducer para gestionar el estado global.
- ✅ **Parte 4:** Integración de Node.js y Express con endpoints HTTP.

### Próximas mejoras

- Guardar el historial de conversaciones de forma permanente.
- Integrar Ollama directamente con el backend Express.
- Mejorar la interfaz y experiencia de usuario.
- Implementar autenticación de usuarios.
- Agregar validaciones y un manejo de errores más avanzado.
- Preparar la aplicación para despliegue en producción.

---

## 🔗 Repositorios

### Repositorio personal

https://github.com/IMClick-Project/Devf-Master

### Repositorio de referencia

https://github.com/carlosDevf/DevfSeek

---

## 📚 Créditos

Proyecto desarrollado con fines educativos como parte del **curso de FrontEnd Avanzado de DEVF**.

La aplicación utiliza React, Vite, Tailwind CSS, Ollama, DeepSeek R1 y Express para aplicar conceptos de desarrollo frontend avanzado, gestión de estado e integración backend.