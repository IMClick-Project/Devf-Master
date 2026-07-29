# Validación de Formulario con Zod

Formulario de registro desarrollado con HTML, CSS, JavaScript y Zod.

## Funcionalidades

- Capturar nombre, correo y contraseña.
- Validar los datos con un esquema de Zod.
- Validar los campos mientras el usuario escribe.
- Mostrar mensajes personalizados.
- Mostrar una confirmación cuando el registro es válido.

## Validaciones

### Nombre

- Mínimo 3 caracteres.
- Máximo 50 caracteres.
- Solo letras y espacios.

### Correo

- Campo obligatorio.
- Formato de correo válido.

### Contraseña

- Mínimo 8 caracteres.
- Al menos una letra mayúscula.
- Al menos un número.

## Tecnologías

- HTML
- CSS
- JavaScript
- Zod

## Estructura

```text
validacion-zod/
├── index.html
├── styles.css
├── script.js
└── README.md