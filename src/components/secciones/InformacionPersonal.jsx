import { React } from "react";

const InformacionPersonal = ({ formData, handleChange, errores }) => {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Informacion Personal</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.nombre && (<p className="text-red-500">{errores.nombre}</p>)}

        <input
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.apellido && (<p className="text-red-500">{errores.apellido}</p>)}

        <input
          name="identificacion"
          placeholder="Identificación"
          value={formData.identificacion}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.identificacion && (
          <p className="text-red-500">{errores.identificacion}</p>
        )}

        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          className="border p-2 rounded">
          <option value="">Selecione un Genero</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
        {errores.genero && (<p className="text-red-500">{errores.genero}</p>)}


        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento || ""}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.fechaNacimiento && (
          <p className="text-red-500">{errores.fechaNacimiento}</p>
        )}

        <input
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {errores.telefono && (<p className="text-red-500">{errores.telefono}</p>)}

        <select
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={handleChange}
          className="border p-2 rounded">
          <option value="">Seleccione un Estado Civil</option>
          <option value="Soltero">Soltero/a</option>
          <option value="Casado">Casado/a</option>
          <option value="Divorciado">Divorciado/a</option>
          <option value="Viudo">Viudo/a</option>
        </select>
        {errores.estadoCivil && (
          <p className="text-red-500">{errores.estadoCivil}</p>
        )}

      </div>
    </section>
  );
};

export { InformacionPersonal };
