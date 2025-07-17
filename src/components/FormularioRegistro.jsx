import React, { useState } from "react";
import { InformacionPersonal } from "./secciones/InformacionPersonal";
import { InformacionComunidad } from "./secciones/InformacionComunidad";
import { InformacionUbicacion } from "./secciones/InformacionUbicacion";
import { Servicios } from "./secciones/Servicios";
import ProgresoBar from "../components/ProgresoBar";
import { validarFormulario } from "../utils/validaciones";
import Swal from "sweetalert2";
import { supabase } from "../supabase/supabase.config";

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    identificacion: "",
    genero: "",
    fechaNacimiento: "",
    telefono: "",
    estadoCivil: "",
    //municipio: "",
    parroquia: "",
    // zona: "",
    numeroComunidad: "",
    etapaComunidad: "",
    inicioComunidad: "",
    serviciosComunidad: [],
    serviciosParroquia: [],
  });

  const [errores, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const group =
        name === "serviciosComunidad"
          ? "serviciosComunidad"
          : "serviciosParroquia";
      const update = checked
        ? [...formData[group], JSON.parse(value)]
        : formData[group].filter((item) => item.id_servicio !== JSON.parse(value).id_servicio);
      setFormData({ ...formData, [group]: update });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



  const enviarFormulario = async (formData) => {
    try {
      const servicios = [...formData.serviciosComunidad, ...formData.serviciosParroquia];
      console.log(servicios);

      const { error } = await supabase.rpc("registrar_persona", {
        _identificacion: formData.identificacion,
        _nombres: formData.nombre,
        _apellidos: formData.apellido,
        _genero: formData.genero,
        _fecha_nacimiento: formData.fechaNacimiento,
        _telefono: formData.telefono,
        _estado_civil: formData.estadoCivil,
        _numero_comunidad: parseInt(formData.numeroComunidad),
        _fecha_inicio: formData.inicioComunidad,
        _id_etapa: parseInt(formData.etapaComunidad),
        _servicios: servicios,
        _id_parroquia: parseInt(formData.parroquia),
      });
      console.log(formData);

      if (error) throw error;

      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Tu información ha sido enviada correctamente.",
      });

      // Reset
      setFormData({
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
        serviciosComunidad: [],
        serviciosParroquia: [],
      });
      setErrors({});
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error al registrar",
        text: err.message,
      });
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const erroresValidados = validarFormulario(formData);
    setErrors(erroresValidados);

    if (Object.keys(erroresValidados).length === 0) {
      enviarFormulario(formData); // ✅ Aquí se llama a Supabase
    }
  }

  return (
    <div className="form-Container">
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Formulario de Registros</h2>
          <p>
            Complete todos los campos del formulario para registrar su
            información personal.
          </p>
        </div>

        <div className="form-content">
          <div className="form-sections">
            <div>
              <ProgresoBar formData={formData} />
            </div>

            <InformacionPersonal
              formData={formData}
              handleChange={handleChange}
              errores={errores}
            />
            <InformacionComunidad
              formData={formData}
              handleChange={handleChange}
              errores={errores}
            />
            <InformacionUbicacion
              formData={formData}
              handleChange={handleChange}
              errores={errores}
            />
            <Servicios
              formData={formData}
              handleChange={handleChange}
              errores={errores}
            />

            <div className="submit-container">
              <button type="submit" className="submit-button">
                Guardar Registro
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  console.log(formData);
};

export default FormularioRegistro;
