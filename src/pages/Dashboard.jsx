import { useState } from 'react';
import "../styles/dashboard_components.css"
import "../styles/dashboard.css"
import Estadisticas from "../components/Estadisticas";
import  FiltroBusqueda  from "../components/filtroBusqueda";
import  TarjetaRegistro  from "../components/TarjetaRegistro";
import { useEffect } from 'react';


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

    
    const [Filtrados, setFiltrados] = useState([]);

     useEffect(() => {
    // Simulación de datos (hasta que tu equipo conecte Supabase)
    const datosSimulados = [
      {
        id: "1",
        nombre: "María Elena González",
        genero: "Femenino",
        identificacion: "12345678",
        telefono: "3001234567",
        nacimiento: "1965-05-14",
        estadoCivil: "Casado",
        zona: "Zona Norte",
        parroquia: "San José",
        comunidad: "Comunidad 001",
        etapa: "Primera Etapa",
        inicio: "2020-01-14",
        registrado: "2024-01-15",
        serviciosComunidad: ["Coordinador", "Animador"],
        serviciosParroquia: ["Catequesis", "Coro"],
      },
      // puedes duplicar más objetos
    ];
    setRegistros(datosSimulados);
  }, []);

  // Filtros
  useEffect(() => {
    const resultados = registros.filter((item) => {
        return(
            (!filtro.zona || item.zona === filtro.zona) &&
        (!filtro.parroquia || item.parroquia === filtro.parroquia) &&
        (!filtro.genero || item.genero === filtro.genero) &&
        (!filtro.servicio ||
          item.serviciosComunidad.includes(filtro.servicio) ||
          item.serviciosParroquia.includes(filtro.servicio)) &&
        (!filtro.buscar ||
          item.nombre.toLowerCase().includes(filtro.buscar.toLowerCase()) ||
          item.identificacion.includes(filtro.buscar))

        );
    });
    setFiltrados(resultados)
  }, [filtro, registros])


  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard de Registros</h1>
      <p className="dashboard-subtitle">Gestión y consulta de registros comunitarios</p>

        <Estadisticas registros={Filtrados}/>
        <FiltroBusqueda filtro={filtro} setFitro={setFiltro}/>

        <div className='dashboard-resultados'>
            <h2 className='dashboard-resultados-titulo'>Registros encontrados ({Filtrados.length})</h2>
            {Filtrados.length > 0 ?(
                Filtrados.map((registro) => (
                   <TarjetaRegistro key={registro.id} data={registro}/>
                ))
            ):( 
                <div className='dashboard-no-resultados'>
                    <p>No se encontro registros</p>
                </div>
            )}
        </div>
    </div>
  );
};

export {Dashboard};
