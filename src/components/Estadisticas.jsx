import React from "react";
import "../styles/dashboard.css";
import "../styles/dashboard_components.css";

const Estadisticas = ({ total, total_hombres, total_mujeres }) => {


  const calcularPorcentaje = (cantidad) => {
    return total > 0 ? Math.round((cantidad / total) * 100) : 0;
  };

  return (
    <div className="estadisticas-container">
      <div className="stat-card card-total">
        <h3>Total Registros</h3>
        <p className="stat-count">{total}</p>
        <span className="stat-subtext">Registros encontrados</span>
      </div>

      <div className="stat-card card-mujeres">
        <h3>Mujeres</h3>
        <p className="stat-count">{total_mujeres}</p>
        <span className="stat-subtext">
          {calcularPorcentaje(total_mujeres)}% del total
        </span>
      </div>

      <div className="stat-card card-hombres">
        <h3>Hombres</h3>
        <p className="stat-count">{total_hombres}</p>
        <span className="stat-subtext">
          {calcularPorcentaje(total_hombres)}% del total
        </span>
      </div>
    </div>
  );
};

export default Estadisticas