import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;