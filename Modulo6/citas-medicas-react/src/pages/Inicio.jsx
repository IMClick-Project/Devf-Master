import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section className="tarjeta inicio">
      <h1>Gestión de Citas Médicas</h1>

      <p>
        Administra tus citas médicas de manera sencilla.
        Consulta tus próximas citas o registra una nueva.
      </p>

      <div className="botones-inicio">
        <Link className="boton" to="/citas">
          Ver citas
        </Link>

        <Link className="boton secundario" to="/citas/nueva">
          Agendar cita
        </Link>
      </div>
    </section>
  );
}

export default Inicio;