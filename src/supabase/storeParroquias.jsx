import { create } from "zustand";
import { supabase } from "./supabase.config";


export const useStoreParroquias = create((set) => ({
    parroquias: [],
    error: null,
    loading: false,
    currentParroquia: null,

    fetchParroquias: async () => {
        set({ loading: true, error: null });
        try {
            const { data, error } = await supabase.from("Parroquias").select("*");
            if (error) throw error;
            console.log("Parroquias cargadas:", data);
            set({ parroquias: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
            alert("Error al cargar las parroquias: " + error.message);
        }
    }
}))