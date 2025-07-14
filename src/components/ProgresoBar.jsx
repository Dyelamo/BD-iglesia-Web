import React from "react";

const ProgresoBar = ({ formData }) => {
  const totalFields = 14;
  const filledFields = Object.entries(formData).reduce((acc, [, value]) => {
    if (Array.isArray(value)) return acc + (value.length > 0 ? 1 : 0);
    return acc + (value ? 1 : 0);
  }, 0);

  const percentage = Math.round((filledFields / totalFields) * 100);

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-text">Progreso del formulario</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgresoBar;
