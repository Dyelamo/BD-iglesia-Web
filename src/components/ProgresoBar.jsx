import React from "react";

const ProgresoBar = ({ formData }) => {
  const totalSections = 14;
  const filledFields = Object.entries(formData).reduce((acc, [, value]) => {
    if (Array.isArray(value)) return acc + (value.length > 0 ? 1 : 0);
    return acc + (value ? 1 : 0);
  }, 0);

  const percentage = Math.round((filledFields / totalSections) * 100);

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">Progreso del formulario</span>
        <span>{percentage} %</span>
      </div>
      <progress value={filledFields} max={totalSections} />
    </div>
  );
};

export default ProgresoBar;
