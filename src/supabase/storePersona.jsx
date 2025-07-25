import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import Swal from "sweetalert2";

export const useStorePersona = create((set) => ({
    persona: null,
    error: null,
    loading: false,
    currentPersona: null,


    fetchPersona: async() => {
        set({ loading: true, error: null });
        try {
            const { data, error } = await supabase.rpc('obtener_personas_con_servicios6');
            console.log( data);
            if (error) throw error;
            set({ persona: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
            console.error("Error al cargar la persona:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error al cargar la persona',
                text: error.message,
            });
        }
    },

    obtenerTotalRegistros: async () => {

    },

    obtenerCantidadGeneros: async () => {
        
    },

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
        set({ loading: true, error: null });
        console.log("Filtrando feligreses con los siguientes parámetros:", {
            p_nombre_apellido,
            p_genero,
            p_id_zona,
            p_id_parroquia,
            p_estado_civil,
            p_ids_servicio_comunidad,
            p_ids_servicio_parroquia,
            p_limit,
            p_offset,
        })
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

            if (error) throw error;

            set({ persona: data, loading: false });

            console.log("Datos filtrados:", data);
            return data; // ✅ <-- NECESARIO para usar los datos en el componente
            
        } catch (error) {
            set({ error: error.message, loading: false });
            console.error("Error al filtrar feligreses:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error al filtrar feligreses',
                text: error.message,
            });

            return []; // ❗️Evita errores al intentar usar "resultado" en Dashboard
        }
    },



    
}))