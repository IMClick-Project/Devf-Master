import { z } from "https://cdn.jsdelivr.net/npm/zod@4/+esm";

const formulario = document.querySelector("#formularioRegistro");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const contrasena = document.querySelector("#contrasena");
const mensajeExito = document.querySelector("#mensajeExito");

const esquemaRegistro = z.object({
  nombre: z
    .string()
    .trim()
    .min(3, "El nombre debe tener al menos 3 caracteres.")
    .max(50, "El nombre no puede superar los 50 caracteres.")
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      "El nombre solo puede contener letras y espacios."
    ),

  correo: z
    .string()
    .trim()
    .min(1, "El correo es obligatorio.")
    .email("Ingresa un correo electrónico válido."),

  contrasena: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .regex(
      /[A-Z]/,
      "La contraseña debe contener una letra mayúscula."
    )
    .regex(
      /[0-9]/,
      "La contraseña debe contener al menos un número."
    )
});

const campos = {
  nombre,
  correo,
  contrasena
};

function limpiarErrores() {
  Object.entries(campos).forEach(([nombreCampo, elemento]) => {
    elemento.classList.remove("invalido", "valido");

    const idError =
      `error${nombreCampo.charAt(0).toUpperCase()}${nombreCampo.slice(1)}`;

    document.querySelector(`#${idError}`).textContent = "";
  });

  mensajeExito.textContent = "";
}

function mostrarErrores(errores) {
  errores.forEach((error) => {
    const nombreCampo = error.path[0];
    const campo = campos[nombreCampo];

    if (!campo) {
      return;
    }

    campo.classList.add("invalido");

    const idError =
      `error${nombreCampo.charAt(0).toUpperCase()}${nombreCampo.slice(1)}`;

    const elementoError = document.querySelector(`#${idError}`);

    /*
     * Evita sobrescribir el primer mensaje cuando un campo
     * tiene más de un error.
     */
    if (!elementoError.textContent) {
      elementoError.textContent = error.message;
    }
  });
}

function obtenerDatosFormulario() {
  return {
    nombre: nombre.value,
    correo: correo.value,
    contrasena: contrasena.value
  };
}

function validarCampo(nombreCampo) {
  const esquemaCampo = esquemaRegistro.shape[nombreCampo];
  const campo = campos[nombreCampo];

  const idError =
    `error${nombreCampo.charAt(0).toUpperCase()}${nombreCampo.slice(1)}`;

  const elementoError = document.querySelector(`#${idError}`);

  campo.classList.remove("invalido", "valido");
  elementoError.textContent = "";

  const resultado = esquemaCampo.safeParse(campo.value);

  if (!resultado.success) {
    campo.classList.add("invalido");
    elementoError.textContent = resultado.error.issues[0].message;
    return;
  }

  campo.classList.add("valido");
}

Object.keys(campos).forEach((nombreCampo) => {
  campos[nombreCampo].addEventListener("input", () => {
    validarCampo(nombreCampo);
  });
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  limpiarErrores();

  const datosFormulario = obtenerDatosFormulario();
  const resultado = esquemaRegistro.safeParse(datosFormulario);

  if (!resultado.success) {
    mostrarErrores(resultado.error.issues);
    return;
  }

  /*
   * resultado.data contiene los datos ya validados.
   * Aquí se enviarían al servidor usando fetch o Axios.
   */
  console.log("Datos válidos:", resultado.data);

  mensajeExito.textContent =
    `Registro exitoso para ${resultado.data.nombre}.`;

  formulario.reset();

  Object.values(campos).forEach((campo) => {
    campo.classList.remove("valido");
  });
});