# DevfSeek — FrontEnd Avanzado con React

## 📚 Descripción del proyecto

DevfSeek es una aplicación web inspirada en ChatGPT y DeepSeek, desarrollada con React y Vite.

El proyecto forma parte del Módulo 7 del curso de FrontEnd Avanzado de DEVF y tiene como objetivo implementar una aplicación de chat con inteligencia artificial, utilizando Ollama y el modelo DeepSeek R1 ejecutado localmente.

## 🚀 Tecnologías utilizadas

- **React:** Desarrollo de componentes e interfaces.
- **Vite:** Entorno de desarrollo.
- **Tailwind CSS:** Diseño y estilos responsivos.
- **React Hook Form:** Manejo y validación de formularios.
- **Ollama:** Ejecución local de modelos de inteligencia artificial.
- **DeepSeek R1 (1.5B):** Modelo de IA para generar respuestas.
- **Context API:** Administración del estado global.
- **useReducer:** Gestión de conversaciones y mensajes.
- **Git y GitHub:** Control de versiones.

## ✅ Primera entrega — Parte 1

En esta etapa se implementó:

- Configuración inicial de React con Vite.
- Integración de Tailwind CSS.
- Instalación de React Hook Form.
- Formulario con validaciones.
- Interfaz oscura inspirada en aplicaciones de IA.
- Visualización de mensajes del usuario.

**Rama:** `parte-1`

## ✅ Segunda entrega — Parte 2

En esta etapa se desarrolla la integración de inteligencia artificial mediante Ollama y DeepSeek R1.

### Funcionalidades

- Comunicación con la API local de Ollama.
- Envío de preguntas al modelo DeepSeek R1.
- Visualización de respuestas generadas por IA.
- Implementación de un Custom Hook `useOllama`.
- Componente `History` para gestionar conversaciones.
- Manejo de estado global con Context API y `useReducer`.
- Creación y eliminación de conversaciones.
- Indicadores de carga y manejo de errores.

**Rama:** `parte-2`

## ✅ Tercera entrega — Uso de useContext

### Objetivo

Implementar y utilizar Context API para compartir el estado global de la aplicación sin necesidad de pasar propiedades manualmente entre múltiples componentes.

### Implementación

- Creación de `ChatContext` utilizando `createContext`.
- Implementación de `ChatProvider` para compartir el estado de la aplicación.
- Creación del Custom Hook `useChat` utilizando `useContext`.
- Integración con `useReducer` para administrar conversaciones y mensajes.
- Acceso al estado compartido desde los componentes `App` y `History`.

### Beneficios

- Evita el prop drilling.
- Centraliza la gestión del estado.
- Facilita la comunicación entre componentes.
- Mejora la organización y el mantenimiento del código.

**Rama:** `parte-3`.

## ⚙️ Instalación del proyecto

Clonar el repositorio:

```bash
git clone https://github.com/IMClick-Project/Devf-Master.git
```

Entrar a la carpeta del proyecto:

```bash
cd Devf-Master
git switch parte-2
cd Modulo7
```

Instalar dependencias:

```bash
npm install
```

## 🧠 Configuración de Ollama

Descargar Ollama desde:

https://ollama.com/download

Descargar el modelo DeepSeek R1 de 1.5B:

```bash
ollama pull deepseek-r1:1.5b
```

Comprobar que está instalado:

```bash
ollama list
```

Probar el modelo:

```bash
ollama run deepseek-r1:1.5b
```

Ollama debe estar ejecutándose para que la aplicación pueda comunicarse con el modelo local.

## ▶️ Ejecutar la aplicación

Desde la carpeta `Modulo7`:

```bash
npm run dev
```

Abrir en el navegador la dirección local que muestre Vite, normalmente:

http://localhost:5173/

## 📁 Estructura principal

```text
Modulo7/
├── src/
│   ├── api/
│   │   └── ollama.js
│   ├── components/
│   │   ├── History.jsx
│   │   └── PromptForm.jsx
│   ├── context/
│   │   ├── ChatContext.js
│   │   └── ChatContext.jsx
│   ├── hooks/
│   │   ├── useChat.js
│   │   └── useOllama.js
│   ├── reducers/
│   │   └── chatReducer.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 📝 Consideraciones

- Se necesita tener Ollama instalado y ejecutándose localmente.
- La aplicación utiliza el modelo `deepseek-r1:1.5b`.
- Las conversaciones se mantienen temporalmente en memoria y se pierden al recargar la página.
- La aplicación todavía no cuenta con autenticación de usuarios ni almacenamiento permanente.
- La conexión mediante el proxy de Vite está configurada para desarrollo local.

## 📌 Estado del proyecto

- Parte 1: Configuración inicial completada.
- Parte 2: Integración de inteligencia artificial e historial de conversaciones en desarrollo.

## 🔗 Repositorios

**Repositorio personal:**

https://github.com/IMClick-Project/Devf-Master

**Repositorio de referencia:**

https://github.com/carlosDevf/DevfSeek

## 📚 Créditos

Proyecto desarrollado con fines educativos como parte del curso de FrontEnd Avanzado de DEVF.