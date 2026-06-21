# Gestor de Notas Personales

Este proyecto permite crear, listar y eliminar notas personales usando Node.js y el módulo `fs`.

## Descripción

La aplicación guarda las notas en un archivo llamado `notas.json`.

Cada nota contiene:

- Título
- Contenido

## Funcionalidades

- Crear una nueva nota.
- Leer todas las notas existentes.
- Eliminar una nota por su título.
- Evitar notas duplicadas por título.

## Conceptos aplicados

- Node.js
- Módulo `fs`
- `fs.existsSync()`
- `fs.readFileSync()`
- `fs.writeFileSync()`
- JSON
- Arreglos
- Objetos
- `find()`
- `filter()`
- `forEach()`

## Archivos del proyecto

- `gestorNotas.js`: Contiene la lógica principal del programa.
- `notas.json`: Archivo donde se guardan las notas.
- `package.json`: Configuración para ejecutar el proyecto con npm.

## Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar:

```bash
npm start
```

También puedes ejecutarlo directamente con:

```bash
node gestorNotas.js
```

## Ejemplo de salida

```text
Nota agregada con éxito.
Nota agregada con éxito.
Nota agregada con éxito.
===== NOTAS GUARDADAS =====
1. Compras
   Comprar leche y pan.
---------------------------
2. Trabajo
   Terminar reporte semanal.
---------------------------
3. Escuela
   Estudiar Node.js y manejo de archivos.
---------------------------
Nota con título "Compras" eliminada.
===== NOTAS GUARDADAS =====
1. Trabajo
   Terminar reporte semanal.
---------------------------
2. Escuela
   Estudiar Node.js y manejo de archivos.
---------------------------
```