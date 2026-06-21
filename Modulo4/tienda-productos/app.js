// Arreglo de objetos con productos
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Audífonos", precio: 80, categoria: "Electrónica" },
    { nombre: "Mochila", precio: 45, categoria: "Accesorios" },
    { nombre: "Cuaderno", precio: 8, categoria: "Educación" }
];

// Mostrar todos los productos
console.log("===== LISTA COMPLETA DE PRODUCTOS =====");
console.log(productos);

// 1. Usar filter() para obtener productos que cuesten menos de $100
const productosMenoresA100 = productos.filter((producto) => producto.precio < 100);

console.log("===== PRODUCTOS CON PRECIO MENOR A $100 =====");
console.log(productosMenoresA100);

// 2. Usar sort() para ordenar esos productos alfabéticamente por nombre
const productosOrdenados = productosMenoresA100.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
});

console.log("===== PRODUCTOS MENORES A $100 ORDENADOS ALFABÉTICAMENTE =====");
console.log(productosOrdenados);

// 3. Usar map() para generar un arreglo solo con los nombres
const nombresProductos = productosOrdenados.map((producto) => producto.nombre);

console.log("===== NOMBRES DE PRODUCTOS MENORES A $100 =====");
console.log(nombresProductos);

// 4. Método opcional: reduce()
// Calcular el total de los productos menores a $100
const totalProductosMenoresA100 = productosMenoresA100.reduce((total, producto) => {
    return total + producto.precio;
}, 0);

console.log("===== TOTAL DE PRODUCTOS MENORES A $100 =====");
console.log(`Total: $${totalProductosMenoresA100}`);

// 5. Método opcional: some()
// Verificar si existe algún producto de Electrónica menor a $100
const existeElectronicoBarato = productosMenoresA100.some((producto) => {
    return producto.categoria === "Electrónica";
});

console.log("===== ¿HAY ALGÚN PRODUCTO DE ELECTRÓNICA MENOR A $100? =====");
console.log(existeElectronicoBarato);

// 6. Método opcional: every()
// Verificar si todos los productos filtrados cuestan menos de $100
const todosMenoresA100 = productosMenoresA100.every((producto) => {
    return producto.precio < 100;
});

console.log("===== ¿TODOS LOS PRODUCTOS FILTRADOS CUESTAN MENOS DE $100? =====");
console.log(todosMenoresA100);