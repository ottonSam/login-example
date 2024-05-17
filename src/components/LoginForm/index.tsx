import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginForm: React.FC = () => {
  const { singIn } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await singIn(e.currentTarget.email.value, e.currentTarget.password.value);
  };
  return (
    <form
      className="flex flex-col gap-[36px] mt-[34px]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-[27px]">
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="email" className="font-bold text-[18px]">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="@gmail.com"
            className="rounded-[9px] bg-cinza-input p-[18px] pb-[20px] bg-branco-field"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="password" className="font-bold text-[18px]">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="****************"
            className="rounded-[9px] bg-cinza-input p-[18px] pb-[20px] bg-branco-field"
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex flex-1 rounded-[9px] bg-azul-primary py-[15px] cursor-pointer"
      >
        <h2 className="mx-auto text-branco-text font-bold text-[18px]">
          Sing In
        </h2>
      </button>
    </form>
  );
};

export default LoginForm;
