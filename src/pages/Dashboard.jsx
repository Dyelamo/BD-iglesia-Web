import { useState } from 'react';
import "../styles/dashboard_components.css"
import "../styles/dashboard.css"
import Estadisticas from "../components/Estadisticas";
import  FiltroBusqueda  from "../components/filtroBusqueda";
import  TarjetaRegistro  from "../components/TarjetaRegistro";
import { useEffect } from 'react';
import { useStorePersona } from '../supabase/storePersona';


const Dashboard = () => {

    const [registros, setRegistros] = useState([]);
    const [filtro, setFiltro] = useState({
      nombre: "",
      zona: "Todas las zonas",
      parroquia: "Todas las parroquias",
      genero: "Todos los géneros",
      servicioComunidad: "Todos los servicios",
      servicioParroquia: "Todos los servicios"
    });

    
    const [filtrados, setFiltrados] = useState([]);

    const {
      persona, fetchPersona, loading, error
    } = useStorePersona();


    useEffect(() => {
      fetchPersona();
    }, []);

  // Filtros
  // Aplicar filtros cada vez que cambie filtro o persona
  useEffect(() => {
    if (!persona) return;

    const resultados = persona.filter((item) => {
      const nombreMatch =
        filtro.nombre === "" ||
        item.nombre_completo?.toLowerCase().includes(filtro.nombre.toLowerCase()) ||
        item.cedula?.toString().includes(filtro.nombre);

      const zonaMatch =
        filtro.zona === "Todas las zonas" || item.zona === filtro.zona;

      const parroquiaMatch =
        filtro.parroquia === "Todas las parroquias" || item.parroquia === filtro.parroquia;

      const generoMatch =
        filtro.genero === "Todos los géneros" || item.genero === filtro.genero;

      const servicioComunidadMatch =
        filtro.servicioComunidad === "Todos los servicios" ||
        (item.servicios_comunidad || []).includes(filtro.servicioComunidad);

      const servicioParroquiaMatch =
        filtro.servicioParroquia === "Todos los servicios" ||
        (item.servicios_parroquia || []).includes(filtro.servicioParroquia);

      return (
        nombreMatch &&
        zonaMatch &&
        parroquiaMatch &&
        generoMatch &&
        servicioComunidadMatch &&
        servicioParroquiaMatch
      );
    });

    setFiltrados(resultados);
  }, [filtro, persona]);


  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard de Registros</h1>
      <p className="dashboard-subtitle">Gestión y consulta de registros comunitarios</p>

        {/* <Estadisticas registros={Filtrados}/> */}
        <FiltroBusqueda filtro={filtro} setFitro={setFiltro}/>

        <div className='dashboard-resultados'>
            <h2 className='dashboard-resultados-titulo'>Registros encontrados ({filtrados.length})</h2>
            {loading && <p>Cargando registros...</p>}
            {error && <p>Error: {error}</p>}


            {filtrados.length > 0 ?(
              filtrados.map((registro) => (
                <TarjetaRegistro key={registro.id_persona} data={registro} />
              ))
            ):(
              <div className="dashboard-no-resultados">
                <p>No se encontraron registros</p>
              </div>
            )}
        </div>
    </div>
  );
};

export {Dashboard};
