// Función para encontrar el número máximo usando Divide and Conquer
const findMax = (arr) => {
    // Caso base: si el arreglo tiene un solo elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Resolver recursivamente cada mitad
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar resultados comparando los máximos
    return Math.max(leftMax, rightMax);
};

// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];

console.log("===== ARREGLO ORIGINAL =====");
console.log(numbers);

console.log("===== NÚMERO MÁXIMO =====");
console.log(findMax(numbers));