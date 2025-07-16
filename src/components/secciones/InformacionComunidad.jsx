import { React } from "react";


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
          <label className="field-label">Comunidad</label>
          <input
            name="numeroComunidad"
            placeholder="Numero Comunidad"
            value={formData.numeroComunidad}
            onChange={handleChange}
            className={`field-input ${
              errores.numeroComunidad ? "field-input-error" : ""
            }`}
          />
          {errores.numeroComunidad && (
            <p className="field-error">{errores.numeroComunidad}</p>
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
