import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import LoginForm from ".";
import { BrowserRouter } from "react-router-dom";

describe("LoginForm", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </AuthProvider>
    );
  });
  test("renders LoginForm component", () => {
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Sing In")).toBeInTheDocument();
  });

  test("renders LoginForm component correct styles", () => {
    expect(screen.getByText("Sing In")).toHaveClass(
      "mx-auto text-branco-text font-bold text-[18px]"
    );
    expect(screen.getByRole("button")).toHaveClass(
      "flex flex-1 rounded-[9px] bg-azul-primary py-[15px] cursor-pointer"
    );
  });
});
