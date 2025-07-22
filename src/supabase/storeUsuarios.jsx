import {supabase} from "./supabase.config";
import bcrypt from "bcryptjs";
import { create } from "zustand";

export const useStoreUsuarios = create((set) => ({
    error: null,
    loading: false,
    currentUsuario: null,


    autenticarUsuario: async (user_name, password) => {
        set({ loading: true, error: null });
        try {
            const { data, error } = await supabase.from('Usuarios').select('*').eq('user_name', user_name).single();

            if (error) throw error;

            //RECODAR: GUARDFAR LA CONTRASEÑA EN LA BASE DE DATOS CON BCRYPT

            if (data && password === data.password) {
                set({ currentUsuario: data, loading: false });
            } else {
                throw new Error('Credenciales incorrectas');
            }
        } catch (error) {
            set({ error: error.message, loading: false });
            console.error("Error al autenticar el usuario:", error);
        }
    },

}))
