// Lista de regalos
const gifts = [
    "Muñeca",
    "Carro de juguete",
    "Lego",
    "Pelota",
    "Rompecabezas",
    "Audífonos",
    "Libro"
];

// Función recursiva para buscar un regalo
const buscarRegalo = (gifts, giftName, index = 0) => {
    // Caso base 1: si llegamos al final de la lista
    if (index === gifts.length) {
        return `El regalo "${giftName}" no está en la lista.`;
    }

    // Caso base 2: si encontramos el regalo
    if (gifts[index] === giftName) {
        return `El regalo "${giftName}" está en la posición ${index}.`;
    }

    // Llamada recursiva avanzando al siguiente índice
    return buscarRegalo(gifts, giftName, index + 1);
};

// Ejemplos de uso
console.log("===== LISTA DE REGALOS =====");
console.log(gifts);

console.log("===== BÚSQUEDA DE REGALOS =====");
console.log(buscarRegalo(gifts, "Lego"));
console.log(buscarRegalo(gifts, "Audífonos"));
console.log(buscarRegalo(gifts, "Bicicleta"));