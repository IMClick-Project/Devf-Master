import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    nombre: "",
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

  const registrar = (e) => {
    e.preventDefault();

    const usuarios =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.some(
      (usuario) => usuario.email === formulario.email
    );

    if (existe) {
      setMensaje("Ya existe un usuario con ese correo.");
      return;
    }

    const nuevoUsuario = {
      id: Date.now(),
      ...formulario,
    };

    localStorage.setItem(
      "usuarios",
      JSON.stringify([...usuarios, nuevoUsuario])
    );

    navigate("/login");
  };

  return (
    <section className="tarjeta">
      <h1>Crear cuenta</h1>

      <form className="formulario" onSubmit={registrar}>
        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
          />
        </label>

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
          Registrarse
        </button>
      </form>
    </section>
  );
}

export default Register;