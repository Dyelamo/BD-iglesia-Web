import React, { useState, useEffect } from "react";
import "../styles/login.css";
import {  FaLock, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


import { useStoreUsuarios } from "../supabase/storeUsuarios";
import { useNavigate } from "react-router-dom";

const imagenes = [
  "../../public/images/iglesia1.jpg",
  "../../public/images/iglesia2.jpg",
  "../../public/images/iglesia3.jpg"
];

const Login = () => {
  const [indexImagen, setIndexImagen] = useState(0);
  const [user_name, setUserName] = useState("");
  const [password, setContrasena] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { autenticarUsuario, error, currentUsuario, loading } = useStoreUsuarios();

  const navigate = useNavigate(); // <-- hook correcto para redirigir



  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexImagen((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    await autenticarUsuario(user_name, password);
  };

  useEffect(() => {
    if (currentUsuario) {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: `Bienvenido ${currentUsuario.user_name}`,
        }).then(() => {
            navigate("/Dashboard"); // Descomenta esto cuando tengas la ruta
        });
    }
  }, [currentUsuario, navigate]);



  return (
    <div className="login-container">
      <div
        className="login-fondo"
        style={{ backgroundImage: `url(${imagenes[indexImagen]})` }}
      ></div>

      <div className="login-contenido">
        <div className="login-info">
          <div className="logo-nombre">
            <img
              src="../../public/images/logo-diocesis.jpg"
              alt="Logo"
              className="logo-login"
            />
            <h1>Sistema Parroquial</h1>
            <p className="subtitulo">Gestión Comunitaria</p>
          </div>
          <h2 className="bienvenida">Bienvenido</h2>
          <p className="descripcion">
            Accede al sistema de gestión de registros comunitarios y fortalece
            los lazos de nuestra comunidad parroquial.
          </p>
          <ul className="caracteristicas">
            <li>• Gestión de registros comunitarios</li>
            <li>• Seguimiento de servicios pastorales</li>
            <li>• Reportes y estadísticas detalladas</li>
          </ul>
        </div>

        <div className="login-formulario">
          <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <p className="login-descripcion">
              Ingresa tus credenciales para acceder al dashboard
            </p>

            <div className="input-group">
              <FaUser className="icono" />
              <input
                type="text"
                placeholder="Usuario"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FaLock className="icono" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>

            {submitted && error && (
              <div className="error-mensaje">
                <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>
              </div>
            )}

            <button type="submit" className="btn-iniciar" disabled={loading}>
              {loading ? "Validando..." : "Iniciar Sesión"}
            </button>
          </form>
        </div>
      </div>

      <footer className="login-footer">
        <p>© 2024 Sistema Parroquial. Todos los derechos reservados.</p>
        <p>Pastoral Juvenil - Jóvenes comprometidos con Cristo</p>
      </footer>
    </div>
  );
};

export {Login};
