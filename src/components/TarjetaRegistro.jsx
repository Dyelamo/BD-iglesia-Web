import React from "react";
import "../styles/dashboard.css";
import {
  FaUser,
  FaPhoneAlt,
  FaBirthdayCake,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

const TarjetaRegistro = ({ data }) => {
  const {
    nombre,
    apellido,
    identificacion,
    telefono,
    genero,
    fechaNacimiento,
    estadoCivil,
    parroquia,
    zona,
    numeroComunidad,
    etapaComunidad,
    inicioComunidad,
    fechaRegistro,
    serviciosComunidad = [],
    serviciosParroquia = [],
  } = data;

  return (
    <div className="tarjeta-container">
      <div className="tarjeta-header">
        <div className="tarjeta-col">
          <h3>
            <FaUser className="icono" /> {nombre} {apellido}
          </h3>
          <p>ID: {identificacion}</p>
          <p>
            <FaPhoneAlt className="icono" /> {telefono}
          </p>
          <p>
            <FaBirthdayCake className="icono" /> {fechaNacimiento}
          </p>
           <p>
            <FaHeart className="icono" /> {estadoCivil}
          </p>
          <span className={`genero-tag ${genero === "Femenino" ? "femenino" : "masculino"}`}>
            {genero}
          </span>
        </div>

        <div className="tarjeta-col">
          <p>{zona}</p>
          <p className="parroquia-nombre">{parroquia}</p>
          <p>{numeroComunidad}</p>
          <p>Etapa: {etapaComunidad}</p>
          <p>Inicio: {inicioComunidad}</p>
          <p>Registrado: {fechaRegistro}</p>
        </div>

        <div className="tarjeta-col">
          <div className="servicios-bloque">
            <p className="servicio-label">Servicios Comunidad:</p>
            {serviciosComunidad.map((serv, i) => (
              <span key={i} className="badge blue">
                {serv}
              </span>
            ))}
          </div>
          <div className="servicios-bloque">
            <p className="servicio-label">Servicios Parroquia:</p>
            {serviciosParroquia.map((serv, i) => (
              <span key={i} className="badge dark">
                {serv}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaRegistro;
