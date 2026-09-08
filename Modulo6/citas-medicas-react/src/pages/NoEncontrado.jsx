import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <section className="tarjeta">
      <h1>404</h1>

      <p>La página que buscas no existe.</p>

      <Link className="boton" to="/">
        Regresar al inicio
      </Link>
    </section>
  );
}

export default NoEncontrado;