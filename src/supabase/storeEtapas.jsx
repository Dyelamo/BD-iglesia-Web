import { create } from "zustand";
import { supabase} from "./supabase.config";


export const useStoreEtapas = create((set) => ({
    etapas: [],
    error: null,
    loading: false,
    currentEtapa: null,


    fetchEtapas: async () => {
        set({ loading: true, error: null });
        try{
            const {data, error} = await supabase.from("Etapas").select("*");
            if(error) throw error;
            console.log("Etapas cargadas:", data);
            set({ etapas: data, loading: false});
        }catch (error){
            set({ error: error.message, loading: false });
            alert("Error al cargar las etapas: " + error.message);
        }
    }

}))