// Arreglo para guardar los destinos
const destinos = [];

// Costos base por destino
const costosDestino = {
    "Paris": 500,
    "Londres": 400,
    "New York": 600,
    "Tokio": 700,
    "Roma": 450
};

// Costos adicionales por transporte
const costosTransporte = {
    "Avión": 200,
    "Tren": 100,
    "Autobús": 50,
    "Barco": 150
};

// Función para calcular descuento según número de personas
const calcularDescuento = (personas, costoTotal) => {
    if (personas >= 5) {
        return costoTotal * 0.15;
    } else if (personas >= 3) {
        return costoTotal * 0.10;
    }

    return 0;
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, personas = 1) => {
    const costoBaseDestino = costosDestino[destino] || 300;
    const costoTransporte = costosTransporte[transporte] || 0;

    let costoTotal = (costoBaseDestino + costoTransporte) * personas;

    const descuento = calcularDescuento(personas, costoTotal);
    costoTotal = costoTotal - descuento;

    return costoTotal;
};

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte, personas = 1) => {
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        personas: personas,
        costo: calcularCosto(destino, transporte, personas)
    };

    destinos.push(nuevoViaje);
};

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    console.log("===== ITINERARIO DE VIAJES =====");

    if (destinos.length === 0) {
        console.log("No hay viajes registrados.");
        return;
    }

    destinos.forEach((viaje, index) => {
        console.log(`Viaje ${index + 1}`);
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Personas: ${viaje.personas}`);
        console.log(`Costo total: $${viaje.costo}`);
        console.log("---------------------------");
    });
};

// Exportar funciones para usarlas en app.js
export {
    registrarDestino,
    mostrarItinerario,
    calcularCosto
};