import { useState } from "react";
import { Link } from "react-router-dom";

const citasIniciales = [
  {
    id: 1,
    paciente: "Ana López",
    doctor: "Dr. Carlos Ramírez",
    especialidad: "Medicina General",
    fecha: "2026-09-15",
    hora: "10:00",
  },
  {
    id: 2,
    paciente: "Luis Torres",
    doctor: "Dra. Laura Martínez",
    especialidad: "Cardiología",
    fecha: "2026-09-18",
    hora: "12:30",
  },
];

function Citas() {
  const citasGuardadas =
    JSON.parse(localStorage.getItem("citas")) || [];

  const [citas, setCitas] = useState([
    ...citasIniciales,
    ...citasGuardadas,
  ]);

  const eliminarCita = (id) => {
    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar esta cita?"
    );

    if (!confirmar) return;

    const nuevasCitas = citas.filter(
      (cita) => cita.id !== id
    );

    setCitas(nuevasCitas);

    const citasLocalStorage = nuevasCitas.filter(
      (cita) => cita.id !== 1 && cita.id !== 2
    );

    localStorage.setItem(
      "citas",
      JSON.stringify(citasLocalStorage)
    );
  };

  return (
    <section>
      <div className="titulo-pagina">
        <h1>Mis Citas</h1>

        <Link
          className="boton"
          to="/citas/nueva"
        >
          + Nueva cita
        </Link>
      </div>

      <div className="lista-citas">
        {citas.map((cita) => (
          <article
            className="cita"
            key={cita.id}
          >
            <h2>{cita.especialidad}</h2>

            <p>
              <strong>Paciente:</strong>{" "}
              {cita.paciente}
            </p>

            <p>
              <strong>Doctor:</strong>{" "}
              {cita.doctor}
            </p>

            <p>
              <strong>Fecha:</strong>{" "}
              {cita.fecha}
            </p>

            <p>
              <strong>Hora:</strong>{" "}
              {cita.hora}
            </p>

            <div className="acciones-cita">
              <Link
                className="enlace-detalle"
                to={`/citas/${cita.id}`}
              >
                Ver detalle
              </Link>

              {cita.id !== 1 && cita.id !== 2 && (
                <Link
                  className="boton editar"
                  to={`/citas/editar/${cita.id}`}
                >
                  Editar
                </Link>
              )}

              {cita.id !== 1 && cita.id !== 2 && (
                <button
                  className="eliminar"
                  onClick={() =>
                    eliminarCita(cita.id)
                  }
                >
                  Eliminar
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Citas;