import React, { use } from "react";
import { useEffect } from "react";
import { useStoreServicios } from "../../supabase/storeServicios";


const Servicios = ({ formData, handleChange, errores }) => {
  const {
    serviciosComunidad,
    serviciosParroquia,
    error,
    loading,
    fetchServicioParroquia,
    fetchServiciosComunidad
  } = useStoreServicios();

  useEffect(() => {
    fetchServiciosComunidad();
    fetchServicioParroquia();
  }, []);



  return (
    <section className="section-container">
      <h3 className="section-title">Servicios</h3>
      <div className="services-container">

        {/* Servicios de Comunidad */}
        <div className="service-section">
          <h4 className="service-title">Servicios de Comunidad</h4>
          <select
            name="serviciosComunidad"
            value={formData.serviciosComunidad}
            onChange={handleChange}
            className={`field-input ${errores.serviciosComunidad ? "field-input-error" : ""}`}
          >
            <option value="">Seleccione un Servicio Comunidad</option>
            {serviciosComunidad?.map((servicio) => (
              <option key={servicio.id_servicio} value={servicio.nombre_servicio}>
                {servicio.nombre_servicio}
              </option>
            ))}
          </select>
          {errores.serviciosComunidad && (
            <p className="field-error">{errores.serviciosComunidad}</p>
          )}
        </div>

        {/* Servicios de Parroquia */}
        <div className="service-section">
          <h4 className="service-title">Servicios de Parroquia</h4>
          <select
            name="serviciosParroquia"
            value={formData.serviciosParroquia}
            onChange={handleChange}
            className={`field-input ${errores.serviciosParroquia ? "field-input-error" : ""}`}
          >
            <option value="">Seleccione un Servicio Parroquia</option>
            {serviciosParroquia?.map((servicio) => (
              <option key={servicio.id_servicio} value={servicio.nombre_servicio}>
                {servicio.nombre_servicio}
              </option>
            ))}
          </select>
          {errores.serviciosParroquia && (
            <p className="field-error">{errores.serviciosParroquia}</p>
          )}
        </div>

        {/* Error general */}
        {error && <p className="field-error">Error al cargar servicios: {error}</p>}
      </div>
    </section>
  );
};


export { Servicios };
