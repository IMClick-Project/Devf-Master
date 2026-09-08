import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

function EditarCita() {
  const { id } = useParams();
  const navigate = useNavigate();

  const citasGuardadas =
    JSON.parse(
      localStorage.getItem("citas")
    ) || [];

  const citaEncontrada =
    citasGuardadas.find(
      (cita) =>
        cita.id === Number(id)
    );

  const [formulario, setFormulario] =
    useState(
      citaEncontrada || {
        paciente: "",
        doctor: "",
        especialidad: "",
        fecha: "",
        hora: "",
      }
    );

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const guardarCambios = (e) => {
    e.preventDefault();

    const citasActualizadas =
      citasGuardadas.map((cita) =>
        cita.id === Number(id)
          ? {
              ...cita,
              ...formulario,
            }
          : cita
      );

    localStorage.setItem(
      "citas",
      JSON.stringify(
        citasActualizadas
      )
    );

    navigate("/citas");
  };

  if (!citaEncontrada) {
    return (
      <section className="tarjeta">
        <h1>Cita no encontrada</h1>

        <p>
          Esta cita no puede editarse
          porque no existe en el
          almacenamiento local.
        </p>

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
    <section className="tarjeta">
      <h1>Editar Cita</h1>

      <form
        className="formulario"
        onSubmit={guardarCambios}
      >
        <label>
          Paciente
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

        <div className="acciones-formulario">
          <button type="submit">
            Guardar cambios
          </button>

          <Link
            className="boton secundario"
            to="/citas"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </section>
  );
}

export default EditarCita;