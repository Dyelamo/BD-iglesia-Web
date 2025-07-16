import { useEffect } from "react";
import { useStoreParroquias } from "../../supabase/storeParroquias";

const InformacionUbicacion = ({ formData, handleChange, errores }) => {


  const {
    parroquias,
    fetchParroquias
  } = useStoreParroquias();

  useEffect(() => {
    fetchParroquias();
  }, []);

  return (
    <section className="section-container">
      <h3 className="section-title">Información de Ubicación</h3>
      <div className="section-grid">
        <div className="field-container">
          <label className="field-label">Parroquia</label>
          <select
            name="parroquia"
            value={formData.parroquia}
            onChange={handleChange}
            className={`field-input ${errores.parroquia ? "field-input-error" : ""}`}
            >
            
            <option value="">Seleccione una parroquia</option>
            {parroquias.map((parroquia) => (
              <option key={parroquia.id_parroquia} value={parroquia.nombre_parroquia}>
                {parroquia.nombre_parroquia}
              </option>
            ))}
          </select>
          {errores.parroquia && <p className="field-error">{errores.parroquia}</p>}
        </div>
      </div>
    </section>
  );
};

export { InformacionUbicacion };
