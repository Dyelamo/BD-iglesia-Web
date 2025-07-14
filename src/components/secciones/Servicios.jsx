import React from "react";

const Servicios = ({ formData, handleChange, errores }) => {
  const serviciosComunidad = ["Coordinador", "Animador"];

  const serviciosParroquia = [
    "Catequesis",
    "Pastoral Juvenil",
    "Pastoral Familiar",
  ];

  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold mb-4">Servicios</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-medium mb-2">Servicios de Comunidad</h4>
          {serviciosComunidad.map((serv) => (
            <label key={serv} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                name="serviciosComunidad"
                value={serv}
                checked={(formData.serviciosComunidad || []).includes(serv)}
                onChange={handleChange}
              />
              {errores.serviciosComunidad && <p className="text-red-500">{errores.serviciosComunidad}</p>}
              {serv}
            </label>
            
            
          ))}
        </div>

        <div>
          <h4 className="font-medium mb-2">Servicios de Parroquia</h4>
          {serviciosParroquia.map((serv) => (
            <label key={serv} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                name="serviciosParroquia"
                value={serv}
                checked={(formData.serviciosParroquia || []).includes(serv)}
                onChange={handleChange}
              />
              {errores.serviciosParroquia && <p className="text-red-500">{errores.serviciosParroquia}</p>}
              {serv}
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Servicios };
