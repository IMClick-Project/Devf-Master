import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [horaActual, setHoraActual] = useState(new Date());
  const [nombreTarea, setNombreTarea] = useState("");
  const [horas, setHoras] = useState("");
  const [tareas, setTareas] = useState([
    { id: 1, nombre: "Estudiar React", horas: 2 },
    { id: 2, nombre: "Resolver ejercicios", horas: 1.5 },
  ]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const totalHoras = useMemo(() => {
    console.log("Calculando total de horas...");

    return tareas.reduce(
      (total, tarea) => total + Number(tarea.horas),
      0
    );
  }, [tareas]);

  const agregarTarea = () => {
    if (nombreTarea.trim() === "" || horas === "") return;

    const nuevaTarea = {
      id: Date.now(),
      nombre: nombreTarea.trim(),
      horas: Number(horas),
    };

    setTareas([...tareas, nuevaTarea]);
    setNombreTarea("");
    setHoras("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <main className="contenedor">
      <div className="app-tareas">
        <h1>Contador de Tareas</h1>

        <div className="reloj">
          Hora actual: {horaActual.toLocaleTimeString()}
        </div>

        <div className="formulario">
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={nombreTarea}
            onChange={(e) => setNombreTarea(e.target.value)}
          />

          <input
            type="number"
            min="0"
            step="0.5"
            placeholder="Horas"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
          />

          <button onClick={agregarTarea}>
            Agregar
          </button>
        </div>

        <ul className="lista">
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              <div>
                <strong>{tarea.nombre}</strong>
                <span>{tarea.horas} h</span>
              </div>

              <button
                className="eliminar"
                onClick={() => eliminarTarea(tarea.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        <div className="total">
          Tiempo total: <strong>{totalHoras} horas</strong>
        </div>
      </div>
    </main>
  );
}

export default App;