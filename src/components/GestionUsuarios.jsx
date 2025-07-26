import React, { useEffect } from "react";
import "../styles/gestion_usuarios.css";
import { useStoreUsuarios } from "../supabase/storeUsuarios";

function GestionUsuarios({ visible }) {
  const {
    listaUsuarios,
    obtenerUsuarios,
    loading,
    error,
  } = useStoreUsuarios();

  

  useEffect(() => {
    if (visible) {
      obtenerUsuarios();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="usuarios-wrapper">
      <div className="gestion-container">
        <div className="gestion-header">
          <h2>
            <i className="fa-solid fa-gear"></i> Gestión de Usuarios
          </h2>
          {/* <button className="btn-nuevo">+ Nuevo Usuario</button> */}
        </div>

        {loading && <p>Cargando usuarios...</p>}
        {error && <p className="error">{error}</p>}

        <div className="usuarios-lista">
          {listaUsuarios.map((user) => (
            <div key={user.id_usuario} className="usuario-card">
              <div className="usuario-info">
                <div className="icono-rol">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h3>{user.user_name}</h3>
                  <p>Contraseña: {user.password}</p>
                </div>
              </div>
              <div className="usuario-detalle">
                <p className="p-content">Creado: N/A</p>
                <p className="p-content">Último acceso: N/A</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GestionUsuarios;
