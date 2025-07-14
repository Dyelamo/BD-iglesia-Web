import React, { useState } from "react";
import { InformacionPersonal } from "./secciones/InformacionPersonal";
import { InformacionComunidad } from "./secciones/InformacionComunidad";
import { InformacionUbicacion } from "./secciones/InformacionUbicacion";
import { Servicios } from "./secciones/Servicios";
import ProgresoBar from "../components/ProgresoBar";
import { validarFormulario } from '../utils/validaciones';


const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    identificacion: "",
    genero: "",
    fechaNacimiento: "",
    telefono: "",
    estadoCivil: "",
    municipio: "",
    parroquia: "",
    zona: "",
    numeroComunidad: "",
    etapaComunidad: "",
    inicioComunidad: "",
    servicioComunidad: [],
    servicioParroquia: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const group =
        name === "servicioComunidad"
          ? "servicioComunidad"
          : "servicioParroquia";
      const update = checked
        ? [...formData[group], value]
        : formData[group].filter((item) => item !== value);
      setFormData({ ...formData, [group]: update });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [errores, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const erroresValidados = validarFormulario(formData);
    setErrors(erroresValidados);

    if (Object.keys(erroresValidados).length === 0) {
      console.log("Formulario enviado con éxito:", formData);
      alert("Formulario enviado con éxito");
      
    }else {
      console.warn("Errores en el formulario:", erroresValidados);
      //alert("Por favor, corrija los errores antes de enviar el formulario.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de Registros</h2>
      <p>
        Complete todos los campos del formulario para registrar su información
        personal.
      </p>


  
      <div>  
        <ProgresoBar formData={formData} />
      </div>

      <InformacionPersonal formData={formData} handleChange={handleChange} errores={errores} />
      <InformacionComunidad formData={formData} handleChange={handleChange} errores={errores} />
      <InformacionUbicacion formData={formData} handleChange={handleChange} errores={errores} />
      <Servicios formData={formData} handleChange={handleChange} errores={errores} />

      <button
        type="submit"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Guardar Registro
      </button>
    </form>
  );
};

export default FormularioRegistro;
