const formulario = document.querySelector("#registroEvento");
const resultado = document.querySelector("#resultado");
const datosRegistro = document.querySelector("#datosRegistro");

const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const fecha = document.querySelector("#fecha");
const hora = document.querySelector("#hora");
const archivo = document.querySelector("#archivo");

function mostrarError(campo, idError, mensaje) {
  document.querySelector(`#${idError}`).textContent = mensaje;

  if (campo) {
    campo.classList.add("invalido");
  }
}

function limpiarError(campo, idError) {
  document.querySelector(`#${idError}`).textContent = "";

  if (campo) {
    campo.classList.remove("invalido");
  }
}

function limpiarErrores() {
  limpiarError(nombre, "errorNombre");
  limpiarError(correo, "errorCorreo");
  limpiarError(telefono, "errorTelefono");
  limpiarError(null, "errorIntereses");
  limpiarError(null, "errorHorario");
  limpiarError(fecha, "errorFecha");
  limpiarError(hora, "errorHora");
  limpiarError(archivo, "errorArchivo");
}

function validarNombre() {
  const valor = nombre.value.trim();
  const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (valor.length < 3) {
    mostrarError(
      nombre,
      "errorNombre",
      "El nombre debe tener al menos 3 caracteres."
    );

    return false;
  }

  if (!patronNombre.test(valor)) {
    mostrarError(
      nombre,
      "errorNombre",
      "El nombre solo puede contener letras y espacios."
    );

    return false;
  }

  return true;
}

function validarCorreo() {
  const valor = correo.value.trim();
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!patronCorreo.test(valor)) {
    mostrarError(
      correo,
      "errorCorreo",
      "Ingresa un correo electrónico válido."
    );

    return false;
  }

  return true;
}

function validarTelefono() {
  const soloNumeros = telefono.value.replace(/\D/g, "");

  if (soloNumeros.length !== 10) {
    mostrarError(
      telefono,
      "errorTelefono",
      "El teléfono debe tener exactamente 10 dígitos."
    );

    return false;
  }

  return true;
}

function validarIntereses() {
  const seleccionados = document.querySelectorAll(
    'input[name="intereses"]:checked'
  );

  if (seleccionados.length === 0) {
    mostrarError(
      null,
      "errorIntereses",
      "Selecciona al menos un interés."
    );

    return false;
  }

  return true;
}

function validarHorario() {
  const seleccionado = document.querySelector(
    'input[name="horario"]:checked'
  );

  if (!seleccionado) {
    mostrarError(
      null,
      "errorHorario",
      "Selecciona un horario."
    );

    return false;
  }

  return true;
}

function validarFecha() {
  if (!fecha.value) {
    mostrarError(
      fecha,
      "errorFecha",
      "Selecciona una fecha."
    );

    return false;
  }

  const fechaElegida = new Date(`${fecha.value}T00:00:00`);
  const hoy = new Date();

  hoy.setHours(0, 0, 0, 0);

  if (fechaElegida < hoy) {
    mostrarError(
      fecha,
      "errorFecha",
      "La fecha no puede estar en el pasado."
    );

    return false;
  }

  return true;
}

function validarHora() {
  if (!hora.value) {
    mostrarError(
      hora,
      "errorHora",
      "Selecciona una hora."
    );

    return false;
  }

  return true;
}

function validarArchivo() {
  const archivoSeleccionado = archivo.files[0];

  if (!archivoSeleccionado) {
    return true;
  }

  const tiposPermitidos = [
    "application/pdf",
    "image/jpeg",
    "image/png"
  ];

  const limiteBytes = 2 * 1024 * 1024;

  if (!tiposPermitidos.includes(archivoSeleccionado.type)) {
    mostrarError(
      archivo,
      "errorArchivo",
      "Solo se permiten archivos PDF, JPG o PNG."
    );

    return false;
  }

  if (archivoSeleccionado.size > limiteBytes) {
    mostrarError(
      archivo,
      "errorArchivo",
      "El archivo no puede superar los 2 MB."
    );

    return false;
  }

  return true;
}

function obtenerIntereses() {
  return Array.from(
    document.querySelectorAll(
      'input[name="intereses"]:checked'
    )
  ).map((interes) => interes.value);
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  limpiarErrores();
  resultado.hidden = true;

  const nombreValido = validarNombre();
  const correoValido = validarCorreo();
  const telefonoValido = validarTelefono();
  const interesesValidos = validarIntereses();
  const horarioValido = validarHorario();
  const fechaValida = validarFecha();
  const horaValida = validarHora();
  const archivoValido = validarArchivo();

  const formularioValido =
    nombreValido &&
    correoValido &&
    telefonoValido &&
    interesesValidos &&
    horarioValido &&
    fechaValida &&
    horaValida &&
    archivoValido;

  if (!formularioValido) {
    return;
  }

  const horarioSeleccionado = document.querySelector(
    'input[name="horario"]:checked'
  );

  const intereses = obtenerIntereses();
  const archivoSeleccionado = archivo.files[0];

  datosRegistro.innerHTML = `
    <p><strong>Nombre:</strong> ${nombre.value.trim()}</p>
    <p><strong>Correo:</strong> ${correo.value.trim()}</p>
    <p><strong>Teléfono:</strong> ${telefono.value.trim()}</p>
    <p><strong>Intereses:</strong> ${intereses.join(", ")}</p>
    <p><strong>Horario:</strong> ${horarioSeleccionado.value}</p>
    <p><strong>Fecha:</strong> ${fecha.value}</p>
    <p><strong>Hora:</strong> ${hora.value}</p>
    <p>
      <strong>Archivo:</strong>
      ${archivoSeleccionado
        ? archivoSeleccionado.name
        : "No se adjuntó archivo"}
    </p>
  `;

  resultado.hidden = false;

  formulario.reset();
});