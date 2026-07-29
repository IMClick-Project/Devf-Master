const botonAgregar = document.querySelector("#botonAgregar");
const listaPedidos = document.querySelector("#listaPedidos");
const mensajeVacio = document.querySelector("#mensajeVacio");

const totalPedidosElemento = document.querySelector("#totalPedidos");
const pedidosProcesoElemento = document.querySelector("#pedidosProceso");
const pedidosCompletadosElemento = document.querySelector(
  "#pedidosCompletados"
);

let contadorPedidos = 0;
let pedidosEnProceso = 0;
let pedidosCompletados = 0;

const productos = [
  "Café americano",
  "Capuchino",
  "Latte",
  "Chocolate caliente",
  "Té chai",
  "Espresso"
];

/**
 * Selecciona un producto aleatorio.
 */
function obtenerProductoAleatorio() {
  const indice = Math.floor(Math.random() * productos.length);

  return productos[indice];
}

/**
 * Genera un tiempo aleatorio entre 2 y 6 segundos.
 */
function obtenerTiempoPreparacion() {
  return Math.floor(Math.random() * 4000) + 2000;
}

/**
 * Actualiza los contadores mostrados en la interfaz.
 */
function actualizarResumen() {
  totalPedidosElemento.textContent = contadorPedidos;
  pedidosProcesoElemento.textContent = pedidosEnProceso;
  pedidosCompletadosElemento.textContent = pedidosCompletados;
}

/**
 * Crea visualmente un nuevo pedido.
 */
function mostrarPedido(pedido) {
  if (mensajeVacio) {
    mensajeVacio.remove();
  }

  const tarjetaPedido = document.createElement("article");

  tarjetaPedido.classList.add("pedido");
  tarjetaPedido.id = `pedido-${pedido.id}`;

  tarjetaPedido.innerHTML = `
    <div>
      <h3>Pedido #${pedido.id}</h3>
      <p>${pedido.producto}</p>
      <p>Tiempo estimado: ${pedido.tiempo / 1000} segundos</p>
    </div>

    <span
      id="estado-${pedido.id}"
      class="estado en-proceso"
    >
      En Proceso
    </span>
  `;

  listaPedidos.prepend(tarjetaPedido);
}

/**
 * Actualiza visualmente el estado de un pedido.
 */
function actualizarEstadoPedido(id, nuevoEstado) {
  const estadoElemento = document.querySelector(`#estado-${id}`);

  if (!estadoElemento) {
    console.error(`No se encontró el pedido con ID ${id}.`);
    return;
  }

  estadoElemento.textContent = nuevoEstado;
  estadoElemento.classList.remove("en-proceso");
  estadoElemento.classList.add("completado");
}

/**
 * Simula la preparación del pedido.
 *
 * La Promise se resuelve después del tiempo indicado.
 */
function prepararPedido(pedido) {
  return new Promise((resolve) => {
    console.log(
      `Preparando pedido #${pedido.id} durante ${pedido.tiempo} ms.`
    );

    setTimeout(() => {
      resolve(pedido);
    }, pedido.tiempo);
  });
}

/**
 * Espera de manera asincrónica a que termine la preparación.
 */
async function procesarPedido(pedido) {
  try {
    const pedidoPreparado = await prepararPedido(pedido);

    actualizarEstadoPedido(pedidoPreparado.id, "Completado");

    pedidosEnProceso -= 1;
    pedidosCompletados += 1;

    actualizarResumen();

    console.log(`Pedido #${pedidoPreparado.id} completado.`);
  } catch (error) {
    console.error("Ocurrió un error al preparar el pedido:", error);
  }
}

/**
 * Recibe un pedido nuevo.
 */
function recibirPedido() {
  contadorPedidos += 1;
  pedidosEnProceso += 1;

  const nuevoPedido = {
    id: contadorPedidos,
    producto: obtenerProductoAleatorio(),
    tiempo: obtenerTiempoPreparacion(),
    estado: "En Proceso"
  };

  mostrarPedido(nuevoPedido);
  actualizarResumen();

  console.log(`Se recibió el pedido #${nuevoPedido.id}.`);

  procesarPedido(nuevoPedido);
}

botonAgregar.addEventListener("click", recibirPedido);