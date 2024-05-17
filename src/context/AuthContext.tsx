import React, { ReactNode, createContext, useState } from "react";
import { User } from "../types/User";
import { redirect } from "react-router-dom";

interface AuthContextType {
  signed: boolean;
  singIn: (email: string, password: string) => Promise<void>;
  user: User | null;
  singOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(
    localStorage.getItem("user_details")
      ? JSON.parse(localStorage.getItem("user_details") as string)
      : null
  );

  const handleSingOut = () => {
    setUser(null);
    localStorage.removeItem("user_details");
    redirect("/login");
  };

  const handleSingIn = async (email: string, password: string) => {
    const userDetails = {
      id: "445e138e-99c6-4055-91d1-ebc2fb6165ee",
      avatar: {
        id: 8,
        image_high_url:
          "https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_0spsnuL.jpg",
        image_medium_url:
          "https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_medium_VjJtnel.jpg",
        image_low_url:
          "https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_low_5Vh2hYj.jpg",
      },
      name: "Miguel",
      last_name: "Rocha",
      email: email,
      role: {
        value: 0,
        label: password,
      },
      last_login: new Date("2022-03-08T14:28:39.781811Z"),
      staff_role: {
        value: 0,
        label: "Admin",
      },
    };
    if (userDetails) {
      setUser(userDetails);
      localStorage.setItem("user_details", JSON.stringify(userDetails));
      alert("User logged in");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        singIn: handleSingIn,
        singOut: handleSingOut,
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
