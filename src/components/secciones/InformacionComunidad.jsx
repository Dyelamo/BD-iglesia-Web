import { React } from "react";
import { useEffect } from "react";


import {useStoreEtapas} from "../../supabase/storeEtapas";


const InformacionComunidad = ({ formData, handleChange, errores }) => {

  const { 
    etapas, 
    fetchEtapas,
    loading,
    error,
  } = useStoreEtapas();


  useEffect(() => {
    fetchEtapas();
  }, []);



  return (
    <section className="section-container">
      <h3 className="section-title">Información de Comunidad</h3>
      <div className="section-grid">
        <div className="field-container">
          <label className="field-label">Numero de Comunidad</label>
          <input
            name="comunidad"
            placeholder="Comunidad"
            value={formData.comunidad}
            onChange={handleChange}
            className={`field-input ${
              errores.comunidad ? "field-input-error" : ""
            }`}
          />
          {errores.comunidad && (
            <p className="field-error">{errores.comunidad}</p>
          )}
        </div>

        <div className="field-container">
          <label className="field-label">Etapa de la Comunidad</label>
          <select
            name="etapaComunidad"
            value={formData.etapaComunidad}
            onChange={handleChange}
            className={`field-input ${errores.etapaComunidad ? "field-input-error" : ""}`}
          >
            <option value="">Seleccione una etapa</option>
            {etapas.map((etapa) => (
              <option key={etapa.id_etapa} value={etapa.nombre_etapa}>
                {etapa.nombre_etapa}
              </option>
            ))}
          </select>

        </div>

        <div className="field-container">
          <label className="field-label">Inicio en la Comunidad</label>
          <input
            type="date"
            name="inicioComunidad"
            value={formData.inicioComunidad || ""}
            onChange={handleChange}
            className={`field-input ${errores.inicioComunidad ? "field-input-error" : ""}`}
          />
          {errores.inicioComunidad && (
            <p className="field-error">{errores.inicioComunidad}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export { InformacionComunidad };
