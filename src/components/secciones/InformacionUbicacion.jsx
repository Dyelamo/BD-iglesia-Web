import { React } from "react";

const InformacionUbicacion = ({ formData, handleChange, errores }) => {
  return (
    <section className="section-container">
      <h3 className="section-title">Información de Ubicación</h3>
      <div className="section-grid">
        <div className="field-container">
          <label className="field-label">Municipio</label>
          <select
            name="municipio"
            value={formData.municipio}
            onChange={handleChange}
            className={`field-input ${
              errores.estadoCivil ? "field-input-error" : ""
            }`}>
            <option value="">Selecione un municipio</option>
            <option value="municipio1">Municipio 1</option>
            <option value="municipio2">Municipio 2</option>
            <option value="municipio3">Municipio 3</option>
            <option value="municipio4">Municipio 4</option>
          </select>
          {errores.municipio && (
            <p className="field-error">{errores.municipio}</p>
          )}
        </div>

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

        <div className="field-container">
          <label className="field-label">Zona</label>
          <select
            name="zona"
            value={formData.zona}
            onChange={handleChange}
            className={`field-input ${
              errores.zona ? "field-input-error" : ""
            }`}>
            <option value="">Selecione una zona</option>
            <option value="zona1">Zona 1</option>
            <option value="zona2">Zona 2</option>
            <option value="zona3">Zona 3</option>
            <option value="zona4">Zona 4</option>
          </select>
          {errores.zona && <p className="field-error">{errores.zona}</p>}
        </div>
      </div>
    </section>
  );
};

export { InformacionUbicacion };
