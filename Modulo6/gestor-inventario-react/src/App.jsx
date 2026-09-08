import { useCallback, useReducer, useRef } from "react";
import "./App.css";

const estadoInicial = {
  productos: [
    { id: 1, nombre: "Laptop", cantidad: 5 },
    { id: 2, nombre: "Mouse", cantidad: 10 },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "AGREGAR_PRODUCTO": {
      const productoExistente = state.productos.find(
        (producto) =>
          producto.nombre.toLowerCase() ===
          action.payload.nombre.toLowerCase()
      );

      if (productoExistente) {
        return {
          ...state,
          productos: state.productos.map((producto) =>
            producto.id === productoExistente.id
              ? { ...producto, cantidad: producto.cantidad + 1 }
              : producto
          ),
        };
      }

      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    }

    case "AUMENTAR_STOCK":
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto.id === action.payload
            ? { ...producto, cantidad: producto.cantidad + 1 }
            : producto
        ),
      };

    case "DISMINUIR_STOCK":
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto.id === action.payload && producto.cantidad > 0
            ? { ...producto, cantidad: producto.cantidad - 1 }
            : producto
        ),
      };

    case "ELIMINAR_PRODUCTO":
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  const inputNombreRef = useRef(null);

  const agregarProducto = useCallback(() => {
    const nombre = inputNombreRef.current.value.trim();

    if (nombre === "") return;

    const nuevoProducto = {
      id: Date.now(),
      nombre,
      cantidad: 1,
    };

    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: nuevoProducto,
    });

    inputNombreRef.current.value = "";
    inputNombreRef.current.focus();
  }, []);

  const aumentarStock = useCallback((id) => {
    dispatch({
      type: "AUMENTAR_STOCK",
      payload: id,
    });
  }, []);

  const disminuirStock = useCallback((id) => {
    dispatch({
      type: "DISMINUIR_STOCK",
      payload: id,
    });
  }, []);

  const eliminarProducto = useCallback((id) => {
    dispatch({
      type: "ELIMINAR_PRODUCTO",
      payload: id,
    });
  }, []);

  return (
    <main className="contenedor">
      <div className="inventario">
        <h1>Gestor de Inventario</h1>

        <p className="descripcion">
          Administra los productos y sus existencias.
        </p>

        <div className="formulario">
          <input
            ref={inputNombreRef}
            type="text"
            placeholder="Nombre del producto"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                agregarProducto();
              }
            }}
          />

          <button onClick={agregarProducto}>Agregar</button>
        </div>

        {state.productos.length === 0 ? (
          <p className="mensaje">No hay productos en el inventario.</p>
        ) : (
          <div className="lista">
            {state.productos.map((producto) => (
              <div className="producto" key={producto.id}>
                <div>
                  <h2>{producto.nombre}</h2>
                  <p>Stock: {producto.cantidad}</p>
                </div>

                <div className="acciones">
                  <button onClick={() => disminuirStock(producto.id)}>
                    -
                  </button>

                  <button onClick={() => aumentarStock(producto.id)}>
                    +
                  </button>

                  <button
                    className="eliminar"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;