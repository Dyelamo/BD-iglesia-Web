import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import Swal from "sweetalert2";

export const useStorePersona = create((set) => ({
    persona: null,
    error: null,
    loading: false,
    currentPersona: null,

    
}))