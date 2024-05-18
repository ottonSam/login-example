import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FormProvider, useForm } from "react-hook-form";
import { LoginFormValues } from "../../schemas/LoginFormValues";
import TextField from "../Form/Fields/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../../schemas/LoginValidation";

const LoginForm: React.FC = () => {
  const [singInError, setSingInError] = useState<boolean>(false);

  const { singIn } = useContext(AuthContext);

  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmitHandle = async (values: LoginFormValues) => {
    const response = await singIn(values.email, values.password);
    setSingInError(!response);
  };
  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-[36px] mt-[34px]"
        onSubmit={methods.handleSubmit(onSubmitHandle)}
      >
        <div className="flex flex-col gap-[27px]">
          <TextField
            name="email"
            label="Email"
            placeholder="@gmail.com"
            type="email"
          />
          <TextField
            name="password"
            label="Password"
            placeholder="****************"
            type="password"
          />
        </div>
        {singInError && (
          <p className="text-[14px] text-red-500 mx-auto">
            Email e/ou senha incorreto(s).
          </p>
        )}
        <button
          type="submit"
          className="flex flex-1 rounded-[9px] bg-azul-primary py-[15px] cursor-pointer"
        >
          <h2 className="mx-auto text-branco-text font-bold text-[18px]">
            Sing In
          </h2>
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
