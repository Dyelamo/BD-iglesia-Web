export const validarFormulario = (formData) => {
    const errors = {};

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

    // Validación de campos requeridos
    if (!formData.nombre.trim()) errors.nombre = "El nombre es requerido.";
    else if (!soloLetras.test(formData.nombre)) errors.nombre = "El nombre solo debe contener letras.";

    if (!formData.apellido.trim()) errors.apellido = "El apellido es requerido.";
    else if (!soloLetras.test(formData.apellido)) errors.apellido = "El apellido solo debe contener letras.";

    if (!formData.identificacion.trim()) errors.identificacion = "La identificación es requerida.";
    else if (!/^\d+$/.test(formData.identificacion)) errors.identificacion = "La identificación debe contener solo números.";

    if (!formData.genero) errors.genero = "El género es requerido.";
    if (!formData.fechaNacimiento) errors.fechaNacimiento = "La fecha de nacimiento es requerida";
    
    if(!formData.telefono.trim()) errors.telefono = "El teléfono es requerido.";
    else if (!/^\d{10}$/.test(formData.telefono)) errors.telefono = 'El teléfono debe tener 10 dígitos.';

    if (!formData.estadoCivil) errors.estadoCivil = "El estado civil es requerido.";

    if (!formData.municipio) errors.municipio = "El municipio es requerido.";
    if (!formData.parroquia) errors.parroquia = "La parroquia es requerida.";
    if (!formData.zona) errors.zona = "La zona es requerida.";

    if (!formData.numeroComunidad.trim()) errors.numeroComunidad = "El número de comunidad es requerido.";
    else if (!/^\d+$/.test(formData.numeroComunidad)) errors.numeroComunidad = 'Solo se permiten números.';

    if (!formData.etapaComunidad) errors.etapaComunidad = "La etapa de la comunidad es requerida.";

    if (!formData.inicioComunidad) errors.inicioComunidad = "El inicio de la comunidad es requerido.";

    if (
    formData.serviciosComunidad.length === 0 &&
    formData.serviciosParroquia.length === 0
  ) {
    errors.servicios = 'Debe seleccionar al menos un servicio.';
  }


    return errors;
};