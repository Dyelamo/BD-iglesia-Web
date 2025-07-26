import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import Swal from "sweetalert2";

export const useStorePersona = create((set) => ({
    persona: null,
    error: null,
    error2: null,
    loading: false,
    currentPersona: null,

    // NUEVOS ESTADOS PARA LAS ESTADÍSTICAS
    total: 0,
    total_hombres: 0,
    total_mujeres: 0,


    filtrarFeligreses: async (
        p_nombre_apellido = null,
        p_genero = null,
        p_id_zona = null,
        p_id_parroquia = null,
        p_estado_civil = null,
        p_ids_servicio_comunidad = null,
        p_ids_servicio_parroquia = null,
        p_limit = 10,
        p_offset = 0,
    ) => {
        set({ loading: true, error: null, error2: null });
        try {
            const { data, error } = await supabase.rpc("filtrar_feligreses2", {
                p_nombre_apellido,
                p_genero,
                p_id_zona,
                p_id_parroquia,
                p_estado_civil,
                p_ids_servicio_comunidad,
                p_ids_servicio_parroquia,
                p_limit,
                p_offset,
            });

            const { data: dataStats, error2} = await supabase.rpc("filtrar_feligreses2_count",{
                p_nombre_apellido,
                p_genero,
                p_id_zona,
                p_estado_civil,
                p_id_parroquia,
                p_ids_servicio_comunidad,
                p_ids_servicio_parroquia,
            });

            if (error) throw error;
            if (error2) throw error2;

            const stats = dataStats?.[0] || {};

            // set({ persona: data, loading: false });
            set({
                persona: data,
                total: stats.total || 0,
                total_hombres: stats.total_hombres || 0,
                total_mujeres: stats.total_mujeres || 0,
                loading: false,
            });



            return data; // ✅ <-- NECESARIO para usar los datos en el componente
            
        } catch (error) {
            set({ error: error.message, loading: false });
            Swal.fire({
                icon: 'error',
                title: 'Error al filtrar feligreses',
                text: error.message,
            });

            return []; // ❗️Evita errores al intentar usar "resultado" en Dashboard
        }
    },



    
}))