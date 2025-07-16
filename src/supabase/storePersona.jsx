import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useStorePersona = create((set) => ({
    persona: null,
    error: null,
    loading: false,
    currentPersona: null,

    addPersona: async (personaData, infoComunidad, Parroquia, sercComunidad, sercParroquia) => {
        
    }
}))