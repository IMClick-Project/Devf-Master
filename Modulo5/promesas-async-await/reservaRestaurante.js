// Simulación de mesas disponibles en el restaurante.
const mesasDisponibles = 5;

/**
 * Verifica si hay suficientes mesas.
 *
 * @param {number} mesasSolicitadas
 * @returns {Promise<string>}
 */
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Number.isInteger(mesasSolicitadas) || mesasSolicitadas <= 0) {
        reject("La cantidad de mesas debe ser un número entero mayor que cero.");
        return;
      }

      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(
          `Hay disponibilidad para ${mesasSolicitadas} mesa(s).`
        );
      } else {
        reject(
          `No hay suficientes mesas. Disponibles: ${mesasDisponibles}, solicitadas: ${mesasSolicitadas}.`
        );
      }
    }, 2000);
  });
}

/**
 * Simula el envío de un correo de confirmación.
 *
 * Math.random() genera un número entre 0 y 1.
 * En este ejemplo hay un 80 % de probabilidad de éxito.
 *
 * @param {string} nombreCliente
 * @returns {Promise<string>}
 */
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const correoEnviado = Math.random() < 0.8;

      if (correoEnviado) {
        resolve(
          `Correo de confirmación enviado correctamente a ${nombreCliente}.`
        );
      } else {
        reject(
          `La reserva fue registrada, pero falló el envío del correo para ${nombreCliente}.`
        );
      }
    }, 1500);
  });
}

/**
 * Realiza todo el proceso de reserva.
 *
 * @param {string} nombreCliente
 * @param {number} mesasSolicitadas
 * @returns {Promise<void>}
 */
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("\n----------------------------------------");
    console.log(`Cliente: ${nombreCliente}`);
    console.log(`Mesas solicitadas: ${mesasSolicitadas}`);
    console.log("Verificando disponibilidad...");

    const disponibilidad = await verificarDisponibilidad(
      mesasSolicitadas
    );

    console.log(disponibilidad);
    console.log("Reserva confirmada.");
    console.log("Enviando correo de confirmación...");

    const confirmacion = await enviarConfirmacionReserva(
      nombreCliente
    );

    console.log(confirmacion);
    console.log("Proceso finalizado correctamente.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Fin del proceso de reserva.");
  }
}

/**
 * Ejecuta las pruebas una después de otra.
 */
async function ejecutarPruebas() {
  // Caso exitoso: hay suficientes mesas.
  await hacerReserva("Juan Pérez", 3);

  // Caso de error: se solicitan más mesas de las disponibles.
  await hacerReserva("María López", 8);

  // Caso de dato inválido.
  await hacerReserva("Carlos Ramírez", 0);
}

ejecutarPruebas();