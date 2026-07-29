import "./style.css";

import {
  compararNumeros,
  generarNumeroAleatorio,
  validarNumero
} from "./juego.js";

const formulario = document.querySelector("#formulario");
const campoNumero = document.querySelector("#numero");
const mensaje = document.querySelector("#mensaje");
const intentosElemento = document.querySelector("#intentos");
const botonReiniciar = document.querySelector("#reiniciar");
const historial = document.querySelector("#historial");
const mejorPuntuacionElemento =
  document.querySelector("#mejorPuntuacion");

let numeroSecreto = generarNumeroAleatorio();
let intentos = 0;
let juegoTerminado = false;

function obtenerMejorPuntuacion() {
  const puntuacion = localStorage.getItem("mejorPuntuacion");

  if (!puntuacion) {
    return null;
  }

  return Number(puntuacion);
}

function mostrarMejorPuntuacion() {
  const mejorPuntuacion = obtenerMejorPuntuacion();

  mejorPuntuacionElemento.textContent =
    mejorPuntuacion ?? "Sin registro";
}

function guardarMejorPuntuacion() {
  const mejorPuntuacion = obtenerMejorPuntuacion();

  if (
    mejorPuntuacion === null ||
    intentos < mejorPuntuacion
  ) {
    localStorage.setItem(
      "mejorPuntuacion",
      String(intentos)
    );

    mostrarMejorPuntuacion();
  }
}

function agregarAlHistorial(numero) {
  const elemento = document.createElement("li");
  elemento.textContent = `Intento ${intentos}: ${numero}`;

  historial.appendChild(elemento);
}

function terminarJuego() {
  juegoTerminado = true;
  campoNumero.disabled = true;
  formulario.querySelector("button").disabled = true;

  guardarMejorPuntuacion();
}

function reiniciarJuego() {
  numeroSecreto = generarNumeroAleatorio();
  intentos = 0;
  juegoTerminado = false;

  intentosElemento.textContent = "0";
  mensaje.textContent = "Escribe un número para comenzar.";
  historial.innerHTML = "";

  campoNumero.disabled = false;
  formulario.querySelector("button").disabled = false;

  formulario.reset();
  campoNumero.focus();

  console.log("Nuevo número secreto:", numeroSecreto);
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (juegoTerminado) {
    return;
  }

  const validacion = validarNumero(campoNumero.value);

  if (!validacion.valido) {
    mensaje.textContent = validacion.mensaje;
    mensaje.className = "mensaje error";
    return;
  }

  intentos += 1;

  intentosElemento.textContent = String(intentos);

  agregarAlHistorial(validacion.numero);

  const resultado = compararNumeros(
    validacion.numero,
    numeroSecreto
  );

  mensaje.textContent = resultado.mensaje;

  if (resultado.correcto) {
    mensaje.className = "mensaje correcto";
    terminarJuego();
  } else {
    mensaje.className = "mensaje pista";
  }

  formulario.reset();
  campoNumero.focus();
});

botonReiniciar.addEventListener("click", reiniciarJuego);

mostrarMejorPuntuacion();

console.log("Número secreto:", numeroSecreto);