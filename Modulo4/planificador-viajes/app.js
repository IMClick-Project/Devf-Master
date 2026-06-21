import { registrarDestino, mostrarItinerario } from "./viajes.js";

// Iniciar la aplicación
const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión", 2);
    registrarDestino("Londres", "2024-07-01", "Tren", 3);
    registrarDestino("New York", "2024-08-10", "Avión", 5);
    registrarDestino("Tokio", "2024-09-20", "Barco", 1);
    registrarDestino("Roma", "2024-10-05", "Autobús", 4);

    mostrarItinerario();
};