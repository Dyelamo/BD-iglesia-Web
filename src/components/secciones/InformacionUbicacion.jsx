import { React } from "react";

const InformacionUbicacion = ({ formData, handleChange, errores }) => {
  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold mb-4">Informacion de Ubicacion</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="municipio"
          placeholder="Municipio"
          value={formData.municipio}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.municipio && <p className="text-red-500">{errores.municipio}</p>}

        <input
          name="parroquia"
          placeholder="Parroquia"
          value={formData.parroquia}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.parroquia && <p className="text-red-500">{errores.parroquia}</p>}

        <input
          name="zona"
          placeholder="Zona"
          value={formData.zona}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.zona && <p className="text-red-500">{errores.zona}</p>}
        
      </div>
    </section>
  );
};

export { InformacionUbicacion };
