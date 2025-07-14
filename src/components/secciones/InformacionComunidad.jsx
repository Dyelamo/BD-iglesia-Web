import { React } from "react";


const InformacionComunidad = ({ formData, handleChange, errores }) => {
  return (
    <section className="section-container">
      <h3 className="section-title">Información de Comunidad</h3>
      <div className="section-grid">
        <div className="field-container">
          <label className="field-label">Comunidad</label>
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
          <input
            name="etapaComunidad"
            placeholder="Etapa de la Comunidad"
            value={formData.etapaComunidad}
            onChange={handleChange}
            className={`field-input ${
              errores.etapaComunidad ? "field-input-error" : ""
            }`}
          />
          {errores.etapaComunidad && (
            <p className="field-error">{errores.etapaComunidad}</p>
          )}
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
