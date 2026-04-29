import { createContext, useContext, useEffect, useState } from "react";
import { apiFetch } from "../lib/api";

export type ConnectedUser = {
  id: number;
  email: string;
  phone: string;
  address: string;
  region?: string | null;
  description?: string | null;
  image?: string | null;
  volunteer?: { id: number; firstname: string; lastname: string; capacity: string } | null;
  association?: { id: number; name: string; siret: string } | null;
};

type AuthContextType = {
  connectedUser: ConnectedUser | null;
  loading: boolean;
  isLogged: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [connectedUser, setConnectedUser] = useState<ConnectedUser | null>(null);
  const [loading, setLoading] = useState(true);

  async function refreshUser() {
    try {
      const res = await apiFetch("/api/auth/me");
      if (res.ok) {
        const user = await res.json();
        setConnectedUser(user);
      } else {
        setConnectedUser(null);
      }
    } catch {
      setConnectedUser(null);
    }
  }

  useEffect(() => {
    refreshUser().finally(() => setLoading(false));
  }, []);

  async function login(email: string, password: string) {
    const res = await apiFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error ?? "Erreur de connexion");
    }
    const user = await res.json();
    setConnectedUser(user);
  }

  async function logout() {
    await apiFetch("/api/auth/logout", { method: "POST" });
    setConnectedUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        connectedUser,
        loading,
        isLogged: !!connectedUser,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
