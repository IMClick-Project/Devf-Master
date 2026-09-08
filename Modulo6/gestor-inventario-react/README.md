# Gestor de Inventario con React

Proyecto realizado con React y Vite para practicar el uso de hooks avanzados y el manejo de estados complejos.

## Objetivo

Crear una aplicación de gestión de inventario utilizando:

- `useReducer` para administrar un estado complejo.
- `useRef` para interactuar directamente con un elemento del DOM.
- `useCallback` para memorizar funciones y evitar recreaciones innecesarias.
- Renderizado condicional para mostrar mensajes según el estado del inventario.

## Descripción

La aplicación permite administrar un inventario de productos de forma interactiva.

Cada producto contiene:

- Nombre
- Cantidad disponible en stock

Si se intenta agregar un producto que ya existe, no se crea un registro duplicado. En su lugar, se incrementa automáticamente su cantidad.

La comparación de productos no distingue entre mayúsculas y minúsculas. Por ejemplo:

`Mouse`, `mouse` y `MOUSE` se consideran el mismo producto.

## Funcionalidades

- Agregar productos al inventario
- Evitar productos duplicados
- Aumentar automáticamente el stock si el producto ya existe
- Aumentar el stock manualmente
- Disminuir el stock manualmente
- Evitar cantidades menores a cero
- Eliminar productos del inventario
- Agregar productos presionando la tecla Enter
- Limpiar automáticamente el campo de texto después de agregar un producto
- Regresar el foco al campo de entrada después de agregar
- Mostrar un mensaje cuando el inventario está vacío

## Hooks utilizados

### useReducer

Se utiliza para manejar el estado principal del inventario.

Las acciones implementadas son:

- `AGREGAR_PRODUCTO`
- `AUMENTAR_STOCK`
- `DISMINUIR_STOCK`
- `ELIMINAR_PRODUCTO`

El reducer permite centralizar la lógica de actualización del estado y mantener el código organizado.

### useRef

Se utiliza para acceder directamente al campo de texto donde se escribe el nombre del producto.

Permite:

- Obtener el valor del input
- Limpiar el input
- Regresar el foco al input

Todo esto sin utilizar un estado adicional para controlar el campo de texto.

### useCallback

Se utiliza para memorizar las funciones que modifican el inventario mediante `dispatch`.

Se aplica en funciones como:

- Agregar producto
- Aumentar stock
- Disminuir stock
- Eliminar producto

## Conceptos utilizados

- React
- Vite
- JavaScript
- JSX
- CSS
- Componentes funcionales
- Hooks avanzados
- `useReducer`
- `useRef`
- `useCallback`
- `dispatch`
- Reducers
- Acciones
- Renderizado condicional
- Manejo de arreglos
- `find()`
- `map()`
- `filter()`
- Operador spread `...`

## Tecnologías

- React
- Vite
- JavaScript
- HTML
- CSS

## Instalación y ejecución

1. Clonar el repositorio o descargar el proyecto.

2. Entrar a la carpeta del proyecto:

```bash
cd gestor-inventario-react