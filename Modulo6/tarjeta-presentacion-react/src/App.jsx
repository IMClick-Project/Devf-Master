import "./App.css";
import fotoPerfil from "./assets/mariola.jpg";

function TarjetaPresentacion() {
  return (
    <div className="tarjeta">
      <img
        src={fotoPerfil}
        alt="Foto de Mariola Camacho Lie"
        className="foto-perfil"
      />

      <h1>Mariola Camacho Lie</h1>
      <h2>Maestra en Ciencias en Ingeniería Química</h2>

      <p>
        Soy Maestra en Ciencias en Ingeniería Química y actualmente estudiante
        de doctorado. Me interesan el modelado, la simulación, la optimización
        y el control de procesos.
      </p>

      <p>
        También disfruto combinar la programación, la ciencia y la ingeniería
        para analizar sistemas complejos y desarrollar soluciones.
      </p>

      <div className="habilidades">
        <span>Análisis de datos</span>
        <span>Resolución de problemas</span>
        <span>Pensamiento analítico</span>
        <span>Investigación científica</span>
        <span>Comunicación técnica</span>
        <span>Trabajo interdisciplinario</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="contenedor">
      <TarjetaPresentacion />
    </main>
  );
}

export default App;