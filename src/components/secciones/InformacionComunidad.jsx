import { React } from "react";


const InformacionComunidad = ({ formData, handleChange, errores }) => {
  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold mb-4">Información de Comunidad</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="comunidad"
          placeholder="Comunidad"
          value={formData.comunidad}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.comunidad && (<p className="text-red-500">{errores.comunidad}</p>)}


        <input
          name="etapaComunidad"
          placeholder="Etapa de la Comunidad"
          value={formData.etapaComunidad}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.etapaComunidad && (<p className="text-red-500">{errores.etapaComunidad}</p>)}

        <input
          type="date"
          name="inicioComunidad"
          value={formData.inicioComunidad || ""}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.inicioComunidad && (<p className="text-red-500">{errores.inicioComunidad}</p>)}

      </div>
    </section>
  );
};

export { InformacionComunidad };
