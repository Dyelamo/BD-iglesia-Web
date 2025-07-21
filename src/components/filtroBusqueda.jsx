import React from "react";
import "../styles/dashboard.css";
import { FaFilter, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

import { useStoreParroquias } from "../supabase/storeParroquias";
import { useStoreServicios } from "../supabase/storeServicios";

const FiltrosBusqueda = ({ filtro, setFitro }) => {
  const {
    parroquias,
    fetchParroquias,
    fetchZonas,
    zonas = [],
  } = useStoreParroquias();

  const {
    serviciosComunidad,
    serviciosParroquia,
    fetchServiciosComunidad,
    fetchServicioParroquia,
  } = useStoreServicios();

  useEffect(() => {
    fetchParroquias();
    fetchZonas();
    fetchServiciosComunidad();
    fetchServicioParroquia();
  }, []);

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
      servicioComunidad: "Todos los servicios",
      servicioParroquia: "Todos los servicios",
    });
  };

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

        <div className="filtros-header-right">
          {filtrosActivos && (
            <button onClick={limpiarFiltros} className="btn-limpiar">
              <FaTimes /> Limpiar Filtros
            </button>
          )}
          <button className="btn-descargar">📥 Descargar Registros</button>
        </div>
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
            {zonas.map((z) => (
              <option key={z.id_zona}>{z.nombre_zona}</option>
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
              <option key={p.id_parroquia}>{p.nombre_parroquia}</option>
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
          <label>Servicio Comunidad</label>
          <select
            name="servicioComunidad"
            value={filtro.servicioComunidad}
            onChange={handleChange}>
            <option>Todos los servicios</option>
            {serviciosComunidad.map((s) => (
              <option key={s.id_servicio}>{s.nombre_servicio}</option>
            ))}
          </select>
        </div>

        <div className="filtro-item">
          <label>Servicio Parroquia</label>
          <select
            name="servicioParroquia"
            value={filtro.servicioParroquia}
            onChange={handleChange}>
            <option>Todos los servicios</option>
            {serviciosParroquia.map((s) => (
              <option key={s.id_servicio}>{s.nombre_servicio}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FiltrosBusqueda;
