import React from "react";
import "../styles/dashboard.css";

const Estadisticas = ({ registros }) => {
  const total = registros.length;
  const mujeres = registros.filter((r) => r.genero === "Femenino").length;
  const hombres = registros.filter((r) => r.genero === "Masculino").length;

  const calcularPorcentaje = (cantidad) => {
    return total > 0 ? Math.round((cantidad / total) * 100) : 0;
  };

  return (
    <div className="estadisticas-container">
      <div className="estadistica-card total">
        <h3>Total Registros</h3>
        <p className="estadistica-cifra">{total}</p>
        <span className="estadistica-subtexto">Registros encontrados</span>
      </div>

      <div className="estadistica-card mujeres">
        <h3>Mujeres</h3>
        <p className="estadistica-cifra">{mujeres}</p>
        <span className="estadistica-subtexto">
          {calcularPorcentaje(mujeres)}% del total
        </span>
      </div>

      <div className="estadistica-card hombres">
        <h3>Hombres</h3>
        <p className="estadistica-cifra">{hombres}</p>
        <span className="estadistica-subtexto">
          {calcularPorcentaje(hombres)}% del total
        </span>
      </div>
    </div>
  );
};

export default Estadisticas