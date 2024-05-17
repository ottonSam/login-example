import React, { useContext } from "react";
import logo from "../../assets/images/logo.svg";
import LoginForm from "../../components/LoginForm";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login: React.FC = () => {
  const { signed } = useContext(AuthContext);
  return !signed ? (
    <div className="flex flex-col justify-between w-[438px] rounded-[18px] bg-branco-base shadow-card m-auto pt-[55px] px-[25px] pb-[40px]">
      <img src={logo} alt="Logo" className="w-[295px] h-[116px] mx-auto" />
      <LoginForm />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
