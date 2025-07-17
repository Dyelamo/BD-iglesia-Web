import { useEffect } from "react";
import { useStoreServicios } from "../../supabase/storeServicios";

const Servicios = ({ formData, handleChange, errores }) => {
  const {
    serviciosComunidad,
    serviciosParroquia,
    error,
    fetchServicioParroquia,
    fetchServiciosComunidad,
  } = useStoreServicios();

  useEffect(() => {
    fetchServiciosComunidad();
    fetchServicioParroquia();
  }, []);

  return (
    <section className="section-container">
      <h3 className="section-title">Servicios</h3>
      <div className="services-container">
        <div className="service-list">
          {serviciosComunidad?.map((servicio) => (
            <label key={servicio.id_servicio} className="service-item">
              <input
                type="checkbox"
                name="serviciosComunidad"
                value={servicio.id_servicio}
                checked={formData.serviciosComunidad.includes(
                  servicio.id_servicio
                )}
                onChange={handleChange}
                className="service-checkbox"
              />
              <span className="service-label">{servicio.nombre_servicio}</span>
            </label>
          ))}
          {errores.serviciosComunidad && (
            <p className="field-error">{ errores.serviciosComunidad}</p>
          )}
        </div>
        

        <div className="service-list">
          {serviciosParroquia?.map((servicio) => (
            <label key={servicio.id_servicio} className="service-item">
              <input
                type="checkbox"
                name="serviciosParroquia"
                value={servicio.id_servicio}
                checked={formData.serviciosParroquia.includes(
                  servicio.id_servicio
                )}
                onChange={handleChange}
                className="service-checkbox"
              />
              <span className="service-label">{servicio.nombre_servicio}</span>
            </label>
          ))}
          {errores.servicioParroquia && (
            <p className="field-error">{ errores.serviciosParroquia}</p>
          )}
        </div>

        {/* Error general */}
        {error && (
          <p className="field-error">Error al cargar servicios: {error}</p>
        )}
      </div>
    </section>
  );
};

export { Servicios };
