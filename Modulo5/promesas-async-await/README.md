# Sistema de Reservas con Promesas y Async/Await

Aplicación de consola desarrollada con JavaScript para simular el sistema de
reservas de un restaurante.

## Funcionalidades

- Verificar la disponibilidad de mesas.
- Confirmar una reserva.
- Simular el envío de un correo de confirmación.
- Manejar errores por falta de mesas.
- Manejar errores durante el envío del correo.
- Validar la cantidad de mesas solicitadas.

## Conceptos utilizados

- Promesas
- `resolve`
- `reject`
- `async`
- `await`
- `try`
- `catch`
- `finally`
- `setTimeout`
- `Math.random`

## Estructura

```text
promesas-async-await/
├── reservaRestaurante.js
└── README.md
```

## Cómo ejecutar el proyecto

Desde la carpeta del proyecto:

```bash
node reservaRestaurante.js
```

## Funcionamiento

Primero se verifica si el número de mesas solicitadas es menor o igual al
número de mesas disponibles.

Si existen mesas disponibles, la reserva se confirma y se intenta enviar un
correo.

Si alguna operación falla, el error se captura con `catch`.

## Nota

El envío del correo es una simulación. Se utiliza `Math.random()` para generar
resultados exitosos y fallidos.