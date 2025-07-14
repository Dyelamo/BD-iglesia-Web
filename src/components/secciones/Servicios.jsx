import React from "react";

const Servicios = ({ formData, handleChange, errores }) => {
  const serviciosComunidad = ["Coordinador", "Animador"];

  const serviciosParroquia = [
    "Catequesis",
    "Pastoral Juvenil",
    "Pastoral Familiar",
  ];

  return (
    <section className="section-container">
      <h3 className="section-title">Servicios</h3>
      <div className="services-container">
        <div className="service-section">
          <h4 className="service-title">Servicios de Comunidad</h4>
          <div className="service-list">
            {serviciosComunidad.map((serv) => (
              <label key={serv} className="service-item">
                <input
                  type="checkbox"
                  name="serviciosComunidad"
                  value={serv}
                  checked={(formData.serviciosComunidad || []).includes(serv)}
                  onChange={handleChange}
                  className="service-checkbox"
                />
                <span className="service-label">{serv}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="service-section">
          <h4 className="service-title">Servicios de Parroquia</h4>
          <div className="service-list">
            {serviciosParroquia.map((serv) => (
              <label key={serv} className="service-item">
                <input
                  type="checkbox"
                  name="serviciosParroquia"
                  value={serv}
                  checked={(formData.serviciosParroquia || []).includes(serv)}
                  onChange={handleChange}
                  className="service-checkbox"
                />
                <span className="service-label">{serv}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {errores.serviciosComunidad && (
        <p className="field-error">{errores.serviciosComunidad}</p>
      )}
    </section>
  );
};

export { Servicios };
