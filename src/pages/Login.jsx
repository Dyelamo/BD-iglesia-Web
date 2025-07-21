import React, { useState, useEffect } from "react";
import "../styles/login.css";
import {  FaLock, FaUser } from "react-icons/fa";

import { useStoreUsuarios } from "../supabase/storeUsuarios";

const imagenes = [
  "../../public/images/iglesia1.jpg",
  "../../public/images/iglesia2.jpg",
  "../../public/images/iglesia3.jpg"
];

const Login = () => {
  const [indexImagen, setIndexImagen] = useState(0);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexImagen((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciar sesión con", correo, contrasena);
    // Lógica real se conecta a Supabase
  };

  return (
    <div className="login-container">
      <div
        className="login-fondo"
        style={{ backgroundImage: `url(${imagenes[indexImagen]})` }}
      ></div>

      <div className="login-contenido">
        <div className="login-info">
          <div className="logo-nombre">
            <img src="../../public/images/logo-diocesis.jpg" alt="Logo" className="logo-login" />
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
            <p className="login-descripcion">Ingresa tus credenciales para acceder al dashboard</p>

            <div className="input-group">
              <FaUser className="icono" />
              <input
                type="text"
                placeholder="Usuario"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FaLock className="icono" />
              <input
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-iniciar">
              Iniciar Sesión
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
