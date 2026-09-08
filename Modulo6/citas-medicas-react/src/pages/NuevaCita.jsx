import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NuevaCita() {
  const navigate = useNavigate();

  const [formulario, setFormulario] =
    useState({
      paciente: "",
      doctor: "",
      especialidad: "",
      fecha: "",
      hora: "",
    });

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const guardarCita = (e) => {
    e.preventDefault();

    if (
      !formulario.paciente ||
      !formulario.doctor ||
      !formulario.especialidad ||
      !formulario.fecha ||
      !formulario.hora
    ) {
      return;
    }

    const citasGuardadas =
      JSON.parse(
        localStorage.getItem("citas")
      ) || [];

    const nuevaCita = {
      id: Date.now(),
      ...formulario,
    };

    const nuevasCitas = [
      ...citasGuardadas,
      nuevaCita,
    ];

    localStorage.setItem(
      "citas",
      JSON.stringify(nuevasCitas)
    );

    navigate("/citas");
  };

  return (
    <section className="tarjeta">
      <h1>Agendar Nueva Cita</h1>

      <form
        className="formulario"
        onSubmit={guardarCita}
      >
        <label>
          Nombre del paciente
          <input
            name="paciente"
            type="text"
            value={formulario.paciente}
            onChange={manejarCambio}
            required
          />
        </label>

        <label>
          Doctor
          <input
            name="doctor"
            type="text"
            value={formulario.doctor}
            onChange={manejarCambio}
            required
          />
        </label>

        <label>
          Especialidad
          <select
            name="especialidad"
            value={formulario.especialidad}
            onChange={manejarCambio}
            required
          >
            <option value="">
              Selecciona una opción
            </option>
            <option>
              Medicina General
            </option>
            <option>
              Cardiología
            </option>
            <option>
              Dermatología
            </option>
            <option>
              Pediatría
            </option>
          </select>
        </label>

        <label>
          Fecha
          <input
            name="fecha"
            type="date"
            value={formulario.fecha}
            onChange={manejarCambio}
            required
          />
        </label>

        <label>
          Hora
          <input
            name="hora"
            type="time"
            value={formulario.hora}
            onChange={manejarCambio}
            required
          />
        </label>

        <button type="submit">
          Guardar cita
        </button>
      </form>
    </section>
  );
}

export default NuevaCita;