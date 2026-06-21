# Sliding Window: Palabra Más Larga

Este proyecto utiliza la técnica de **Sliding Window** para encontrar la palabra más larga dentro de una cadena de texto.

## Descripción

El programa recibe un texto, lo divide en palabras y recorre cada palabra usando una ventana deslizante. Durante el recorrido compara la longitud de cada palabra con la palabra más larga encontrada hasta ese momento.

## Objetivo

Usar la técnica Sliding Window para identificar la palabra más larga en una cadena de texto.

## Conceptos aplicados

- Cadenas de texto
- Arreglos
- Método `split()`
- Propiedad `length`
- Ciclo `for`
- Variables con `let` y `const`
- Funciones flecha
- Sliding Window

## Código principal

```javascript
const findLongestWord = (text) => {
    const words = text.split(" ");
    let longestWord = "";

    for (let right = 0; right < words.length; right++) {
        const currentWord = words[right];

        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }

    return longestWord;
};
```

## Ejemplo de uso

```javascript
const text = "JavaScript es un lenguaje de programación increíble para aprender.";

console.log(findLongestWord(text));
```

Resultado esperado:

```text
programación
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

## Explicación del algoritmo

Primero se convierte el texto en un arreglo de palabras usando:

```javascript
const words = text.split(" ");
```

Después se crea una variable para guardar la palabra más larga:

```javascript
let longestWord = "";
```

Luego se recorre el arreglo palabra por palabra:

```javascript
for (let right = 0; right < words.length; right++) {
```

En cada vuelta, la ventana se mueve a la siguiente palabra. Si la palabra actual es más larga que la palabra guardada, se actualiza `longestWord`.

## Complejidad

La complejidad temporal es `O(n)`, porque se recorre el arreglo de palabras una sola vez.