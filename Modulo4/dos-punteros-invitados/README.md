# Algoritmo de los 2 Punteros

Este proyecto utiliza el algoritmo de los dos punteros para encontrar el primer par de invitados consecutivos cuyos nombres comienzan con la misma letra.

## Descripción

Tenemos una lista de invitados ordenada alfabéticamente. El objetivo es recorrer la lista usando dos punteros:

- Un puntero apunta al invitado actual.
- Otro puntero apunta al siguiente invitado.

Si ambos nombres empiezan con la misma letra, se devuelve ese par de invitados.

## Conceptos aplicados

- Arreglos
- Funciones flecha
- Condicionales
- Bucle `while`
- Algoritmo de dos punteros
- Comparación de caracteres
- Método `toLowerCase()`

## Código principal

```javascript
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

## Resultado esperado

```text
===== LISTA DE INVITADOS =====
[
  'Ana',      'Carlos',
  'Cecilia',  'Daniel',
  'Diana',    'Eduardo',
  'Fernando', 'Fernanda',
  'Gabriel'
]
===== RESULTADO =====
Los invitados que pueden sentarse juntos son: Carlos y Cecilia
```

## Explicación del algoritmo

El programa empieza comparando los invitados en las posiciones `0` y `1`.

```text
Ana - Carlos
```

Sus iniciales son diferentes, entonces ambos punteros avanzan.

Luego compara:

```text
Carlos - Cecilia
```

Ambos empiezan con la letra `C`, por eso el programa detiene la búsqueda y devuelve ese primer par.

## Complejidad

La complejidad del algoritmo es `O(n)` porque recorre la lista una sola vez.