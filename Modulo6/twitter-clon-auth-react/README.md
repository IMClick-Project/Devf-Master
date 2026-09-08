# MiniTwitter con Autenticación en React

Proyecto final de introducción a React desarrollado con React y Vite.

La aplicación simula un clon sencillo de Twitter con registro de usuarios, inicio y cierre de sesión, rutas protegidas, perfil de usuario y publicación de tweets.

## Objetivo

Implementar un sistema de autenticación simulado y proteger ciertas rutas para que solo puedan ser utilizadas por usuarios autenticados.

También se busca practicar conceptos fundamentales de React como:

- Manejo de estado
- Efectos secundarios
- Renderizado condicional
- React Router
- Formularios
- Persistencia de datos con `localStorage`

## Funcionalidades

- Registro de usuarios
- Inicio de sesión
- Cierre de sesión
- Protección de rutas privadas
- Página de perfil
- Publicación de tweets
- Límite de 280 caracteres por tweet
- Eliminación de tweets propios
- Persistencia de usuarios y tweets con `localStorage`
- Contador de tweets publicados en el perfil
- Navegación sin recargar la página
- Página 404 para rutas inexistentes

## Autenticación

La autenticación se realiza de forma simulada utilizando `localStorage`.

Los usuarios registrados se almacenan en:

```text
usuarios