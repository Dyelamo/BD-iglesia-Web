import { React } from "react";

const InformacionPersonal = ({ formData, handleChange, errores }) => {
  return (
    <section className="section-container">
      <h3 className="section-title">Información Personal</h3>
      <div className="section-grid">
        <div className="field-container">
          <label className="field-label">Nombre</label>
          <input
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`field-input ${
              errores.nombre ? "field-input-error" : ""
            }`}
          />
          {errores.nombre && <p className="field-error">{errores.nombre}</p>}
        </div>

        <div className="field-container">
          <label className="field-label">Apellido</label>
          <input
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className={`field-input ${
              errores.apellido ? "field-input-error" : ""
            }`}
          />
          {errores.apellido && (
            <p className="field-error">{errores.apellido}</p>
          )}
        </div>

        <div className="field-container">
          <label className="field-label">Identificación</label>
          <input
            name="identificacion"
            placeholder="Identificación"
            value={formData.identificacion}
            onChange={handleChange}
            className={`field-input ${
              errores.identificacion ? "field-input-error" : ""
            }`}
          />
          {errores.identificacion && (
            <p className="field-error">{errores.identificacion}</p>
          )}
        </div>

        <div className="field-container">
          <label className="field-label">Genero</label>
          <select
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            className={`field-input ${
              errores.genero ? "field-input-error" : ""
            }`}>
            <option value="">Selecione un Genero</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
          {errores.genero && <p className="field-error">{errores.genero}</p>}
        </div>

        <div className="field-container">
          <label className="field-label">Fecha de Nacimiento</label>
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento || ""}
            onChange={handleChange}
            className={`field-input ${
              errores.fechaNacimiento ? "field-input-error" : ""
            }`}
          />
          {errores.fechaNacimiento && (
            <p className="field-error">{errores.fechaNacimiento}</p>
          )}
        </div>

        <div className="field-container">
          <label className="field-label">Teléfono</label>
          <input
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className={`field-input ${
              errores.telefono ? "field-input-error" : ""
            }`}
          />
          {errores.telefono && (
            <p className="field-error">{errores.telefono}</p>
          )}
        </div>

        <div className="field-container">
          <label className="field-label">Estado Civil</label>
          <select
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            className={`field-input ${
              errores.estadoCivil ? "field-input-error" : ""
            }`}>
            <option value="">Seleccione un Estado Civil</option>
            <option value="Soltero">Soltero/a</option>
            <option value="Casado">Casado/a</option>
            <option value="Divorciado">Divorciado/a</option>
            <option value="Viudo">Viudo/a</option>
          </select>
          {errores.estadoCivil && (
            <p className="field-error">{errores.estadoCivil}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export { InformacionPersonal };
