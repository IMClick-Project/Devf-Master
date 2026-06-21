# Recursión: Buscar un Regalo

Este proyecto utiliza **recursión** para buscar un regalo específico dentro de una lista de regalos.

## Descripción

El programa tiene una lista de regalos y una función recursiva que busca si un regalo existe dentro del arreglo.

Si el regalo se encuentra, devuelve un mensaje indicando su posición.  
Si no se encuentra, devuelve un mensaje diciendo que no está en la lista.

## Objetivo

Practicar cómo usar recursión para buscar un objeto específico en un arreglo.

## Conceptos aplicados

- Arreglos
- Funciones flecha
- Recursión
- Casos base
- Parámetros por defecto
- Condicionales
- Índices de arreglos

## Código principal

```javascript
const buscarRegalo = (gifts, giftName, index = 0) => {
    if (index === gifts.length) {
        return `El regalo "${giftName}" no está en la lista.`;
    }

    if (gifts[index] === giftName) {
        return `El regalo "${giftName}" está en la posición ${index}.`;
    }

    return buscarRegalo(gifts, giftName, index + 1);
};
```

## Ejemplo de uso

```javascript
console.log(buscarRegalo(gifts, "Lego"));
console.log(buscarRegalo(gifts, "Bicicleta"));
```

Resultado esperado:

```text
El regalo "Lego" está en la posición 2.
El regalo "Bicicleta" no está en la lista.
```

## Explicación del algoritmo

La función inicia revisando el primer elemento del arreglo, usando `index = 0`.

Primero revisa si ya llegó al final de la lista:

```javascript
if (index === gifts.length)
```

Si eso pasa, significa que el regalo no fue encontrado.

Después revisa si el regalo actual coincide con el regalo buscado:

```javascript
if (gifts[index] === giftName)
```

Si coincide, devuelve la posición.

Si no coincide, la función se vuelve a llamar a sí misma aumentando el índice:

```javascript
return buscarRegalo(gifts, giftName, index + 1);
```

Así se revisa un elemento a la vez hasta encontrar el regalo o llegar al final del arreglo.

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

La complejidad temporal es `O(n)`, porque en el peor caso puede recorrer toda la lista.