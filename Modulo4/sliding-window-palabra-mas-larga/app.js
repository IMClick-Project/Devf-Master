// Función para encontrar la palabra más larga usando Sliding Window
const findLongestWord = (text) => {
    // Dividir el texto en palabras
    const words = text.split(" ");

    // Inicializar la palabra más larga
    let longestWord = "";

    // La ventana recorre cada palabra del arreglo
    for (let right = 0; right < words.length; right++) {
        const currentWord = words[right];

        // Comparar la longitud de la palabra actual con la más larga
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }

    // Retornar la palabra más larga encontrada
    return longestWord;
};

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";

console.log("===== TEXTO ORIGINAL =====");
console.log(text);

console.log("===== PALABRA MÁS LARGA =====");
console.log(findLongestWord(text));