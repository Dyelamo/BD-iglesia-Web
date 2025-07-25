// src/routes/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useStoreUsuarios } from "../supabase/storeUsuarios";

const PrivateRoute = ({ children }) => {
  const { currentUsuario } = useStoreUsuarios();

  // Si no está autenticado, redirige al login
  if (!currentUsuario) {
    return <Navigate to="/" />;
  }

  // Si está autenticado, permite acceder
  return children;
};

export default PrivateRoute;
