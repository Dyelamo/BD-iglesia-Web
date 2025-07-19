import React from "react";
import "../styles/dashboard.css";
import {
  FaUser,
  FaPhoneAlt,
  FaBirthdayCake,
  FaHeart,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChurch,
  FaGlobeAmericas 
} from "react-icons/fa";

const TarjetaRegistro = ({ data }) => {
  const {
    nombres,
    apellidos,
    identificacion,
    telefono,
    genero,
    fecha_nacimiento,
    estado_civil,
    numero_comunidad,
    fecha_inicio,
    nombre_etapa,
    servicios_comunidad = [],
    servicios_parroquia = [],
    parroquia,
    zona
  } = data;

  return (
    <div className="tarjeta-container">
      <div className="tarjeta-header">
        {/* Columna 1: Info personal */}
        <div className="tarjeta-col">
          <h3>
            <FaUser className="icono" /> {nombres} {apellidos}
          </h3>
          <p>ID: {identificacion}</p>
          {telefono && (
            <p>
              <FaPhoneAlt className="icono" /> {telefono}
            </p>
          )}
          <p>
            <FaBirthdayCake className="icono" /> {fecha_nacimiento}
          </p>
          <p>
            <FaHeart className="icono" /> {estado_civil}
          </p>
          <span className={`genero-tag ${genero === "femenino" ? "femenino" : "masculino"}`}>
            {genero}
          </span>
        </div>

        {/* Columna 2: Comunidad y ubicación */}
        <div className="tarjeta-col">
          <p>
            <FaMapMarkerAlt className="icono" /> Comunidad #{numero_comunidad}
          </p>
          <p>
            <FaChurch className="icono" /> {parroquia || "Sin parroquia"}
          </p>
          <p>
            <FaGlobeAmericas className="icono" /> {zona || "Sin zona"}
          </p>
          <p>Etapa: {nombre_etapa || "No asignada"}</p>
          <p>
            <FaCalendarAlt className="icono" /> Inicio: {fecha_inicio}
          </p>
        </div>

        {/* Columna 3: Servicios */}
        <div className="tarjeta-col">
          <div className="servicios-bloque">
            <p className="servicio-label">Servicios Comunidad:</p>
            {Array.isArray(servicios_comunidad) && servicios_comunidad.length > 0 ? (
              servicios_comunidad.map((serv, i) => (
                <span key={i} className="badge blue">
                  {serv.nombre_servicio}
                </span>
              ))
            ) : (
              <span className="badge gris">Sin servicios</span>
            )}
          </div>
          <div className="servicios-bloque">
            <p className="servicio-label">Servicios Parroquia:</p>
            {Array.isArray(servicios_parroquia) && servicios_parroquia.length > 0 ? (
              servicios_parroquia.map((serv, i) => (
                <span key={i} className="badge dark">
                  {serv.nombre_servicio}
                </span>
              ))
            ) : (
              <span className="badge gris">Sin servicios</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaRegistro;
