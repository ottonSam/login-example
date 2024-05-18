import React from "react";
import { Controller, useFormContext } from "react-hook-form";

// import { Container } from './styles';

const TextField: React.FC<{
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}> = ({ name, label, placeholder, type = "text" }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-[9px]" {...field}>
          <label htmlFor="email" className="font-bold text-[18px]">
            {label}
          </label>
          <div className="flex flex-col gap-[4px]">
            <input
              id={name}
              type={type}
              placeholder={placeholder || label}
              className="rounded-[9px] bg-cinza-input p-[18px] pb-[20px] bg-branco-field"
            />
            {fieldState.error && (
              <p className="text-[12px] text-red-500 pl-[20px]">
                {fieldState.error?.message}
              </p>
            )}
          </div>
        </div>
      )}
    ></Controller>
  );
};

export default TextField;
