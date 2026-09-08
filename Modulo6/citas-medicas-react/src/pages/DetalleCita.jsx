import {
  Link,
  useParams,
} from "react-router-dom";

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

function DetalleCita() {
  const { id } = useParams();

  const citasGuardadas =
    JSON.parse(
      localStorage.getItem("citas")
    ) || [];

  const citas = [
    ...citasIniciales,
    ...citasGuardadas,
  ];

  const cita = citas.find(
    (cita) =>
      cita.id === Number(id)
  );

  if (!cita) {
    return (
      <section className="tarjeta">
        <h1>Cita no encontrada</h1>

        <Link
          className="boton"
          to="/citas"
        >
          Regresar
        </Link>
      </section>
    );
  }

  return (
    <section className="tarjeta detalle">
      <h1>Detalle de la Cita</h1>

      <p>
        <strong>Paciente:</strong>{" "}
        {cita.paciente}
      </p>

      <p>
        <strong>Doctor:</strong>{" "}
        {cita.doctor}
      </p>

      <p>
        <strong>Especialidad:</strong>{" "}
        {cita.especialidad}
      </p>

      <p>
        <strong>Fecha:</strong>{" "}
        {cita.fecha}
      </p>

      <p>
        <strong>Hora:</strong>{" "}
        {cita.hora}
      </p>

      <Link
        className="boton"
        to="/citas"
      >
        Regresar a citas
      </Link>
    </section>
  );
}

export default DetalleCita;