// src/stores/auth.store.ts

import { create } from "zustand";
import { persist, createJSONStorage } from "./store";

export type User = {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "customer";
};

type AuthState = {
  user: User | null;
  loading: boolean;

  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,

      setUser: (user) => set({ user }),

      setLoading: (loading) => set({ loading }),

      logout: () =>
        set({
          user: null,
        }),
    }),
    {
      name: "auth-storage",

      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);