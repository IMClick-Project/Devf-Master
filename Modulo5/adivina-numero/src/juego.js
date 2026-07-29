export function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

export function compararNumeros(numeroUsuario, numeroSecreto) {
  if (numeroUsuario === numeroSecreto) {
    return {
      correcto: true,
      mensaje: "¡Correcto! Adivinaste el número."
    };
  }

  if (numeroUsuario < numeroSecreto) {
    return {
      correcto: false,
      mensaje: "El número secreto es más alto."
    };
  }

  return {
    correcto: false,
    mensaje: "El número secreto es más bajo."
  };
}

export function validarNumero(valor) {
  const numero = Number(valor);

  if (!Number.isInteger(numero)) {
    return {
      valido: false,
      mensaje: "Ingresa un número entero."
    };
  }

  if (numero < 1 || numero > 100) {
    return {
      valido: false,
      mensaje: "El número debe estar entre 1 y 100."
    };
  }

  return {
    valido: true,
    numero
  };
}