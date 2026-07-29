# Simulador de Pedidos de Cafetería

Proyecto para practicar el Event Loop y la asincronicidad en JavaScript.

## Descripción

La aplicación simula la recepción y preparación de pedidos en una cafetería.

Cada pedido:

1. Recibe un identificador único.
2. Aparece con el estado `En Proceso`.
3. Tiene un tiempo de preparación aleatorio.
4. Cambia su estado a `Completado` cuando termina.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- setTimeout
- Promises
- async/await

## Cómo ejecutar el proyecto

1. Clona este repositorio.
2. Abre la carpeta en Visual Studio Code.
3. Abre el archivo `index.html` en el navegador.
4. También puedes utilizar la extensión Live Server.

## Funcionamiento asincrónico

`setTimeout` simula el tiempo de preparación de cada pedido.

Una `Promise` representa la preparación pendiente.

`async/await` permite esperar la finalización de cada pedido sin bloquear la
interfaz ni impedir que se reciban nuevos pedidos.