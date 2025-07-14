export const validarFormulario = (formData) => {
    const errors = {};

    // Validación de campos requeridos
    if (!formData.nombre.trim()) errors.nombre = "El nombre es requerido.";
    if (!formData.apellido.trim()) errors.apellido = "El apellido es requerido.";
    if (!formData.identificacion.trim()) errors.identificacion = "La identificación es requerida.";
    else if (!/^\d+$/.test(formData.identificacion)) errors.identificacion = "La identificación debe contener solo números.";

    if (!formData.genero) errors.genero = "El género es requerido.";
    if (!formData.fechaNacimiento) errors.fechaNacimiento = "La fecha de nacimiento es requerida";
    if(!formData.telefono.trim()) errors.telefono = "El teléfono es requerido.";
    else if (!/^\d+$/.test(formData.telefono)) errors.telefono = "El teléfono debe contener solo números.";

    if (!formData.estadoCivil) errors.estadoCivil = "El estado civil es requerido.";

    if (!formData.municipio) errors.municipio = "El municipio es requerido.";
    if (!formData.parroquia) errors.parroquia = "La parroquia es requerida.";
    if (!formData.zona) errors.zona = "La zona es requerida.";

    if (!formData.numeroComunidad.trim()) errors.numeroComunidad = "El número de comunidad es requerido.";
    else if (!/^\d+$/.test(formData.numeroComunidad)) errors.numeroCom

    if (!formData.etapaComunidad) errors.etapaComunidad = "La etapa de la comunidad es requerida.";
    else if (!/^\d+$/.test(formData.etapaComunidad)) errors.etapaComunidad = "La etapa de la comunidad debe contener solo números.";

    if (!formData.inicioComunidad) errors.inicioComunidad = "El inicio de la comunidad es requerido.";

    if (formData.servicioComunidad.length === 0 && !formData.servicioComunidad.some(servicio => servicio.trim())) {
        errors.servicioComunidad = "Debe seleccionar al menos un servicio de la comunidad.";
    }

    return errors;
};