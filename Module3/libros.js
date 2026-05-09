// Proyecto: Funciones en JavaScript
// Problema: Seguimiento de Libros

let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log("Libro agregado: " + titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");

    for (let i = 0; i < librosLeidos.length; i++) {
        console.log((i + 1) + ". " + librosLeidos[i]);
    }
}

// Ejemplos de uso
agregarLibro("El principito");
agregarLibro("Cien años de soledad");
agregarLibro("Don Quijote de la Mancha");

mostrarLibrosLeidos();