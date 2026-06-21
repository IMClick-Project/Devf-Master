import {
    agregarProducto,
    eliminarProducto,
    mostrarLista
} from "./compras.js";

// Agregar productos
agregarProducto("Manzanas");
agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Huevos");

// Intentar agregar un producto duplicado
agregarProducto("Pan");

// Mostrar lista
mostrarLista();

// Eliminar producto
eliminarProducto("Leche");

// Mostrar lista actualizada
mostrarLista();

// Intentar eliminar un producto que no existe
eliminarProducto("Queso");