# Tienda de Productos

Este proyecto permite practicar algunos de los métodos de arreglos más usados en JavaScript: `filter()`, `sort()` y `map()`.

## Descripción

La aplicación trabaja con un arreglo de productos. Cada producto tiene:

- Nombre
- Precio
- Categoría

El programa realiza las siguientes acciones:

1. Muestra la lista completa de productos.
2. Filtra los productos que cuestan menos de $100.
3. Ordena esos productos alfabéticamente por nombre.
4. Genera un nuevo arreglo que contiene solo los nombres.
5. Usa métodos adicionales como `reduce()`, `some()` y `every()`.

## Métodos utilizados

### `filter()`

Se usa para obtener solo los productos con precio menor a $100.

```javascript
const productosMenoresA100 = productos.filter((producto) => producto.precio < 100);
```

### `sort()`

Se usa para ordenar los productos alfabéticamente por nombre.

```javascript
const productosOrdenados = productosMenoresA100.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
});
```

### `map()`

Se usa para crear un nuevo arreglo solo con los nombres de los productos.

```javascript
const nombresProductos = productosOrdenados.map((producto) => producto.nombre);
```

### `reduce()`

Se usa para calcular el total de los precios de los productos menores a $100.

```javascript
const totalProductosMenoresA100 = productosMenoresA100.reduce((total, producto) => {
    return total + producto.precio;
}, 0);
```

### `some()`

Se usa para verificar si existe algún producto de cierta categoría.

### `every()`

Se usa para verificar si todos los productos cumplen una condición.

## Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar:

```bash
npm start
```

También puedes ejecutar directamente:

```bash
node app.js
```