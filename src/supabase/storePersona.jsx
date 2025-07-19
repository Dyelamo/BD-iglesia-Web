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
    }

    
}))