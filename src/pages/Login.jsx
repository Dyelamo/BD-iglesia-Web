import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { FaLock, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { useStoreUsuarios } from "../supabase/storeUsuarios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user_name, setUserName] = useState("");
  const [password, setContrasena] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { autenticarUsuario, error, currentUsuario, loading } =
    useStoreUsuarios();
  const navigate = useNavigate(); // <-- hook correcto para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    await autenticarUsuario(user_name, password);
  };

  useEffect(() => {
    if (currentUsuario) {
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: `Bienvenido ${currentUsuario.user_name}`,
      }).then(() => {
        navigate("/Dashboard"); 
      });
    }
  }, [currentUsuario, navigate]);

  return (
    <div className="login-wrapper">
      <div className="login-logo-section">
        <img
          src="/images/logo-diocesis.jpg"
          alt="Logo"
          className="login-logo"
        />
        <h1 className="login-title">Pequeñas Comunidades</h1>
        <p className="login-subtitle">Dieocesis de Valledupar</p>
      </div>

      <div className="login-panel">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="form-title">Iniciar Sesión</h2>
          <p className="form-description">
            Ingresa tus credenciales para acceder
          </p>

          <div className="input-group">
            <FaUser className="icono" />
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icono" />
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          {submitted && error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? "Validando..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>

      <footer className="login-footer">
        <p>© 2024 Sistema Parroquial. Todos los derechos reservados.</p>
        <p>Empresea desarrolladora - JED Industry</p>
      </footer>
    </div>
  );
};

export { Login };
