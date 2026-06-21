const fs = require("fs");

// Ruta del archivo de notas
const filePath = "./notas.json";

// Función para leer las notas existentes
function leerNotas() {
    if (!fs.existsSync(filePath)) {
        return [];
    }

    const data = fs.readFileSync(filePath, "utf8");

    if (data.trim() === "") {
        return [];
    }

    return JSON.parse(data);
}

// Función para guardar las notas en el archivo
function guardarNotas(notas) {
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
}

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
    const notas = leerNotas();

    const notaExistente = notas.find((nota) => nota.titulo === titulo);

    if (notaExistente) {
        console.log(`Ya existe una nota con el título "${titulo}".`);
        return;
    }

    const nuevaNota = {
        titulo: titulo,
        contenido: contenido
    };

    notas.push(nuevaNota);
    guardarNotas(notas);

    console.log("Nota agregada con éxito.");
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    const notas = leerNotas();

    if (notas.length === 0) {
        console.log("No hay notas guardadas.");
        return;
    }

    console.log("===== NOTAS GUARDADAS =====");

    notas.forEach((nota, index) => {
        console.log(`${index + 1}. ${nota.titulo}`);
        console.log(`   ${nota.contenido}`);
        console.log("---------------------------");
    });
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
    const notas = leerNotas();

    if (notas.length === 0) {
        console.log("No hay notas para eliminar.");
        return;
    }

    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    if (notasRestantes.length === notas.length) {
        console.log(`No se encontró una nota con el título "${titulo}".`);
        return;
    }

    guardarNotas(notasRestantes);

    console.log(`Nota con título "${titulo}" eliminada.`);
}

// Ejecución de ejemplo
agregarNota("Compras", "Comprar leche y pan.");
agregarNota("Trabajo", "Terminar reporte semanal.");
agregarNota("Escuela", "Estudiar Node.js y manejo de archivos.");

listarNotas();

eliminarNota("Compras");

listarNotas();