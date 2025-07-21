import { supabase } from "./supabase.config";
import bcrypt from "bcryptjs";
import { create } from "zustand";

export const useStoreUsuarios = create((set) => ({
    usuarios: null,
    error: null,
    loading: false,
    currentUsuario: null,


    autenticarUsuario: async (username, password) => {
        set({ loading: true, error: null });
        try {
            const { data, error } = await supabase
                .from('usuarios')
                .select('*')
                .eq('user_name', username)
                .single();

            if (error) throw error;

            if (data && bcrypt.compareSync(password, data.password)) {
                set({ currentUsuario: data, loading: false });
            } else {
                throw new Error('Credenciales incorrectas');
            }
        } catch (error) {
            set({ error: error.message, loading: false });
            console.error("Error al autenticar el usuario:", error);
        }
    }
}))
