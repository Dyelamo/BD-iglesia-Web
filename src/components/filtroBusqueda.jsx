import React from "react";

const FiltroBusquedad = ({
  filtros = {
    texto: "",
    zona: "",
    parroquia: "",
    genero: "",
    servicio: ""
  },
  onFiltroChange,
  onBuscarTexto,
  onLimpiar,
  zonas = [],
  parroquias = [],
  servicios = [],
}) => {
  return (
    <div className="filtros-container">
      <h2 className="filtros-titulo">Filtros de Búsqueda</h2>

      {/* Texto */}
      <div className="campo-filtro full">
        <input
          type="text"
          placeholder="Buscar por Nombre, Apellido o Identificación"
          value={filtros.texto}
          onChange={(e) => onBuscarTexto(e.target.value)}
          className="input-filtro"
        />
      </div>

      {/* Zona */}
      <div className="campo-filtro">
        <label>Zona</label>
        <select
          value={filtros.zona}
          onChange={(e) => onFiltroChange("zona", e.target.value)}>
          <option value="">Todas las zonas</option>
          {zonas.map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>
      </div>

      {/* Parroquia */}
      <div className="campo-filtro">
        <label>Parroquia</label>
        <select
          value={filtros.parroquia}
          onChange={(e) => onFiltroChange("parroquia", e.target.value)}>
          <option value="">Todas las parroquias</option>
          {parroquias.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Género */}
      <div className="campo-filtro">
        <label>Género</label>
        <select
          value={filtros.genero}
          onChange={(e) => onFiltroChange("genero", e.target.value)}>
          <option value="">Todos los géneros</option>
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
        </select>
      </div>

      {/* Servicio */}
      <div className="campo-filtro">
        <label>Servicio</label>
        <select
          value={filtros.servicio}
          onChange={(e) => onFiltroChange("servicio", e.target.value)}>
          <option value="">Todos los servicios</option>
          {servicios.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Botón Limpiar */}
      <div className="boton-limpiar">
        <button onClick={onLimpiar}>✖ Limpiar Filtros</button>
      </div>
    </div>
  );
};

export default FiltroBusquedad;
