import React from "react";
import "../styles/dashboard.css";
import { FaFilter, FaTimes } from "react-icons/fa";

const FiltrosBusqueda = ({
  filtro,
  setFitro,
  zonas = [],
  parroquias = [],
  servicios = [],
}) => {
  const handleChange = (e) => {
    setFitro({
      ...filtro,
      [e.target.name]: e.target.value,
    });
  };

  const limpiarFiltros = () => {
    setFitro({
      nombre: "",
      zona: "Todas las zonas",
      parroquia: "Todas las parroquias",
      genero: "Todos los géneros",
      servicio: "Todos los servicios",
    });
  };

  // Verificar si hay filtros activos
  const filtrosActivos = Object.values(filtro).some((valor) => {
    return (
      valor !== "" &&
      valor !== "Todas las zonas" &&
      valor !== "Todas las parroquias" &&
      valor !== "Todos los géneros" &&
      valor !== "Todos los servicios"
    );
  });

  return (
    <div className="filtros-container">
      <div className="filtros-header">
        <h2>
          <FaFilter className="icono-filtro" /> Filtros de Búsqueda
        </h2>
        {filtrosActivos && (
          <button onClick={limpiarFiltros} className="btn-limpiar">
            <FaTimes /> Limpiar Filtros
          </button>
        )}
      </div>

      <label className="label-filtro">
        Buscar por Nombre, Apellido o Identificación
      </label>
      <input
        type="text"
        placeholder="Escriba para buscar..."
        name="nombre"
        value={filtro.nombre}
        onChange={handleChange}
        className="input-busqueda"
      />

      <div className="filtros-selectores">
        <div className="filtro-item">
          <label>Zona</label>
          <select name="zona" value={filtro.zona} onChange={handleChange}>
            <option>Todas las zonas</option>
            {zonas.map((zona) => (
              <option key={zona}>{zona}</option>
            ))}
          </select>
        </div>

        <div className="filtro-item">
          <label>Parroquia</label>
          <select
            name="parroquia"
            value={filtro.parroquia}
            onChange={handleChange}>
            <option>Todas las parroquias</option>
            {parroquias.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="filtro-item">
          <label>Género</label>
          <select name="genero" value={filtro.genero} onChange={handleChange}>
            <option>Todos los géneros</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
          </select>
        </div>

        <div className="filtro-item">
          <label>Servicio</label>
          <select
            name="servicio"
            value={filtro.servicio}
            onChange={handleChange}>
            <option>Todos los servicios</option>
            {servicios.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FiltrosBusqueda;
