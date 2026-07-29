const API_URL = "https://rickandmortyapi.com/api/character";

const botonFetch = document.querySelector("#btn-fetch");
const botonAxios = document.querySelector("#btn-axios");
const contenedor = document.querySelector("#data-container");
const mensaje = document.querySelector("#mensaje");

/**
 * Muestra un mensaje en la interfaz.
 */
function mostrarMensaje(texto, tipo = "") {
  mensaje.textContent = texto;
  mensaje.className = tipo;
}

/**
 * Activa o desactiva los botones mientras se realiza una solicitud.
 */
function cambiarEstadoBotones(desactivados) {
  botonFetch.disabled = desactivados;
  botonAxios.disabled = desactivados;
}

/**
 * Crea y muestra las tarjetas de personajes.
 */
function mostrarPersonajes(personajes) {
  contenedor.innerHTML = "";

  personajes.forEach((personaje) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
      <img
        src="${personaje.image}"
        alt="Imagen de ${personaje.name}"
      >

      <div class="informacion">
        <h2>${personaje.name}</h2>
        <p><strong>Estado:</strong> ${personaje.status}</p>
        <p><strong>Especie:</strong> ${personaje.species}</p>
        <p><strong>Origen:</strong> ${personaje.origin.name}</p>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });
}

/**
 * Obtiene personajes utilizando Fetch.
 */
async function obtenerConFetch() {
  cambiarEstadoBotones(true);
  mostrarMensaje("Cargando personajes con Fetch...");
  contenedor.innerHTML = "";

  try {
    const respuesta = await fetch(API_URL);

    /*
     * Fetch no rechaza automáticamente la promesa
     * por respuestas HTTP como 404 o 500.
     */
    if (!respuesta.ok) {
      throw new Error(
        `Error HTTP: ${respuesta.status} ${respuesta.statusText}`
      );
    }

    const datos = await respuesta.json();

    mostrarPersonajes(datos.results);
    mostrarMensaje(
      `Se mostraron ${datos.results.length} personajes usando Fetch.`,
      "exito"
    );
  } catch (error) {
    console.error("Error con Fetch:", error);

    mostrarMensaje(
      `No fue posible obtener los personajes: ${error.message}`,
      "error"
    );
  } finally {
    cambiarEstadoBotones(false);
  }
}

/**
 * Obtiene personajes utilizando Axios.
 */
async function obtenerConAxios() {
  cambiarEstadoBotones(true);
  mostrarMensaje("Cargando personajes con Axios...");
  contenedor.innerHTML = "";

  try {
    const respuesta = await axios.get(API_URL);

    /*
     * Axios entrega el contenido de la respuesta
     * dentro de la propiedad data.
     */
    mostrarPersonajes(respuesta.data.results);

    mostrarMensaje(
      `Se mostraron ${respuesta.data.results.length} personajes usando Axios.`,
      "exito"
    );
  } catch (error) {
    console.error("Error con Axios:", error);

    const mensajeError =
      error.response?.data?.error ||
      error.message ||
      "Error desconocido";

    mostrarMensaje(
      `No fue posible obtener los personajes: ${mensajeError}`,
      "error"
    );
  } finally {
    cambiarEstadoBotones(false);
  }
}

botonFetch.addEventListener("click", obtenerConFetch);
botonAxios.addEventListener("click", obtenerConAxios);