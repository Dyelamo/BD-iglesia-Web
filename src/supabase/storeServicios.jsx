import { create } from "zustand";
import { supabase } from "./supabase.config";


export const useStoreServicios = create((set) => ({
    serviciosComunidad: [],
    serviciosParroquia: [],
    error: null,
    loading: false,
    currentServicio: null,

    fetchServiciosComunidad: async () => {
        set({ loading: true, error: null });
        try {
            const { data, error } = await supabase.from("Servicios").select("*").eq("tipo_servicio", 'Comunidad');;
            if (error) throw error;
            // console.log("Servicios cargados comunidad:", data);
            set({ serviciosComunidad: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
            alert("Error al cargar los servicios: " + error.message);
        }
    },

    fetchServicioParroquia: async () => {
        set({ loading: true, error: null });
        try {
            const { data, error } = await supabase.from("Servicios").select("*").eq("tipo_servicio", 'Parroquia');
            if (error) throw error;
            // console.log("Servicios de parroquia cargados:", data);
            set({ serviciosParroquia: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
            alert("Error al cargar los servicios de parroquia: " + error.message);
        }
    }
}))