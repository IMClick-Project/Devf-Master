import { useEffect, useMemo, useState } from "react";
import "./App.css";

function PanelNave() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estado, setEstado] = useState("En espera");

  const [planetas, setPlanetas] = useState([
    { id: 1, nombre: "Tierra", distancia: 0 },
  ]);

  useEffect(() => {
    console.log("Panel montado");

    return () => {
      console.log("Panel desmontado");
    };
  }, []);

  useEffect(() => {
    console.log("La distancia cambió:", distancia);
  }, [distancia]);

  const distanciaTotal = useMemo(() => {
    console.log("Calculando distancia total...");

    return planetas.reduce(
      (total, planeta) => total + planeta.distancia,
      0
    );
  }, [planetas]);

  const iniciarViaje = () => {
    if (combustible <= 0) {
      setEstado("Sin combustible");
      return;
    }

    setEstado("Viajando");

    setDistancia((prev) => prev + 100);
    setCombustible((prev) => Math.max(prev - 10, 0));
  };

  const visitarPlaneta = () => {
    const nuevoPlaneta = {
      id: Date.now(),
      nombre: `Planeta ${planetas.length + 1}`,
      distancia: Math.floor(Math.random() * 500) + 100,
    };

    setPlanetas([...planetas, nuevoPlaneta]);
  };

  return (
    <div className="panel">
      <h1>🚀 Explorador Espacial</h1>

      <div className="datos">
        <p>
          <strong>Estado:</strong> {estado}
        </p>

        <p>
          <strong>Distancia recorrida:</strong> {distancia} km
        </p>

        <p>
          <strong>Combustible:</strong> {combustible}%
        </p>

        <p>
          <strong>Distancia total de planetas:</strong>{" "}
          {distanciaTotal} km
        </p>
      </div>

      <div className="acciones">
        <button onClick={iniciarViaje}>Iniciar vuelo</button>
        <button onClick={visitarPlaneta}>Visitar planeta</button>
      </div>

      <h2>Planetas visitados</h2>

      <ul>
        {planetas.map((planeta) => (
          <li key={planeta.id}>
            {planeta.nombre} - {planeta.distancia} km
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [mostrarPanel, setMostrarPanel] = useState(true);

  return (
    <main className="contenedor">
      <button
        className="boton-panel"
        onClick={() => setMostrarPanel(!mostrarPanel)}
      >
        {mostrarPanel ? "Ocultar panel" : "Mostrar panel"}
      </button>

      {mostrarPanel && <PanelNave />}
    </main>
  );
}

export default App;