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
            const { data, error } = await supabase.rcp('obtener_personas_con_servicios3');
            if (error) throw error;
            set({ persona: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
            Swal.fire({
                icon: 'error',
                title: 'Error al cargar la persona',
                text: error.message,
            });
        }
    }

    
}))