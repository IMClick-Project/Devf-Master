# Divide y Vencerás: Número Máximo

Este proyecto utiliza el enfoque **Divide and Conquer** para encontrar el número máximo dentro de un arreglo.

## Descripción

El programa recibe un arreglo de números y lo divide en dos mitades. Luego encuentra recursivamente el número máximo en cada mitad y finalmente compara ambos resultados para obtener el máximo general.

## Objetivo

Practicar el paradigma **Divide and Conquer** usando recursión para encontrar el número máximo en un arreglo.

## Conceptos aplicados

- Arreglos
- Recursión
- Caso base
- Divide and Conquer
- Método `slice()`
- `Math.floor()`
- `Math.max()`
- Funciones flecha
- `const`

## Código principal

```javascript
const findMax = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftMax = findMax(left);
    const rightMax = findMax(right);

    return Math.max(leftMax, rightMax);
};
```

## Ejemplo de uso

```javascript
const numbers = [3, 8, 2, 10, 5, 7];

console.log(findMax(numbers));
```

Resultado esperado:

```text
10
```

## Explicación del algoritmo

Primero se revisa el caso base:

```javascript
if (arr.length === 1) {
    return arr[0];
}
```

Esto significa que si el arreglo tiene un solo número, ese número es el máximo.

Después se calcula el punto medio:

```javascript
const mid = Math.floor(arr.length / 2);
```

Luego se divide el arreglo en dos mitades:

```javascript
const left = arr.slice(0, mid);
const right = arr.slice(mid);
```

Después se llama la misma función para encontrar el máximo en cada mitad:

```javascript
const leftMax = findMax(left);
const rightMax = findMax(right);
```

Finalmente se combinan las respuestas comparando ambos máximos:

```javascript
return Math.max(leftMax, rightMax);
```

## Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar:

```bash
npm start
```

También puedes ejecutarlo directamente con:

```bash
node app.js
```

## Complejidad

La complejidad temporal es `O(n)`, porque todos los elementos se revisan una vez durante el proceso.