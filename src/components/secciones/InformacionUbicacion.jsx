import { React } from "react";

const InformacionUbicacion = ({ formData, handleChange, errores }) => {
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
            className={`field-input ${
              errores.parroquia ? "field-input-error" : ""
            }`}>
            <option value="">Selecione una parroquia</option>
            <option value="parroquia1">Parroquia 1</option>
            <option value="parroquia2">Parroquia 2</option>
            <option value="parroquia3">Parroquia 3</option>
            <option value="parroquia4">Parroquia 4</option>
          </select>
          {errores.parroquia && (
            <p className="field-error">{errores.parroquia}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export { InformacionUbicacion };
