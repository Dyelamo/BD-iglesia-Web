import React from "react";
import "../styles/dashboard.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaBirthdayCake, FaHeart, FaUser } from "react-icons/fa";

const TarjetaRegistro = ({ registro }) => {
  if (!registro) {
    return <div className="tarjeta-container">No hay datos de registro.</div>;
  }

  const {
    nombre,
    apellido,
    identificacion,
    telefono,
    fecha_nacimiento,
    estado_civil,
    genero,
    zona,
    parroquia,
    nombre_comunidad,
    etapa_comunidad,
    fecha_inicio,
    fecha_registro,
    serviciosComunidad,
    serviciosParroquia,
  } = registro;

  return (
    <div className="tarjeta-container">
      <div className="tarjeta-encabezado">
        <div>
          <h3 className="tarjeta-nombre">{`${nombre} ${apellido}`}</h3>
          <p>ID: {identificacion}</p>
          <p><FaPhoneAlt className="icon" /> {telefono}</p>
          <p><FaBirthdayCake className="icon" /> {fecha_nacimiento}</p>
          <p><FaHeart className="icon" /> {estado_civil}</p>
        </div>

        <div className="tarjeta-lateral">
          <p><FaUser className="icon" /> {genero}</p>
        </div>
      </div>

      <div className="tarjeta-info">
        <p><FaMapMarkerAlt className="icon" /> {parroquia} - {zona}</p>
        <p>
          <strong className="text-blue-600">{nombre_comunidad}</strong> <br />
          {etapa_comunidad}
        </p>
        <p>
          <span>Inicio: {fecha_inicio}</span><br />
          <span>Registrado: {fecha_registro}</span>
        </p>
      </div>

      <div className="tarjeta-servicios">
        <div>
          <p><strong>Servicios Comunidad:</strong></p>
          {serviciosComunidad?.map((serv) => (
            <span key={serv} className="chip">{serv}</span>
          ))}
        </div>

        <div>
          <p><strong>Servicios Parroquia:</strong></p>
          {serviciosParroquia?.map((serv) => (
            <span key={serv} className="chip">{serv}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TarjetaRegistro;
