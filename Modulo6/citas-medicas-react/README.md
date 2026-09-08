# Plataforma de Gestión de Citas Médicas

Aplicación desarrollada con React y Vite para practicar el manejo de rutas con `react-router-dom`.

## Objetivo

Crear una plataforma sencilla de gestión de citas médicas utilizando rutas estáticas y dinámicas, navegación entre diferentes vistas y parámetros en la URL.

El proyecto permite aplicar conceptos fundamentales de React Router y complementar la práctica con persistencia de datos usando `localStorage`.

## Funcionalidades

- Página de inicio
- Visualización de citas médicas
- Registro de nuevas citas
- Visualización del detalle de cada cita
- Edición de citas creadas por el usuario
- Eliminación de citas creadas por el usuario
- Confirmación antes de eliminar una cita
- Persistencia de datos mediante `localStorage`
- Navegación sin recargar la página
- Navegación programática
- Rutas estáticas
- Rutas dinámicas mediante parámetros
- Página 404 para rutas inexistentes
- Diseño responsive

## Gestión de citas

Cada cita contiene información como:

- Nombre del paciente
- Doctor
- Especialidad
- Fecha
- Hora

Las citas nuevas se almacenan en `localStorage`, por lo que permanecen disponibles incluso después de recargar la página.

Las citas creadas por el usuario pueden:

- Consultarse
- Editarse
- Eliminarse

## Manejo de rutas

El proyecto utiliza `react-router-dom` para gestionar la navegación de la aplicación.

### Componentes y hooks utilizados

- `BrowserRouter`
- `Routes`
- `Route`
- `Link`
- `useParams`
- `useNavigate`

## Rutas disponibles

| Ruta | Descripción |
| --- | --- |
| `/` | Página de inicio |
| `/citas` | Lista de citas |
| `/citas/nueva` | Formulario para crear una nueva cita |
| `/citas/:id` | Detalle de una cita |
| `/citas/editar/:id` | Formulario para editar una cita |
| `*` | Página 404 |

## Rutas dinámicas

El proyecto utiliza parámetros dinámicos en las URLs.

Por ejemplo:

```text
/citas/123