import { useState } from "react";
import "./App.css";

function App() {
  const [producto, setProducto] = useState("");
  const [lista, setLista] = useState([]);

  const agregarProducto = () => {
    const nombreLimpio = producto.trim();

    if (nombreLimpio === "") return;

    const productoExistente = lista.find(
      (item) => item.nombre.toLowerCase() === nombreLimpio.toLowerCase()
    );

    if (productoExistente) {
      const listaActualizada = lista.map((item) =>
        item.id === productoExistente.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );

      setLista(listaActualizada);
    } else {
      const nuevoProducto = {
        id: Date.now(),
        nombre: nombreLimpio,
        cantidad: 1,
      };

      setLista([...lista, nuevoProducto]);
    }

    setProducto("");
  };

  const eliminarProducto = (id) => {
    const nuevaLista = lista.filter((item) => item.id !== id);
    setLista(nuevaLista);
  };

  return (
    <main className="contenedor">
      <div className="app-compras">
        <h1>Lista de Compras</h1>

        <div className="formulario">
          <input
            type="text"
            placeholder="Escribe un producto"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                agregarProducto();
              }
            }}
          />

          <button onClick={agregarProducto}>Agregar</button>
        </div>

        {lista.length === 0 ? (
          <p className="mensaje">No hay productos en la lista.</p>
        ) : (
          <ul className="lista">
            {lista.map((item) => (
              <li key={item.id}>
                <span>
                  {item.nombre} <strong>x{item.cantidad}</strong>
                </span>

                <button
                  className="eliminar"
                  onClick={() => eliminarProducto(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default App;