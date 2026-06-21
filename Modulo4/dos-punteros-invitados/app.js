// Lista de invitados ordenada alfabéticamente
const invitados = [
    "Ana",
    "Carlos",
    "Cecilia",
    "Daniel",
    "Diana",
    "Eduardo",
    "Fernando",
    "Fernanda",
    "Gabriel"
];

// Función usando el algoritmo de los dos punteros
const encontrarPareja = (listaInvitados) => {
    let punteroInicio = 0;
    let punteroSiguiente = 1;

    while (punteroSiguiente < listaInvitados.length) {
        const invitadoActual = listaInvitados[punteroInicio];
        const invitadoSiguiente = listaInvitados[punteroSiguiente];

        const inicialActual = invitadoActual[0].toLowerCase();
        const inicialSiguiente = invitadoSiguiente[0].toLowerCase();

        if (inicialActual === inicialSiguiente) {
            return [invitadoActual, invitadoSiguiente];
        }

        punteroInicio++;
        punteroSiguiente++;
    }

    return null;
};

// Ejecutar búsqueda
const parejaEncontrada = encontrarPareja(invitados);

// Mostrar resultado
console.log("===== LISTA DE INVITADOS =====");
console.log(invitados);

console.log("===== RESULTADO =====");

if (parejaEncontrada) {
    console.log(`Los invitados que pueden sentarse juntos son: ${parejaEncontrada[0]} y ${parejaEncontrada[1]}`);
} else {
    console.log("No se encontró ningún par de invitados con la misma inicial.");
}