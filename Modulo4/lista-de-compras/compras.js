// Arreglo vacío para guardar los productos
const listaDeCompras = [];

// Función para agregar productos
const agregarProducto = (producto) => {
    const productoLimpio = producto.trim();

    if (productoLimpio === "") {
        console.log("No puedes agregar un producto vacío.");
        return;
    }

    if (listaDeCompras.includes(productoLimpio)) {
        console.log(`El producto "${productoLimpio}" ya está en la lista.`);
        return;
    }

    listaDeCompras.push(productoLimpio);
    console.log(`Producto agregado: ${productoLimpio}`);
};

// Función para eliminar productos
const eliminarProducto = (producto) => {
    const productoLimpio = producto.trim();
    const indice = listaDeCompras.indexOf(productoLimpio);

    if (indice === -1) {
        console.log(`El producto "${productoLimpio}" no está en la lista.`);
        return;
    }

    listaDeCompras.splice(indice, 1);
    console.log(`Producto eliminado: ${productoLimpio}`);
};

// Función para mostrar la lista completa
const mostrarLista = () => {
    console.log("===== LISTA DE COMPRAS =====");

    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
        return;
    }

    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
};

// Exportar funciones para usarlas en app.js
export {
    agregarProducto,
    eliminarProducto,
    mostrarLista
};