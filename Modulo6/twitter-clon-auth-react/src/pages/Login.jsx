import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState("");

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const iniciarSesion = (e) => {
    e.preventDefault();

    const usuarios =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(
      (item) =>
        item.email === formulario.email &&
        item.password === formulario.password
    );

    if (!usuario) {
      setMensaje("Correo o contraseña incorrectos.");
      return;
    }

    localStorage.setItem(
      "usuarioActivo",
      JSON.stringify(usuario)
    );

    navigate("/");
  };

  return (
    <section className="tarjeta">
      <h1>Iniciar sesión</h1>

      <form className="formulario" onSubmit={iniciarSesion}>
        <label>
          Correo
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={manejarCambio}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            name="password"
            value={formulario.password}
            onChange={manejarCambio}
            required
          />
        </label>

        {mensaje && (
          <p className="mensaje-error">
            {mensaje}
          </p>
        )}

        <button type="submit">
          Entrar
        </button>
      </form>
    </section>
  );
}

export default Login;