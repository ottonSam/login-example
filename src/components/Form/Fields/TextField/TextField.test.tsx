import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { beforeEach, describe, expect, test } from "vitest";
import TextField from ".";
import { LoginFormValues } from "../../../../schemas/LoginFormValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../../../../schemas/LoginValidation";
import { ReactNode } from "react";

describe("TextField", () => {
  beforeEach(() => {
    const Wrapper = ({ children }: { children: ReactNode }) => {
      const methods = useForm<LoginFormValues>({
        resolver: zodResolver(loginValidationSchema),
      });
      return <FormProvider {...methods}>{children}</FormProvider>;
    };
    render(
      <Wrapper>
        <TextField
          name="email"
          label="Email"
          placeholder="@gmail.com"
          type="email"
        />
      </Wrapper>
    );
  });

  test("renders TextField component with Label", () => {
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  test("renders TextField component correct styles", () => {
    expect(screen.getByText("Email")).toHaveClass("font-bold text-[18px]");
    expect(screen.getByPlaceholderText("@gmail.com")).toHaveClass(
      "rounded-[9px] bg-cinza-input p-[18px] pb-[20px] bg-branco-field"
    );
  });
});
