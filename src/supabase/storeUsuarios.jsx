import {supabase} from "./supabase.config";
//import bcrypt from "bcryptjs";
import { create } from "zustand";

export const useStoreUsuarios = create((set) => ({
    error: null,
    loading: false,
    currentUsuario: null,
    listaUsuarios: [],


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

     obtenerUsuarios: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.from("Usuarios").select("*");
      if (error) throw error;
      set({ listaUsuarios: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error("Error al obtener usuarios:", error);
    }
  },

  crearUsuario: async (nuevoUsuario) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase.from("Usuarios").insert(nuevoUsuario);
      if (error) throw error;
      await useStoreUsuarios.getState().obtenerUsuarios(); // actualizar lista
    } catch (error) {
      set({ error: error.message });
      console.error("Error al crear usuario:", error);
    } finally {
      set({ loading: false });
    }
  },

  eliminarUsuario: async (id_usuario) => {
    try {
      const { error } = await supabase.from("Usuarios").delete().eq("id_usuario", id_usuario);
      if (error) throw error;
      await useStoreUsuarios.getState().obtenerUsuarios(); // actualizar lista
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  },

  editarUsuario: async (id_usuario, camposActualizados) => {
    try {
      const { error } = await supabase
        .from("Usuarios")
        .update(camposActualizados)
        .eq("id_usuario", id_usuario);
      if (error) throw error;
      await useStoreUsuarios.getState().obtenerUsuarios();
    } catch (error) {
      console.error("Error al editar usuario:", error);
    }
  },

}))
