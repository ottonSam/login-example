import React, { ReactNode, createContext, useState } from "react";
import { redirect } from "react-router-dom";
import { login } from "../service/api";

interface AuthContextType {
  signed: boolean;
  singIn: (email: string, password: string) => Promise<void>;
  token: string | null;
  singOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const logout = () => {
  localStorage.removeItem("token");
  redirect("/login");
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );

  const handleSingOut = () => {
    setToken(null);
    logout();
  };

  const handleSingIn = async (email: string, password: string) => {
    const loginResponse = await login(email, password);
    if (loginResponse.tokens) {
      setToken(loginResponse.tokens.access);
      localStorage.setItem("token", loginResponse.tokens.access);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signed: !!token,
        singIn: handleSingIn,
        singOut: handleSingOut,
        token: token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
