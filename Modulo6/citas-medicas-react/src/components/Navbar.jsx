import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>SaludCare</h2>

      <div>
        <Link to="/">Inicio</Link>
        <Link to="/citas">Mis citas</Link>
        <Link to="/citas/nueva">Nueva cita</Link>
      </div>
    </nav>
  );
}

export default Navbar;