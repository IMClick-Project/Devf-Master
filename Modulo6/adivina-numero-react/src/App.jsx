import { useState } from "react";
import "./App.css";

function Tarjeta({ children }) {
  return <section className="tarjeta">{children}</section>;
}

function Encabezado() {
  return (
    <header className="encabezado">
      <h1>🎯 Adivina el Número</h1>
      <p>Intenta descubrir el número secreto entre 1 y 100.</p>
    </header>
  );
}

function FormularioAdivinanza({
  numeroUsuario,
  setNumeroUsuario,
  comprobarNumero,
  terminado,
}) {
  return (
    <div className="formulario">
      <input
        type="number"
        min="1"
        max="100"
        placeholder="Escribe un número"
        value={numeroUsuario}
        disabled={terminado}
        onChange={(e) => setNumeroUsuario(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !terminado) {
            comprobarNumero();
          }
        }}
      />

      <button onClick={comprobarNumero} disabled={terminado}>
        Comprobar
      </button>
    </div>
  );
}

function Mensaje({ mensaje, tipo }) {
  if (!mensaje) return null;

  return <p className={`mensaje ${tipo}`}>{mensaje}</p>;
}

function Estadisticas({ intentos }) {
  return (
    <div className="estadisticas">
      <span>Intentos: {intentos}</span>
    </div>
  );
}

function App() {
  const generarNumero = () => Math.floor(Math.random() * 100) + 1;

  const [numeroSecreto, setNumeroSecreto] = useState(generarNumero);
  const [numeroUsuario, setNumeroUsuario] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const [intentos, setIntentos] = useState(0);
  const [terminado, setTerminado] = useState(false);

  const comprobarNumero = () => {
    const numero = Number(numeroUsuario);

    if (numeroUsuario === "" || numero < 1 || numero > 100) {
      setMensaje("Ingresa un número válido entre 1 y 100.");
      setTipoMensaje("advertencia");
      return;
    }

    setIntentos((prev) => prev + 1);

    if (numero === numeroSecreto) {
      setMensaje(`¡Correcto! El número era ${numeroSecreto}.`);
      setTipoMensaje("exito");
      setTerminado(true);
    } else if (numero < numeroSecreto) {
      setMensaje("El número secreto es mayor.");
      setTipoMensaje("pista");
    } else {
      setMensaje("El número secreto es menor.");
      setTipoMensaje("pista");
    }

    setNumeroUsuario("");
  };

  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumero());
    setNumeroUsuario("");
    setMensaje("");
    setTipoMensaje("");
    setIntentos(0);
    setTerminado(false);
  };

  return (
    <main className="contenedor">
      <Tarjeta>
        <Encabezado />

        <FormularioAdivinanza
          numeroUsuario={numeroUsuario}
          setNumeroUsuario={setNumeroUsuario}
          comprobarNumero={comprobarNumero}
          terminado={terminado}
        />

        <Mensaje mensaje={mensaje} tipo={tipoMensaje} />

        <Estadisticas intentos={intentos} />

        {terminado && (
          <button className="reiniciar" onClick={reiniciarJuego}>
            Jugar de nuevo
          </button>
        )}
      </Tarjeta>
    </main>
  );
}

export default App;