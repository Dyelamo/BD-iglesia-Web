import { useState } from "react";
import "../styles/dashboard_components.css";
import "../styles/dashboard.css";
import Estadisticas from "../components/Estadisticas";
import FiltroBusqueda from "../components/filtroBusqueda";
import TarjetaRegistro from "../components/TarjetaRegistro";
import GestionUsuarios from "../components/GestionUsuarios";
import { useEffect } from "react";
import { useStorePersona } from "../supabase/storePersona";
import { useStoreUsuarios } from "../supabase/storeUsuarios";

const Dashboard = () => {
  const [filtro, setFiltro] = useState({
    nombre: "",
    zona: "Todas las zonas",
    parroquia: "Todas las parroquias",
    genero: "Todos los géneros",
    servicioComunidad: [],
    servicioParroquia: [],
    estado_civil: "Todos los estados",
  });

  const { persona, loading, error, filtrarFeligreses, total, total_hombres, total_mujeres } = useStorePersona();

  const { currentUsuario } = useStoreUsuarios();

  const [tabActiva, setTabActiva] = useState("registros");

  const mapFiltroToApiParams = (filtro) => {
    return {
      p_nombre_apellido: filtro.nombre || null,
      p_genero: filtro.genero !== "Todos los géneros" ? filtro.genero : null,
      p_id_zona:
        filtro.zona !== "Todas las zonas" ? parseInt(filtro.zona) : null,
      p_id_parroquia:
        filtro.parroquia !== "Todas las parroquias"
          ? parseInt(filtro.parroquia)
          : null,
      p_estado_civil:
        filtro.estado_civil !== "Todos los estados"
          ? filtro.estado_civil
          : null,
      // p_ids_servicio_comunidad: filtro.servicioComunidad !== "Todos los servicios" ? [parseInt(filtro.servicioComunidad)] : null,
      // p_ids_servicio_parroquia: filtro.servicioParroquia !== "Todos los servicios" ? [parseInt(filtro.servicioParroquia)] : null,
      p_ids_servicio_comunidad:
        filtro.servicioComunidad.length > 0
          ? filtro.servicioComunidad.map(Number)
          : null,
      p_ids_servicio_parroquia:
        filtro.servicioParroquia.length > 0
          ? filtro.servicioParroquia.map(Number)
          : null,
      p_limit: 2,
      p_offset: 0,
    };
  };

  useEffect(() => {
    // fetchPersona();
    // filtrarFeligreses();
    handleFiltrar();
  }, []);

  // Filtros
  const handleFiltrar = async () => {
    const params = {
      ...mapFiltroToApiParams(filtro),
      p_limit: registrosPorPagina,
      p_offset: (paginaActual - 1) * registrosPorPagina,
    }
      await filtrarFeligreses(
        params.p_nombre_apellido,
        params.p_genero,
        params.p_id_zona,
        params.p_id_parroquia,
        params.p_estado_civil,
        params.p_ids_servicio_comunidad,
        params.p_ids_servicio_parroquia,
        params.p_limit,
        params.p_offset
      );
  };

  //DATA NECESARIA PARA LA PAGINACION
  const [paginaActual, setPaginaActual] = useState(1); // Página 1 al iniciar
  const [registrosPorPagina] = useState(2); // Fijo por ahora
  const [cantidadTotal, setCantidadTotal] = useState(0); // Total de registros desde la base

  useEffect(() => {
    handleFiltrar(); // Carga cuando cambia de página
  }, [paginaActual]);


  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="logo-container">
          <img
            src="../../public/images/logo-diocesis.jpg"
            alt="Logo Comunidad"
            className="dashboard-logo"
          />
          <h1 className="dashboard-title">
            Pequeñas Comunidades Diocesis de Valledupar
          </h1>
        </div>

        <div className="usuario-info">
          <p>👤 {currentUsuario?.user_name}</p>
        </div>
      </div>

      <Estadisticas
        total={total} 
        total_hombres={total_hombres} 
        total_mujeres={total_mujeres}
      />
      <FiltroBusqueda
        filtro={filtro}
        setFitro={setFiltro}
        onFiltrar={handleFiltrar}
        loading={loading}
      />

      <div className="dashboard-tabs">
        <div
          className={`dashboard-tab ${
            tabActiva === "registros" ? "active-tab" : ""
          }`}
          onClick={() => setTabActiva("registros")}>
          👥 Registros Comunitarios
        </div>
        <div
          className={`dashboard-tab ${
            tabActiva === "usuarios" ? "active-tab" : ""
          }`}
          onClick={() => setTabActiva("usuarios")}>
          ⚙️ Gestión de Usuarios
        </div>
      </div>

      {tabActiva === "registros" && (
        <div className="dashboard-resultados">
          <h2 className="dashboard-resultados-titulo">
            Registros encontrados ({persona?.length || 0})
          </h2>
          {loading && <p>Cargando registros...</p>}
          {error && <p>Error: {error}</p>}

          {persona && persona.length > 0 ? (
            persona.map((registro) => (
              <TarjetaRegistro key={registro.id_persona} data={registro} />
            ))
          ) : (
            <div className="dashboard-no-resultados">
              <p>No se encontraron registros</p>
            </div>
          )}
        </div>
      )}

      {tabActiva === "registros" && (
        <div className="paginacion-container">
          <button 
            onClick={() => setPaginaActual(p => Math.max(1, p - 1))}
            disabled={paginaActual === 1}
          >
            ◀ Anterior
          </button>

          <span>Página {paginaActual} de {Math.ceil(total / registrosPorPagina)}</span>

          <button 
            onClick={() => setPaginaActual(p => 
              p < Math.ceil(total / registrosPorPagina) ? p + 1 : p
            )}
            disabled={paginaActual >= Math.ceil(total / registrosPorPagina)}
          >
            Siguiente ▶
          </button>
        </div>
      )}

      {/* Componente de gestión de usuarios */}

      <GestionUsuarios visible={tabActiva === "usuarios"} />
    </div>
  );
};

export {Dashboard};
