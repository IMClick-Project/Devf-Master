import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Citas from "./pages/Citas";
import DetalleCita from "./pages/DetalleCita";
import NuevaCita from "./pages/NuevaCita";
import EditarCita from "./pages/EditarCita";
import NoEncontrado from "./pages/NoEncontrado";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/citas" element={<Citas />} />

          <Route
            path="/citas/nueva"
            element={<NuevaCita />}
          />

          <Route
            path="/citas/editar/:id"
            element={<EditarCita />}
          />

          <Route
            path="/citas/:id"
            element={<DetalleCita />}
          />

          <Route
            path="*"
            element={<NoEncontrado />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;